const express = require('express');
const path = require('path');
const routes = require('./routes/index');
const helpers = require('./helpers');

const PORT = 2019;
const app = express();

app.use(express.static(`${__dirname}/public`));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(express.urlencoded());
app.use((req, res, next) => {
  res.locals.h = helpers;
  next();
});
app.use('/', routes);

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`The server is running on port ${PORT}.`);
});
