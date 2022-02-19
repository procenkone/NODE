// 1. /login, поля які треба відрендерити в файлі hbs: firstName, lastName,
// email(унікальне поле), password, age, city
// просто зробити темплейт з цим усім і вводити свої дані які будуть пушитися
// в масив і редірект робити на сторінку з усіма юзерами /users і перевірка чи такий
// імейл не існує, якщо існує то редірект на еррор пейдж
// 2. /users просто сторінка з усіма юзерами, але можна по квері параметрам їх
// фільтрувати по age і city
// 3. /user/:id сторінка з інфою про одного юзера

const express = require('express');
const app = express();
const path = require('path');
const hbs = require('express-handlebars');
const {engine} = require('express-handlebars');
const {json} = require("express");

app.use(express.static(path.join(__dirname, 'static')));
app.set('view engine', '.hbs');
app.engine('.hbs', engine({defaultLayout: false}));
app.set('views', path.join(__dirname, 'static'));

app.use(json());
app.use(express.urlencoded({extended: true}));

const users = [];


app.get('/login', (req, res) => {//перехід на сторінку з формою
    res.render('login');
});

app.post('/login', ({body}, res) => {//якщо відпрацював метод пост то перевірим чи є такий емейл і якщо є то переведем на сторінку помилки а якщо ні то запушим інфу в масив
    const exist = users.some(user => user.email === body.email)//перевіряєм чи є в масиві такий емейл
    if (exist) {
        res.redirect('/error');//якщо є переводим на сторінку еррори
        return;
    }
    users.push({...body, id: new Date().getSeconds()});//пушим данні в масив і добавляємо id
    res.redirect('/users');//переводим на всіх юзерів
});

app.get('/users', ({query}, res) => {
    if (Object.keys(query).length) {//перевіряємо чи є наші квері
        let user = [...users];//копія основного масиву юзерів для фільтрації
        if (query.city) {
            user = user.filter(user => user.city === query.city);//фільтруєм по місту
        }
        if (query.age) {
            user = user.filter(user => user.age === query.age);//фільтруєм по віку
        }
        res.render('users', {users: user});//відмальовуємо відфільтроване
        return
    }
    res.render('users', {users});//передаєм весь масив на сторінку для відмальрвки
});

app.get('/users/:id', ({params}, res) => {//сторінка окремого юзера
    const user = users.find(user => user.id === +params.id);// перевіряєм чи в масиві є такий юзер і кладем в змінну(добавляєм "+" щоб перевести в цифру, бо дістаєм стрінгу )
    if (!user) {//якщо юзера з такою айдішкою не має то:
        res.redirect('/error')//переведи на ерору
        return//закінчи подальше виконання коду
    }
    res.render('userInfo', {user});//передаєм на сторінку найденого юзера для відмальовки
});

app.get('/signIn', (req, res) => {//сторінка входу
    res.render('signIn')
});

app.post('/signIn', ({body}, res) => {
    const user = users.filter(user => user.email === body.email && user.password === body.password)//фільтруєм масив з окремим юзером у якого співпав емайл і пароль
    res.render('userInfo', {user: user[0]});//переходим на його сторінку
});

app.get('/error', (req, res) => {//метод відмальовки сторінки з error
    res.render('errorPage');
});

app.get('/delete/:idDelete', ({params}, res) => {//видаляєм юзера при натисканні на лінку
    const index = users.findIndex(item => item.id === +params.idDelete);//отримуємо індекс данного юзера з загольного масиву юзерів
    users.splice(index, 1);//видаляєм обєкт з масиву юзерів
    res.redirect('/users');//перенаправляємо на сторінку з всіма юзерами
});

app.use((req, res) => {//сторінка з неіснуючим шляхом
    res.render('notFound');
});

app.listen(3001, () => {//запуск сервера
    console.log('server has started on port 3001');
});

