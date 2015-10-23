var nodemailer = require("nodemailer");
var method = Mailer.prototype;

function Mailer() {
  this.smtpTransport = initTransport();
}

method.sendMail = function(subject, body, callback) {
  this.smtpTransport.sendMail({
     from:    "No-Reply <no-replya@example.com>", // sender address
     to:      "John Doe <jdoe@example.com>", // comma separated list of receivers
     subject: subject, // Subject line
     html:    body // plaintext body
  }, callback);
};

/** Helper Functions **/
function initTransport() {
  return nodemailer.createTransport("SMTP", {
     service: "Gmail",
     auth: {
         user: "",
         pass: ""
     }
  });
}

module.exports = Mailer;
