import Header from "@/app/components/Header";
import { APIBaseURL } from "@/app/constants";

import React from "react";
import {
  DeleteTaskAction,
  MarkTaskAsDoneAction,
  MarkTaskAsUnDoneAction,
} from "../../server-actions";
import { revalidatePath } from "next/cache";

async function TaskDetailPage({ params }) {
  revalidatePath(`/ssr/ssrTask/${params.id}`);

  const response = await fetch(`${APIBaseURL}/${params.id}`);

  if (!response.ok) {
    return null;
  }
  const responseBody = await response.json();

  return (
    <div>
      <Header />

      <div>
        {responseBody && (
          <div className="p-10">
            <p className="text-sm text-gray-500 mb-6">
              {new Date(responseBody.createdAt).toLocaleString()}
            </p>
            <p className="font-semibold text-lg">{responseBody.title}</p>
            <p>{responseBody.desc}</p>

            <div className="flex mt-10 gap-3">
              {!responseBody.isDone && (
                <form action={MarkTaskAsDoneAction.bind(null, responseBody.id)}>
                  <button
                    type="submit"
                    className="p-3 rounded-md text-white cursor-pointer min-w-20 bg-black"
                  >
                    Mark as done
                  </button>
                </form>
              )}
              {responseBody.isDone && (
                <form
                  action={MarkTaskAsUnDoneAction.bind(null, responseBody.id)}
                >
                  <button
                    type="submit"
                    className="p-3 rounded-md text-white cursor-pointer min-w-20 bg-black"
                  >
                    Mark as undone
                  </button>
                </form>
              )}
              <form action={DeleteTaskAction.bind(null, responseBody.id)}>
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
