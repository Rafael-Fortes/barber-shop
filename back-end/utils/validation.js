const Joi = require('joi');

const agendamentoSchema = Joi.object({
  cliente: Joi.string().required(),
  data: Joi.date().required(),
  servico: Joi.string().required(),
  preco: Joi.number().required()
});

exports.validateAgendamento = (agendamento) => {
  return agendamentoSchema.validate(agendamento);
};