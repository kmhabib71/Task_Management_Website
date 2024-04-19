import React from "react";
import { Link } from "react-router-dom";
import TaskItem from "./TaskItem";

function TaskList({ tasks, updatedTaskList }) {
  return (
    <div>
      <div className="overflow-x-auto">
        <div className="w-full flex items-center justify-between mt-10">
          <h1 className="text-4xl font-bold my-6">Task Management</h1>
          <Link
            to="/add-task"
            className=" bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded">
            Add Task
          </Link>
        </div>
        <table className=" min-w-full bg-white shadow-xl">
          <thead>
            <tr>
              <th className="border-b-2 border-gray-300 py-4 px-6 text-left">
                Task
              </th>
              <th className="border-b-2 border-gray-300 py-4 px-6 text-left">
                Description
              </th>
              <th className="border-b-2 border-gray-300 py-4 px-6 text-left">
                Author
              </th>
              <th className="border-b-2 border-gray-300 py-4 px-6 text-left">
                Priority
              </th>
              <th className="border-b-2 border-gray-300 py-4 px-6 text-left">
                Status
              </th>
              <th className="border-b-2 border-gray-300 py-4 px-6 text-left">
                Deadline
              </th>
              <th className="border-b-2 border-gray-300 py-4 px-6 text-left">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task) => (
              <TaskItem
                key={task.id}
                task={task}
                updatedTaskList={updatedTaskList}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TaskList;
