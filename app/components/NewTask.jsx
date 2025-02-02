"use client";

import React, { useState } from "react";
import Button from "./Button";
import { APIBaseURL } from "../constants";
import ErrorMessage from "./ErrorMessage";
import Input from "./Input";
import cx from 'classnames'

function NewTask() {
  const [title, setTitle] = useState(null);
  const [desc, setDesc] = useState(null);
  const [loading, setLoading] = useState(false);
  const [titleError, setTitleError] = useState(null);
  const [descError, setDescError] = useState(null);

  const handleFetchNewTask = async () => {
    setTitleError(null);
    setDescError(null);

    let hasError = false;

    if (!title || title.length === 0) {
      setTitleError("Title is required!");
      hasError = true;
    }

    if (!desc || desc.length === 0) {
      setDescError("Description is required!");
      hasError = true;
    }

    if (hasError) {
      return;
    }

    setLoading(true);

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

    setLoading(false);
  };

  return (
    <div className="flex flex-col bg-gray-100 h-screen w-1/3 rounded-md  border-[0.5px] border-gray-300">
      <div className=" font-bold p-3">New Task</div>
      <div className="w-full border-b-[0.5px] h-[1px] border-gray-300 mt-1"></div>
      <div className="flex flex-col gap-8 p-4">
        <Input
          onChange={(e) => setTitle(e.target.value)}
          placeHolder={"Title"}
          error={titleError}
        />
        <div className="flex flex-col gap-2">
          <textarea
            className={cx("bg-gray-300 text-gray-800 h-36 rounded-md p-3 outline-none", descError && 'border border-1 border-red-500')}
            placeholder="Desc"
            onChange={(e) => setDesc(e.target.value)}
          />
          {descError && <ErrorMessage message={descError} />}
        </div>
      </div>
      <div className="flex justify-center mt-36" onClick={handleFetchNewTask}>
        <Button title={"Add Task"} isLoading={loading} />
      </div>
    </div>
  );
}

export default NewTask;
