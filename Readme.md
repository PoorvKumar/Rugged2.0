# Requirements
- Docker
- Node.js v21

# How to clone?
- from here: https://github.com/PoorvKumar/Rugged2.0.git

# How to run on my machine?
- for running the react frontend server, `cd client`
- `npm install` to install dependecies
- `npm run dev` to run 

- for running the backend API server, `cd server`
- `docker compose up --build -d` to build the docker image and run the container app and redis containers
- to close run `docker compose down`

# How to test?
- Run `npm test` in the docker container shell `docker exec -it <container-name> sh`
- You can also see the tests being run in the CICD pipeline of github actions for every push 
- `http://localhost:5000` is the server url , `http://localhost:5173` is client url
- You can see API docs in `http://localhost:5000/api-docs`