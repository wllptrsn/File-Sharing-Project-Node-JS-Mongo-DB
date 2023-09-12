const express = require("express");
const projectRouter = express.Router();

projectRouter
  .route("/")
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
  })
  .get((req, res) => {
    res.end("All of the projects will appear here");
  })
  .post((req, res) => {
    res.end(
      `...Creating Project: ${req.body.name} with description: ${req.body.description}`
    );
  })
  .put((req, res) => {
    res.end(
      `...Editing Project: ${req.body.name} with description: ${req.body.description}`
    );
  })
  .delete((req, res) => {
    res.end(
      `...Are you sure you want to delete the Project: ${req.body.name} with description: ${req.body.description}`
    );
  });

module.exports = projectRouter;
