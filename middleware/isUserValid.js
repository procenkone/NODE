const users = require("../db/users");

function isUserValid({body}, res, next) {// валідуєм форму
    try {
        const {email, password, firstName, lastName, age, city} = body;

        if (!email || !password || !firstName || !lastName || !age || !city) {//якщо якесь поле не заповнене то створи клас помилку і передай в кетч
            throw new Error('email or password, firstName, lastName, age, city is not provided');//сам клас помилки
        }

        if (password.length < 5) {
            throw new Error('password must be longer than 5 letters');
        }

        const exist = users.some(user => user.email === body.email);//перевіряєм чи є в масиві такий емейл

        if (exist) {
            throw new Error('a user with this email already exists');
        }

        next();//якщо перевірки не справдились то дозволяєм продовжити код який в контролері, після нашого мідлвару

    } catch ({message}) {
        console.log(message);//це помилка з класу помилки який створився при перевірці
        res.status(400).send(message);//в консоль статус а на сторінку повідомлення про помилку
    }
}

module.exports = isUserValid;