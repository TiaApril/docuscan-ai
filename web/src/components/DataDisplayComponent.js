import React from 'react';
import '../App.css';

function DataDisplayComponent({ data }) {
  return (
    <div className="container data-display">
      <h3>Extracted Data</h3>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default DataDisplayComponent;