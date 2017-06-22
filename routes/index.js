var games = require('../data/games-data.json'),
  gamesReview = require('../data/games-review.json'),
  _ = require('lodash');
var restAPIs = {};

restAPIs.getGameDetails = function (req, res) {
  res.send(games);
};

restAPIs.getGameDetailsById = function (req, res) {
    var gamesArr = games.data;
    var gameId = req.params.id;
    console.log('Game Id from req: '+gameId);
   // var gameDataStream = Rx.Observable.of(games);

    /*var selectedGame = games.forEach(function (game) {
        console.log('Game Id from Games array : '+ game.id);
        if(game.id == gameId){
          return game;
        }
    });*/
    var selectedGame = _.filter(gamesArr, function (game) {
      console.log(game);
      return gameId == game.id;
    });
  res.json(selectedGame);
};

restAPIs.getReviewDetails = function (req, res) {
  res.send(gamesReview);
};

restAPIs.getReviewById = function (req, res) {
  var gameReviewArray = gamesReview.data;
  var gameId = req.params.id;
  var selectedGameReview = _.filter(gameReviewArray, function (review) {
      console.log(review);
    return gameId == review.id;
  });
  res.json(selectedGameReview);
};

module.exports = restAPIs;
