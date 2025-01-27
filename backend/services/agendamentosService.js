const admin = require('../firebaseConfig');
const db = admin.firestore();

const agendamentosRef = db.collection('agendamentos');

exports.getAgendamentoById = async (id) => {
  try {
    console.log(id);
    const doc = await agendamentosRef.doc(id).get();
    console.log(doc)
    return doc.exists ? doc.data() : null;
  } catch (error) {
    console.error('Erro ao obter agendamento: ', error);
    return error;
  }
};

exports.createAgendamento = async (data) => {
  try {
    const docRef = await agendamentosRef.add(data);
    const doc = await docRef.get();
    
    return doc.data();
  } catch (error) {
    console.error('Erro ao criar agendamento:', error);
    return error;
  }
};

exports.updateAgendamento = async (id, data) => {
  try {
    const docRef = agendamentosRef.doc(id);
    const doc = await docRef.get();
    
    if (!doc.exists) {
      return null;
    }
    
    await docRef.update(data);
    
    const updatedDoc = await docRef.get();
    
    return updatedDoc.data();
  } catch (error) {
    console.error('Erro ao atualizar agendamento:', error);
    return error;
  }
};

exports.deleteAgendamento = async (id) => {
  try {
    const docRef = agendamentosRef.doc(id);
    const doc = await docRef.get();
    
    if (!doc.exists) {
      return null;
    }
    
    await docRef.delete();
    
    return doc.data();
  } catch (error) {
    console.error('Erro ao deletar agendamento:', error);
    return error;
  }
};

exports.findAgendamentoByDataEBarbeiro = async (data, barbeiro) => {
  try {
    const snapshot = await agendamentosRef
      .where('data', '==', data)
      .where('barbeiro', '==', barbeiro)
      .get();

    if (snapshot.empty) {
      return null;
    }
    
    return snapshot.docs[0].data();
  } catch (error) {
    console.error('Erro ao buscar agendamento por data e barbeiro:', error);
    return error;
  }
}