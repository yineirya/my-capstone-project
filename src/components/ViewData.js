import React from 'react';

function ViewData({ countries }) {
  return (
    <div>
      <h2>Country List</h2>
      <ul>
        {countries.map(country => (
          <li key={country.code}>
            {country.name} ({country.code})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ViewData;