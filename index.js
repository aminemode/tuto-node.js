const express = require('express')
const app = express()
const port = 3000
require('./models/dbConfig');
const postsRouter = require('./routes/postsController');

app.use('/', postsRouter);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))