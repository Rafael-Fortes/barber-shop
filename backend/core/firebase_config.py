import firebase_admin
from firebase_admin import db


cred_object = firebase_admin.credentials.Certificate('cred.json')
firebase_admin.initialize_app(
    cred_object, 
    {
        'databaseURL':"https://barber-shop-d19ff-default-rtdb.firebaseio.com/"
    }
)


def get_db(collection: str):
    ref = db.reference(f'/{collection}')

    return ref
