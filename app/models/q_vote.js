import mongoose from 'mongoose';

var questionVoteSchema = new mongoose.Schema({

questionId: {
      type: String,
      required: true
  },

  subject: {
      type: String,
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

questionVoteSchema.pre('save', function (next) {

    var currentDate = new Date();
    this.updated_at = currentDate;
    if (!this.created_at)
        this.created_at = currentDate;

    next();
});
export default mongoose.model('QuestionVote', questionVoteSchema);
