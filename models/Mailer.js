var nodemailer  = require("nodemailer");
var CONFIG      = require("../config.js");
var method      = Mailer.prototype;

function Mailer() {
  this.smtpTransport = initTransport();
}

method.sendMail = function(subject, body, callback) {
  if(!this.smtpTransport){
      callback("An error occurred with SMTP server.");
      return false;
  }

  this.smtpTransport.sendMail({
     from:    CONFIG.emails.from, // sender address
     to:      CONFIG.emails.to, // comma separated list of receivers
     subject: subject, // Subject line
     html:    body // plaintext body
  }, callback);
};

/** Helper Functions **/
function initTransport() {
  return nodemailer.createTransport("SMTP", {
     service: CONFIG.smtp.service,
     auth: {
         user: CONFIG.smtp.user,
         pass: CONFIG.smtp.pass
     }
  });
}

module.exports = {
  getInstance: function() {
      return new Mailer();
  }
};
