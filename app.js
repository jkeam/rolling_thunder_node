var app = require('./server.js').createServer();

//routes
var routes = require('./routes.js');
var challenges = require('./challenges_routes.js');
var leaderboard = require('./leaderboard_routes.js');
var content = require('./content_routes.js');
var members = require('./members_routes.js');
app.get('/', routes.getIndex);

//challenges
app.get('/challenges.:format?', challenges.getChallenges);
app.get('/challenges/recent.:format?', challenges.getRecentChallenges);
app.get('/challenges/:id.:format?', challenges.getChallenges);
app.get('/challenges/:id/registrants.:format?', challenges.getRegistrants);
app.get('/challenges/:id/results.:format?', challenges.getResults);

//leaderboard
app.get('/leaderboard.:format?', leaderboard.getLeaderboard);
app.get('/leaderboard_this_month.:format?', leaderboard.getLeaderboardThisMonth);
app.get('/leaderboard_this_year.:format?', leaderboard.getLeaderboardThisYear);
app.get('/leaderboard_all_time.:format?', leaderboard.getLeaderboardAllTime);

//content
app.get('/notifications.:format?', content.getNotifications);
app.get('/home.:format?', content.getHome);

//members
app.get('/members.:format?', members.getIndex);
app.get('/members/order_by_active.:format?', members.getOrderByActive);
app.get('/members/order_by_name.:format?', members.getOrderByName);
app.get('/members/order_by_win.:format?', members.getOrderByWin);
app.get('/members/:id/past_challenges.:format?', members.getPastChallenges);
app.get('/members/:id/active_challenges.:format?', members.getActiveChallenges);
app.get('/members/search.:format?', members.getSearch);

//app.use(routes.error);

//start server
var port = 3000;
app.listen(port, function() {
  console.log("Server listening on %d in %s mode", port, app.settings.env);
});

//docs
//http://fabianosoriani.wordpress.com/2011/08/15/express-api-on-node-js-with-mysql-auth/
//http://www.franz-enzenhofer.com/jade
//https://github.com/visionmedia/jade#readme
//http://expressjs.com/guide.html
//http://dailyjs.com/2010/11/15/node-tutorial-3/
