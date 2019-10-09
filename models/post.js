var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var postSchema = new Schema({
    name: {
      type: String,
    //   required: true
    },
    area: {
      type: String,
    },
    state: {
      type: String,
    },
    address: {
      type: String, 
    //   required: true
    },
    user: []
  });
  
  module.exports = mongoose.model("Post", postSchema);