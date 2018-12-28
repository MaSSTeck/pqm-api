import mongoose from 'mongoose';

var commentVoteTrackerSchema = new mongoose.Schema({

 c_vote: {
      type: mongoose.Schema.Types.ObjectId,
      required: true
  },

  user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true
  },

  vote_type: {
    type: String,
    required: true
  },

  created_at: Date,
  updated_at: Date
});

commentVoteTrackerSchema.pre('save', function (next) {

    var currentDate = new Date();
    this.updated_at = currentDate;
    if (!this.created_at)
        this.created_at = currentDate;

    next();
});
export default mongoose.model('CommentVoteTracker', commentVoteTrackerSchema);
