const mongoose = require('mongoose');
const { programSchema } = require('./program');

const Schema = mongoose.Schema;

const studentSchema = new Schema({
  _id: new Schema.Types.ObjectId,
  number: {
    type: String,
    required: true,
    min: [6, 'Create a longer student number.'],
    max: 20,
    unique: true
  },
  name: {
    type: String,
    required: true,
    minlength: [3, 'Name is too short!'],
    maxlength: 50
  },
  enrolledAt: {
    type: Date,
    default: Date.now
  },
  credits: {
    type: Number,
    min: 2,
    max: [20, 'No more credits allowed!'],
  },
  program: {
    type: programSchema,
    required: true
  }
}, { collection: 'students' });

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;

