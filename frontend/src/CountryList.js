import React from 'react';
import axios from 'axios';

function CountryList({ countries, fetchCountries }) {
  // Handle the delete action
  const handleDelete = (code) => {
    axios.delete(`http://your-api-endpoint/country?code=${code}`)
      .then(response => {
        console.log('Country deleted:', response.data);
        fetchCountries(); // Refresh the list after deletion
      })
      .catch(err => {
        console.error('Error deleting country:', err);
      });
  };

  return (
    <div>
      <h2>Countries</h2>
      {countries.length > 0 ? (
        <ul>
          {countries.map(country => (
            <li key={country.code}>
              {country.name} (Code: {country.code}) 
              <button onClick={() => handleDelete(country.code)}>Delete</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No countries available</p>
      )}
    </div>
  );
}

export default CountryList;
