import React from "react";
import Task from "./Task";
import Loading from "@/app/components/Loading";

function TaskColumn({ title, tasks, isLoading }) {
  return (
    <div className="flex flex-col bg-gray-100 h-screen w-1/3 rounded-md  border-[0.5px] border-gray-300">
      <div className=" font-bold p-3">{title}</div>
      <div className="w-full border-b-[0.5px] h-[1px] border-gray-300 mt-1"></div>
      <div className="p-4 flex flex-col gap-2">
        {isLoading && <Loading />}
        {tasks &&
          tasks.map((task, i) => {
            return (
              <Task
                key={task.id}
                title={task.title}
                desc={task.desc}
                createdAt={task.createdAt}
                id={task.id}
                isDone={task.isDone}
              />
            );
          })}
      </div>
    </div>
  );
}

export default TaskColumn;
