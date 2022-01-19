from turtle import title
from app.models import db, Game

def seed_games():
    persona_4 = Game(
        title="Persona 4", notes='Amazing JRPG', rating=5, genre='RPG', shelf_id=3, user_id=1)
    civilization_6 = Game(
        title="Civilization VI", notes='The best strategy game', rating=4, genre='Strategy', shelf_id=2, user_id=1)
    halo = Game(
        title="Halo", notes='Only game Xbox has', rating=4, genre='Shooter', shelf_id=3, user_id=1)
    jade_empire = Game(
        title="Persona 4", notes='Amazing JRPG', rating=5, genre='RPG', shelf_id=3, user_id=1)
    persona_4 = Game(
        title="Persona 4", notes='Amazing JRPG', rating=5, genre='RPG', shelf_id=3, user_id=1)
    persona_4 = Game(
        title="Persona 4", notes='Amazing JRPG', rating=5, genre='RPG', shelf_id=3, user_id=1)
    persona_4 = Game(
        title="Persona 4", notes='Amazing JRPG', rating=5, genre='RPG', shelf_id=3, user_id=1)
    persona_4 = Game(
        title="Persona 4", notes='Amazing JRPG', rating=5, genre='RPG', shelf_id=3, user_id=1)
    persona_4 = Game(
        title="Persona 4", notes='Amazing JRPG', rating=5, genre='RPG', shelf_id=3, user_id=1)
    persona_4 = Game(
        title="Persona 4", notes='Amazing JRPG', rating=5, genre='RPG', shelf_id=3, user_id=1)
    persona_4 = Game(
        title="Persona 4", notes='Amazing JRPG', rating=5, genre='RPG', shelf_id=3, user_id=1)



def undo_games():
    db.session.execute('TRUNCATE games RESTART IDENTITY CASCADE;')
    db.session.commit()

#('Shooter'), ('RPG'), ('Adventure'), ('Horror'), ('Platformer'), ('Sandbox'), ('Puzzler'), ('Strategy')
