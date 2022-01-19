from ast import Str
from flask_wtf import FlaskForm
from wtforms import StringField, BooleanField, SelectField, IntegerField
from wtforms.validators import DataRequired, Optional

class GameForm(FlaskForm):
    title = StringField('title', validators=[DataRequired()])
    user_id = IntegerField('user_id', validators=[DataRequired()])
    notes = StringField('notes')
    rating = IntegerField('rating', validators=[Optional()])
    completed = BooleanField('completed')
    genre = SelectField('genre', choices=[('Shooter'), ('RPG'), ('Adventure'), ('Horror'), ('Platformer'), ('Sandbox'), ('Puzzler'), ('Strategy')], validators=[Optional()])
    shelf_id = IntegerField('shelf_id', validators=[Optional()])
