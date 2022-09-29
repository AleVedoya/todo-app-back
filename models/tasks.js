const mongoose = require("mongoose");

const task = new mongoose.Schema(
  {
    id: Number,
    description: String,
    completed: Boolean,
    userId: Number,
    createdAt: Date,
  },
);

module.exports = mongoose.model('tasks', task)