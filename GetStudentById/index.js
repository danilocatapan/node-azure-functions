const { ObjectID } = require('mongodb');
const createMongoClient = require('../shared/mongoClient');

module.exports = async function (context, req) {
  const { id } = req.params;

  const { client: MongoClient, closeConnectionFn } = await createMongoClient();
  const Students = MongoClient.collection('students');
  const res = await Students.findOne({ _id: ObjectID(id) });

  context.res = {
    status: 200,
    body: res
  }
};
