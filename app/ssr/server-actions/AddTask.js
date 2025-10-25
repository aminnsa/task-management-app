"use server";
import redisClient from "@/libs/redis";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const AddTaskAction = async (FormData) => {
  const Title = FormData.get("title");
  const Desc = FormData.get("desc");

  const id = Math.floor(Math.random() * 1000)

  const requestBody = {
    title: Title,
    desc: Desc,
    isDone: 'false',
    id:id,
    createdAt: Date.now()
  };

  if(requestBody.title && requestBody.desc ) {

    await redisClient.hSet(
      `task:${id}`,
      {
        desc: requestBody.desc,
        title: requestBody.title,
        id: String(requestBody.id),
        isDone: requestBody.isDone,
        createdAt: String(requestBody.createdAt)
      }
    )
    console.log('hash set')
  }

  console.log('empty Data')



  revalidatePath("/ssr");
  redirect("/ssr");
};
