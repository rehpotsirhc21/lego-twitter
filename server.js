const express = require("express");
const routes = require("./controllers");
const session = require('express-session')
const exphbs = require('express-handlebars');
const path = require('path')
const helpers = require('./utils/helpers');
// import sequelize connection
const sequelize = require("./config/connection");
const SequlizeStore = require('connect-session-sequelize')(session.Store)
const app = express();
const PORT = process.env.PORT || 3001;

const sess = {
    secret: 'e405adbb-3d7e-4df5-a00d-5177e36a889b',
    cokkie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequlizeStore({
        db: sequelize
    })
}
const hbs = exphbs.create({helpers});
app.use(session(sess))

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
//need this to have access to the folder
app.use('/uploads', express.static('uploads'));
app.use(session(sess))
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(routes);

// sync sequelize models to the database, then turn on the server

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
  });
});
