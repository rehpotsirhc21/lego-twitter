const express = require("express");
const routes = require("./controllers");
const session = require('express-session')
// import sequelize connection
const sequelize = require("./config/connection");
const SequlizeStore = require('connect-session-sequelize')(session.Store)
const app = express();
const PORT = process.env.PORT || 3001;

const sess = {
    secret: 'Super secret secret',
    cokkie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequlizeStore({
        db: sequelize
    })
}
app.use(session(sess))

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
//need this to have access to the folder
app.use('/uploads', express.static('uploads'));
app.use(require('./controllers/'));

app.use(routes);

// sync sequelize models to the database, then turn on the server

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
  });
});