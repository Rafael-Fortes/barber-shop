const Joi = require('joi');

const agendamentoSchema = Joi.object({
  cliente: Joi.string().required(),
  data: Joi.date().required(),
  servico: Joi.string().valid('corte', 'barba', 'sobrancelha').required(),
  preco: Joi.number().required(),
  status: Joi.string().valid('agendado', 'cancelado', 'pago').required(),
});

exports.validateAgendamento = (agendamento) => {
  return agendamentoSchema.validate(agendamento);
};