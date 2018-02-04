var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var path = require("path");
var mongoose = require("mongoose");
var Dogs = require("./models/dogs");
mongoose.connect("mongodb://localhost/dogs");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", function(req, res) {
  Dogs.find(function(err, dogs) {
    if (err) {
      res.status(500).json(err);
    } else {
      res.render("index", { dogs });
    }
  });
});

app.post("/addDog", function(req, res) {
  var newDog = new Dogs({
    name: req.body.name
  });
  newDog.save(function(err, dogs) {
    if (err) {
      res.status(500).json(err);
    } else {
      res.redirect("/");
    }
  });
});

app.delete("/delete/:id", function(req, res) {
  Dogs.remove({ _id: req.params.id }, function(err, result) {
    if (err) {
      res.status(500).json(err);
    } else {
      res.redirect("/");
    }
  });
});

app.listen("3000");
