import { gql } from 'apollo-server';

export const typeDefs = gql`
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

  type Kitty{
    id: String
    name: String
    created_at: String
    updated_at: String
  }

  type Query {

    getQuestion(subject:String!, type:String, year:String): Question
    getQuestions(limit:Int!,subject:String!, type:String, year:String): [Question]
    getManyQuestions(subject:String!, type:String, year:String): [Question]
    getTopQuestions: [Question]
    getQuestionById(id:Int!, subject:String!): Question
    getAllKitty: [Kitty]
  }
`;