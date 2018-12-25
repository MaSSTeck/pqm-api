import { gql } from 'apollo-server';

export const typeDefs = gql`
  scalar Date
  type Question {
    id: Int!
    subject: String!
    question: String!
    option: Option
    answer: String!
    examtype: String!
    examyear: String!
  }

  type Option {
    a: String,
    b: String,
    c: String,
    d: String
  }

  type User {
    id: String
    gender: String
    password: String
    email: String
    username: String
  }

  type Comment {
    id: String!,
    questionId: Int!
    subject:String!,
    comment: String!
    created_at: Date!
    user: User
  }

  type Kitty{
    id: String!
    name: String!
    created_at: Date
    updated_at: Date
  }
  type Auth {
    token: String!
    user: User
  }
  type Status {
    status:Int!
    message: String!
  }

  type Me {
    _id: ID!
    username: String
    email: String!
  }

  type Query {

    getQuestion(subject:String!, type:String, year:String): Question
    getQuestions(limit:Int!,subject:String!, type:String, year:String): [Question]
    getManyQuestions(subject:String!, type:String, year:String): [Question]
    getTopQuestions: [Question]
    getQuestionById(id:Int!, subject:String!): Question
    getAllKitty: [Kitty]
    getComments(questionId:Int!, subject:String!): [Comment]
  }

  type Mutation{
    addKitty(name:String!): Status
    signup(username:String!, email:String!, password:String!, gender:String): Auth
    login(email:String!, password:String!): Auth
    addComment(questionId:Int!, subject:String!, comment:String!, user:String!): Comment

  }
`;