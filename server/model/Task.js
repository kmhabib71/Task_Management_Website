const mongoose = require("mongoose");

const TasksSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    priority: {
      type: String,
      required: true,
      enum: ["High", "Medium", "Low"],
      default: "Medium",
    },
    status: {
      type: String,
      required: true,
      enum: ["To Do", "In progress", "Finished"],
      default: "To Do",
    },
    deadline: {
      type: Date,
    },
    user: {
      type: String,
    },
  },
  { timestamps: true }
);

const Task = mongoose.model("Task", TasksSchema);
module.exports = Task;
