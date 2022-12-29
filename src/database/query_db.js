const { connectToDB } = require("./db_connection");

async function findStudent(student_id) {
  const collection = await connectToDB();
  console.log(student_id);
  console.log(typeof student_id);
  return collection.findOne({ registrationNo: student_id });
}

module.exports = {
  findStudent,
};
