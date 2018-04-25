/**
 * Module dependencies.
 */
const express = require('express');
const compression = require('compression');
const session = require('express-session');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const logger = require('morgan');
const chalk = require('chalk');
const errorHandler = require('errorhandler');
const lusca = require('lusca');
const dotenv = require('dotenv');
const MongoStore = require('connect-mongo')(session);
const flash = require('express-flash');
const path = require('path');
const mongoose = require('mongoose');
const passport = require('passport');
const expressValidator = require('express-validator');
const expressStatusMonitor = require('express-status-monitor');
const fileUpload = require('express-fileupload');
const sass = require('node-sass-middleware');
const multer = require('multer');
const csv = require('csv-express');
//const smartTable = require('angular-smart-table');
// const router = express.Router(); not used... at this time
//const upload = multer({ dest: path.join(__dirname, 'uploads') });
// const upload = multer({ dest: process.env.AA_STORAGE }); 

var storage =   multer.diskStorage({  
  destination: function (req, file, callback) { 
    callback(null, './uploads');  

  },  
  filename: function (req, file, callback) {  
    callback(null, file.originalname);  
  }  
});
const upload = multer({ storage : storage }).single('myfile');

// const request = require('request');
// const fs = require('fs');

/**
 * Load environment variables from .env file, where API keys and passwords are configured.
 */
//dotenv.load({ path: '.env.localhost' });
dotenv.load({ path: '.env.develop' });

/**
 * Controllers (route handlers).
 */
const homeController = require('./controllers/home');
const userController = require('./controllers/user');
const usersController = require('./controllers/users');
const apiController = require('./controllers/api');
const contactController = require('./controllers/contact');

/* OtterDocs Paths */
const dashboardController = require('./controllers/dashboard');
const clientController = require('./controllers/client');
const clientsController = require('./controllers/clients');
const buyersController = require('./controllers/buyers');
const buyerController = require('./controllers/buyer');
const sellerController = require('./controllers/seller');

/* OtterDocs Admin Controllers */
const documentsController = require("./controllers/admin/documents");
const dropdownsController = require("./controllers/admin/dropdowns");
const exportController = require("./controllers/admin/export");

/**
 * API keys and Passport configuration.
 */
const passportConfig = require('./config/passport');

/**
 * Create Express server.
 */
const app = express();

/* Manage Dates */
//app.locals.moment = require('moment');
app.locals.moment = require('moment-timezone');
//app.locals.tz = require('moment-timezone');
//const tzOffset = new Date().toLocaleTimeString('en-us',{timeZoneName:'short'}).split(' ')[2];
//app.locals.fullcalendar = require('fullcalendar');

/**
 * Connect to MongoDB.
 */
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || process.env.MONGOLAB_URI);
mongoose.connection.on('error', (err) => {
  console.error(err);
  console.log('%s MongoDB connection error. Please make sure MongoDB is running.', chalk.red('✗'));
  process.exit();
});

/**
 * Express configuration.
 */
