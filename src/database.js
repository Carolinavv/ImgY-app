const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/yes_db', {
    useNewUrlParser: true
}).then( db => console.log('db is connected')).catch(err => console.err(err));