const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");
const path = require("path");
const passport = require("passport");

const pages = require("./routes/pages");
const users = require("./routes/users");

mongoose
  .connect("mongodb://localhost/fall", { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.log("Could not connect to MongoDB"));

app.use(passport.initialize());
require("./config/passport")(passport);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(express.static(path.join(__dirname, "public")));

app.use("/", pages);
app.use("/users", users);

app.use((req, res, next) => {
  res.render("pages/notfound");
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));
