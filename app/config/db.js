import mongoose from 'mongoose';
import constants from './constants';

mongoose.connect(constants.DB_URL)
mongoose.set('useCreateIndex', true);
mongoose.set('useNewUrlParser', true)
mongoose.set('debug', true); // debug mode on
mongoose.Promise = global.Promise;

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log('we are connected');
});