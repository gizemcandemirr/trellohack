import mockData from '../../mockData'
import { useEffect, useState } from 'react'
import Card from '../card/index'
import { DotsHorizontalIcon} from '@heroicons/react/outline'
import {
    PlusIcon,
    DuplicateIcon,
  } from '@heroicons/react/outline'

import dynamic from 'next/dynamic';
const DragDropContext = dynamic(
  () => import('react-beautiful-dnd').then(mod => {
      return mod.DragDropContext;
    }),
  {ssr: false},
);
const Droppable = dynamic(
  () =>
    import('react-beautiful-dnd').then(mod => {
      return mod.Droppable;
    }),
  {ssr: false},
);
const Draggable = dynamic(
  () => import('react-beautiful-dnd').then(mod => {
      return mod.Draggable;
    }),
  {ssr: false},
);

const Kanban = () => {
    const [data, setData] = useState(mockData)
    const [isBrowser, setIsBrowser] = useState(false);

    const onDragEnd = (result:any) => {
        if (!result.destination) return
        const { source, destination } = result

        if (source.droppableId !== destination.droppableId) {
            const sourceColIndex = data.findIndex(e => e.id === source.droppableId)
            const destinationColIndex = data.findIndex(e => e.id === destination.droppableId)

            const sourceCol = data[sourceColIndex]
            const destinationCol = data[destinationColIndex]

            const sourceTask = [...sourceCol.tasks]
            const destinationTask = [...destinationCol.tasks]

            const [removed] = sourceTask.splice(source.index, 1)
            destinationTask.splice(destination.index, 0, removed)

            data[sourceColIndex].tasks = sourceTask
            data[destinationColIndex].tasks = destinationTask

            setData(data)
        }
    }
    const [showNew, setShowNew] =useState(false)
    const handleAdd = () => {
        setShowNew(!showNew)
    }
    const handleSave = () => {
        setShowNew(!showNew)
    }
    return (
        <DragDropContext onDragEnd={onDragEnd} >
 <>
  <div className='flex space-x-4 ' >
                {
                    data.map((section,index) => (
                        <Droppable
                            key={section.id}
                            droppableId={section.id}
                            index={index}
                        >
                            {(provided) => (
                                <div
                                    ref={provided.innerRef}
                                    {...provided.droppableProps}
                                    {...provided.dragHandleProps}
                                   className="bg-grayBar-200 cursor-pointer" >

                                    <div className='font-bold flex justify-between space-x-6 items-center p-2' >
                                        <span>   {section.title}</span>
                                        <span><DotsHorizontalIcon width={16} height={16}/></span>
                                      
                                    </div>
                                    <div > 
                                        {
                                            section.tasks.map((task, index) => (
                                                <Draggable
                                                    key={task.id}
                                                    draggableId={task.id}
                                                    index={index}
                                                >
                                                    {(provided, snapshot) => (
                                                        <div
                                                            ref={provided.innerRef}
                                                            {...provided.draggableProps}
                                                            {...provided.dragHandleProps}
                                                            style={{
                                                                ...provided.draggableProps.style,
                                                                opacity: snapshot.isDragging ? '0.5' : '1'
                                                            }}
                                                        >
                                                            <Card>
                                                                {task.title}
                                                            </Card>

                                                        </div>
                                                        
                                                        
                                                        
                                                    )}
                                                </Draggable>
                                            ))
                                        }
                                        {provided.placeholder}
                                    </div>
                                    <div className="mt-5 flex h-fit justify-between items-center rounded-md text-gray-400 space-x-6">
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
                       )}
                        </Droppable>
                    ))
                }
                
            </div>
           
 </>          
        </DragDropContext>
    )
}


export default Kanban

