const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const programSchema = new Schema({
  name: {
    type: String,
    required: true,
    minlength: 6,
    maxlength: 20,
  },
  initials: {
    type: String,
    maxlength: 3,
    required: true
  }
}, { collection: 'studyPrograms' });

const Program = new mongoose.model('Program', programSchema);

module.exports = Program;
