const express = require("express");
const {
  findStudent,
  findAllStudents,
  insertStudent,
  findStudentOnID,
  updateStudent,
  deleteStudent,
} = require("../database/query_db");
var bodyParser = require("body-parser");

const router = express.Router();

router.use(bodyParser.json());

router.get("/:id", async (req, res) => {
  const regID = parseInt(req.params.id);
  const students = await findStudent(regID);
  if (!students) {
    res.status(404).json({ error: `${regID} Student does not exist` });
  } else {
    res.json(students);
  }
});

router.post("/", async (req, res) => {
  var student = await insertStudent(req.body);
  student = await findStudentOnID(student.insertedId);
  res.status(201).json(student);
});

router.put("/:id", async (req, res) => {
  var student = await updateStudent(parseInt(req.params.id), req.body);
  student = await findStudent(parseInt(req.params.id));
  res.json(student);
});

router.delete("/:id", async (req, res) => {
  var deleted = await deleteStudent(parseInt(req.params.id));
  if (deleted.deletedCount == 1) {
    res.status(204).send();
  } else {
    res.status(404).json({ error: "student not found!" });
  }
});

router.get("/", async (req, res) => {
  res.json(await findAllStudents());
});

module.exports = {
  router,
};
