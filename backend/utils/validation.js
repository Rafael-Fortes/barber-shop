const Joi = require('joi');

const agendamentoSchema = Joi.object({
  cliente: Joi.string().required(),
  barbeiro: Joi.string().valid('João', 'Pedro', 'Carlos').required(),
  data: Joi.string().pattern(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}$/).required(),
  servico: Joi.string().valid('corte', 'barba', 'sobrancelha').required(),
  preco: Joi.number().required(),
  status: Joi.string().valid('agendado', 'cancelado', 'pago').required(),
});

exports.validateAgendamento = (agendamento) => {
  return agendamentoSchema.validate(agendamento);
};