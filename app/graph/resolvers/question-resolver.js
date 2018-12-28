import MQuestion from '../../models/m_question';
import { requireAuth } from '../../services/auth';

export default {
  
  getQuestion: (root, { subject, type, year }, { dataSources }) =>{
       return  dataSources.questionAPI.question(subject, type,year)
  },
    
  getQuestions: (root, {limit,subject,type,year}, { dataSources }) => {

      return dataSources.questionAPI.questions(limit,subject,type,year)
  }, 

  getManyQuestions: (root, {subject,type,year}, { dataSources }) => {
      return  dataSources.questionAPI.manyQuestions(subject,type,year) 
  },

  getTopQuestions: (root, args, { dataSources }) => {
    return  dataSources.questionAPI.topQuestions() 
  },

  getQuestionById: (root, {id,subject}, { dataSources }) => {
    return  dataSources.questionAPI.questionById(id,subject) 
  },

  askQuestion: async (root, args, {  }) => {

      try {
          console.log(args.user)
          await requireAuth(args.user);
          return MQuestion.create({ ...args });
      } catch (error) {
          throw error;
      }
  },

  getMQuestionById: async (_, args, { }) => {
    console.log(args.id)
        try{
            return await MQuestion.findById(args.id)
        } catch (error){
            throw error;
        }
  },

  getFreshMQuestion: async (_, args, { }) => {
    console.log(args.id)
        try{
            return MQuestion.find({}).sort({ created_at: -1 })
        } catch (error){
            throw error;
        }
  },


} 