// ? Dependencies
const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const hbs = exphbs.create({});

// ? Sets up the Express App
const app = express();
const PORT = process.env.PORT || 3001;

// TODO: Describe what the following two lines of code are doing.
// app.engine is setting up the handlebars engine for the app to use.
// app.set is setting the view engine to handlebars so that the app knows to use handlebars for rendering views.
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.static(path.join(__dirname, 'public')));
app.use(require('./controllers/dish-routes'));

// ? Starts the server to begin listening
app.listen(PORT, () => {
  console.log('Server listening on: http://localhost:' + PORT);
});
