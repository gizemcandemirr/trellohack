import React, { useState } from 'react'
import {
  PlusIcon,
  ViewListIcon,
  LinkIcon,
  DuplicateIcon,
  ClockIcon,
  DotsHorizontalIcon,
} from '@heroicons/react/solid'
import { Cards } from '../typings'

type Props = {
  card: Cards
}

const Card = ({ card }: Props) => {
    const [showNew, setShowNew] =useState(false)
    const handleAdd = () => {
        setShowNew(!showNew)
    }
    const handleSave = () => {
        setShowNew(!showNew)
    }

  return (
<> 
<div className="w-full rounded border bg-violet-200 p-6 shadow">
         <div >
        
       { /* header */ }
        <div className="flex items-center justify-between p-2">
       
        <span>{card.title} 🎉</span>
  
      <span>
            <DotsHorizontalIcon width={20} height={20} />
          </span>
        </div>

        {  /* content */  }
       <div className="h-fit rounded-md bg-white shadow-lg">
          <img src={card.image} alt="" className="mb-2 rounded-sm " />
          <span className="mt-4 pl-5 text-xl font-bold text-gray-500">
          {card.title}
          </span>
          <div className="flex   items-center space-x-6 p-4 pl-5 text-gray-400">
            <span>
             
              <ViewListIcon width={20} height={20} />
            </span>
            <span className="flex items-center ">
           
              <LinkIcon width={20} height={20} className="mr-2" /> {card.linkCount}
            </span>
          </div>
        </div>

        {
          /* list cards */
        }
        {card.body.map(b=>(
           <div className="mt-5 h-fit rounded-md bg-white p-4 shadow-lg">
          <span className="mt-4 pl-5 text-xl text-gray-500">
            {b} 
          </span>
          <span className="mt-2 flex h-8 items-center rounded bg-green-500 p-2 text-white">  
            <ClockIcon width={20} height={20} className="mr-2" /> {card.date}
          </span>
        </div> 
        )) }
      


        {
          /* bottom: add new card */
        }
        <div className="mt-5 flex h-fit justify-between items-center rounded-md text-gray-400">
          {showNew ? (<div className='flex flex-col '>
            <input type="text" className='h-12'/>
            <div className='space-x-4'>
            <button onClick={handleSave}>Save</button>
            <button className='text-red-500' onClick={()=>setShowNew(!showNew)}>x</button>
            </div>
               
        </div>) :
        <button className="flex items-center" onClick={handleAdd}>
            <PlusIcon width={24} height={24} />
            Add a card
          </button>
        }

          <button>
            <DuplicateIcon width={24} height={24} />
          </button>
        </div>

         </div>  
 
    </div>

</>
   
  )
}

export default Card
