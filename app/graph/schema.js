import { gql } from 'apollo-server';

export const typeDefs = gql`
  scalar Date
  type Question {
    id: String!
    subject: String!
    question: String!
    option: Option
    answer: String!
    examtype: String!
    examyear: String!
  }

  type MQuestion {
    id: String!
    subject: String!
    question: String!
    option_a: String
    option_b: String
    option_c: String
    option_d: String
    answer: String
    questionVote: [QuestionVote]
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

  type QuestionVote {
    id: String,
    questionId: Int
    subject:String,
    up_vote: Int!
    down_vote:Int!
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
    getQuestionById(id:String!, subject:String!): Question
    getMQuestionById(id:String!): MQuestion
    getAllKitty: [Kitty]
    getComments(questionId:String!, subject:String!): [Comment]
    questionVotes(questionId:String!, subject:String!) : QuestionVote
    commentVotes(comment:String!) : QuestionVote
    getFreshMQuestion: [MQuestion],

  }

  type Mutation{
    addKitty(name:String!): Status
    signup(username:String!, email:String!, password:String!, gender:String): Auth
    login(email:String!, password:String!): Auth
    addComment(questionId:String!, subject:String!, comment:String!, user:String!): Comment
    questionUpVote(questionId:String!, subject:String!,user:String!) : QuestionVote
    questionDownVote(questionId:String!, subject:String!,user:String!) : QuestionVote
    commentUpVote(comment:String!, user:String!) : QuestionVote
    commentDownVote(comment:String!,user:String!) : QuestionVote
    askQuestion(subject:String!,question:String!,user:String!,option_a:String,option_b:String,option_c:String,option_d:String,answer:String) : MQuestion


  }
`;