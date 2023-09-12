const express = require("express");
const morgan = require("morgan");
const projectRouter = require("./routes/projectRouter");
const userRouter = require("./routes/userRouter");

const hostname = "localhost";
const port = 2000;

const app = express();
app.use(morgan("dev"));
app.use(express.json());

app.use("/projects", projectRouter);
app.use("/users", userRouter);

app.use(express.static(__dirname + "/public"));

app.use((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.end("<html><body><h1>This is an Express Server</h1></body></html>");
});
app.listen(port, hostname, () => {
  console.log(` Server running at ${hostname}: ${port}`);
});
