let express = require('express')
let app = express();
let cors = require('cors');
let port = process.env.Port || 5000;

app.use(cors());

let cetagories = require('./data/cetagory.json');
let news = require('./data/news.json');

app.get('/', (req, res) => {
  res.send('News API Running');
})

app.get('/news-catagories', (req, res) => {
  res.send(cetagories)
})

app.get('/category/:id', (req, res) => {
   let id = req.params.id;

   if(id === '08'){
      res.send(news);
   }
   else{
    let category_news = news.filter(n => n.category_id === id);
    res.send(category_news);
   }
   
})

app.get('/news', (req, res) => {
  res.send(news)
})

app.get('/news/:id', (req, res) =>{
   let id = req.params.id;
   let selectedNews = news.find(n => n._id === id);
   res.send(selectedNews)
})

app.listen(port, () => {
  console.log("Dragon News Server on POrt", port);
})