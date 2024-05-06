"use client";

import classNames from "classnames";
import { useRouter } from "next/navigation";
import React from "react";
import cx from "classnames";

function Task({ title, desc, id, isDone, createdAt }) {
  const router = useRouter();

  return (
    <div
      className="bg-gray-700 rounded-lg p-4 cursor-pointer flex flex-col"
      onClick={() => router.push(`/task/${id}`)}
    >
      <div className="flex items-center gap-2 mb-5">
        <div
          className={cx(
            "h-2 w-2 rounded-full",
            isDone ? "bg-green-300" : "bg-red-300"
          )}
        ></div>

       
          <p className="text-xs text-gray-500 ">
            {new Date(createdAt).toLocaleString()}
          </p>
        
      </div>
      <div>
        <p className="font-bold text-white text-md">{title}</p>
        <p className="text-sm text-gray-400">{desc}</p>
      </div>
    </div>
  );
}

export default Task;
