import React, { useState } from 'react';

function DeleteData({ deleteCountry }) {
  const [code, setCode] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (code) {
      deleteCountry(code);
      setCode('');
    }
  };

  return (
    <div>
      <h2>Delete a Country</h2>
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
        <button type="submit">Delete Country</button>
      </form>
    </div>
  );
}

export default DeleteData;
