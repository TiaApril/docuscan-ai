import React from 'react';
import '../App.css';

function DashboardComponent({ insights }) {
  return (
    <div className="container dashboard">
      <h3>Dashboard</h3>
      <pre>{JSON.stringify(insights, null, 2)}</pre>
    </div>
  );
}

export default DashboardComponent;