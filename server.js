const express = require('express');
const bodyParser = require('body-parser');
// create express app
const app = express();
// Setup server port
const port = process.env.PORT || 5000
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
// parse requests of content-type - application/json
app.use(bodyParser.json())
// define a root route
app.get('/', (req, res) => {
  res.send("Hello World");
});
// Requireroutes
const detaleRoutes = require('./src/routes/detale.route')
const automobilisRoutes = require('./src/routes/automobilis.route')
const servisasRoutes = require('./src/routes/servisas.route')
// using as middleware
app.use('/api/v1/detale', detaleRoutes)
app.use('/api/v1/automobilis', automobilisRoutes)
app.use('/api/v1/servisas', servisasRoutes)
// listen for requests
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});