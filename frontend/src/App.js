import React, { useState } from 'react';
import axios from 'axios';
import CountryList from './CountryList'; // Component for displaying countries
import AddCountry from './AddCountry';   // Component for adding a new country
import './App.css';

function App() {
  const [countries, setCountries] = useState([]);

  // Fetch all countries from the API
  const fetchCountries = () => {
    axios.get('http://your-api-endpoint/country')
      .then(response => {
        setCountries(response.data);
      })
      .catch(err => {
        console.error('Error fetching countries:', err);
      });
  };

  return (
    <div className="App">
      <h1>Country List</h1>
      <button onClick={fetchCountries}>Fetch Countries</button>
      <CountryList countries={countries} fetchCountries={fetchCountries} />
      <AddCountry />
    </div>
  );
}

export default App;
