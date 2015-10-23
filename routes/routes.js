var Mailer          = require('../models/Mailer.js');
var MailerInstance  = new Mailer();

var appRouter = function(app) {
  app.get("/mail", function(req, res) {

    MailerInstance.sendMail(req.body.subject, req.body.data, function(error, response){
       if(error){
           res.send(error);
       }else{
           res.send("Mail sent: " + response.message);
       }
    });
  });
}

module.exports = appRouter;
