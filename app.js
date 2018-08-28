var express          = require( 'express' )
  , app              = express()
  , server           = require( 'http' ).createServer( app ) 
  , passport         = require( 'passport' )
  , util             = require( 'util' )
  , bodyParser       = require( 'body-parser' )
  , cookieParser     = require( 'cookie-parser' )
  , session          = require( 'express-session' )
  , GoogleStrategy   = require( 'passport-google-oauth2' ).Strategy;

// Google Api Setup
var GOOGLE_CLIENT_ID      = "521837067682-ojjmkmgmnpquk89i899gphv2dvub3t46.apps.googleusercontent.com"
  , GOOGLE_CLIENT_SECRET  = "KFfcGOvPDt1MR82t7AzKRB8_";

// Serializing and Deserializing
passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(obj, done) {
  done(null, obj);
});


passport.use(new GoogleStrategy({
    clientID:     GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:3000",
    passReqToCallback   : true
  },
  function(request, accessToken, refreshToken, profile, done) {
    done(null, extractProfile(profile))
  
    process.nextTick(function () {
      
      // associate the Google account with a user record in database,
      // and return that user
      return done(null, profile);
      
    });
  }
));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use( express.static(__dirname + '/public'));
app.use( cookieParser()); 
app.use( bodyParser.json());
app.use( bodyParser.urlencoded({
	extended: true
}));

app.use( session({ 
	secret: 'secret_code',
	// store:  new Store({
	// 	host: '127.0.0.1',
	// 	port: 6379
  // }),
  cookie: { maxAge: 60000 },
	proxy:  true,
    resave: true,
    saveUninitialized: true
}));
app.use( passport.initialize());
app.use( passport.session());



app.get('/', function(req, res){
  res.render('index', { user: req.user });
});

app.get('/account', ensureAuthenticated, function(req, res){
  res.render('account', { user: req.user });
});

app.get('/login', function(req, res){
  res.render('login', { user: req.user });
});


app.get('/auth/google', passport.authenticate('google', { scope: [
       'https://www.googleapis.com/auth/plus.login',
       'https://www.googleapis.com/auth/plus.profile.emails.read'] 
}));


app.get( '/auth/google/callback', 
    	passport.authenticate( 'google', { 
    		successRedirect: '/',
    		failureRedirect: '/login'
}));

app.get('/logout', function(req, res){
  console.log('successfully logged out:')
  req.logout();
  res.redirect('/');
});

server.listen( 3000 );


function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) { return next(); }
  console.log('redirected back to login. please log in again.')
  res.redirect('/login');
}