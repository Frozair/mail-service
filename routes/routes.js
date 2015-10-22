var appRouter = function(app) {
  app.get("/mail", function(req, res) {
      res.send("Hello World");
  });
}

module.exports = appRouter;
