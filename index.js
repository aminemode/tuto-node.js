const express = require('express')
const app = express()
const port = 3000
const postsRouter = require('./routes/postsController');
require('./models/dbConfig');

app.use('/', postsRouter);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))