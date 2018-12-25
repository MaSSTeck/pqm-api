import QuestionResolver from '../resolvers/question-resolver'
import KittyResolver from '../resolvers/kitty-resolver'
import UserResolver from '../resolvers/user-resolver'
import CommentResolver from '../resolvers/comment-resolver'

import User from '../../models/user';
import Comment from '../../models/comment';
// import Question from '../../models/question';



export const resolvers = {

    Comment: {
        user: ({ user }) => User.findById(user),
    },

    Query: {
    
        getQuestion: QuestionResolver.getQuestion,
        getQuestions: QuestionResolver.getQuestions,
        getManyQuestions: QuestionResolver.getManyQuestions,
        getTopQuestions: QuestionResolver.getTopQuestions,
        getQuestionById: QuestionResolver.getQuestionById,

        getComments: CommentResolver.getComments,

        getAllKitty: KittyResolver.getAllKitty,

    },

    Mutation: {
       addKitty: KittyResolver.addKitty,
       signup: UserResolver.signup,
       login: UserResolver.login,

       addComment: CommentResolver.addComment,

    }
}
