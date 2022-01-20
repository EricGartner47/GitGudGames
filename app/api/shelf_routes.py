from flask import Blueprint, jsonify, request, session
from flask_login import login_required
from app.models import User, db, Shelf
from app.forms import ShelfForm

shelf_routes = Blueprint('shelves', __name__)

def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages

#Update shelf

#Delete shelf
