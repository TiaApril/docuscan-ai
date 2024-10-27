const express = require('express');
const multer = require('multer');
const axios = require('axios');
const { BlobServiceClient } = require('@azure/storage-blob');
require('dotenv').config();

const app = express();
const upload = multer({ dest: 'uploads/' });

const AZURE_STORAGE_CONNECTION_STRING = process.env.AZURE_STORAGE_CONNECTION_STRING;
const FORM_RECOGNIZER_ENDPOINT = process.env.FORM_RECOGNIZER_ENDPOINT;
const FORM_RECOGNIZER_KEY = process.env.FORM_RECOGNIZER_KEY;

app.post('/api/upload', upload.single('file'), async (req, res) => {
  const blobServiceClient = BlobServiceClient.fromConnectionString(AZURE_STORAGE_CONNECTION_STRING);
  const containerClient = blobServiceClient.getContainerClient('documents');
  const blockBlobClient = containerClient.getBlockBlobClient(req.file.filename);

  await blockBlobClient.uploadFile(req.file.path);

  const formRecognizerResponse = await axios.post(
    `${FORM_RECOGNIZER_ENDPOINT}/formrecognizer/v2.1-preview.3/layout/analyze`,
    { source: blockBlobClient.url },
    { headers: { 'Ocp-Apim-Subscription-Key': FORM_RECOGNIZER_KEY } }
  );

  res.json(formRecognizerResponse.data);
});

app.get('/api/search', async (req, res) => {
  const query = req.query.q;
  // Implement search functionality using Azure Cognitive Search
  res.json({ message: `Search results for query: ${query}` });
});

app.listen(3001, () => {
  console.log('Server running on port 3001');
});