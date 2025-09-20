"use client";

import Button from "@/app/components/Button";
import Header from "@/app/components/Header";
import { APIBaseURL } from "@/app/constants";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

function TaskDetailPage({ params }) {
  const router = useRouter();
  const [task, setTask] = useState(null);
  const [Loading, setLoading] = useState(false);
  const [deleteTaskLoading, setDeleteTaskLoading] = useState(false);

  useEffect(() => {
    handleFetchTask();
  }, []);

  const handleFetchTask = async () => {
    setLoading(true);

    const response = await fetch(`${APIBaseURL}/${params.id}`);

    if (response.ok) {
      const responseBody = await response.json();
      setTask(responseBody);
    }

    setLoading(false);
  };

  const handleMarkAsDone = async () => {
    setLoading(true);

    const requestBody = { isDone: true };

    const response = await fetch(`${APIBaseURL}/${task.id}`, {
      method: "PUT",
      body: JSON.stringify(requestBody),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      router.push(`/`);
    }
    setLoading(false);
  };

  const handleMarkAsUnDone = async () => {
    setLoading(true);

    const requestBody = { isDone: false };

    const response = await fetch(`${APIBaseURL}/${task.id}`, {
      method: "PUT",
      body: JSON.stringify(requestBody),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      router.push(`/`);
    }
    setLoading(false);
  };

  const handleDeleteTask = async () => {
    setDeleteTaskLoading(true);

    const response = await fetch(`${APIBaseURL}/${task.id}`, {
      method: "DELETE",
    });

    setDeleteTaskLoading(false);

    if (response.ok) {
      router.push("/");
    }
  };

  return (
    <div>
      <Header />

      <div>
        {task && (
          <div className="p-10">
            <p className="text-sm text-gray-500 mb-6">
              {new Date(task.createdAt).toLocaleString()}
            </p>
            <p className="font-semibold text-lg">{task.title}</p>
            <p>{task.desc}</p>

            <div
              className="flex mt-10 gap-3
            "
            >
              {!task.isDone && (
                <Button
                  onClick={handleMarkAsDone}
                  title={"Mark as done"}
                  isLoading={Loading}
                />
              )}
              {task.isDone && (
                <Button
                  onClick={handleMarkAsUnDone}
                  title={"Mark as undone"}
                  isLoading={Loading}
                />
              )}
              <Button
                title={"Delete task"}
                color="bg-red-500"
                isLoading={deleteTaskLoading}
                onClick={handleDeleteTask}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default TaskDetailPage;
