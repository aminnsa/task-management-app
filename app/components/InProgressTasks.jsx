"use client"

import React, { useEffect, useState } from 'react'
import TaskColumn from './TaskColumn'
import { APIBaseURL } from '../constants'



function InProgressTasks() {
  const [tasks, setTasks] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    handleFetchTasks()
  }, [])

  const handleFetchTasks = async () => {
    
    setLoading(true)
 
    
   const response = await fetch(APIBaseURL);
   if(response.ok) {
    const responseBody = await response.json();
    setTasks(responseBody.filter(task => task.isDone === false))
   }
   

    setLoading(false)
  }

  return  <TaskColumn title= {'In Progress'} tasks= {tasks} isLoading={loading}/>
}

export default InProgressTasks