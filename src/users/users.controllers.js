const UUID = require('uuid');

const usersDB = []

const findAll = () => {
    return usersDB
};

const findOneById = (id) => {
    const data = usersDB.find(user => user.id === id);
    return data
};

const createOne = (obj) => {

     const newUser = {
        id: UUID.v4() ,
        firstName: obj.firstName ,
        lastName: obj.lastName ,
        email: obj.email ,
        password: obj.password ,
        birthday: obj.birthday || 'Unknown Birthday'
    };

    usersDB.push(newUser)
    return newUser
}

module.exports = {
    findAll ,
    findOneById ,
    createOne
}