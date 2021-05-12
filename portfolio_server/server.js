const express = require('express');
const morgan = require('morgan');
const router = require('./routes/api');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path')
const mongoose = require('mongoose');



const PORT = process.env.PORT || 8080;
const app = express();

const MONGODB_URL="mongodb+srv://siphosethu:728220145Nhapho@@platformstore.al5ma.mongodb.net/<dbname>?retryWrites=true&w=majority"
//process.env.

mongoose.connect(MONGODB_URL|| 'mongodb://localhost/platformmovies', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
} , (error) => {
    if (error) {
        console.log('error!!!')
    }
    else
    console.log('new dater running!!!')
});

mongoose.connection.on('connected', () => {
    console.log('folder mongo connected!!!')
});


app.set('trust proxy', true);

app.use(bodyParser.json({ limit: "50mb" }))
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 }))



app.use(morgan('tiny'));
app.use(cors());
app.use('/portfolio', router);

if (process.env.NODE_ENV === 'production') {
    //app.use(express.static('client/build'))
   }
   
app.listen(PORT, console.log(`portfolio server runig on PORT${PORT} `));

