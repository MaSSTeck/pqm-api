import mongoose from 'mongoose';

var kittySchema = new mongoose.Schema({
    name: String,
    created_at: Date,
    updated_at: Date
});

kittySchema.pre('save', function (next) {

    var currentDate = new Date();
    this.updated_at = currentDate;
    if (!this.created_at)
        this.created_at = currentDate;

    next();
});
export default mongoose.model('TheKitty', kittySchema);