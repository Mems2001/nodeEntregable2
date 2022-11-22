// Dependencies
const express = require('express');

// File's imports
const usersRouter = require('./users/users.router')

// Initial config
const port = 9000;
const app = express();

// Json request available
app.use(express.json());

// Others
app.get('/' , (req, res) => {
    res.status(200).json({
        message: 'Server is OK'
    })
})

// Router
app.use('/api/v1' , usersRouter)

// Server Start
app.listen(port , () => {
    console.log(`Server Started at port: ${port}`)
})