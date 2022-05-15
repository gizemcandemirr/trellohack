import React, { useState } from 'react'

const Card = (props:any) => {

  return (
    <div className="rounded border p-2 shadow-xl bg-white mb-2 mt-2">
      
         {props.children}
    
   
    </div>
  )
}

export default Card