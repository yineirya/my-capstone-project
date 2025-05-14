import React, { useState } from 'react';
import axios from 'axios';

function AddCountry() {
  const [name, setName] = useState('');
  const [code, setCode] = useState('');

  const handleSubmit = () => {
    const newCountry = { code, name };

    axios.post('http://your-api-endpoint/country', newCountry)
      .then(response => {
        console.log('Country added:', response.data);
      })
      .catch(err => {
        console.error('Error adding country:', err);
      });
  };

  return (
    <div>
      <h3>Add Country</h3>
      <input
        type="text"
        placeholder="Country Code"
        value={code}
        onChange={e => setCode(e.target.value)}
      />
      <input
        type="text"
        placeholder="Country Name"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <button onClick={handleSubmit}>Add Country</button>
    </div>
  );
}

export default AddCountry;
