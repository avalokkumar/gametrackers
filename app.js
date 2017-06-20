var express = require('express'),
  route = require('./routes'),
  app = express();

app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);
  // Pass to next layer of middleware
  next();
});
app.get("/app", function(err, res) {
  if(err){
    console.log(err.message);
  }
  res.sendFile(__dirname + "/src/index.html");
});

app.get('/api', function (req, res) {
  res.send('Hello Clayman')
})
app.get('/api/games', route.getGameDetails);
app.get('/api/games/:id', route.getGameDetailsById);
app.get('/api/review', route.getReviewDetails);

app.listen(3000, function(){
  console.log('Server is running on port 3000');
});
