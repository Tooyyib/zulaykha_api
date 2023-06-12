require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.Port
const bodyparser = require('body-parser')



app.use(bodyparser.json)
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})