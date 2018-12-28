import QuestionVote from '../../models/q_vote';
import QuestionVoteTracker from '../../models/q_vote_tracker';
import CommentVote from '../../models/c_vote';
import CommentVoteTracker from '../../models/c_vote_tracker';
import { requireAuth } from '../../services/auth';


export default {

    questionUpVote: async (_, args, {} ) => {
        try {
              await requireAuth(args.user);
              const votes =  await QuestionVote.findOne({questionId:args.questionId, subject:args.subject});
              let upVote = 1;
              let qVote = null;


             if (votes){
               upVote = votes.up_vote + 1;
               qVote = await QuestionVote.findByIdAndUpdate( votes._id , { up_vote:upVote },  {new: true});
               await QuestionVoteTracker.create({user:args.user, vote: qVote, vote_type:"up"});
               return qVote
             }

             qVote = await QuestionVote.create({ ...args, up_vote:upVote, down_vote:0 });
             await QuestionVoteTracker.create({user:args.user, vote: qVote, vote_type:"up"});
             return qVote

        } catch (error) {
            throw error;
        }
    },

    questionDownVote: async (_, args, {} ) => {
        try {
              await requireAuth(args.user);
              const votes =  await QuestionVote.findOne({questionId:args.questionId, subject:args.subject});
              let downVote = 1;
              let qVote = null;


             if (votes){
               downVote = votes.down_vote + 1;
               qVote = await QuestionVote.findByIdAndUpdate( votes._id , { down_vote:downVote },  {new: true});
               await QuestionVoteTracker.create({user:args.user, vote: qVote, vote_type:"down"});
               return qVote
             }

             qVote = await QuestionVote.create({ ...args, down_vote:downVote, up_vote:0 });
             await QuestionVoteTracker.create({user:args.user, vote: qVote, vote_type:"down"});
             return qVote

        } catch (error) {
            throw error;
        }
    },

   questionVotes: async (_, args, {} ) => {
        try {
              return  await QuestionVote.findOne({questionId:args.questionId, subject:args.subject});
    
        } catch (error) {
            throw error;
        }
    },


    commentUpVote: async (_, args, {} ) => {
        try {
              await requireAuth(args.user);
              const votes =  await CommentVote.findOne({comment:args.comment});
              let upVote = 1;
              let qVote = null;


             if (votes){
               upVote = votes.up_vote + 1;
               qVote = await CommentVote.findByIdAndUpdate( votes._id , { up_vote:upVote },  {new: true});
               await CommentVoteTracker.create({user:args.user, c_vote: qVote, vote_type:"up"});
               return qVote
             }

             qVote = await CommentVote.create({ ...args, up_vote:upVote, down_vote:0 });
             await CommentVoteTracker.create({user:args.user, c_vote: qVote, vote_type:"up"});
             return qVote

        } catch (error) {
            throw error;
        }
    },

    commentDownVote: async (_, args, {} ) => {
        try {
              await requireAuth(args.user);
              const votes =  await CommentVote.findOne({comment:args.comment});
              let downVote = 1;
              let qVote = null;


             if (votes){
               downVote = votes.down_vote + 1;
               qVote = await CommentVote.findByIdAndUpdate( votes._id , { down_vote:downVote },  {new: true});
               await CommentVoteTracker.create({user:args.user, c_vote: qVote, vote_type:"down"});
               return qVote
             }

             qVote = await CommentVote.create({ ...args, down_vote:downVote, up_vote:0 });
             await CommentVoteTracker.create({user:args.user, c_vote: qVote, vote_type:"down"});
             return qVote

        } catch (error) {
            throw error;
        }
    },

    commentVotes: async (_, args, {} ) => {
        try {
              return  await CommentVote.findOne({comment:args.comment});
    
        } catch (error) {
            throw error;
        }
    },


}