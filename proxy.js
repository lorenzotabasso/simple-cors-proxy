const express = require("express");
const request = require("request");

const app = express();
const port = process.env.PORT || 3001;

// Putting CORS header on every request.
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", process.env.ORIGIN || "*");
  next();
});

app.get("/", (req, res) => {
  // handling every request on "/"
  const url = req.query["url"];
  console.log(url);
  request(url).pipe(res);
});

app.listen(port, () =>
  // Start message
  console.log(`Listening on port ${port}`)
);