const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
//require('dotenv').config();
// create express app
const app = express();
// Setup server port
const port = process.env.PORT || 8080;
// parse requests of content-type - application/x-www-form-urlencoded
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
// parse requests of content-type - application/json
app.use(bodyParser.json())
// define a root route
// const { auth, requiresAuth } = require('express-openid-connect');
// app.use(
//   auth({
//     authRequired: false,
//     auth0Logout : true,
//     issuerBaseURL: process.env.ISSUER_BASE_URL,
//     clientID: process.env.CLIENT_ID,
//     baseURL: process.env.BASE_URL,
//     secret: process.env.SECRET,
//   })
// );

// app.get('/', (req, res) => {
//   res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
// });
// app.get('/profile', requiresAuth(), (req, res) => {
//   res.send(JSON.stringify(req.oidc.user));
// });
// Requireroutes
const detaleRoutes = require('./src/routes/detale.route')
const automobilisRoutes = require('./src/routes/automobilis.route')
const servisasRoutes = require('./src/routes/servisas.route')
const userRouter = require("./src/routes/user.route")
// using as middleware
app.use('/api/v1/detale', detaleRoutes)
app.use('/api/v1/automobilis', automobilisRoutes)
app.use('/api/v1/servisas', servisasRoutes)
app.use("/api/users", userRouter)
// listen for requests
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
