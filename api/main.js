const express = require('express')
const app = express()
const port = 3000

const {local, state} = require('./officialsList.js')

app.get('/state/fl', (req, res) => {
  res.send(JSON.stringify(state));
});

app.get("/county/099", (req, res) => {
  res.send(JSON.stringify(local));
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

