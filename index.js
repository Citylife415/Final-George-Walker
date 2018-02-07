const express= require('express')
const app= express()

app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {
  res.sendfile(__dirname + '/index.html')
})

app.get('/contact', (req, res) => {
  res.sendfile(__dirname + '/contact.html')
})

app.get('/aboutme', (req, res) => {
  res.sendfile(__dirname + '/aboutme.html')
})

app.listen(3000, () => console.log('LIVE on 3000'))
