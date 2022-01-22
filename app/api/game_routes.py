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
