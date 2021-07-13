const userService = require('../services/users')

module.exports = {
    add: async (req, res) => {
        
        const { body } = req;

        //insert appointment
        const newUsers = {
        ...body,
        };
        try {
        const savedUser = await userService.add(
            newUsers
        );
        res.send({ status: 200, data: savedUser });
        } catch (err) {
        res.status(400).json({ error: err.message });
        }
    },
    update: async (req, res) => {
        const { body } = req;
        const {userId} = req.params
    //update user
        const updateUser = { ...body };
            
        try {
        const saveUpdateUser = await userService.update(updateUser, userId);
        res.send({ status: 200, message: saveUpdateUser });
        } catch (err) {
        res.status(400).json({ error: err.message });
        }
    },
    delete: async (req, res) => {
        const {userId} = req.params
        
        try {
            const deleteUser = await userService.delete(userId); 
            res.send({ status: 200, message: deleteUser , note: "delete user success" });
        } catch (err) {
            res.status(400).json({ error: err.message }); 
        }
        
    },
    browse: async (req, res) => {
        const { page = 1, limit = 10 } = req.query;
        try {
          const user = await userService.find(+page, +limit);
    
          //get total documents
          const pageInfo = await userService.getPagination(+page, +limit);
    
          res.status(200).send({ data: user, ...pageInfo });
        } catch (err) {
          res.status(400).json({ error: err.message });
        }
      },
    
}