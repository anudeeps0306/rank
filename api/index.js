var express = require("express");
var mongodb = require("mongodb").MongoClient;

var url = "mongodb://localhost:27017/";

const app = express();

app.use(express.json());

mongodb.connect(url, (err, client) => {
    if(err) console.log(err);
    let conn = client.db("client");

    conn.createCollection("users", (err, res) => {
        if(err) console.log(err);
        console.log("Collection created");
    });

});

app.get("/", (req, res) => {
  res.send("Hello World!");
});


app.listen(8800, () => {
  console.log("Connected!");
});