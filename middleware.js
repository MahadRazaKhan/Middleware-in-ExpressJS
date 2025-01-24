const express = require('express');
const app = express();

const reqFilter = (req, res, next) => {
    const { name, salary } = req.query;

    if (!name) {
        return res.send('<h1 style="color:red;background-color:black;">Please Enter Correct Name</h1>');
    }

    if (name !== 'Mahad') {
        return res.send('<h1 style="color:red;background-color:black;">Incorrect Name Entered!</h1>');
    }

    if (!salary) {
        return res.send('<h1 style="color:red;background-color:black;">No salary provided!</h1>');
    }

    if (salary < 50000) {
        return res.send('<h1 style="color:red;background-color:black;">Your salary is below 50000, YOU POOR!</h1>');
    }

    next();
};

app.use(reqFilter);

app.get('/', (req, res) => {
    res.send('<h1 style="color:black;background-color:cyan;">Welcome! You have succesfully entered Home Page</h1>');
});

app.get('/about', (req, res) => {
    res.send('<h1 style="color:black;background-color:cyan;">Welcome! You have succesfully entered About Page</h1>');
});

app.listen(8000, () => {
    console.log('Server is running on Port 8000');
});
