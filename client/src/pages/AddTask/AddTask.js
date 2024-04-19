import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import TaskForm from "../../components/TaskForm/TaskForm";

function AddTask() {
  return (
    <div>
      <Header />
      <TaskForm />
      <Footer />
    </div>
  );
}

export default AddTask;
