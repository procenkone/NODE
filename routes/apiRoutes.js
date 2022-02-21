const {Router} = require('express')
const userRouter = require('./userRouter')
const loginRouter = require("./loginRouter");
const signInRoutes = require("./signInRoutes");
const errorRoutes = require("./errorRoutes");
const deleteRoutes = require("./deleteRoutes");

const routes = Router();

routes.use('/users', userRouter);
routes.use('/login', loginRouter);
routes.use('/signIn', signInRoutes);
routes.use('/error', errorRoutes);
routes.use('/delete/:idDelete', deleteRoutes);

routes.use((req, res) => {//сторінка з неіснуючим шляхом
    res.render('notFound');
});

module.exports = routes;

