const userModel = require('../models/users')

module.exports = {
     add: async (newUser) => {
        //Create new article
        const userData = userModel(newUser);
        await userData.save();
        return userData;
      },
      update: async (updateUser, userId) => {
        return await userModel.findByIdAndUpdate(userId, updateUser, {
          new: true,
        });
      },
      delete: async (userId) => {
        await userModel.findByIdAndRemove(userId, {
          new: true,
        });
        return true
      },
      getPagination: async ( page, limit) => {
        const totalItem = await userModel
          .find()
          .countDocuments();
        const activePage = page;
        const totalPage = Math.ceil(totalItem / limit);
    
        return { totalItem, activePage, totalPage };
      },
      find: async (page, limit) => {
        return await userModel
          .find()
          .limit(limit)
          .skip((page - 1) * limit)
          .exec();
      },
      
}