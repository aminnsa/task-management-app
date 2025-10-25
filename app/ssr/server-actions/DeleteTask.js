"use server";
import redisClient from "@/libs/redis";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const DeleteTaskAction = async (id) => {
 redisClient.del(`task:${id}`)
  revalidatePath("/ssr");
  redirect("/ssr");
};
