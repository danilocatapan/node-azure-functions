const { ObjectID } = require('mongodb');
const createMongoClient = require('../shared/mongoClient');

module.exports = async function (context, req) {
  const { id } = req.params;
  const student = req.body;

  const { client: MongoClient, closeConnectionFn } = await createMongoClient();
  const Students = MongoClient.collection('student');
  const res = await Students.findOneAndUpdate(
    { 
      _id: ObjectID(id) 
    },
    { 
      $set: student
    }
  );

  closeConnectionFn();
  context.res = {
    status: 200,
    body: res
  };
};
