// Попереднє дз переписати на роути і контролери і написати мідлвару яка буде
// перевіряти по роуту /sigIn чи імейл існує в масиві юзерів і другу мідлвару /login чи користувач ввів всі data

const express = require('express');
const app = express();
const path = require('path');
const hbs = require('express-handlebars');
const {engine} = require('express-handlebars');
const {json} = require("express");
const apiRoutes = require('./routes/apiRoutes');

app.use(express.static(path.join(__dirname, 'static')));
app.set('view engine', '.hbs');
app.engine('.hbs', engine({defaultLayout: false}));
app.set('views', path.join(__dirname, 'static'));

app.use(json());
app.use(express.urlencoded({extended: true}));
app.use(apiRoutes);

app.listen(3001, () => {//запуск сервера
    console.log('server has started on port 3001');
});

