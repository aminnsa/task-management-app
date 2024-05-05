"use client";

import React, { useState } from "react";
import Button from "./Button";
import { APIBaseURL } from "../constants";


function NewTask() {
  const [title, setTitle] = useState(null);
  const [desc, setDesc] = useState(null);

  const handleFetchNewTask = async () => {
    if (title.length == 0 || desc.length == 0) {
      return;
    }

    const requestBody = {
      title: title,
      desc: desc,
      isDone: false,
    };

    const request = await fetch(`${APIBaseURL}`, {
      method: "POST",
      body: JSON.stringify(requestBody),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (request.ok) {
      location.reload();
    }
  };

  return (
    <div className="flex flex-col bg-gray-100 h-screen w-1/3 rounded-md  border-[0.5px] border-gray-300">
      <div className=" font-bold p-3">New Task</div>
      <div className="w-full border-b-[0.5px] h-[1px] border-gray-300 mt-1"></div>
      <div className="flex flex-col gap-8 p-4">
        <input
          className="bg-gray-300 text-gray-800 h-14 rounded-md p-3 outline-none"
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          className="bg-gray-300 text-gray-800 h-36 rounded-md p-3 outline-none "
          placeholder="Desc"
          onChange={(e) => setDesc(e.target.value)}
        />
      </div>
      <div className="flex justify-center py-36" onClick={handleFetchNewTask}>
        <Button title={"Add Task"} />
      </div>
    </div>
  );
}

export default NewTask;
