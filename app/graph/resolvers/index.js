import QuestionResolver from '../resolvers/question-resolver'
import KittyResolver from '../resolvers/kitty-resolver'
import UserResolver from '../resolvers/user-resolver'

export const resolvers = {

    Query: {
    
        getQuestion: QuestionResolver.getQuestion,
        getQuestions: QuestionResolver.getQuestions,
        getManyQuestions: QuestionResolver.getManyQuestions,
        getTopQuestions: QuestionResolver.getTopQuestions,
        getQuestionById: QuestionResolver.getQuestionById,

        getAllKitty: KittyResolver.getAllKitty,

    },

    Mutation: {
       addKitty: KittyResolver.addKitty,
       signup: UserResolver.signup,
       login: UserResolver.login,


    }
}
