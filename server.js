const express = require('express')
const app = express()
const port = 3000
var cors = require('cors')

app.use(cors())

app.get('/api/product', (req, res) => {
  res.json({
    name: "Омлет по-итальянски",
    description: "Лучший выбор для завтрака"
  })
})

app.get('/', (req, res) => {
    res.send('Less 19 Server (Back-end)')
  })

app.listen(port, () => {
  console.log(`Less 19 http://localhost:${port}`)
})