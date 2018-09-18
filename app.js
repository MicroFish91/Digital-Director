var express         = require('express'),
    app             = express(),
    db              = require('./models'),
    passport        = require('passport'),
    bodyParser      = require('body-parser'),
    cookieParser    = require('cookie-parser'),
    session         = require('express-session'),
    GoogleStrategy  = require('passport-google-oauth2').Strategy,
    GOOGLE_CLIENT_ID = "523813251696-vjj6tkdbmgguit2ark56oodrbi346k17.apps.googleusercontent.com",
    GOOGLE_CLIENT_SECRET = "OvdeSPxtxNX83lBWnk_tjjuS";

    var myStore = new SequelizeStore({ db: db.sequelize })

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(cookieParser());   

var strategy = new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "http://ec2-18-223-131-128.us-east-2.compute.amazonaws.com/auth/google/callback",
    passReqToCallback: true
  },
  function (request, accessToken, refreshToken, profile, done) {
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


// ask how this should look like
app.use(session({
  key: 'session',
  secret: 'keyboardcat',
  store: myStore,
  resave: false,
  saveUninitialized: false,
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
    successRedirect: '/home',
    failureRedirect: '/'
  }
));

app.get('/login', function (req, res) {
  // res.redirect('/auth/google/')
  res.render('login', {
    user: req.user,
    page: 'login'
  });
});

app.get('/logout', (req, res) => {
  req.session.destroy(function(e){
    res.clearCookie('session');
    req.logout();
    res.redirect('/');
  });
});

function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  console.log('redirected to homepage. please log in.')
  res.redirect('/');
}

app.use(ensureAuthenticated);

// ** Routes Section **
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

app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});
 
let port = process.env.PORT || 3000;
server.listen(port);
