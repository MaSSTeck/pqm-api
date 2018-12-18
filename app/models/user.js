import mongoose from 'mongoose';
import {hashSync, compareSync} from 'bcrypt-nodejs';
import jwt from 'jsonwebtoken';
import constants from '../config/constants'

var userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    verified:{
        type: Boolean,
        default: false,
    },
    gender:{
        type:String,
        required: true,
    },
    image_path: {
        type: String,
    },
    created_at: Date,
    updated_at: Date
});



userSchema.pre('save', function (next) {
    var currentDate = new Date();
    this.updated_at = currentDate;
    if (!this.created_at)
        this.created_at = currentDate;

    if (this.isModified('password')) {
        this.password = this._hashPassword(this.password);
        return next();
    }
    
    next();
});

userSchema.methods = {
    _hashPassword(password) {
        return hashSync(password);
    },
    authenticateUser(password) {
        return compareSync(password, this.password);
    },
    createToken() {
        return jwt.sign(
            {
                _id: this._id
            },
            constants.JWT_SECRET
        )
    }
};

export default mongoose.model('User', userSchema);
