import React, { useState } from 'react';
import axios from 'axios';
import '../App.css';

function SearchComponent({ setSearchResults }) {
  const [query, setQuery] = useState('');

  const handleSearch = async () => {
    try {
      const response = await axios.get(`/api/search?q=${query}`);
      setSearchResults(response.data);
    } catch (error) {
      console.error('Error searching data:', error);
    }
  };

  return (
    <div className="container">
      <input
        type="text"
        className="search-bar"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
      />
      <button className="search-button" onClick={handleSearch}>Search</button>
    </div>
  );
}

export default SearchComponent;