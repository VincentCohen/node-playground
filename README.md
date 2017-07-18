# Node Playground

This project is merly a tryout to use NodeJs and Docker.
The goal is to create an API that has the ability to create, print and modify invoices.
Printing the invoice should result in a PDF file that's formatted in HTML.

Business logic is divided in services which can be accessed trough controllers.
The application uses `MongoDb` for storage with `mongoose` models.

Docker is used for the development environment and possible production aswel by using `nodemon` on dev and `node` on prod. 
Nodemon is making it easier to reload the server on file changes.
Docker exposes port `3000` which can be accesed on port `3030` via your `localhost`.

## Run docker container
- `docker-compose build` 
- `docker-compose up`
- `view localhost:3030`

You can access the database by running `docker exec` : `docker exec -it nodeplayground_db_1 mongo`
