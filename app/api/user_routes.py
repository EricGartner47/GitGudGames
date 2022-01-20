from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import User, db, Shelf, Game
from app.forms import ShelfForm, GameForm

user_routes = Blueprint('users', __name__)


@user_routes.route('/')
@login_required
def users():
    users = User.query.all()
    return {'users': [user.to_dict() for user in users]}


@user_routes.route('/<int:id>')
@login_required
def user(id):
    user = User.query.get(id)
    return user.to_dict()

@user_routes.route('/<int:id>/shelves')
@login_required
def get_all_shelves(id):
    user = User.query.get(id)
    results = Shelf.query.filter(Shelf.user_id == user.id).all()
    return {'shelves': [shelf.to_dict() for shelf in results]}

