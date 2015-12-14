var config = {};

config.smtp = {
  service: "",
  user: "",
  pass: ""
}

config.emails = {
  from: "",
  to: ""
}

config.auth = {
  apikey: "",
  agents: []
};

if(config.auth.apikey === ""){
  console.log("config.js is not setup!")
  process.exit(1);
}

module.exports = config;
