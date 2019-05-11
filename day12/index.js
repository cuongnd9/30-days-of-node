const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL.
const url = 'mongodb://localhost:27017';

// Database name.
const dbName = 'day12-30daysofcode';

const insertDocuments = function(db, callback) {
  // Get the documents collection
  const collection = db.collection('documents');
  // Insert some documents
  collection.insertMany([{ a: 1 }, { a: 2 }, { a: 3 }], function(err, result) {
    assert.equal(err, null);
    assert.equal(3, result.result.n);
    assert.equal(3, result.ops.length);
    console.log('Inserted 3 documents into the collection');
    callback(result);
  });
};

// Use connect method to connect to the ServiceWorkerRegistration.
MongoClient.connect(url, { useNewUrlParser: true }, (err, client) => {
  assert.equal(null, err);
  console.log('Connected successfully to server.');

  const db = client.db(dbName);

  insertDocuments(db, function() {
    client.close();
  });
});
