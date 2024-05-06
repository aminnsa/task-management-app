import React from 'react'
import Loading from './Loading'

function Button({title, isLoading, onClick}) {
  return ( ! isLoading ?
    <div className='bg-black p-3 rounded-md text-white cursor-pointer' onClick={onClick} >
      {title}
    </div> : <Loading />
  )
}

export default Button