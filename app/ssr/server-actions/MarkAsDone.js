"use server";
import { APIBaseURL } from "@/app/constants";
import redisClient from "@/libs/redis";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const MarkTaskAsDoneAction = async (id) => {
  redisClient.hSet(`task:${id}`, {isDone:'true'})

  revalidatePath("/ssr");
  revalidatePath(`/ssr/ssrTask/${id}`);
  redirect(`/ssr`);
};
