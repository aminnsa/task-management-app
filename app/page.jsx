import Image from "next/image";
import Header from "./components/Header";
import TaskColumn from "./components/TaskColumn";
import InProgressTasks from "./components/InProgressTasks";
import DoneTasks from "./components/doneTasks";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="flex w-full justify-between p-4 gap-4  ">
        <TaskColumn title={"New task"}  />
        <InProgressTasks />
        <DoneTasks />
      </div>
    </div>
  );
}
