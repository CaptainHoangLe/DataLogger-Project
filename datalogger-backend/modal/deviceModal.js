var mongoose = require('mongoose')
var device = new mongoose.Schema({
    id:{ type:Number, required:true},
    device_name : {type: String, required: true},
    location:{ type : String, required: true },
  });
 module.exports = mongoose.model('deviceRecord', device);