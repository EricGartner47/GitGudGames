from turtle import title
from app.models import db, Game

def seed_games():
    persona4 = Game(
        title="Persona 4", notes='Amazing JRPG', rating=5, genre='RPG', shelf_id=3, user_id=1)
    civilization6 = Game(
        title="Civilization VI", notes='The best strategy game', rating=4, genre='Strategy', shelf_id=2, user_id=1)
    halo = Game(
        title="Halo", notes='Only game Xbox has', rating=4, genre='Shooter', shelf_id=3, user_id=1)
    jade_empire = Game(
        title="Jade Empire", notes='Definitely needs a remake', genre='RPG', shelf_id=1, user_id=1)
    into_the_breach = Game(
        title="Into The Breach", notes='Need to checkout', genre='Strategy', shelf_id=1, user_id=1)
    mass_effect2 = Game(
        title="Mass Effect 2", notes='Cool Space Opera', rating=5, genre='RPG', shelf_id=3, user_id=1)
    witcher3 = Game(
        title="Witcher 3", notes='Possibly one of the greatest games of all time', rating=5, genre='Adventure', shelf_id=3, user_id=1)
    deadspace = Game(
        title="Dead Space", notes='Good Space horror', rating=3, genre='Horror', shelf_id=2, user_id=1)
    portal = Game(
        title="Portal", notes='The cake is a lie', rating=5, genre='Puzzler', shelf_id=3, user_id=1)
    terraria = Game(
        title="Terraria", notes='Looks like a fun sandbox', genre='Sandbox', shelf_id=1, user_id=1)
    doom = Game(
        title="DOOM", notes='NEDM', rating=5, genre='Shooter', shelf_id=2, user_id=1)

    db.session.add(persona4)
    db.session.add(civilization6)
    db.session.add(halo)
    db.session.add(jade_empire)
    db.session.add(into_the_breach)
    db.session.add(mass_effect2)
    db.session.add(witcher3)
    db.session.add(deadspace)
    db.session.add(portal)
    db.session.add(terraria)
    db.session.add(doom)
    db.session.commit()

def undo_games():
    db.session.execute('TRUNCATE games RESTART IDENTITY CASCADE;')
    db.session.commit()

#('Shooter'), ('RPG'), ('Adventure'), ('Horror'), ('Platformer'), ('Sandbox'), ('Puzzler'), ('Strategy')
