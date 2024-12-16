import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ViewData from './components/ViewData';
import AddData from './components/AddData';
import DeleteData from './components/DeleteData';
        
function App() {
  const [countries, setCountries] = useState([
    { code: 'US', name: 'United States' },
    { code: 'CA', name: 'Canada' },
    { code: 'MX', name: 'Mexico' },
    { code: 'BR', name: 'Brazil' },
    { code: 'AR', name: 'Argentina' },
    { code: 'CO', name: 'Colombia' },
    { code: 'PE', name: 'Peru' },
    { code: 'CL', name: 'Chile' },
    { code: 'VE', name: 'Venezuela' },
    { code: 'GB', name: 'United Kingdom' },
    { code: 'FR', name: 'France' },
    { code: 'DE', name: 'Germany' },
    { code: 'IT', name: 'Italy' },
    { code: 'ES', name: 'Spain' },
    { code: 'NL', name: 'Netherlands' },
    { code: 'BE', name: 'Belgium' },
    { code: 'CH', name: 'Switzerland' },
    { code: 'SE', name: 'Sweden' },
    { code: 'NO', name: 'Norway' },
    { code: 'DK', name: 'Denmark' },
    { code: 'FI', name: 'Finland' },
    { code: 'PL', name: 'Poland' },
    { code: 'CZ', name: 'Czech Republic' },
    { code: 'PT', name: 'Portugal' },
    { code: 'GR', name: 'Greece' },
    { code: 'RU', name: 'Russia' },
    { code: 'TR', name: 'Turkey' },
    { code: 'CN', name: 'China' },
    { code: 'JP', name: 'Japan' },
    { code: 'KR', name: 'South Korea' },
    { code: 'PH', name: 'Philippines' },
    { code: 'ID', name: 'Indonesia' },
    { code: 'AU', name: 'Australia' },
    { code: 'NZ', name: 'New Zealand' },
    { code: 'SA', name: 'Saudi Arabia' },
    { code: 'AE', name: 'United Arab Emirates' },
    { code: 'EG', name: 'Egypt' },
    { code: 'ZA', name: 'South Africa' },
    { code: 'NG', name: 'Nigeria' },
    { code: 'KE', name: 'Kenya' },
    { code: 'GH', name: 'Ghana' },
    { code: 'IL', name: 'Israel' },
    { code: 'TH', name: 'Thailand' },
    { code: 'MY', name: 'Malaysia' },
    { code: 'SG', name: 'Singapore' },
    { code: 'VN', name: 'Vietnam' },
    { code: 'PK', name: 'Pakistan' },
    { code: 'BD', name: 'Bangladesh' },
    { code: 'NP', name: 'Nepal' },
    { code: 'VAC', name: 'Vatican City' }
  ]);
        
  const addCountry = (code, name) => {
    setCountries([...countries, { code, name }]);
  };
        
  const deleteCountry = (code) => {
    setCountries(countries.filter(country => country.code !== code));
  };
        
  return (
    <Router>
      <div>
        <h1>My Country Database</h1>
        <nav>
          <Link to="/">View Data</Link> | 
          <Link to="/add">Add Data</Link> | 
          <Link to="/delete">Delete Data</Link>
        </nav>
                
        <Routes>
          <Route
            path="/"
            element={<ViewData countries={countries} />}
          />
          <Route
            path="/add"
            element={<AddData addCountry={addCountry} />}
          />
          <Route
            path="/delete"
            element={<DeleteData deleteCountry={deleteCountry} />}
          />
        </Routes>
      </div>
    </Router>
  );
}
        
export default App;
        