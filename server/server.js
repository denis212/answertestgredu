const mongoose = require('mongoose');
const express = require('express');
var cors = require('cors');
const bodyParser = require('body-parser');
const logger = require('morgan');

const app = express();
app.use(cors());
const router = express.Router();

const dbRoute = 'mongodb://theafanasevo:test1234@ds033449.mlab.com:33449/hexainst';
mongoose.connect(dbRoute, { useNewUrlParser: true });

let db = mongoose.connection;

db.once('open', () => console.log('connected to the mongodb database'));
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger('dev'));

router.get('/', (req, res) => {});

const PORT = process.env.PORT || 3003;
app.listen(PORT, () => console.log(`Server listening on ${PORT}...`));
