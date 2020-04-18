let mongoose = require('mongoose');

// create a model class
let contactSchema = mongoose.Schema({
    username: String,
    email: String,
    contactnumber: String
},
{
    collection: 'contacts'
});

module.exports = mongoose.model('contact', contactSchema);