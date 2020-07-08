const createMongoClient = require('../shared/mongoClient');

module.exports = async function (context, req) {
  const { client: MongoClient, closeConnectionFn } = await createMongoClient();
  const Students = MongoClient.collection('students');
  const res = await Students.find({});
  const body = await res.toArray();

  closeConnectionFn();
  
  context.res = {
    status: 200,
    body
  }
};