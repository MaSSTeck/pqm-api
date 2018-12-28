import mongoose from 'mongoose';

var commentVoteSchema = new mongoose.Schema({

comment: {
      type: mongoose.Schema.Types.ObjectId,
      required: true
  },

  up_vote: {
    type: Number,
  },

  down_vote: {
    type: Number,
  },

  created_at: Date,
  updated_at: Date
});

commentVoteSchema.pre('save', function (next) {

    var currentDate = new Date();
    this.updated_at = currentDate;
    if (!this.created_at)
        this.created_at = currentDate;

    next();
});
export default mongoose.model('CommentVote', commentVoteSchema);
