var mfp = require('mfp');

var requestHandlers = {};

requestHandlers.userCheck = function(req, res){
  var username = req.body.username;
  mfp.diaryStatusCheck(username, function(status) {
    res.send(status);
  });
};

module.exports = requestHandlers;