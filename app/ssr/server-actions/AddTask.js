"use server";
import { APIBaseURL } from "@/app/constants";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const AddTaskAction = async (FormData) => {
  const Title = FormData.get("title");
  const Desc = FormData.get("desc");

  const requestBody = {
    title: Title,
    desc: Desc,
    isDone: false,
  };
  const response = await fetch(`${APIBaseURL}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(requestBody),
  });

  if (!response.ok) {
    throw new Error(`An error has accured with status code ${response.status}`);
  }
  revalidatePath("/ssr");
  redirect("/ssr");
};
