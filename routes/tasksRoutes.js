const {
  getAllTasks,
  getTask,
  postTask,
  updateTask,
  deleteTask,
} = require("../controllers/controllerTasks");

const express = require("express");
const route = express.Router();

route.get("/tasks", getAllTasks);
route.get("/tasks/:id", getTask);
route.post("/tasks", postTask);
route.put("/tasks/:id", updateTask);
route.delete("/tasks/:id", deleteTask);

module.exports = route;
