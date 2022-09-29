const modelTasks = require("../models/tasks");

// Listar todas las tareas
const getAllTasks = async (req, res) => {
  try {
    const tasks = await modelTasks.find();
    res.status(200).json(tasks);
  } catch (error) {
    res.status(401).json({
      error: "Requiere autorización",
    });
  }
};

// Obtener una tarea
const getTask = async (req, res) => {
  try {
    const task = await modelTasks.findById(req.params.id);
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json();
    {
      error: "Error del servidor";
    }
  }
};

// Crear una tarea nueva
const postTask = async (req, res) => {
  const newTask = new modelTasks(req.body);
  try {
    const saveData = await newTask.save();
    res.status(201).json(saveData);
  } catch (error) {
    res.status(500).json();
    {
      error: "Error del servidor";
    }
  }
};

// Actualizar una tarea existente
const updateTask = async (req, res) => {
  try {
    const getDataTask = await modelTasks.findByIdAndUpdate(
      req.params.id,
      req.body
    );
    res.status(200).json(getDataTask);
  } catch (error) {
    res.status(500).json();
    {
      error: "Error del servidor";
    }
  }
};

// Eliminar una tarea
const deleteTask = async (req, res) => {
  try {
    const deleteDataTask = await modelTasks.findByIdAndDelete(
      req.params.id,
      req.body
    );
    res.status(200).json(deleteDataTask);
  } catch (error) {
    res.status(500).json();
    {
      error: "Error del servidor";
    }
  }
};

module.exports = { getAllTasks, getTask, postTask, updateTask, deleteTask };
