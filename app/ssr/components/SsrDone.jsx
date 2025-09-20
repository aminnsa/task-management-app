import { DoneTasksData } from "@/libs/data/DoneData";
import TaskColumn from "./TaskColumn";
import { Suspense } from "react";
import Loading from "../Loading";

export const SsrDoneTasks = async () => {
  const data = await DoneTasksData();
  return <TaskColumn title={"Done"} tasks={data} />;
};
