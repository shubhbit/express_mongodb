const { connectToDB } = require("./db_connection");

var collection = null;

async function getDBCollection() {
  if (!collection) {
    collection = await connectToDB();
  }
  return collection;
}

async function findStudent(student_id) {
  const db_collection = await getDBCollection();
  return db_collection.findOne({ registrationNo: student_id });
}

async function findAllStudents() {
  const db_collection = await getDBCollection();
  return db_collection.find({});
}

async function insertStudent(body) {
  const db_collection = await getDBCollection();
  const student = db_collection.insertOne(body);
  return student;
}

async function findStudentOnID(id) {
  const db_collection = await getDBCollection();
  return db_collection.findOne({ _id: id });
}

async function updateStudent(regId, body) {
  const db_collection = await getDBCollection();
  const student = db_collection.updateOne(
    { registrationNo: regId },
    { $set: body }
  );
  return student;
}

async function deleteStudent(regId) {
  const db_collection = await getDBCollection();
  const deleted = db_collection.deleteOne({ registrationNo: regId });
  return deleted;
}

module.exports = {
  findStudent,
  findAllStudents,
  insertStudent,
  findStudentOnID,
  updateStudent,
  deleteStudent,
};
