import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
const { Client } = require('pg');


const app = express();
app.use(express.json());
app.use(cors()); // To allow your frontend to make requests to this backend

// Set up PostgreSQL connection using environment variables
const clientConfig = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
};

const client = new Client(clientConfig);

await client.connect()
  .then(() => {
    console.log('Connected to the database');
  })
  .catch((err) => {
    console.error('Database connection error:', err.stack);
    res.status(500).send('Error connecting to the database');
  });

// Define API endpoints
app.get('/country', async (req, res) => {
  const code = req.query['code'];

  try {
    await client.connect();
    const result = await client.query("SELECT NAME FROM COUNTRY WHERE CODE=$1::text", [code]);
    if (result.rowCount < 1) {
      res.status(404).send("Country not found");
    } else {
      res.json(result.rows[0]);
    }
  } catch (err) {
    res.status(500).send('Error executing query');
  } finally {
    await client.end();
  }
});

app.post('/country', async (req, res) => {
  const { code, name } = req.body;

  try {
    await client.connect();
    await client.query("INSERT INTO country(code, name) VALUES($1, $2)", [code, name]);
    res.status(201).send({ message: 'Country added successfully' });
  } catch (err) {
    res.status(500).send('Error inserting country');
  } finally {
    await client.end();
  }
});

app.delete('/country', async (req, res) => {
  const code = req.query['code'];

  try {
    await client.connect();
    const result = await client.query("DELETE FROM country WHERE code=$1", [code]);
    if (result.rowCount === 0) {
      res.status(404).send('Country not found');
    } else {
      res.status(200).send({ message: 'Country deleted successfully' });
    }
  } catch (err) {
    res.status(500).send('Error deleting country');
  } finally {
    await client.end();
  }
});

// Start the server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
