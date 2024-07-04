const agendamentosService = require('../services/agendamentosService');
const { validateAgendamento } = require('../utils/validation');

exports.getAgendamento = async (req, res) => {
  try {
    const id = req.params.id;
    console.log(`Buscando agendamento com ID: ${id}`);
    const agendamento = await agendamentosService.getAgendamentoById(id);
    if (!agendamento) {
      return res.status(404).send({ error: 'Agendamento não encontrado' });
    }
    res.send(agendamento);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

exports.createAgendamento = async (req, res) => {
  try {
    const { error } = validateAgendamento(req.body);
    if (error) {
      return res.status(400).send({ error: error.details[0].message });
    }
    const data = req.body.data;
    const barbeiro  = req.body.barbeiro;
    const agendamentoExistente = await agendamentosService.findAgendamentoByDataEBarbeiro(data, barbeiro);
    if (agendamentoExistente) {
      return res.status(400).send({ error: 'Já existe um agendamento para esta data' });
    }
    await agendamentosService.createAgendamento(req.body);
    res.status(201).send({ message: "Agendamento criado com sucesso"});
  } catch (error) {
    res.status(500).send({ error: 'Erro ao criar agendamento' });
  }
};

exports.updateAgendamento = async (req, res) => {
  try {
    const id = req.params.id;
    const { error } = validateAgendamento(req.body);
    if (error) {
      return res.status(400).send({ error: error.details[0].message });
    }
    const agendamento = await agendamentosService.updateAgendamento(id, req.body);
    if (!agendamento) {
      return res.status(404).send({ error: 'Agendamento não encontrado' });
    }
    return res.status(200).send({ message: 'Agendamento atualizado com sucesso' });
  } catch (error) {
    res.status(500).send({ error: 'Erro ao atualizar agendamento' });
  }
};

exports.deleteAgendamento = async (req, res) => {
  try {
    const id = req.params.id;
    const agendamento = await agendamentosService.deleteAgendamento(id);
    if (!agendamento) {
      return res.status(404).send({ error: 'Agendamento não encontrado' });
    }
    res.send({ message: 'Agendamento deletado com sucesso' });
  } catch (error) {
    res.status(500).send({ error: 'Erro ao deletar agendamento' });
  }
};