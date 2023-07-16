const express = require('express')
require('dotenv').config()
const app = express()
const port = process.env.PORT || 5050;
const path = require('path')


app.use(express.static(path.join(__dirname, 'public')))



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})