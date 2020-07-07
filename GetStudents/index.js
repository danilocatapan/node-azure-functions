const createMongoClient = require('../shared/mongoClient');

module.exports = async function (context, req) {
  const { client: MongoClient, closeConnectionFn } = await createMongoClient();
  const Students = MongoClient.collection('student');
  const res = await Students.find({});
  const body = await res.toArray();

  context.res = {
    status: 200,
    body
  }
};