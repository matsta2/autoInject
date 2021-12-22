const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
//require('dotenv').config();
// create express app
const app = express();
const cookieParser = require("cookie-parser");
const session = require("express-session");
const db = require("./config/db.config");

const bcrypt = require("bcrypt");
const saltRounds = 10;
// Setup server port
const port = process.env.PORT || 8080;
// parse requests of content-type - application/x-www-form-urlencoded
app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST", "UPDATE", "DELETE"],
    credentials: true,
  })
);

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  session({
    key: "userId",
    secret: "subscribe",
    resave: false,
    saveUninitialized: false,
    cookie: {
      expires: 60 * 60 * 24,
    },
  })
);

app.post("/api/register", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  bcrypt.hash(password, saltRounds, (err, hash) => {
    if (err) {
      console.log(err);
    }

    db.query(
      "INSERT INTO users (username, password) VALUES (?,?)",
      [username, hash],
      (err, result) => {
        console.log(err);
      }
    );
  });
});

app.get("/api/login", (req, res) => {
  if (req.session.user) {
    res.send({ loggedIn: true, user: req.session.user });
  } else {
    res.send({ loggedIn: false });
  }
});

app.post("/api/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  db.query(
    "SELECT * FROM users WHERE username = ?;",
    username,
    (err, result) => {
      if (err) {
        res.send({ err: err });
      }

      if (result.length > 0) {
        bcrypt.compare(password, result[0].password, (error, response) => {
          if (response) {
            req.session.user = result;
            console.log(req.session.user);
            res.send(result);
          } else {
            res.send({ message: "Wrong username/password combination!" });
          }
        });
      } else {
        res.send({ message: "User doesn't exist" });
      }
    }
  );
});

app.use(bodyParser.urlencoded({ extended: true }))
// parse requests of content-type - application/json
app.use(bodyParser.json())

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
