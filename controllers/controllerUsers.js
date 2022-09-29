const users = require("../models/users");
const modelUser = require("../models/users");

// Obtener usuario
const getUser = async (res, req) => {
  try {
    const user = await modelUser.findById(req.params.id);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json();
    {
      error: "Error del servidor";
    }
  }
};

// Crear usuario
const postUser = async (res, req) => {
  const user = new modelUser(req.body);
  try {
    const saveData = await user.save();
    res.satus(200).json(saveData);
  } catch (error) {
    res.status(500).json();
    {
      error: "Error del servidor";
    }
  }
};

module.exports = { getUser, postUser };
