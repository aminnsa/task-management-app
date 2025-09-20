import React from "react";
import { AddTaskAction } from "../server-actions/AddTask";

const SsrNewTask = () => {
  return (
    <form
      action={AddTaskAction}
      className="flex flex-col bg-gray-100 h-screen w-1/3 rounded-md  border-[0.5px] border-gray-300"
    >
      <div className=" font-bold p-3">New Task</div>
      <div className="w-full border-b-[0.5px] h-[1px] border-gray-300 mt-1"></div>
      <div className="flex flex-col gap-8 p-4">
        <input
          placeholder="Title"
          name="title"
          className="bg-gray-300 text-gray-800 h-14 rounded-md p-3 outline-none"
        />
        <div className="flex flex-col gap-2">
          <textarea
            className="bg-gray-300 text-gray-800 h-36 rounded-md p-3 outline-none"
            placeholder="Desc"
            name="desc"
          />
        </div>
      </div>
      <div className="flex justify-center mt-36">
        <button
          type="submit"
          className="p-3 rounded-md text-white bg-black cursor-pointer min-w-20"
        >
          Add Task
        </button>
      </div>
    </form>
  );
};

export default SsrNewTask;
