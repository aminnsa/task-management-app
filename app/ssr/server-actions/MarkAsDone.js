"use server";
import { APIBaseURL } from "@/app/constants";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const MarkTaskAsDoneAction = async (id) => {
  const requestBody = { isDone: true };

  const response = await fetch(`${APIBaseURL}/${id}`, {
    method: "PUT",
    body: JSON.stringify(requestBody),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error(`An error has accured with status code ${response.status}`);
  }
  revalidatePath("/ssr");
  revalidatePath(`/ssr/ssrTask/${id}`);
  redirect(`/ssr`);
};
