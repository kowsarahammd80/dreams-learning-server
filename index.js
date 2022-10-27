let express = require('express')
let app = express();
let cors = require('cors');
let port = process.env.Port || 5000;

app.use(cors());


// let courseList = require('./data/courseList.json');
let blogList = require('./data/blogs.json');

app.get('/', (req, res) => {
  res.send('Dream Learning API Running');
})

app.get('/blogsList', (req, res) => {
  res.send(blogList)
})

app.get('/courseList', (req, res) => {
  res.send(courseList)
})

app.get('/courseList/:id', (req, res) =>{
  let id = req.params.id;
  res.send(courseList.find(item => item.id == id))
})


app.listen(port, () => {
  console.log("Dream Learning Server on POrt", port);
})