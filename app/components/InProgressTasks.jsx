"use client"

import React, { useEffect, useState } from 'react'
import { APIBaseURL } from '../constants'
import TaskColumn from './TaskColumn'

function InProgressTasks() {
  const [tasks, setTasks] = useState(null)

  useEffect(() => {
    handleFetchTasks()
  }, [])

  const handleFetchTasks = async () => {
    const response = await fetch(APIBaseURL)
    if(response.ok) {
        const responseBody = await response.json();
        setTasks(responseBody.filter(task => task.isDone === false))
    }
  }

  return tasks ? <TaskColumn title= {'In Progress'} tasks= {tasks} /> : <p>Loading...</p>
}

export default InProgressTasks