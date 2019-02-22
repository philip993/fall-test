const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");
const path = require("path");
const passport = require("passport");
const cookierParser = require("cookie-parser");
const session = require("express-session");
const moment = require("moment");
const methodOverride = require("method-override");

const pages = require("./routes/pages");
const users = require("./routes/users");
const posts = require("./routes/posts");

mongoose.Promise = global.Promise;
mongoose.connect(
  "mongodb+srv://rest-shop-901:brando902part12@node-rest-api-aulzl.mongodb.net/fall?retryWrites=true",
  {
    useNewUrlParser: true
  }
);

require("./config/passport")(passport);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookierParser());

app.use(
  session({
    secret: "secret",
    saveUninitialized: true,
    resave: true
  })
);

app.use(passport.initialize());
app.use(passport.session());
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(methodOverride("_method"));

app.use(express.static(path.join(__dirname, "public")));

app.use("/", pages);
app.use("/users", users);
app.use("/posts", posts);

app.use((req, res, next) => {
  res.render("pages/notfound");
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));
