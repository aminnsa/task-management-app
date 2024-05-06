import React from 'react'

function ErrorMessage({message}) {
  return (
    <p className='text-red-500 text-sm ml-1'>{message}</p>
  )
}

export default ErrorMessage