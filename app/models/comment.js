import mongoose from 'mongoose';

var commentSchema = new mongoose.Schema({

questionId: {
      type: String,
      required: true
  },

  subject: {
      type: String,
      required: true
  },

  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },

  comment: {
    type: String,
    required: true

  },
  created_at: Date,
  updated_at: Date
});

commentSchema.pre('save', function (next) {

    var currentDate = new Date();
    this.updated_at = currentDate;
    if (!this.created_at)
        this.created_at = currentDate;

    next();
});
export default mongoose.model('Comment', commentSchema);