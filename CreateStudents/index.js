const createMongoClient = require('../shared/mongoClient');


module.exports = async function (context, req) {
  const student = req.body;

  const { client: MongoClient, closeConnectionFn } = await createMongoClient();
  const Students = MongoClient.collection('student');
  const res = await Students.insert(student);

  closeConnectionFn();
  context.res = {
    status: 201,
    body: res,
  };
};
