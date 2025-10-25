import TaskColumn from "./TaskColumn";
import { SsrDoneData } from "../server-actions/SsrDoneData";

export const SsrDoneTasks = async () => {
  const tasks = await SsrDoneData();
  return <TaskColumn title={"Done"} tasks={tasks} />;
};
