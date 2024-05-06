import React from 'react'
import Loading from './Loading'
import cx from 'classnames'

function Button({title, isLoading, onClick, color = 'bg-black'}) {
  return (
    <div className={cx('p-3 rounded-md text-white cursor-pointer min-w-20', color)} onClick={onClick} >
      {isLoading ? <Loading /> : title}
    </div>
  )
}

export default Button