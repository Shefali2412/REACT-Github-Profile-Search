import React, { useState } from 'react';
import '../style.css'

function SearchBar ({ onSearch }) {
  const [username, setUsername] = useState('');

  const handleSearch = () => {
    if (username.trim() !== '') {
      onSearch(username);
    }
  };

  return (
    <div className='search'>
      <input
        type="text"
        placeholder="Enter GitHub username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
