import TheKitty from '../../models/kitty';

export default {

    getAllKitty: async (_, args, { user }) => {
        try {
            let cats =   await TheKitty.find({}); 
            console.log('i got here');
            console.log(cats);
            return cats;
        } catch (error) {
            console.log(error);
        throw error;
        }
  },

  addKitty: async (_, args, { }) => {
      console.log(args);
    try {
      let cat = await TheKitty.create({ ...args });
      let  res = {message:"success", status:200}
      return res;
    } catch (error) {
      throw error;
    }
  },

};