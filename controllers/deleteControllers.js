const users = require('../db/users');

class DeleteControllers {
    deleteRedirect({params}, res) {
        const index = users.findIndex(item => item.id === +params.idDelete);//отримуємо індекс данного юзера з загольного масиву юзерів
        users.splice(index, 1);//видаляєм обєкт з масиву юзерів
        res.redirect('/users');//перенаправляємо на сторінку з всіма юзерами
    };
}

module.exports = new DeleteControllers();