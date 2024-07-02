const admin = require('../firebaseConfig');
const db = admin.firestore();

exports.getAgendamentoById = async (id) => {
  const doc = await db.collection('agendamentos').doc(id).get();
  console.log(doc)
  return doc.exists ? doc.data() : null;
};

exports.createAgendamento = async (data) => {
  const docRef = await db.collection('agendamentos').add(data);
  const doc = await docRef.get();
  return doc.data();
};

exports.updateAgendamento = async (id, data) => {
  const docRef = db.collection('agendamentos').doc(id);
  const doc = await docRef.get();
  if (!doc.exists) {
    return null;
  }
  await docRef.update(data);
  const updatedDoc = await docRef.get();
  return updatedDoc.data();
};

exports.deleteAgendamento = async (id) => {
  const docRef = db.collection('agendamentos').doc(id);
  const doc = await docRef.get();
  if (!doc.exists) {
    return null;
  }
  await docRef.delete();
  return doc.data();
};