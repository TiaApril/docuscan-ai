const express = require('express');
const multer = require('multer');
const { BlobServiceClient } = require('@azure/storage-blob');
const { DocumentAnalysisClient, AzureKeyCredential } = require('@azure/ai-form-recognizer');
require('dotenv').config();

const app = express();
const upload = multer({ dest: 'uploads/' });

const AZURE_STORAGE_CONNECTION_STRING = process.env.AZURE_STORAGE_CONNECTION_STRING;
const FORM_RECOGNIZER_ENDPOINT = process.env.FORM_RECOGNIZER_ENDPOINT;
const FORM_RECOGNIZER_KEY = process.env.FORM_RECOGNIZER_KEY;

const blobServiceClient = BlobServiceClient.fromConnectionString(AZURE_STORAGE_CONNECTION_STRING);
const formRecognizerClient = new DocumentAnalysisClient(FORM_RECOGNIZER_ENDPOINT, new AzureKeyCredential(FORM_RECOGNIZER_KEY));

app.post('/api/upload', upload.single('file'), async (req, res) => {
  const containerClient = blobServiceClient.getContainerClient('documents'); 
  const blockBlobClient = containerClient.getBlockBlobClient(req.file.filename);

  await blockBlobClient.uploadFile(req.file.path);

  // Use the prebuilt layout model to analyze the document
  const poller = await formRecognizerClient.beginAnalyzeDocument("prebuilt-layout", blockBlobClient.url);
  const pages = await poller.pollUntilDone();

  res.json(pages);
});

app.get('/api/search', async (req, res) => {
  const query = req.query.q;
  res.json({ message: `Search results for query: ${query}` });
});

app.listen(3001, () => {
  console.log('Server running on port 3001');
});
