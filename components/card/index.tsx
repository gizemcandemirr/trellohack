import React from 'react'

const Card = (props) => {
  return (
    <div className=" w-full rounded border bg-violet-200 p-6 shadow">
        {props.children}
    </div>
  )
}

export default Card