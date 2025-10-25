'use server'
import redisClient from "@/libs/redis"

export const SsrDoneData = async () => {

  const keys = await redisClient.keys('task:*')

  if (!keys || keys.length === 0) {
    return []
  }

  const tasks = await Promise.all(
    keys.map(async (key) => {
      const hash = await redisClient.hGetAll(key)
      console.log(hash)

      return {
        id: hash.id ? Number(hash.id) : undefined,
        title: hash.title ?? '',
        desc: hash.desc ?? '',
        isDone: hash.isDone === 'true',
        createdAt: hash.createdAt ? Number(hash.createdAt) : undefined,
      }
    })
  )


  const doneTasks = tasks.filter((t) => t.isDone)

  doneTasks.sort((a, b) => (b.createdAt ?? 0) - (a.createdAt ?? 0))

  return doneTasks
}