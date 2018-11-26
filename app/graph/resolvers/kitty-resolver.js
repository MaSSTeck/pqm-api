import TheKitty from '../../models/kitty';

export default {

//     kittySchema: async (_, args, { user }) => {
//     try {
//       //await requireAuth(user);
//       return EventComment.find({}).sort({ createdAt: -1 })
//     } catch (error) {
//       throw error;
//     }
//   },

    getAllKitty: async (_, args, { user }) => {
        try {
        //await requireAuth(user);
        let cats =   await TheKitty.find({name:"fly"}); //.sort({ created_at: -1 });
        console.log('i got here');
        console.log(cats);
        // return cats
        TheKitty.find(function (err, theKitties) {
                if (err) return console.error(err);
                console.log('i got here');
                console.log(theKitties);
                return theKitties;
            })
        } catch (error) {
            console.log(error);
        throw error;
        }
  },

    // kittySchema.find(function (err, kittens) {
    //     if (err) return console.error(err);
    //     console.log(kittens);
    // })
 
};