import Header from "@/app/components/Header";
import { APIBaseURL } from "@/app/constants";

import React from "react";
import {
  DeleteTaskAction,
  MarkTaskAsDoneAction,
  MarkTaskAsUnDoneAction,
} from "../../server-actions";
import { revalidatePath } from "next/cache";
import redisClient from "@/libs/redis";

async function TaskDetailPage({ params }) {
  revalidatePath(`/ssr/ssrTask/${params.id}`);

const task = await redisClient.hGetAll(`task:${params.id}`)

  return (
    <div>
      <Header />

      <div>
        {task && (
          <div className="p-10">
            <p className="text-sm text-gray-500 mb-6">
              {new Date(Number(task.createdAt)).toLocaleString()}
            </p>
            <p className="font-semibold text-lg">{task.title}</p>
            <p>{task.desc}</p>

            <div className="flex mt-10 gap-3">
              {task.isDone === 'false' && (
                <form action={MarkTaskAsDoneAction.bind(null, task.id)}>
                  <button
                    type="submit"
                    className="p-3 rounded-md text-white cursor-pointer min-w-20 bg-black"
                  >
                    Mark as done
                  </button>
                </form>
              )}
              {task.isDone === 'true' && (
                <form
                  action={MarkTaskAsUnDoneAction.bind(null, task.id)}
                >
                  <button
                    type="submit"
                    className="p-3 rounded-md text-white cursor-pointer min-w-20 bg-black"
                  >
                    Mark as undone
                  </button>
                </form>
              )}
              <form action={DeleteTaskAction.bind(null, task.id)}>
                <button
                  type="submit"
                  className="p-3 rounded-md text-white cursor-pointer min-w-20 bg-red-500"
                >
                  Delete task
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default TaskDetailPage;
