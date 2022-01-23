from flask import Blueprint, jsonify, request, session
from flask_login import login_required
from app.models import User, db, Game
from app.forms import GameForm

game_routes = Blueprint('games', __name__)

def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages

#get all games
@game_routes.route('/<int:id>')
def get_all_games(id):
    user = User.query.get(id)
    results = Game.query.filter(Game.user_id == user.id).all()
    return {'games': [game.to_dict() for game in results]}

#create game
@game_routes.route('/<int:id>', methods=['POST'])
def create_game(id):
    user = User.query.get(id)
    form = GameForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        game = Game()
        form.populate_obj(game)
        db.session.add(game)
        db.session.commit()
        return game.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401

#delete game
@game_routes.route('/<int:id>', methods=['DELETE'])
def delete_game(id):
    game = Game.query.get(id)
    db.session.delete(game)
    db.session.commit()
    return{'message': 'Successfully Deleted Game'}

#update game
@game_routes.route('/<int:id>', methods=['PUT'])
def update_game(id):
    game = Game.query.get(id)
    form = GameForm()
    form['crsf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit:
        game.title = form.title.data
        game.notes = form.notes.data
        game.rating = form.rating.data
        game.completed = form.completed.data
        game.genre = form.genre.data
        game.shelf_id = form.shelf_id.data
        db.session.commit()
        return game.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401
