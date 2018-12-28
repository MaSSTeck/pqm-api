import QuestionResolver from '../resolvers/question-resolver'
import KittyResolver from '../resolvers/kitty-resolver'
import UserResolver from '../resolvers/user-resolver'
import CommentResolver from '../resolvers/comment-resolver'
import VoteResolver from '../resolvers/vote-resolver'


import User from '../../models/user';
import Comment from '../../models/comment';
import QuestionVote from '../../models/q_vote';



export const resolvers = {

    Comment: {
        user: ({ user }) => User.findById(user),
    },
    MQuestion: {
        questionVote: ({ questionId }) => QuestionVote.findOne({questionId:questionId}),
    },

    Query: {
    
        getQuestion: QuestionResolver.getQuestion,
        getQuestions: QuestionResolver.getQuestions,
        getManyQuestions: QuestionResolver.getManyQuestions,
        getTopQuestions: QuestionResolver.getTopQuestions,
        getQuestionById: QuestionResolver.getQuestionById,
        getMQuestionById: QuestionResolver.getMQuestionById,
        getFreshMQuestion: QuestionResolver.getFreshMQuestion,

        getComments: CommentResolver.getComments,
        getAllKitty: KittyResolver.getAllKitty,
        questionVotes: VoteResolver.questionVotes,
        commentVotes: VoteResolver.commentVotes,

    },

    Mutation: {
       addKitty: KittyResolver.addKitty,
       signup: UserResolver.signup,
       login: UserResolver.login,

       addComment: CommentResolver.addComment,
       questionUpVote: VoteResolver.questionUpVote,
       questionDownVote: VoteResolver.questionDownVote,
       commentUpVote: VoteResolver.commentUpVote,
       commentDownVote: VoteResolver.commentDownVote,

       askQuestion: QuestionResolver.askQuestion,


    }
}
