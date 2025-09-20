"use server";
import { APIBaseURL } from "@/app/constants";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const DeleteTaskAction = async (id) => {
  const response = await fetch(`${APIBaseURL}/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error(
      `An error has accured with status code ${PostTaskData.status}`
    );
  }
  revalidatePath("/ssr");
  redirect("/ssr");
};
