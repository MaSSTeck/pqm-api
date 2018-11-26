var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');
mongoose.Promise = global.Promise;
mongoose.set('debug', true); // debug mode on

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log('we are connected');
//   var kittySchema = new mongoose.Schema({
//     name: String
//   });

//   kittySchema.methods.speak = function () {
//     var greeting = this.name
//       ? "Meow name is " + this.name
//       : "I don't have a name";
//     console.log(greeting);
//   }

//   var Kitten = mongoose.model('Kitten', kittySchema);

//   var silence = new Kitten({ name: 'Silence' });
//   console.log(silence.name); // 'Silence'

//   var fluffy = new Kitten({ name: 'fly' });
//   fluffy.speak();

//   fluffy.save(function (err, fluffy) {
//     if (err) return console.error(err);
//     fluffy.speak();
//   });

//   Kitten.find(function (err, kittens) {
//     if (err) return console.error(err);
//     console.log(kittens);
//   })

});