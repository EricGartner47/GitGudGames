from ast import Str
from flask_wtf import FlaskForm
from wtforms import StringField, BooleanField, DateField, SubmitField, IntegerField
from wtforms.validators import DataRequired, Optional

class GameForm(FlaskForm):
    title = StringField('title', validators=[DataRequired()])
    user_id = IntegerField('user_id', validators=[DataRequired()])
    notes = StringField('notes')
    rating = IntegerField('rating', validators=[Optional()])
    completed = BooleanField('completed')
    genre = StringField('genre', validators=[Optional()])
    shelf_id = IntegerField('shelf_id', validators=[Optional()])
