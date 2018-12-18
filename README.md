## API Server for FastQ
This server manages the external APIs and MongoDB connection when fetching data

## Setup Project
Clone or Fork project. Run `npm install` on the terminal , then run `npm start`

The project serves at port 4000

`🚀 Server ready at http://localhost:4000/` . This should lanuch GraphQL playground. To ensure everything works  well, run this GraphQL Query 

`{
  getQuestion(subject:"english"){
    id,
    question,
    option{
      a,
      b,
      c,
      d
    }
    answer,
    examtype,
    examyear
  }
}`

If this returns data, then setup was successful.

### Setup MongoDB
The user data is stored on MongoDB. You can setup one locally or use the test DB we provided in config/constants.js

### Setup for frontend
Link to front end that consumes this api
https://github.com/MaSSTeck/pqm

You can also see the full working project on our test server here http://pqm.herokuapp.com/

