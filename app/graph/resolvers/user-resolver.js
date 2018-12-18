import User from '../../models/user';

export default {

    signup: async (_, args) => {
        console.log("dsdsdsdsd",args);
        try {
            const user = await User.create(args);
            return {
                token: user.createToken(),
            };
        } catch (error) {
            throw error;
        }
    },

    login: async (_, {email, password}) => {
        try {
            const user = await User.findOne({email});

            if (!user) {
                throw new Error('User does not exist!');
            }

            if (!user.authenticateUser(password)) {
                throw new Error('Password not correct!');
            }

            // if (user){
            //     await User.findByIdAndUpdate( user._id , { onesignal_playerId:onesignal_playerId });
            // }

            return {
                token: user.createToken()
            };
        } catch (error) {
            throw error;
        }
    },


};