from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired, ValidationError

# def shelf_length(form):
#     title = form.data['title']
#     if len(title) > 200:
#         raise ValidationError('Title must be 200 characters or fewer.')
#     if len(title) == 0:
#         raise ValidationError('Shelf title is required.')



class ShelfForm(FlaskForm):
    title = StringField('title', validators=[DataRequired()])
    user_id = IntegerField('user_id', validators=[DataRequired()])
