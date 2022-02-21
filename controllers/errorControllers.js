class ErrorControllers {
    errorRender(req, res) {
        res.render('errorPage');
    };
}

module.exports = new ErrorControllers();