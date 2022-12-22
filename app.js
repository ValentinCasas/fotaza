const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const methodOverride = require("method-override");
const session = require("express-session");
const passport = require("passport");
const bodyparser = require('body-parser');
const upload = require("express-fileupload");


var isAutenticatedBD = require("./routes/auth").isAutenticatedBD;
const authRouter = require('./routes/auth').router;
const userRouter = require('./routes/user');
const indexRouter = require('./routes/index');
const unauthenticatedRouter = require('./routes/unauthenticated');
const photoRouter = require('./routes/photo');
const commentRouter = require('./routes/comment');
const functionsRouter = require('./routes/funcionalidades');
const messageRouter=  require('./routes/message');

var app = express();

app.use(
  session({
    resave: true,
    saveUninitialized: true,
    secret: "palabra secreta",
  })
);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'fonts')));
app.use(express.static(path.join(__dirname, 'public/stylesheets')));
app.use(express.static(path.join(__dirname, 'public/javascripts')));
app.use(express.static(path.join(__dirname, 'public/profile-images')));
app.use(express.static(path.join(__dirname, 'public/images')));
app.use(express.static(path.join(__dirname, 'public/imagesWatermark')));
app.use(express.static(path.join(__dirname, 'public/imagesImportant')));
app.use(express.static(path.join(__dirname, 'public/imagesWatermarkFotaza')));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));
app.use(upload({ limits: { fileSize: 1024 * 1024 } }));
app.use(cookieParser());


app.use('/', indexRouter);
app.use('/', functionsRouter);
app.use('/user',isAutenticatedBD, userRouter)
app.use('/auth', authRouter);
app.use('/photo', photoRouter);
app.use('/unauthenticated', unauthenticatedRouter);
app.use('/comment', commentRouter);
app.use('/message',isAutenticatedBD, messageRouter);






















// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
