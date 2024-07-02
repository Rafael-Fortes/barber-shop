const express = require('express');
const dotenv = require('dotenv');
const agendamentosRoutes = require('./routes/agendamentosRoutes');
const admin = require('./firebaseConfig');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use('/api', agendamentosRoutes);

// Exemplo de rota
app.get('/', (req, res) => {
  res.send('Bem-vindo à Barbearia!');
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});