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

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(cookieParser());

    app.use(require('./routes/uniforms'));
    app.use(require('./routes/home'));
    app.use(require('./routes/events.js'));
    app.use(require('./routes/updatestudent'));
    app.use(require('./routes/deletestudent'));    

var strategy = new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:3000/auth/google/callback",
    passReqToCallback: false
  },
  function (request, accessToken, refreshToken, profile, done) {

    // associate the Google account with a user record in database,
    // and return that user
    return done(null, profile);

  });

passport.use(strategy);

// Serializing and Deserializing
passport.serializeUser(function (user, done) {
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
  resave: true,
  saveUninitialized: true,
  cookie: {
    maxAge: 24 * 60 * 60 * 1000
  }
}));

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
  }));


app.use((req, res, next) => {
  if (req.cookies.user_id && !req.session.user) {
      res.clearCookie('connect.sid');
  }
  next();
})

function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  console.log('redirected back to login. please log in again.')
  res.redirect('/');
}

app.get('/account', ensureAuthenticated, function (req, res) {
  res.render('account', {
    user: req.user,
    page: 'account'
  });
});

app.get('/login', ensureAuthenticated, function (req, res) {
  res.render('login', {
    user: req.user,
    page: 'login'
  });
});

app.get('/logout', function (req, res) {
  console.log('successfully logged out: ' + req.user.displayName)
  req.logout();
  res.redirect('/');
});

app.get('/layout', ensureAuthenticated, function (req, res) {
  db.teacher.create({id: req.user.id, name: req.user.displayName, email: req.user.email});
  res.render('layout', {
    user: req.user
  });
});

server.listen(3000);