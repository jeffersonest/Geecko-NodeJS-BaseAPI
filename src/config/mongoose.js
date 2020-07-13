const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE, {useNewUrlParser: true, useFindAndModify: false, useUnifiedTopology: true});

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function() {
  console.log('Connected!');
});

module.exports = mongoose;