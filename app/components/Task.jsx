'use client'


import { useRouter } from 'next/navigation'
import React from 'react'

function Task({title, desc, id, isDone, createdAt}) {
  
  const router = useRouter()

  
  return (
    <div className='bg-gray-700 rounded-lg p-2 cursor-pointer' onClick={() => router.push(`/task/${id}`)} >
      <p className='text-xs text-gray-500 mb-5'>{new Date(createdAt).toLocaleString()}</p>
      <p className='font-bold text-white text-md'>{title}</p>
      <p className='text-sm text-gray-400'>{desc}</p>
    </div>
  )
}

export default Task