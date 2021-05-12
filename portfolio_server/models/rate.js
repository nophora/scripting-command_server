const mongoose = require('mongoose');



const Rate = mongoose.Schema;

const rateSchema = new Rate({
    divice:String
});



const rate = mongoose.model('rate', rateSchema);
module.exports = rate;
