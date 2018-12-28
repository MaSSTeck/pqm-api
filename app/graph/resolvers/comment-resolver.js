import Comment from '../../models/comment';
import { requireAuth } from '../../services/auth';


export default {

    getComments: async (_, args, { }) => {
        try{
            return await Comment.find({questionId:args.questionId, subject:args.subject});
        } catch (error){
            throw error;
        }
    },

    addComment: async (_, args, {} ) => {
        try {
        	console.log(args.user)
          await requireAuth(args.user);
          return Comment.create({ ...args });
        } catch (error) {
          throw error;
        }
    },

    // deleteComment: async (_, { _id }, { user }) => {
    //     try {
    //         await requireAuth(user);
    //         const comment = await Comment.findOne({ _id, user: user._id});

    //         if(!comment){
    //             throw new Error('Comment Not found!');
    //         }
    //         await comment.remove();
    //         return {
    //             message: 'Deleted Successfully!'
    //         }
    //     } catch (error) {
    //         throw error;
    //     }
    // }

}