const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const port = 3000

app.use(bodyParser.json())

app.get('/:base64str', (req, res) => {
  const { base64str } = req.params
  const decoded = decodeURI(base64str)
  res.send(`<img src="${decoded}" />`)
})

app.listen(port, () => {
  console.log(`Server is up on port ${port} ✨`)
})
