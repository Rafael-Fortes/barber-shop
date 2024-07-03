from backend.core.firebase_config import get_db
from backend.schemas.schedule import CreateScheduleRequest, UpdateScheduleRequest, Response, Schedule
from fastapi import APIRouter


router = APIRouter()


@router.post("/schedule", tags=["schedule"])
async def create_schedule(request: CreateScheduleRequest) -> Response:
    """
    Cria um novo agendamento.

    - **request**: Corpo da requisição contendo os dados do agendamento a ser criado.
    """
    try:
        doc_ref = get_db(collection="schedules")
        
        doc_ref.push({
            "barber": request.barber,
            "appointment_date": str(request.appointment_date),
            "appointment_time": str(request.appointment_time),
            "service": request.service
        })

    except Exception as e:
        return {"status": "error", "message": str(e)}


    return {"status": "success", "message": "Agendamento criado com sucesso"}


@router.put("/schedule/{schedule_id}", tags=["schedule"])
async def update_schedule(schedule_id: str, request: UpdateScheduleRequest) -> Response:
    """
    Atualiza um agendamento existente.

    - **schedule_id**: ID do agendamento que você deseja atualizar.
    - **request**: Corpo da requisição contendo os dados a serem atualizados.
    """
    try:
        doc_ref = get_db(collection="schedules")
        
        doc_ref.child(schedule_id).update({
            "barber": request.barber,
            "appointment_date": str(request.appointment_date),
            "appointment_time": str(request.appointment_time),
            "service": request.service
        })

    except Exception as e:
        return {"status": "error", "message": str(e)}


    return {"status": "success", "message": "Agendamento atualizado com sucesso"}


@router.get("/schedule/{schedule_id}", tags=["schedule"])
async def get_schedule(schedule_id: str) -> Response:
    """
    Retorna um agendamento específico.

    - **schedule_id**: ID do agendamento que você deseja consultar.
    """
    try:
        doc_ref = get_db(collection="schedules")
        schedule = doc_ref.child(schedule_id).get()

        return {"status": "success", "message": schedule}

    except Exception as e:
        return {"status": "error", "message": str(e)}


@router.delete("/schedule/{schedule_id}", tags=["schedule"])
async def delete_schedule(schedule_id: str) -> Response:
    """
    Deleta um agendamento existente.

    - **schedule_id**: ID do agendamento que você deseja deletar.
    """
    try:
        doc_ref = get_db(collection="schedules")
        doc_ref.child(schedule_id).delete()

    except Exception as e:
        return {"status": "error", "message": str(e)}


    return {"status": "success", "message": "Agendamento deletado com sucesso"}


@router.get("/schedules", tags=["schedule"])
async def get_schedules() -> Response:
    """
    Retorna todos os agendamentos.
    """
    try:
        doc_ref = get_db(collection="schedules")
        schedules = doc_ref.get()

        return {"status": "success", "message": schedules}

    except Exception as e:
        return {"status": "error", "message": str(e)}