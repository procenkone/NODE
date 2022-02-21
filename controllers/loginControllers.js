const users = require("../db/users");

class LoginControllers {
    renderLogin(req,res){
        res.render('login');
    };

    redirectUsers({body}, res) {
        users.push({...body, id: new Date().getSeconds()});//пушим данні в масив і добавляємо id
        res.redirect('/users');//переводим на всіх юзерів
    };

}

module.exports = new LoginControllers();