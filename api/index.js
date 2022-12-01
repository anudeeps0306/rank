import  user  from './routes/auth.js';
import express from 'express';
import mongodb1 from 'mongodb';

let mongodb = mongodb1.MongoClient;


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

app.get("/auth", (req, res) => {
    
}); 

app.get("/", (req, res) => {
  res.send("Hello World!");
});


app.listen(8800, () => {
  console.log("Connected!");
});