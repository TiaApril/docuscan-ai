const express = require('express');
const multer = require('multer');
const cors = require('cors');
const { BlobServiceClient } = require('@azure/storage-blob');
const { DocumentAnalysisClient, AzureKeyCredential } = require('@azure/ai-form-recognizer');
require('dotenv').config();

const app = express();
app.use(cors()); // Enable CORS

const upload = multer({ dest: 'uploads/' });

const AZURE_STORAGE_CONNECTION_STRING = process.env.AZURE_STORAGE_CONNECTION_STRING;
const FORM_RECOGNIZER_ENDPOINT = process.env.FORM_RECOGNIZER_ENDPOINT;
const FORM_RECOGNIZER_KEY = process.env.FORM_RECOGNIZER_KEY;

const blobServiceClient = BlobServiceClient.fromConnectionString(AZURE_STORAGE_CONNECTION_STRING);
const formRecognizerClient = new DocumentAnalysisClient(FORM_RECOGNIZER_ENDPOINT, new AzureKeyCredential(FORM_RECOGNIZER_KEY));

app.post('/api/upload', upload.single('file'), async (req, res) => {
  try {
    const containerClient = blobServiceClient.getContainerClient('documents'); // Ensure the container name matches the one you created
    const blockBlobClient = containerClient.getBlockBlobClient(req.file.filename);

    await blockBlobClient.uploadFile(req.file.path);

    const poller = await formRecognizerClient.beginAnalyzeDocument("prebuilt-invoice", blockBlobClient.url);
    const result = await poller.pollUntilDone();

    res.json(result);
  } catch (error) {
    console.error('Error processing file:', error);
    res.status(500).send('Error processing file');
  }
});

app.listen(3001, () => {
  console.log('Server running on port 3001');
});