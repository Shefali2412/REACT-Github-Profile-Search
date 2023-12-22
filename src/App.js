import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import UserProfile from './components/UserProfile';
import RepositoryList from './components/RepositoryList';
import './Main.css'

function App() {
  const [defaultUsername] = useState('Shefali2412'); // Default GitHub username to show when page is loaded
  const [username, setUsername] = useState(defaultUsername);
  const [user, setUser] = useState(null);
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    searchUser(defaultUsername);
  }, [defaultUsername]);

  const searchUser = async (username) => {
    const clientId = 'd447e4c9f004811f976a';
    const clientSecret = '1ab153a03408d19f6ba62e1297cfdc696dc014dd';

    try {
      // Fetch user data
      const userResponse = await axios.get(`https://api.github.com/users/${username}?client_id=${clientId}&client_secret=${clientSecret}&sort=created`);

      // Fetch repositories data
      const repositoriesResponse = await axios.get(
        `https://api.github.com/users/${username}/repos?client_id=${clientId}&client_secret=${clientSecret}&sort=created`
      );

      setUser(userResponse.data);
      setRepositories(repositoriesResponse.data);
    } catch (err) {
      console.error(err);
      
    }
  };

  const handleSearch = (newUsername) => {
    setUsername(newUsername);
    searchUser(newUsername);
  };

  return (
    <div className="App">
    
      <SearchBar onSearch={handleSearch} />
      {user && (
        <div style={{ display: 'flex', alignItems: 'center', border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}>
          <UserProfile user={user} />
        </div>
      )}
      {repositories.length > 0 && (
        <div style={{ border: '1px solid #ccc', padding: '10px' }}>
          <RepositoryList repositories={repositories} />
        </div>
      )}
    </div>
  );
}

export default App;
