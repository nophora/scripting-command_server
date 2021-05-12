const mongoose = require('mongoose');



const Views = mongoose.Schema;

const viewsSchema = new Views({
    port:String,
});



const views = mongoose.model('views', viewsSchema);
module.exports = views;
