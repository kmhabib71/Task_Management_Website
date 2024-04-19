import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
function TaskForm() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [status, setStatus] = useState("To Do");
  const [deadline, setDeadline] = useState("");
  const [user, setUser] = useState("");
  console.log(
    " Form value :",
    name,
    description,
    priority,
    status,
    deadline,
    user
  );
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (name) {
      axios
        .post("http://localhost:5000/api/items/Task", {
          name,
          description,
          priority,
          status,
          deadline,
          user,
        })
        .then((response) => {
          console.log("TaskFrom Response: ", response.data);
          toast.success("Task Added Successfully");
        })
        .catch((error) => {
          console.log("TaskForm Error :", error);
          toast.error("Error Creating Task");
        });
    } else {
      toast.warning("Task name can't be empty. ");
    }
  };
  return (
    <div>
      <h1 className="text-2xl font-semibold text-center mt-8">Create Task</h1>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-bold">
            Name:{" "}
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border border-gray-300 py-2 rounded-md focus:outline-none focus:border-indigo-500"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-gray-700 font-bold">
            Description:{" "}
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full border border-gray-300 py-2 rounded-md focus:outline-none focus:border-indigo-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="priority" className="block text-gray-700 font-bold">
            Priority:
          </label>
          <select
            id="priority"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            className="w-full border border-gray-300 py-2 rounded-md focus:outline-none focus:border-indigo-500">
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="status" className="block text-gray-700 font-bold">
            Status:
          </label>
          <select
            id="c"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="w-full border border-gray-300 py-2 rounded-md focus:outline-none focus:border-indigo-500">
            <option value="To Do">To Do</option>
            <option value="In progress">In progress</option>
            <option value="Finished">Finished</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="deadline" className="block text-gray-700 font-bold">
            Deadline:
          </label>
          <input
            type="date"
            name="deadline"
            id="deadline"
            value={deadline}
            onChange={(e) => setDeadline(e.target.value)}
            className="w-full border border-gray-300 py-2 rounded-md focus:outline-none focus:border-indigo-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-bold">
            User:
          </label>
          <input
            type="text"
            name="user"
            id="user"
            value={user}
            onChange={(e) => setUser(e.target.value)}
            className="w-full border border-gray-300 py-2 rounded-md focus:outline-none focus:border-indigo-500"
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 mb-4">
          Create Task
        </button>
      </form>
    </div>
  );
}

export default TaskForm;
