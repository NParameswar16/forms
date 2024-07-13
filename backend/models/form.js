const mongoose = require('mongoose');

const formSchema = new mongoose.Schema({
  name: String,
  email: String,
  contactNo: String,
  requirements: String,
  message: String,
  consent: Boolean,
});

module.exports = mongoose.model('Form', formSchema);

 //module.exports = Form;
