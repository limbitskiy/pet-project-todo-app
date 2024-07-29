const { MongoClient } = require("mongodb");

const DB_NAME = process.env.MONGODB_NAME;
const USERNAME = process.env.MONGO_INITDB_ROOT_USERNAME;
const PASSWORD = process.env.MONGO_INITDB_ROOT_PASSWORD;

let dbConnection;

module.exports = {
  connectToDb: (cb) => {
    MongoClient.connect(`mongodb://${USERNAME}:${PASSWORD}@mongodb`)
      .then((client) => {
        dbConnection = client.db(DB_NAME);
        return cb();
      })
      .catch((err) => {
        return cb(err);
      });
  },
  getDb: () => dbConnection,
};
