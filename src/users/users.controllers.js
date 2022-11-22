const UUID = require('uuid');

const usersDB = [
    // Users for request tests
    {
        id: "29285727-01eb-4ce5-ac66-1806c9e71ce2",
        firstName: "Test",
        lastName: "1",
        email: "1@test.com",
        password: "1test" ,
        birthday: 'Unknown Birthday'
    } ,
    {
        id: "3246f871-f90b-4299-b2c6-2754158b9697",
        firstName: "Test",
        lastName: "2",
        email: "2@test.com",
        password: "2test" ,
        birthday: 'Unknown Birthday'
    } ,
    {
        id: "8045c843-e123-4d44-a50c-0413be371c1b",
        firstName: "Test",
        lastName: "3",
        email: "3@test.com",
        password: "3test",
        birthday: "Unknown Birthday"
      } ,
      {
        id: "39e4e5fd-6994-404f-ba85-293b5cc481a6",
        firstName: "Test",
        lastName: "4",
        email: "4@test.com",
        password: "4test",
        birthday: "Unknown Birthday"
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
};

const deleteOneById = (id) => {
    const selected = usersDB.find(user => user.id === id);
    const index = usersDB.indexOf(selected);
    usersDB.splice(index, 1);
    return usersDB
};

const editUser = (id , obj) => {
    const selected = usersDB.find(user => user.id === id);
    const index = usersDB.indexOf(selected);
    usersDB[index] = {
        id ,
        firstName: obj.firstName ,
        lastName: obj.lastName ,
        email: obj.email ,
        password: obj.password ,
        birthday: obj.birthday || 'Unknown Birthday'
    };
    return usersDB[index]
};

module.exports = {
    findAll ,
    findOneById ,
    createOne ,
    deleteOneById ,
    editUser
}