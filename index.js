const bodyParser = require('body-parser');
const express = require('express')
const mongoose = require("mongoose");
const app = express()
const port = 3000
require('./models/dbConfig');
const postsRouter = require('./routes/postsController');

// mongoose.set('strictQuery', true);

app.use(bodyParser.json())
app.use('/posts', postsRouter)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))