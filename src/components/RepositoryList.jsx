import React from 'react';
import '../style.css';


function RepositoryList ({ repositories }) {
  return (
    <div>
      <h2>User Repositories</h2>
      <div className='repository'>
        {repositories.map((repo) => (
          <div key={repo.id}>
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
              {repo.name} 
            </a> 
            : {repo.description}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RepositoryList;
