import Header from "./components/Header";
import InProgressTasks from "./components/InProgressTasks";
import DoneTasks from "./components/doneTasks";
import NewTask from "./components/NewTask";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="flex w-full justify-between p-4 gap-4  ">
        <NewTask />
        <InProgressTasks />
        <DoneTasks />
      </div>
    </div>
  );
}
