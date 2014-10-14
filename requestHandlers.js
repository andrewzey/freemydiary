var mfp = require('mfp');

var requestHandlers = {};

requestHandlers.userCheck = function(req, res){
  var username = req.param("username");
  mfp.diaryStatusCheck(username, function(status) {
    res.send('Username: '+ username + ', Diary: ' + status);
  });
};

requestHandlers.fetchData = function(req, res){
  var username = req.param("username");
  var startDate = req.param("startDate");
  var endDate = req.param("endDate");
  mfp.fetchDateRange(username, startDate, endDate, 'all', function(data){
    res.send(data);
  });
};

module.exports = requestHandlers;
