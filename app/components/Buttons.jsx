import React from 'react'

function Buttons({title, isLoading, onClick}) {
  return ( ! isLoading ?
    <div className='bg-black p-3 rounded-md text-white cursor-pointer' onClick={onClick} >
      {title}
    </div> : <p>Loading...</p>
  )
}

export default Buttons