from pydantic import BaseModel, Field, field_validator
from datetime import date, time
from typing import Literal, Any

class Schedule(BaseModel):
    barber: str = Field(..., description="Nome do barbeiro", example="João")
    appointment_date: date = Field(..., description="Data do agendamento", example="2021-10-10")
    appointment_time: time = Field(..., description="Horário do agendamento", example="10:00")
    service: Literal['sobrancelha', 'cabelo', 'barba'] = Field(..., description="Serviço a ser realizado", example="cabelo")
    
    @field_validator('barber')
    def validate_barber(cls, v):
        if not v.strip():
            raise ValueError('O nome do barbeiro não pode estar vazio')
        return v


class CreateScheduleRequest(Schedule):
    pass


class UpdateScheduleRequest(Schedule):
    pass


class Response(BaseModel):
    status: Literal['success', 'error'] = Field(..., description="Status da requisição", example="success")
    message: Any = Field(..., description="Mensagem de retorno", example="Agendamento criado com sucesso")