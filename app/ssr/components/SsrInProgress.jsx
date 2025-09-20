import { SsrInprogressData } from "@/libs/data/InProgressData";
import { notFound } from "next/navigation";
import React from "react";
import TaskColumn from "./TaskColumn";

const SsrInProgress = async () => {
  const data = await SsrInprogressData();

  if (!data) {
    notFound();
  }
  return <TaskColumn title={"In Progress"} tasks={data} />;
};

export default SsrInProgress;
