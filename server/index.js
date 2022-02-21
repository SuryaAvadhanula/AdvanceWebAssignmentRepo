const express = require('express')
const app = express()
const port = 3000

app
  .get('/', (req, res) => {
    res.send('You are on the homepage')
  })
  .get('/aboutUs', (req, res) => {
    res.send('You are on the about us page')
  })
  .get('/contact', (req, res) => {
    res.send({
      email: "avadhans1@newpaltz.edu",
      phone: "84961553",
      
    })
  })

app.listen(port, () => {
  console.log(`Example app listening http://${app}:${port}`)
})