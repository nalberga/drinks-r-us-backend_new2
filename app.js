require('dotenv').config();

const config = {

    host: process.env.DB_HOST,
    port: 5432,
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,

};

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const bcrypt = require('bcrypt');


const Sequelize = require('sequelize');
const UserModel = require('./database/models/user');

const connectionString = `postgres://${config.username}:${config.password}@${config.host}:${config.port}/${config.database}`
const sequelize = new Sequelize(process.env.DATABASE_URL || connectionString, {

    dialect: 'postgres',
    pool: {
        max: 10,
        min: 0,
        acquire: 30000,
        idle: 10000
    }

})

console.log(connectionString);

const Users = UserModel(sequelize, Sequelize);

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(express.static('public'));

// API get all users
app.get('/api/users/all', function (req, res) {

    Users.findAll().then((results) => {
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(results));
    }).catch(function (e) {
        console.log(e);
        res.status(434).send('Error retrieving Users');
    })

});

// API get target user
app.get('/api/users/:id', function (req, res) {

    let id = req.params.id;

    Users.findOne({ where: { id: id } }).then(results => {

        if (results) {
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(results));
        } else {
            res.status(434).send('User does not exist is DB');
        }

    }).catch(function (e) {
        console.log(e);
        res.status(434).send('error retrieving info on target User');
    })

});

// API add user
app.post('/api/users/register', function (req, res) {

    //default admin to false if req.body.admin is null
    if (req.body.admin == null) {
        req.body.admin = false;
    }
    
    const data = {
        f_name: req.body.f_name.trim(),
        l_name: req.body.l_name.trim(),
        email: req.body.email.toLowerCase().trim(),
        phone: req.body.phone,
        password: req.body.password.trim(),
        admin: req.body.admin,
    };

    
    if (data.f_name && data.l_name && data.email && data.password) {

        var salt = bcrypt.genSaltSync(10);
        var hash = bcrypt.hashSync(data.password, salt);
        data.password = hash;

        Users.create(data).then(function (user) {
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(user));
        });

    } else {

        res.status(434).send('First and Last name, email, and password are required to register')

    }

});

// API update a target user's info
app.put('/api/users/:id', function (req, res) {
    
    const data = {

        id: req.params.id,
        f_name: req.body.f_name.trim(),
        l_name: req.body.l_name.trim(),
        email: req.body.email.toLowerCase().trim(),
        phone: req.body.phone,
        password: req.body.password.trim(),
        admin: req.body.admin

    };

    Users.findOne({ where: { id: data.id } }).then(user => {

        if (data.password != null) {

            var salt = bcrypt.genSaltSync(10);
            var hash = bcrypt.hashSync(data.password, salt);
            data.password = hash;

        }

        user.update({

            f_name: data.f_name,
            l_name: data.l_name,
            email: data.email,
            phone: data.phone,
            password: data.password,
            admin: data.admin

        }).then(function (newData) {
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(newData));
        }).catch(function (e) {
            res.status(434).send('unable to update User')
        })

    }).catch(function (e) {
        console.log(e);
        res.status(434).send(`unable to find User ${data.id}`)

    })

});

// API delete target User
app.delete('/api/users/:id', function (req, res) {

    const id = req.params.id;

    Users.findOne({ where: { id: id } }).then(results => {

        if (results) {
            
            const targetUser = JSON.stringify(results);

            Users.destroy({ where: { id: id } }).then(function (user) {
                
                res.setHeader('Content-Type', 'application/json');
                res.end(targetUser);

            }).catch(function (e) {

                res.status(434).send('unable to delete User')

            })

        } 

    }).catch(function (e) {
        
        console.log(e);
        res.status(434).send('error retrieving info on target User');

    })

});

app.listen(3000);
console.log('Drinks-R-Us API is running');