const express = require("express");
const { findStudent } = require("../database/query_db");

const router = express.Router();

router.get("/:id", async (req, res) => {
  const regID = parseInt(req.params.id);
  const students = await findStudent(regID);
  if (!students) {
    res.status(404).json({ error: `${regID} Student does not exist` });
  } else {
    res.json(students);
  }
});

module.exports = {
  router,
};
