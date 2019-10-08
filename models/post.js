var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var postSchema = new Schema({
    title: {
      type: String,
    //   required: true
    },
    address: {
      type: String, //temporary
    //   required: true
    },
    user: []
  });
  
  module.exports = mongoose.model("Post", postSchema);