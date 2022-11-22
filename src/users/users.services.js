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

const deleteUserById = (req , res) => {
    const id = req.params.id;
    const selected = usersControllers.findOneById(id);

    if (selected) {
        usersControllers.deleteOneById(id);
        res.status(204).json({
            message: `User with id: ${id} was succesfully deleted`
        })
    } else {
        res.status(404).json({
            message: 'Invalid ID'
        })
    }
};

const putUserById = (req , res) => {
    const id = req.params.id;
    const {firstName , lastName , email , password , birthday} = req.body;
    const user = usersControllers.findOneById(id);

    if (user) {
        if (firstName && lastName && email && password && birthday) {
            const data = usersControllers.editUser( id , {firstName , lastName , email , password , birthday});
            res.status(200).json({
                message: `User with id: ${id} was succesfully edited` ,
                user: data
            })
        } else {
            res.status(400).json({
                message: 'Missing data' ,
                filed: {
                    firstName: 'String' ,
                    lastName: 'String' ,
                    email: 'email' ,
                    password: 'String' ,
                    birthday: 'YYYY/MM/DD'
                }
            })
        }
    } else {
        res.status(404).json({
            message: 'Invalid ID'
        })
    }

   
};

module.exports = {
    getAllUsers ,
    getUserById ,
    postNewUser ,
    deleteUserById ,
    putUserById
}