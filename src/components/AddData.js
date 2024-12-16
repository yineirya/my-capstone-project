import React, { useState } from 'react';

function AddData({ addCountry }) {
  const [code, setCode] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (code && name) {
      addCountry(code, name);
      setCode('');
      setName('');
    }
  };

  return (
    <div>
      <h2>Add a Country</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Country Code:
          <input
            type="text"
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />
        </label>
        <br />
        <label>
          Country Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Add Country</button>
      </form>
    </div>
  );
}

export default AddData;
