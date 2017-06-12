var games = require('../data/games-data.json'),
  gamesReview = require('../data/games-review.json');
var restAPIs = {};

restAPIs.getGameDetails = function (req, res) {
  res.send(games);
};

restAPIs.getReviewDetails = function (req, res) {
  res.send(gamesReview);
}
module.exports = restAPIs;
