const mongoose = require('mongoose');
const uri = "mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.6.1";

mongoose.connect(uri, 
    { useNewUrlParser: true, useUnifiedTopology: true },
    (err) => {
        if (!err) console.log('success');
        else console.log('nope' + err);  
    }
);

