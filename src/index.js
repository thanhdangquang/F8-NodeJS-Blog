const path = require('path');
const express = require('express');
const app = express();
const port = 3000;
const morgan = require('morgan');
const { engine } = require('express-handlebars');

const route = require('./routes/index');
const db = require('./config/db');

// Connect to DB
db.connectDB();

// Static files
app.use(express.static(path.join(__dirname, 'public')));

// HTTP logger
app.use(morgan('dev'));

// Body parsers phải đặt TRƯỚC routes
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Template engine setup
app.engine(
   'hbs',
   engine({
      extname: '.hbs',
   }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

// Routes
route(app);

app.listen(port, () => {
   console.log(`App listening on port ${port}`);
});
