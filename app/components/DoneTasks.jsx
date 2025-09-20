"use client";

import React, { useEffect, useState } from "react";
import { APIBaseURL } from "../constants";
import TaskColumn from "./TaskColumn";

function DoneTasks() {
  const [tasks, setTasks] = useState(null);
  const [Loading, setLoading] = useState(false);

  useEffect(() => {
    handleFetchTasks();
  }, []);

  const handleFetchTasks = async () => {
    setLoading(true);
    const response = await fetch(APIBaseURL);
    if (response.ok) {
      const responseBody = await response.json();
      setTasks(responseBody.filter((task) => task.isDone === true));
    }
    
    setLoading(false);
  };

  return <TaskColumn title={"Done"} tasks={tasks} isLoading={Loading} />;
}

export default DoneTasks;
