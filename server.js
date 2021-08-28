const express = require('express')
const app = express()
const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(express.static('public'))

app.get('/api', (req, res) => {
  res.json(req.body);
})

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/'));
});

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
})