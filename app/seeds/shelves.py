from app.models import db, Shelf

def seed_shelves():
    want_to_play = Shelf(
        title="Want to Play", user_id=1
    )
    currently_playing = Shelf(
        title="Currently Playing", user_id=1
    )
    completed = Shelf(
        title="Completed", user_id=1
    )

    db.session.add(want_to_play)
    db.session.add(currently_playing)
    db.session.add(completed)
    db.session.commit()

def undo_shelves():
    db.session.execute('TRUNCATE shelves RESTART IDENTITY CASCADE;')
    db.session.commit()
