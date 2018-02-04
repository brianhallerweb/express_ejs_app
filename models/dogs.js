var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var dogsSchema = Schema({
  name: String
});

var Dogs = mongoose.model("Dogs", dogsSchema);

module.exports = Dogs;
