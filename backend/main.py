from backend.routers import schedule
from fastapi import FastAPI


def create_app():
    app = FastAPI()

    app.include_router(schedule.router)

    return app


app = create_app()
