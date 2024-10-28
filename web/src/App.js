import React, { useState } from 'react';
import UploadComponent from './components/UploadComponent';
import DataDisplayComponent from './components/DataDisplayComponent';
import SearchComponent from './components/SearchComponent';
import DashboardComponent from './components/DashboardComponent';
import './App.css';

function App() {
  const [extractedData, setExtractedData] = useState(null);
  const [searchResults, setSearchResults] = useState(null);
  const [insights, setInsights] = useState(null);

  return (
    <div className="App">
      <h1>DocuScan-AI</h1>
      <UploadComponent setExtractedData={setExtractedData} />
      {extractedData && <DataDisplayComponent data={extractedData} />}
      <SearchComponent setSearchResults={setSearchResults} />
      {searchResults && <DataDisplayComponent data={searchResults} />}
      <DashboardComponent insights={insights} />
    </div>
  );
}

export default App;