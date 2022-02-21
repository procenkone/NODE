const users = require("../db/users");

class UserControllers {
    renderUsers({query}, res) {
        if (Object.keys(query).length) {//перевіряємо чи є наші квері
            let user = [...users];//копія основного масиву юзерів для фільтрації

            if (query.city) {
                user = user.filter(user => user.city === query.city);//фільтруєм по місту
            }

            if (query.age) {
                user = user.filter(user => user.age === query.age);//фільтруєм по віку
            }

            res.render('users', {users: user});//відмальовуємо відфільтроване
            return;
        }
        res.render('users', {users});//передаєм весь масив на сторінку для відмальрвки
    };

    getUserById({params}, res) {
        const user = users.find(user => user.id === +params.id);// перевіряєм чи в масиві є такий юзер і кладем в змінну(добавляєм "+" щоб перевести в цифру, бо дістаєм стрінгу )

        if (!user) {//якщо юзера з такою айдішкою не має то:
            res.redirect('/error')//переведи на ерору
            return//закінчи подальше виконання коду
        }

        res.render('userInfo', {user});
    };
}

module.exports = new UserControllers();