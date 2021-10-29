var mongoose = require('mongoose')
var record = new mongoose.Schema({
    id:{ type:Number, required:true},
    device_id : {type: Number, required: true},
    time:{ type : Date, default: Date.now },
    data: {type: Number,required: true}

  });
 module.exports = mongoose.model('dataRecord', record);