const mongoose = require('mongoose');
const { checkSchema, validationResult } = require('express-validator/check');

/* Schema */
const courseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50,
    required: true
  },
  code: {
    type: String,
    minlength: 2,
    maxlength: 5,
    required: true
  },
  credits: {
  
      type: Number,
      min: 1,
      max: [3, 'A course can bring 3 credits at maximum.']
    }
}, { collection: 'courses' });

/* Model */
const Course = mongoose.model('Course', courseSchema);

module.exports = Course;
