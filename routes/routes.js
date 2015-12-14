var CONFIG = require("../config.js");

var appRouter = function(app) {
  var Mailer = require('../models/Mailer.js').getInstance();

  app.use(middleware);

  app.post("/mail", function(req, res) {
    Mailer.sendMail(req.body.subject, req.body.data, function(error, response){
      if(error){
        res.status(404);
        res.send(error);
      }else{
        res.status(200);
        res.send("Mail sent: " + response.message);
      }
    });
  });

}

/** Helper Methods **/
function middleware(req, res, next) {
  if(!isAuthorizedRequest(req)) {
    res.status(401);
    res.send("Unauthorized!")
  }
  else {
    next();
  }
}

function isAuthorizedRequest(req) {
  var valid = (CONFIG.auth.apikey === req.headers.apikey);

  if(valid){
    var agent = req.headers['user-agent'];
    var len   = CONFIG.auth.agents.length;
    valid     = false;

    for(var i = 0; i < len; i++){
      if(CONFIG.auth.agents[i] === agent){
        valid = true;
        break;
      }
    }
  }

  return valid;
}
/** End Helper Methods **/

module.exports = appRouter;
