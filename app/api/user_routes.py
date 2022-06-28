from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.models import User, db, Shelf, Game
from app.forms import ShelfForm, GameForm

user_routes = Blueprint('users', __name__)

def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages

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
















































    

# #shelf routes
# @user_routes.route('/<int:id>/shelves')
# @login_required
# def get_all_shelves(id):
#     user = User.query.get(id)
#     results = Shelf.query.filter(Shelf.user_id == user.id).all()
#     return {'shelves': [shelf.to_dict() for shelf in results]}

# @user_routes.route('/<int:id>/shelves', methods=['POST'])
# @login_required
# def create_shelf(id):
#     user = User.query.get(id)
#     form = ShelfForm()
#     form['csrf_token'].data = request.cookies['csrf_token']
#     if form.validate_on_submit():
#         shelf = Shelf()
#         form.populate_obj(shelf)
#         db.session.add(shelf)
#         db.session.commit()
#         return shelf.to_dict()
#     return {'errors': validation_errors_to_error_messages(form.errors)}, 401

# #game routes
# @user_routes.route('/<int:id>/games')
# @login_required
# def get_all_games(id):
#     user = User.query.get(id)
#     results = Game.query.filter(Game.user_id == user.id).all()
#     return {'games': [game.to_dict() for game in results]}

# @user_routes.route('/<int:id>/games', methods=['POST'])
# @login_required
# def create_game(id):
#     user = User.query.get(id)
#     form = GameForm()
#     form['csrf_token'].data = request.cookies['csrf_token']
#     if form.validate_on_submit():
#         game = Game()
#         form.populate_obj(game)
#         db.session.add(game)
#         db.session.commit()
#         return game.to_dict()
#     return {'errors': validation_errors_to_error_messages(form.errors)}, 401
