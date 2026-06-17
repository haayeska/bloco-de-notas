import express from 'express';
import { Client } from 'pg';

const app = express();

const client = new Client({
  host: 'localhost',
  port: 5432,
  user: 'admin',
  password: '123456',
  database: 'meubanco',
});

client.connect();

app.get('/', (req, res) => {
  res.send('Backend funcionando!');
});

app.get('/usuarios', async (req, res) => {
  const result = await client.query('SELECT * FROM usuarios');
  res.json(result.rows);
});

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});