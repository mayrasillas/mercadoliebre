const express = require('express')
const bodyParser = require('body-parser')
const app = express()
app.use(express.static(__dirname + '/public'))
app.use(express.urlencoded({
  extended: true
}))

app.get('/', (req, res) => {
  res.sendFile('./home.html', { root: 'views'})
})
const port = process.env.PORT || 3000
app.listen(port , () => {
  console.log(`App listening at http://localhost:${port}`)
})