var mfp = require('mfp');
var User = require('./user-model');

var requestHandlers = {};

requestHandlers.userCheck = function(req, res){
  var username = req.param("username");
  mfp.diaryStatusCheck(username, function(status) {
    res.send({'username': username,'status': status});
  });
};

requestHandlers.fetchData = function(req, res){
  var username = req.param("username");
  var startDate = req.param("startDate");
  var endDate = req.param("endDate");
  mfp.fetchDateRange(username, startDate, endDate, 'all', function(data){
    res.send(data);

    User.findOne({username: username}, function (err, user) {
      if (err) throw err;
      if (user === null) {
        //save new user in database
        var newUser = new User({ 'username': username, 'downloads': 1 });
        newUser.save(function (err) { if (err) throw err; });
      } else {
        //increment download counter in existing document
        user.downloads = user.downloads + 1;
        user.save(function (err) { if (err) throw err; });
      }
    });
    
  });
};

module.exports = requestHandlers;
