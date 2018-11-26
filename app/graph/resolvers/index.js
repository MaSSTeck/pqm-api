import QuestionResolver from '../resolvers/question-resolver'
import KittyResolver from '../resolvers/kitty-resolver'

export const resolvers = {

    Query: {
    
        getQuestion: QuestionResolver.getQuestion,
        getQuestions: QuestionResolver.getQuestions,
        getManyQuestions: QuestionResolver.getManyQuestions,
        getTopQuestions: QuestionResolver.getTopQuestions,
        getQuestionById: QuestionResolver.getQuestionById,

        getAllKitty: KittyResolver.getAllKitty,



    },
}
