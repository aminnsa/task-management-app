import React from "react";
import TaskColumn from "./TaskColumn";
import { SsrInprogressData } from "../server-actions/SsrInprogressData";

const SsrInProgress = async () => {
  const data = await SsrInprogressData();


  return <TaskColumn title={"In Progress"} tasks={data} />;
};

export default SsrInProgress;
