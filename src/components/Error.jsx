import React from 'react'

const Error = ({message}) => {
  return (
    (
        <div className="text-rose-500 font-bold text-center p-2">
          <p>{message}</p>
        </div>
      )
  )
}

export default Error