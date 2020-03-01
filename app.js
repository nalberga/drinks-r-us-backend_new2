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
const ProductModel = require('./database/models/product');

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
const Products = ProductModel(sequelize, Sequelize);

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(express.static('public'));

// API get all users
app.get('/api/users/', function (req, res) {

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

// API get all products
app.get('/api/products/', function (req, res) {

    Products.findAll().then((results) => {
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(results));
    }).catch(function (e) {
        console.log(e);
        res.status(434).send('Error retrieving Products');
    })

});

// API get all products by type
app.get('/api/products/type/:id', function (req, res) {

    const id = req.params.id;

    Products.findAll({ where: { type_id: id } }).then((results) => {

        if (results.length != 0) {
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(results));
        } else {
            res.status(434).send('No products found belonging to this type!');
        }

    }).catch(function (e) {
        console.log(e);
        res.status(434).send('Error retrieving Products of this type');
    })

});

// API get all products by category
app.get('/api/products/category/:id', function (req, res) {

    const id = req.params.id;

    Products.findAll({ where: { category_id: id } }).then((results) => {

        if (results.length != 0) {
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(results));
        } else {
            res.status(434).send('No products found belonging to this category!');
        }

    }).catch(function (e) {
        console.log(e);
        res.status(434).send('Error retrieving Products of this category');
    })

});

// API get target product
app.get('/api/products/:id', function (req, res) {

    let id = req.params.id;

    Products.findOne({ where: { id: id } }).then(results => {

        if (results) {
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(results));
        } else {
            res.status(434).send('Product not found');
        }

    }).catch(function (e) {
        console.log(e);
        res.status(434).send('error retrieving info on target Product');
    })

});

// API add product
app.post('/api/products/register', function (req, res) {

    const data = {

        name: req.body.name,
        type_id: req.body.type_id,
        category_id: req.body.category_id,
        description: req.body.description,
        quantity: req.body.quantity,
        price: req.body.price,
        image_url: req.body.image_url

    };


    if (data.name && data.type_id && data.category_id && data.description && data.quantity && data.price && data.image_url) {

        Products.create(data).then(product => {
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(product));
        }).catch((e) => {
            console.log(e);
            res.status(434).send('error registering Product');
        })

    } else {

        res.status(434).send('All fields are required to register.')

    }

});

// API update a target product's info
app.put('/api/products/:id', function (req, res) {

    const data = {

        id: req.params.id,
        name: req.body.name,
        type_id: req.body.type_id,
        category_id: req.body.category_id,
        description: req.body.description,
        quantity: req.body.quantity,
        price: req.body.price,
        image_url: req.body.image_url

    };

    Products.findOne({ where: { id: data.id } }).then(product => {

        product.update({

            name: data.name,
            type_id: data.type_id,
            category_id: data.category_id,
            description: data.description,
            quantity: data.quantity,
            price: data.price,
            image_url: data.image_url,

        }).then(newData => {
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(newData));
        }).catch((e) => {
            res.status(434).send('unable to update Product')
        })

    }).catch((e) => {
        console.log(e);
        res.status(434).send(`unable to find Product ${data.id}`)

    })

});

// API delete target Product
app.delete('/api/products/:id', function (req, res) {

    const id = req.params.id;

    Products.findOne({ where: { id: id } }).then(results => {

        if (results) {

            const targetProduct = JSON.stringify(results);

            Products.destroy({ where: { id: id } }).then(() => {

                res.setHeader('Content-Type', 'application/json');
                res.end(targetProduct);

            }).catch((e) => {

                res.status(434).send('unable to delete Product')

            })

        }

    }).catch((e) => {

        console.log(e);
        res.status(434).send('error retrieving info on target Product');

    })

});

app.listen(3000);
console.log('Drinks-R-Us API is running');