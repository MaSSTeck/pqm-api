import QuestionResolver from '../resolvers/question-resolver'

export const resolvers = {

    Query: {
    
        getQuestion: QuestionResolver.getQuestion,
        getQuestions: QuestionResolver.getQuestions,
        getManyQuestions: QuestionResolver.getManyQuestions,
        getTopQuestions: QuestionResolver.getTopQuestions,
        getQuestionById: QuestionResolver.getQuestionById,


    },
}
