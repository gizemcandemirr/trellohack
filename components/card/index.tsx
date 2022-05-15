import React, { useState } from 'react'

const Card = (props) => {

  return (
    <div className=" w-full rounded border bg-grayBar-200 p-2 shadow-xl">
       <div className='bg-white h-12 p-2 rounde-xl w-full'>
         {props.children}
      </div> 
   
    </div>
  )
}

export default Card