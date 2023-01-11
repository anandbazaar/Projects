const express = require('express')
const cors = require('cors')
const connect = require('./db');
const { urlRouter } = require('./routes/url.routes');
require('dotenv').config();

const app = express()
const port = process.env.port || 3050

app.use(cors())
app.use(express.json({limit: "2MB"}));
app.use(urlRouter)

connect();

  
  app.listen(port, () => {
    console.log(`Server is listening on localhost:${port}`);
  });
