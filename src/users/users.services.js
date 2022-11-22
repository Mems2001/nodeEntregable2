// File's import
const usersControllers = require('./users.controllers');

const getAllUsers = (req , res) => {
    const data = usersControllers.findAll();
    res.status(200).json(data)
};

const getUserById = (req , res) => {
    const id = req.params.id;
    const data = usersControllers.findOneById(id);

    if (data) {
        res.status(200).json(data)
    } else {
        res.status(404).json({
            message: 'Invalid ID' ,
            id: id
        })
    }
};

const postNewUser = (req , res) => {
    const {firstName , lastName , email , password , birthday} = req.body;

    if (firstName && lastName && email && password) {
        const data = usersControllers.createOne({firstName , lastName , email , password , birthday});
        res.status(201).json(data)
    } else {
        res.status(400).json({
            message: 'Missing data' ,
            fileds: {
                firstName: 'String' ,
                lastName: 'String' ,
                email: 'email' ,
                password: 'string' ,
                birthday: 'YYYY/MM/DD'
            }
        })
    }
};

module.exports = {
    getAllUsers ,
    getUserById ,
    postNewUser
}