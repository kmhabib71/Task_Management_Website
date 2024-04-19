import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import TaskList from "../../components/TaskList/TaskList";
import axios from "axios";
function Home() {
  const [tasks, setTaskes] = useState([
    // {
    //   id: 1,
    //   name: "Organize conference agenda",
    //   Description: "Details of Conference agenda",
    //   user: "Eric Wallace",
    //   priority: "High",
    //   status: "Finished",
    //   deadline: "2024-04-30",
    // },
    // {
    //   id: 2,
    //   name: "Prepare conference content",
    //   Description: "Details of conference content",
    //   user: "Lucas Fadel",
    //   priority: "Medium",
    //   status: "Finished",
    //   deadline: "2024-05-05",
    // },
    // {
    //   id: 3,
    //   name: "Reserve rooms and catering",
    //   Description: "Reserve rooms and catering",
    //   user: "Lucas Fadel",
    //   priority: "Low",
    //   status: "In progress",
    //   deadline: "2023-05-10",
    // },
  ]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/items/Task?sort=deadline&order=asc")
      .then((response) => {
        setTaskes(response.data);
        console.log(response.data);
      });
  }, []);
  const updatedTaskList = (deletedTaskId) => {
    const updatedTask = tasks.filter((task) => task._id !== deletedTaskId);
    setTaskes(updatedTask);
    console.log("updatedTask :", updatedTask);
  };
  return (
    <div className="bg-gray-100">
      <Header />
      <div className="h-screen flex flex-col items-center justify-start">
        <TaskList tasks={tasks} updatedTaskList={updatedTaskList} />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
