import mongoose from 'mongoose';

var questionVoteTrackerSchema = new mongoose.Schema({

 vote: {
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

questionVoteTrackerSchema.pre('save', function (next) {

    var currentDate = new Date();
    this.updated_at = currentDate;
    if (!this.created_at)
        this.created_at = currentDate;

    next();
});
export default mongoose.model('QuestionVoteTracker', questionVoteTrackerSchema);
