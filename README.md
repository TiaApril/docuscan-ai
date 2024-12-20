# DocuScan AI

DocuScan AI is an AI-powered platform that automates the extraction, analysis, and decision-making process based on written text data from analog documents such as forms, reports, and other documents.

## Table of Contents
- [What it is](#what-it-is)
- [Our Inspiration ](#our-inspiration-)
- [What it does](#what-it-does)
- [How we Built it ](#how-we-built-it-)
- [Design](#design)
- [Challenges we ran into 😦](#challenges-we-ran-into-😦)
- [Insights 🤓](#insights-🤓)
- [What's Next ❓](#whats-next-❓)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Setup and Installation](#setup-and-installation)
- [Usage](#usage)
- [License](#license)

## What it is
DocuScan AI is an AI-powered platform designed to automate the extraction, analysis, and decision-making process based on written text data from analog documents such as forms, reports, and other documents.

## Our Inspiration 
The inspiration behind DocuScan AI came from the need to streamline the process of extracting and analyzing data from paper forms and reports. Many organizations struggle with manual data entry and miss out on valuable insights locked in analog documents.

## What it does
DocuScan AI allows users to upload various forms or documents (e.g., PDFs, images), automatically extracts structured and unstructured data using Azure Form Recognizer, analyzes the data to identify patterns, trends, and anomalies, and provides search and analysis tools to act on the data.

## How we Built it 
We built DocuScan AI using a combination of React for the frontend, Node.js with Express for the backend, and several Azure services including Azure Form Recognizer, Azure Cognitive Search, Azure Blob Storage, and Azure Content Moderator.

## Design
The design of DocuScan AI focuses on simplicity and usability. The user interface is built with React, providing an intuitive experience for uploading documents, viewing extracted data, performing searches, and analyzing insights. The backend is designed to handle file uploads, process documents using Azure services, and return results to the frontend.

## Challenges we ran into 😦
One of the main challenges we faced was ensuring the accuracy of data extraction from various document formats. Integrating multiple Azure services and managing their interactions also required careful planning and execution, and also finance allocation to make the app running smoothly yet not draining the pocket.

## Insights 
Through the development of DocuScan AI, we gained valuable insights into the capabilities of Azure's AI services and the importance of designing user-friendly interfaces for complex data processing tasks. We also learned the significance of handling sensitive data responsibly.

## What's Next 
In the future, we plan to enhance DocuScan AI by adding more advanced analytics features, improving the accuracy of data extraction, and expanding support for additional document formats. We also aim to integrate more AI-driven insights to help organizations make better data-driven decisions.

## Features
- **Document Upload & Extraction**: Upload various forms or documents (e.g., PDFs, images) and extract structured and unstructured data using Azure Form Recognizer.
- **Data Analysis & Insights**: Analyze extracted data to identify patterns, trends, and anomalies using Azure Cognitive Services.
- **Search Functionality**: Search through extracted information for specific fields, text, or data points using Azure Cognitive Search.
- **Responsible AI Integration**: Ensure transparency and data privacy using Azure Content Moderator.
- **Dashboard for Decision-Making**: Display extracted data and key insights on a simple dashboard.

## Technology Stack
- **Frontend**: React
- **Backend**: Node.js with Express
- **Azure Services**:
  - Azure Form Recognizer
  - Azure Cognitive Search
  - Azure Blob Storage
  - Azure Content Moderator

## Setup and Installation

### Prerequisites
- Node.js and npm installed
- Azure account with necessary services set up

### Backend Setup
1. Navigate to the \pi\ directory:
   \\\ash
   cd api
   \\\" >> README.md
echo 
2.
Install
dependencies: >> README.md
echo 
\\\ash >> README.md
echo 
npm
install >> README.md
echo 
\\\"
3. Create a \.env\ file in the \pi\ directory and add your Azure credentials:
   \\\properties
   AZURE_STORAGE_CONNECTION_STRING=your_connection_string
   FORM_RECOGNIZER_ENDPOINT=your_form_recognizer_endpoint
   FORM_RECOGNIZER_KEY=your_form_recognizer_key
   \\\" >> README.md
echo 
4.
Start
the
backend
server: >> README.md
echo 
\\\ash >> README.md
echo 
npm
start >> README.md
echo 
\\\"

### Frontend Setup
1. Navigate to the \web\ directory:
   \\\ash
   cd web
   \\\" >> README.md
echo 
2.
Install
dependencies: >> README.md
echo 
\\\ash >> README.md
echo 
npm
install >> README.md
echo 
\\\"
3. Start the React development server:
   \\\ash
   npm start
1. Open your web browser and navigate to \http://localhost:3000\.
2. Use the file upload component to upload a document (e.g., a PDF or image).
3. View the extracted data and perform searches using the search component.
4. Check the dashboard for insights and analytics based on the extracted data.

## License
This project is licensed under the MIT License. See the \LICENSE\ file for details.
