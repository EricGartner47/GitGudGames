from flask.cli import AppGroup
from .users import seed_users, undo_users
from .shelves import seed_shelves, undo_shelves
from .games import seed_games, undo_games

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')


# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    seed_users()
    seed_shelves()
    seed_games()


# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_users()
    undo_shelves()
    undo_games()
