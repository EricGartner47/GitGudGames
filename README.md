# GitGud Games (GitGud) - Goodreads clone
[GitGud](https://git-gud-games-capstone.herokuapp.com/)

[Wiki](https://github.com/EricGartner47/GitGudGames/wiki)

## At A Glance
GitGud is a full stack web application that allows logged in users to:
 - Create a shelf
 - Edit a created shelf only by the posting user
 - Delete a created shelf only by the posting user
 - View shelves
 - Create a game
 - Edit a game only by the posting user
 - Delete a game only by the posting user
 - View a list of games by the shelf
 - View a user's progress in the game
 - Search games or shelves by keyword (In development)

## Application Architecture
GitGud is built with a Flask backend and a React frontend. Postgres is also used as a database.

## Frontend Technologies Used
GitGud uses React to generate the HTML elements, and then uses CSS to handle the styling of those elements.

## Backend Technologies Used
A Flask server is used to handle the backend communication. PostgreSQL is used the for database and the aforementioned is manipulated with SQLAlchemy.

## Key Features
### User Authorization
User authorization is handled using Flask password hashing. When users log in, the password they provide is rehashed and checked against the original password.
![Log In Page](https://github.com/EricGartner47/GitGudGames/blob/main/planning/Login_page-app.png)
![Splash Page](https://github.com/EricGartner47/GitGudGames/blob/main/planning/splash_page-app.png)

### Games
An authorized user can create a shelf that can then be seen by any logged in user. Only the authorized user may then edit or delete the created shelf.
![Shelves](https://github.com/EricGartner47/GitGudGames/blob/main/planning/shelf_page-app.png)

### Search Games or Shelves (In development)
A user can search games or shelves by keyword in the search bar. The search will generate the shelve or game found by keyword.


### Game Progress
A user can view their progress in a game.
![Game Progress](https://github.com/EricGartner47/GitGudGames/blob/main/planning/home_page-app.png)

### Games
An authorized user may create a game. Only the authorized user can then edit or delete a game.
![Games](https://github.com/EricGartner47/GitGudGames/blob/main/planning/game_page-app.png)

## Conclusion and Next Steps
I am happy with the functionality and the initial styling. However, I would have like to implement sound whenever a user opens a modal. Additionally, I would like to implement an API to generate images for each game when created. 
