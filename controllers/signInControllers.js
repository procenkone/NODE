class SignInControllers {
    renderSignIn(req, res) {
        res.render('signIn');
    }

    renderUserInfo({user}, res) {
        res.render('userInfo', {user: user[0]});//переходим на його сторінку
    };
}

module.exports = new SignInControllers();