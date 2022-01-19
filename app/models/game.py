from .db import db
from sqlalchemy.sql import func


class Game(db.Model):
    __tablename__ = 'games'

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(200), nullable=False)
    rating = db.Column(db.Integer)
    genre = db.Column(db.String(50), nullable=True)
    notes = db.Column(db.Text)
    completed = db.Column(db.Boolean, default=False)
    shelf_id = db.Column(db.Integer, db.ForeignKey("shelves.id"), nullable=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    created_at = db.Column(db.DateTime, server_default=func.now())
    updated_at = db.Column(db.DateTime, server_default=func.now())
    shelf = db.relationship("Shelf", back_populates="games")
    user = db.relationship("User", back_populates="games")

    def to_dict(self):
        if self.shelf:
            return {
                'id': self.id,
                'title': self.title,
                'notes': self.notes,
                'rating': self.rating,
                'completed': self.completed,
                'genre': self.genre,
                'shelf_id': self.shelf_id,
                'user_id': self.user_id,
                'created_at': self.created_at,
                'updated_at': self.updated_at,
                'shelf': self.shelf.to_dictionary()
            }
        return {
            'id': self.id,
            'title': self.title,
            'notes': self.notes,
            'rating': self.rating,
            'completed': self.completed,
            'genre': self.genre,
            'shelf_id': self.shelf_id,
            'user_id': self.user_id,
            'created_at': self.created_at,
            'updated_at': self.updated_at,
        }
