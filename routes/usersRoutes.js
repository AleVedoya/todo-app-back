const { getUser, postUser } = require("../controllers/controllerUsers");

const express = require("express");
const route = express.Router();

route.get("/users/getMe/:id", getUser);
route.post("/users", postUser);

module.exports = route;
