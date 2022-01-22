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

#get all shelves
@shelf_routes.route('/<int:id>/')
def get_all_shelves(id):
    user = User.query.get(id)
    results = Shelf.query.filter(Shelf.user_id == user.id).all()
    return {'shelves': [shelf.to_dict() for shelf in results]}

#create a shelf
@shelf_routes.route('/<int:id>/', methods=['POST'])
def create_shelf(id):
    user = User.query.get(id)
    form = ShelfForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        shelf = Shelf()
        form.populate_obj(shelf)
        db.session.add(shelf)
        db.session.commit()
        return shelf.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401

#Update a shelf
@shelf_routes.route('/<int:id>/', methods=['PUT'])
def update_shelf(id):
    shelf = Shelf.query.get(id)
    form = ShelfForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit:
        shelf.title = form.title.data
        db.session.commit()
        return shelf.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401

#Delete shelf
@shelf_routes.route('/<int:id>/', methods=['DELETE'])
def delete_shelf(id):
    shelf = Shelf.query.get(id)
    db.session.delete(shelf)
    db.session.commit()
    return {'message': 'Successfully Deleted Shelf'}
