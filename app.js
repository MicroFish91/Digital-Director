var express         = require('express'),
    app             = express(),
    db              = require('./models'),
    server          = require('http').createServer(app),
    passport        = require('passport'),
    util            = require('util'),
    bodyParser      = require('body-parser'),
    cookieParser    = require('cookie-parser'),
    session         = require('express-session'),
    GoogleStrategy  = require('passport-google-oauth2').Strategy,
    GOOGLE_CLIENT_ID = "521837067682-ojjmkmgmnpquk89i899gphv2dvub3t46.apps.googleusercontent.com",
    GOOGLE_CLIENT_SECRET = "KFfcGOvPDt1MR82t7AzKRB8_";

    var SequelizeStore = require('connect-session-sequelize')(session.Store);
    var myStore = new SequelizeStore({
      db: db.sequelize
    })

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(cookieParser());   

var strategy = new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:3000/auth/google/callback",
    passReqToCallback: true
  },
  function (request, accessToken, refreshToken, profile, done) {

    // associate the Google account with a user record in database,
    // and return that user
    return done(null, profile);

  });

passport.use(strategy);

// Serializing and Deserializing
passport.serializeUser(function (user, done) {
  // console.log(user);
  done(null, user);
});

passport.deserializeUser(function (obj, done) {
  done(null, obj);
});

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.static('public'));


app.use(session({
  key: 'user_id',
  secret: 'secret_code',
  store: myStore,
  resave: true,
  saveUninitialized: true,
  cookie: {
    maxAge: 24 * 60 * 60 * 1000
  }
}));

myStore.sync();
app.use(passport.initialize());
app.use(passport.session());

app.get('/', function (req, res) {
  res.render('index', {
    user: req.user,
    page: 'index'
  });
});

app.get('/auth/google', passport.authenticate('google', {
  scope: [
    'https://www.googleapis.com/auth/plus.login',
    'https://www.googleapis.com/auth/plus.profile.emails.read'
  ]
}));

app.get('/auth/google/callback',
  passport.authenticate('google', {
    successRedirect: '/layout',
    failureRedirect: '/'
  }
));


// app.use((req, res, next) => {
//   if (req.cookies.user_id && !req.session.user) {
//       res.clearCookie('user_id');
//   }
//   next();
// })


app.get('/account', ensureAuthenticated, function (req, res) {
  res.render('account', {
    user: req.user,
    page: 'account'
  });
});

// app.get('/home', function (req, res) {
//   res.render('home', {
//     user: req.user,
//     page: 'home'
//   });
// });

app.get('/login', function (req, res) {
  // res.redirect('/testlogin.html')
  res.render('login', {
    user: req.user,
    page: 'login'
  });
  // res.sendFile(__dirname + '/testlogin.html');
});

app.get('/logout', function (req, res) {
  req.logout();
  res.redirect('/login');
});

function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    console.log('you are siged in.')
    return next();
  }
  console.log('redirected back to login. please log in again.')
  res.redirect('/login');
}

app.use(ensureAuthenticated);

app.use(require('./routes/uniforms'));
app.use(require('./routes/home'));
app.use(require('./routes/events'));
app.use(require('./routes/calendar'));
app.use(require('./routes/instruments'));
app.use(require('./routes/instrumentUpdate'));
app.use(require('./routes/createInstrument'));
app.use(require('./routes/deleteInstrument')); 
app.use(require('./routes/uniformUpdate')); 
app.use(require('./routes/deleteUniform'));
app.use(require('./routes/createUniform'));
app.use(require('./routes/deleteevent'));
app.use(require('./routes/updatestudent'));
app.use(require('./routes/deletestudent')); 
app.use(require('./routes/createstudent')); 

app.get('/layout', ensureAuthenticated, function (req, res) {
    res.render('layout', {
      user: req.user
    });
});

app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});
 
// error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};
 
//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

server.listen(3000);