"use client";

import React, { useEffect, useState } from "react";
import { APIBaseURL } from "../constants";
import TaskColumn from "./TaskColumn";

function DoneTasks() {
  const [tasks, setTasks] = useState(null);

  useEffect(() => {
    handleFetchTasks();
  }, []);

  const handleFetchTasks = async () => {
    const response = await fetch(APIBaseURL);
    if (response.ok) {
      const responseBody = await response.json();
      setTasks(responseBody.filter((task) => task.isDone === true));
    }
  };

  return tasks ? (
    <TaskColumn title={"Done"} tasks={tasks} />
  ) : (
    <p>Loading...</p>
  );
}

export default DoneTasks;
