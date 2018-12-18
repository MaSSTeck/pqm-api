## API Server for FastQ
This server manages the external API connection to fetch data and connecetion to MongoDB

## Setup Project
Clone or Fork project. Run `npm install` on the terminal , then run `npm start`

The project serves at port 4000

`🚀 Server ready at http://localhost:4000/` . This should lanuch GraphQL playground. To ensure everything is working  well run this GraphQL Query 

`{
  getQuestion(subject:"english"){
    id
    question
    option{
      a,
      b,
      c,
      d
    }
    answer
    examtype
    examyear
  }
}`

If this returns data, then setup was done properly.

### Setup MongoDB
The user data is store on MongoDB. You can setup one locally or use the test DB we provided.

### Setup the frontend
https://github.com/MaSSTeck/pqm

