const express	 	= require('express');
const app 			= express();
const path 			= require('path');
const bodyParser 	= require('body-parser');
const cors 			= require('cors');
const passport 		= require('passport');
const mongoose 		= require('mongoose');
const config 		= require('./config/database');
require('dotenv').config();

const users = require('./routes/users');


// Connect To Database
mongoose.connect(config.database);
// On Connection
mongoose.connection.on('connected', () => {
  console.log('Connected to database '+config.database);
});
// On Error
mongoose.connection.on('error', (err) => {
  console.log('Database error: '+err);
});
// CORS Middleware
app.use(cors());
// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));
// Body Parser Middleware
app.use(bodyParser.json());
// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());
require('./config/passport')(passport);

app.use('/users', users);

// Index Route
app.get('/', (req, res) => {
  res.send('Invalid Endpoint');
});
// Start Server
app.listen(process.env.PORT, () => {
  console.log('Server started on port '+process.env.PORT);
});