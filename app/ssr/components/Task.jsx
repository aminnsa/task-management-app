import Link from "next/link";
import React from "react";

function Task({ title, desc, id, isDone, createdAt }) {
  return (
    <Link href={`/ssr/ssrTask/${id}`}>
      <div className="bg-gray-700 rounded-lg p-4 cursor-pointer flex flex-col">
        <div className="flex items-center gap-2 mb-5">
          <div
            className={`
            h-2 w-2 rounded-full
            ${isDone === true ? "bg-green-300" : "bg-red-300"}`}
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
    </Link>
  );
}

export default Task;