app.set('host', process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0');
app.set('port', process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(expressStatusMonitor());
app.use(compression());
app.use(sass({
  src: path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'public')
}));
app.use(logger('dev'));
app.use(methodOverride('X-HTTP-Method-Override'));
app.use(methodOverride('_method'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressValidator());
app.use(session({
  resave: true,
  saveUninitialized: true,
  secret: process.env.SESSION_SECRET,
  store: new MongoStore({
    url: process.env.MONGODB_URI || process.env.MONGOLAB_URI,
    autoReconnect: true,
    clear_interval: 3600
  })
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
app.use((req, res, next) => {
  if (req.path === '/api/upload') {
    next();
  } else if (req.path === '/uploadjavatpoint') {
    next();
  } else {
    lusca.csrf()(req, res, next);
  }
});
app.use(lusca.xframe('SAMEORIGIN'));
app.use(lusca.xssProtection(true));
app.use((req, res, next) => {
  res.locals.user = req.user;
  next();
});
app.use((req, res, next) => {
  // After successful login, redirect back to the intended page
  if (!req.user &&
      req.path !== '/login' &&
      req.path !== '/signup' &&
      !req.path.match(/^\/auth/) &&
      !req.path.match(/\./)) {
    req.session.returnTo = req.path;
  } else if (req.user &&
      req.path === '/account') {
    req.session.returnTo = req.path;
  }
  next();
});
app.use(express.static(path.join(__dirname, 'public'), { maxAge: 31557600000 }));

app.use(methodOverride(function (req, res) {
  if (req.body && typeof req.body === 'object' && '_method' in req.body) {
    var method = req.body._method;
    delete req.body._method;
    console.log(method);
    return method;
  }
}));

/**
 * Primary app routes.
 */
app.get('/', homeController.index);
app.get('/login', userController.getLogin);
app.post('/login', userController.postLogin);
app.get('/logout', userController.logout);
app.get('/forgot', userController.getForgot);
app.post('/forgot', userController.postForgot);
app.get('/reset/:token', userController.getReset);
app.post('/reset/:token', userController.postReset);
app.get('/signup', userController.getSignup);
app.post('/signup', userController.postSignup);
app.get('/contact', contactController.getContact);
app.post('/contact', contactController.postContact);
app.get('/account', passportConfig.isAuthenticated, userController.getAccount);
app.post('/account/profile', passportConfig.isAuthenticated, userController.postUpdateProfile);
app.post('/account/password', passportConfig.isAuthenticated, userController.postUpdatePassword);
app.post('/account/delete', passportConfig.isAuthenticated, userController.postDeleteAccount);
app.get('/account/unlink/:provider', passportConfig.isAuthenticated, userController.getOauthUnlink);
app.get('/users', passportConfig.isAuthenticated, usersController.getUsers);

app.get('/dashboard', passportConfig.isAuthenticated, dashboardController.getDashboard);

// Client(s) related routes
app.get('/client', passportConfig.isAuthenticated, clientController.getClient)
   .get('/client/:client', passportConfig.isAuthenticated, clientController.getClient)
   .post('/client', passportConfig.isAuthenticated, clientController.postClient)
   .put('/client/:client', passportConfig.isAuthenticated, clientController.putClient);
app.get('/clients', passportConfig.isAuthenticated, clientsController.getClients)
   .get('/clients.json/', passportConfig.isAuthenticated, clientsController.getClientsJSON)
   .get('/clients/:client', passportConfig.isAuthenticated, clientsController.deleteClient);

// Buyer(s) related routes
app.get('/buyer', passportConfig.isAuthenticated, buyerController.getBuyer)
   .get('/buyer/:buyer', passportConfig.isAuthenticated, buyerController.getBuyer)
   .post('/buyer', passportConfig.isAuthenticated, buyerController.postBuyer)
   .put('/buyer/:buyer', passportConfig.isAuthenticated, buyerController.putBuyer);
app.get('/buyers', passportConfig.isAuthenticated, buyersController.getBuyers)
   .get('/buyers/:buyer', passportConfig.isAuthenticated, buyersController.deleteBuyer);

// app.post('/upload', passportConfig.isAuthenticated, buyerController.pushDropbox)

// Upload documents

app.post('/uploadjavatpoint',function(req, res){
  
  upload(req,res,function(err) {  
      if(err) {  
          return res.end("Error uploading file.");  
      }  
      console.log(res.body);
      res.end("File is uploaded successfully!");  
  });  
});  


// app.use(fileUpload());
// app.post('/upload', function(req, res) {
//   if (!req.files)
//     return res.status(400).send('No files were uploaded.');
 
//   // The name of the input field (i.e. "srcdoc") is used to retrieve the uploaded file
//   let srcdoc = req.files.srcdoc;
//   // const srclocation = srcdoc;
//   console.log(req.files.srcdoc.name);

//   // Use the mv() method to place the file somewhere on your server
//   // srcdoc.mv('c:\temp.png', function(err) {
//   //   if (err)
//   //     return res.status(500).send(err);
//   // });

//   const content = fs.readFileSync(req.files.srcdoc.name);

//   // const access_token = "RWsH3v07wC8AAAAAAAABvVZCWzK18WLGP-Tx6_QwkuQCOdIH7R0nlqrjplLEy3K3";

//   // options = {
//   //   method: "POST",
//   //   url: 'https://content.dropboxapi.com/2/files/upload',
//   //   headers: {
//   //     "Content-Type": "application/octet-stream",
//   //     "Authorization": "Bearer " + access_token,
//   //     "Dropbox-API-Arg": "{\"path\": \"/monkey/"+srcfile+"\",\"mode\": \"overwrite\",\"autorename\": true,\"mute\": false}",
//   //   },
//   //   body:content
//   // };

//   // request(options, function(err, res, body){
//   //   // console.log("Err : " + err);
//   //   // console.log("res : " + res);
//   //   console.log("body : " + body);
//   // })

 
//   // Use the mv() method to place the file somewhere on your server
//   // srcdoc.mv('/somewhere/on/your/server/filename.jpg', function(err) {
//     // if (err)
//       // return res.status(500).send(err);
 
//   res.end('File uploaded!');
// });



// Seller(s) related Routes
app.get('/seller', passportConfig.isAuthenticated, sellerController.getSeller);
app.post('/seller', passportConfig.isAuthenticated, sellerController.postSeller);

// Administration Routes
app.get('/admin/documents', passportConfig.isAuthenticated, documentsController.getDocuments)
   .get('/admin/documents/:document', passportConfig.isAuthenticated, documentsController.getDocuments)
   .post('/admin/documents', passportConfig.isAuthenticated, documentsController.postDocuments)
   .put('/admin/documents/:document', passportConfig.isAuthenticated, documentsController.putDocuments)
   .get('/admin/document/:document', passportConfig.isAuthenticated, documentsController.deleteDocument);

app.get('/admin/dropdowns', passportConfig.isAuthenticated, dropdownsController.getDropdowns)
   .get('/admin/dropdowns/:dropdown', passportConfig.isAuthenticated, dropdownsController.getDropdowns)
   .post('/admin/dropdowns', passportConfig.isAuthenticated, dropdownsController.postDropdowns)
   .put('/admin/dropdowns/:dropdown', passportConfig.isAuthenticated, dropdownsController.putDropdowns)
   .get('/admin/dropdown/:dropdown', passportConfig.isAuthenticated, dropdownsController.deleteDropdown);

app.get('/admin/export', passportConfig.isAuthenticated, exportController.getExport)
   .get('/admin/exportclients', passportConfig.isAuthenticated, exportController.getExportclients)
   .get('/admin/exportbuyers', passportConfig.isAuthenticated, exportController.getExportbuyers);



/**
 * API examples routes.
 */
// app.get('/api', apiController.getApi);
// app.get('/api/lastfm', apiController.getLastfm);
// app.get('/api/nyt', apiController.getNewYorkTimes);
// app.get('/api/aviary', apiController.getAviary);
// app.get('/api/steam', passportConfig.isAuthenticated, passportConfig.isAuthorized, apiController.getSteam);
// app.get('/api/stripe', apiController.getStripe);
// app.post('/api/stripe', apiController.postStripe);
// app.get('/api/scraping', apiController.getScraping);
// app.get('/api/twilio', apiController.getTwilio);
// app.post('/api/twilio', apiController.postTwilio);
// app.get('/api/clockwork', apiController.getClockwork);
// app.post('/api/clockwork', apiController.postClockwork);
// app.get('/api/foursquare', passportConfig.isAuthenticated, passportConfig.isAuthorized, apiController.getFoursquare);
// app.get('/api/tumblr', passportConfig.isAuthenticated, passportConfig.isAuthorized, apiController.getTumblr);
// app.get('/api/facebook', passportConfig.isAuthenticated, passportConfig.isAuthorized, apiController.getFacebook);
// app.get('/api/github', passportConfig.isAuthenticated, passportConfig.isAuthorized, apiController.getGithub);
// app.get('/api/twitter', passportConfig.isAuthenticated, passportConfig.isAuthorized, apiController.getTwitter);
// app.post('/api/twitter', passportConfig.isAuthenticated, passportConfig.isAuthorized, apiController.postTwitter);
// app.get('/api/linkedin', passportConfig.isAuthenticated, passportConfig.isAuthorized, apiController.getLinkedin);
// app.get('/api/instagram', passportConfig.isAuthenticated, passportConfig.isAuthorized, apiController.getInstagram);
// app.get('/api/paypal', apiController.getPayPal);
// app.get('/api/paypal/success', apiController.getPayPalSuccess);
// app.get('/api/paypal/cancel', apiController.getPayPalCancel);
// app.get('/api/lob', apiController.getLob);
// app.get('/api/upload', apiController.getFileUpload);
// app.post('/api/upload', upload.single('myFile'), apiController.postFileUpload);
// app.get('/api/pinterest', passportConfig.isAuthenticated, passportConfig.isAuthorized, apiController.getPinterest);
// app.post('/api/pinterest', passportConfig.isAuthenticated, passportConfig.isAuthorized, apiController.postPinterest);
// app.get('/api/google-maps', apiController.getGoogleMaps);

/**
 * OAuth authentication routes. (Sign in)
 */
// app.get('/auth/instagram', passport.authenticate('instagram'));
// app.get('/auth/instagram/callback', passport.authenticate('instagram', { failureRedirect: '/login' }), (req, res) => {
//   res.redirect(req.session.returnTo || '/');
// });
// app.get('/auth/facebook', passport.authenticate('facebook', { scope: ['email', 'public_profile'] }));
// app.get('/auth/facebook/callback', passport.authenticate('facebook', { failureRedirect: '/login' }), (req, res) => {
//   res.redirect(req.session.returnTo || '/');
// });
// app.get('/auth/github', passport.authenticate('github'));
// app.get('/auth/github/callback', passport.authenticate('github', { failureRedirect: '/login' }), (req, res) => {
//   res.redirect(req.session.returnTo || '/');
// });
// app.get('/auth/google', passport.authenticate('google', { scope: 'profile email' }));
// app.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: '/login' }), (req, res) => {
//   res.redirect(req.session.returnTo || '/');
// });
// app.get('/auth/twitter', passport.authenticate('twitter'));
// app.get('/auth/twitter/callback', passport.authenticate('twitter', { failureRedirect: '/login' }), (req, res) => {
//   res.redirect(req.session.returnTo || '/');
// });
// app.get('/auth/linkedin', passport.authenticate('linkedin', { state: 'SOME STATE' }));
// app.get('/auth/linkedin/callback', passport.authenticate('linkedin', { failureRedirect: '/login' }), (req, res) => {
//   res.redirect(req.session.returnTo || '/');
// });

/**
 * OAuth authorization routes. (API examples)
 */
// app.get('/auth/foursquare', passport.authorize('foursquare'));
// app.get('/auth/foursquare/callback', passport.authorize('foursquare', { failureRedirect: '/api' }), (req, res) => {
//   res.redirect('/api/foursquare');
// });
// app.get('/auth/tumblr', passport.authorize('tumblr'));
// app.get('/auth/tumblr/callback', passport.authorize('tumblr', { failureRedirect: '/api' }), (req, res) => {
//   res.redirect('/api/tumblr');
// });
// app.get('/auth/steam', passport.authorize('openid', { state: 'SOME STATE' }));
// app.get('/auth/steam/callback', passport.authorize('openid', { failureRedirect: '/login' }), (req, res) => {
//   res.redirect(req.session.returnTo || '/');
// });
// app.get('/auth/pinterest', passport.authorize('pinterest', { scope: 'read_public write_public' }));
// app.get('/auth/pinterest/callback', passport.authorize('pinterest', { failureRedirect: '/login' }), (req, res) => {
//   res.redirect('/api/pinterest');
// });

/**
 * Error Handler.
 */
app.use(errorHandler());

/**
 * Start Express server.
 */
app.listen(app.get('port'), () => {
  console.log('%s App is running at http://localhost:%d in %s mode', chalk.green('✓'), app.get('port'), app.get('env'));
  console.log('  Press CTRL-C to stop\n');
});

module.exports = app;
