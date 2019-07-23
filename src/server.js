const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const knex = require("knex");
const request = require("request");

// connect to database
const db = knex({
  client: "pg",
  connection: {
    host: "127.0.0.1",
    user: "",
    password: "",
    database: "imagelabels"
  }
});

// import middleware
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.post("/submit", (req, res) => {
  const { photoid, tags } = req.body;
  console.log(req.body);
  db("results")
    .returning("*")
    .insert({
      photoid: photoid,
      tags: tags
    })
    .then(response => res.json(response));
});

app.get("/image/random", (req, res) => {
  const random = Math.floor(Math.random() * 5000);
  request(
    {
      url: `https://headbox.com/api/spaces/${random}`,
      headers: {
        Accept: "application/vnd.headbox.v1",
        "Content-Type": "application/json",
        "redbox-token":
          "e0d5a12108445430927bf236671e0ed21c7e73fe42fd67425a8bef427685a8485b01cba3ad2aca0b5771a69201eaa00007175e1dbc47b410027385375c25742c"
      }
    },
    (error, response, body) => {
      if (error || response.statusCode !== 200) {
        return res.status(500).json({ type: "error", message: "error" });
      }
      res.json(JSON.parse(response.body));
    }
  );
});

// run backend
http: app.listen(3001, () => {
  console.log("app is running on port 3001");
});
