const express = require('express');
const admin = require('firebase-admin');
const bodyParser = require('body-parser');
const app = express();

// Chave de autenticação do Firebase
const serviceAccount = require('./serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

app.use(bodyParser.json());

const agendamentosRef = db.collection('agendamentos');

// Consultar um agendamento
app.get('/agendamentos/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const doc = await agendamentosRef.doc(id).get();
    if (!doc.exists) {
      res.status(404).send('Agendamento não encontrado');
    } else {
      res.status(200).send(doc.data());
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Atualizar um agendamento 
app.put('/agendamentos/:id', async (req, res) => {
  const id = req.params.id;
  const data = req.body;
  try {
    await agendamentosRef.doc(id).update(data);
    res.status(200).send('Agendamento atualizado com sucesso');
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Deletar um agendamento
app.delete('/agendamentos/:id', async (req, res) => {
  const id = req.params.id;
  try {
    await agendamentosRef.doc(id).delete();
    res.status(200).send('Agendamento deletado com sucesso');
  } catch (error) {
    res.status(500).send(error.message);
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
