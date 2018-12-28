import mongoose from 'mongoose';

var mQuestionSchema = new mongoose.Schema({

  subject: {
      type: String,
      required: true
  },

  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },

  question: {
      type: String,
      required: true
  },

  option_a: {
      type: String,
      // required: true
  },

  option_b: {
      type: String,
      // required: true
  },

  option_c: {
      type: String,
      // required: true
  },

  option_d: {
      type: String,
      // required: true
  },

  answer: {
      type: String,
      // required: true
  },

  created_at: Date,
  updated_at: Date
});

mQuestionSchema.pre('save', function (next) {

    var currentDate = new Date();
    this.updated_at = currentDate;
    if (!this.created_at)
        this.created_at = currentDate;

    next();
});
export default mongoose.model('MQuestion', mQuestionSchema);