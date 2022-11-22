const UUID = require('uuid');

const usersDB = [
    {
        id: "29285727-01eb-4ce5-ac66-1806c9e71ce2",
        firstName: "Test",
        lastName: "1",
        email: "1@test.com",
        password: "1test" ,
        birthday: 'Unknown birthday'
    } ,
    {
        id: "3246f871-f90b-4299-b2c6-2754158b9697",
        firstName: "Test",
        lastName: "2",
        email: "2@test.com",
        password: "2test" ,
        birthday: 'Unknown birthday'
    }
]

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