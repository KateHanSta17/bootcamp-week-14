const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
// Initializes Sequelize with session store
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const { strict } = require('assert');
const routes = require('./controllers');
const sequelize = require('./config/connection');
const helpers = require('./utils/helpers');

const app = express();
const PORT = process.env.PORT || 3001;

// Sets up session and connect to our Sequelize db
const sess = {
  secret: 'Super secret secret',
  // TODO: Add a comment describing the purpose of adding a cookies object to our options to our session object
  // The cookies object is used to configure the session ID cookie that is sent to the client when a session is created.
  cookie: {
    // TODO: Add a comment describing the functionality of the maxAge attribute
    // The maxAge attribute is used to set the maximum age of the session ID cookie in milliseconds. In this case, the cookie will expire after 1 hour.
    maxAge: 60 * 60 * 1000,
    // TODO: Add a comment describing the functionality of the httpOnly attribute
    // The httpOnly attribute is used to prevent client-side JavaScript from accessing the session ID cookie. This helps prevent cross-site scripting (XSS) attacks. 
    httpOnly: true,
    // TODO: Add a comment describing the functionality of the secure attribute
    // The secure attribute is used to ensure that the session ID cookie is only sent over HTTPS. This helps protect the session ID cookie from being intercepted by attackers.
    secure: false,
    // TODO: Add a comment describing the functionality of the sameSite attribute
    // The sameSite attribute is used to prevent the session ID cookie from being sent in cross-site requests. This helps prevent cross-site request forgery (CSRF) attacks.
    sameSite: 'strict',
  },
  resave: false,
  saveUninitialized: true,
  // Sets up session store
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

const hbs = exphbs.create({ helpers });

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () =>
    console.log(
      `\nServer running on port ${PORT}. Visit http://localhost:${PORT} and create an account!`
    )
  );
});
