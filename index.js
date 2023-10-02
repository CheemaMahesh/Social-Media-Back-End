const express = require("express");
const app = express();
const db = require("./config/mongoose");
const cookieParser = require("cookie-parser");
const passport = require("passport");
const session = require("express-session");

const port = 8000;
const MongoStore = require("connect-mongo");
// const passport=require('passport');
const passportLocal=require('./config/passport-local-strategy');

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.static('./assets'));


app.set("view engine", "ejs");
app.set("views", "./views");

app.use(cookieParser());

app.use(
  session({
    name: "employeeReviewSystem",
    // TODO change the secret before Deployment
    secret: "empRS",
    saveUninitialized: false,
    resave: false,
    cookie: {
      maxAge: 1000 * 60 * 100,
    },
    store: MongoStore.create({
      mongoUrl: "mongodb://127.0.0.1/EmployeeReviewSystem",
      autoRemove: "disabled",
    }),
  })
);

app.use(passport.initialize());
app.use(passport.session());

// Assuming that `passport.setAuthenticatedUser` is a middleware function
app.use(passport.setAuthenticatedUser);

// Import and use your routes
// const routes = require("./routes");
app.use("/", require('./routs'));

app.listen(port, function (err) {
  if (err) {
    console.log("error in listening", err);
    return;
  }
  console.log("App is running on port", port);
});
