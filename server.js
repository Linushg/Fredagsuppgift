const Express = require('express');
const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectId;
const BodyParser = require('body-parser');
const uri = "mongodb+srv://ExtraUser:ExtraUser@fredagsuppgift-rak3u.azure.mongodb.net/test?retryWrites=true&w=majority";

var collection;
var app = Express();

app.use(BodyParser.json());
app.use(BodyParser.urlencoded({extended: true}));

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
console.log("Its alive");

app.get('/', (req,res) => {
    res.send('I am also alive')
})

app.get('/Fredag', (req,res) => {
    collection.find({}).toArray((err,result) => {
        res.send(result);
    })
})

app.get('/Fredag/:id', (req,res) => {
    collection.findOne({'_id': new ObjectId(req.params.id)},(err,result) => {
        res.send(result);
    })
})

var port = process.env.PORT || 4242;

app.listen(port, () => {

    client.connect(err => {
        collection = client.db("Fredag").collection("Notes");
        console.log('Connect to db');
        //client.close();
      });
      

});
