const mongo = require('mongodb');

const MongoClient = mongo.MongoClient;
const MONGO_URL = "mongodb+srv://root:Raushan70@completecoding.djxle2f.mongodb.net/?appName=CompleteCoding";

let _db;

const mongoConnect = (Callback) =>{
    MongoClient.connect(MONGO_URL)
    .then(client =>{   
        Callback();
        _db = client.db('airbnb');
    }).catch(err =>{
        console.log('Error while connecting to Mongo',err);
    });
}

const getDB = () =>{
    if(!_db){
        throw new Error('Mongo not connected');
    }
    return _db;
}

exports.mongoConnect = mongoConnect;
exports.getDB = getDB;