import jwt from 'jsonwebtoken';
import constants from '../config/constants';
import User from '../models/user';

export async function requireAuth(user) {
    if (!user || !user._id) {
        throw new Error('Unauthorized!');
    }

    const me = await User.findById(user._id);

    if (!me) {
        throw new Error('Unauthorized!');
    }

    return me;
}

export async function decodeToken(token) {
    console.log('token: ');
    console.log(token);
    const arr = token.split(' ');
    if (arr[0] === 'Bearer') {
        const verifyTokenResult = jwt.verify(arr[1], constants.JWT_SECRET);
        const me = await User.findById(verifyTokenResult._id);
        console.log('me: ',me);
        return me;
    }

    throw new Error('Token not valid!');
}