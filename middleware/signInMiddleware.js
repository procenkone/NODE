const users = require("../db/users");

function signInMiddleware(req, res, next) {
    try {
        const {email, password} = req.body;
        const check = users.find(user => user.email === email && user.password === password);
        const user = users.filter(user => user.email === email && user.password === password);//фільтруєм масив з окремим юзером у якого співпав емайл і пароль

        if (!check) {
            throw new Error('not the correct login or password');
        }

        req.user = user;
        next();
    } catch (e) {
        res.status(400).send(e.message);
    }
}

module.exports = signInMiddleware;