import Head from 'next/head'
import Layout from '../components/Layout'
import {
  ChevronDownIcon,
  PlusIcon,
  DotsVerticalIcon,
  PlusCircleIcon,
  XCircleIcon,
  TrashIcon,
} from '@heroicons/react/outline'
import CardItem from '../components/CardItem'
import BoardData from '../data/board-data.json'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'
import { KeyboardEvent, useEffect, useState, Fragment } from 'react'

function createGuidId() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c == 'x' ? r : (r & 0x3) | 0x8
    return v.toString(16)
  })
}
import { Dialog, Transition } from '@headlessui/react'

export default function Home() {
  const [ready, setReady] = useState(false)
  const [boardData, setBoardData] = useState(BoardData)
  const [showForm, setShowForm] = useState(false)
  const [selectedBoard, setSelectedBoard] = useState('')
  const [title, setTitle] = useState('')
  let [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (process.browser) {
      setReady(true)
    }
  }, [])

  const onDragEnd = (re: any) => {
    if (!re.destination) return
    let newBoardData = boardData
    var dragItem =
      newBoardData[parseInt(re.source.droppableId)].items[re.source.index]
    newBoardData[parseInt(re.source.droppableId)].items.splice(
      re.source.index,
      1
    )
    newBoardData[parseInt(re.destination.droppableId)].items.splice(
      re.destination.index,
      0,
      dragItem
    )
    setBoardData(newBoardData)
  }

  const onTextAreaKeyPress = (
    e: React.KeyboardEvent<HTMLTextAreaElement>,
    bid: string | null
  ) => {
    if (e.key === 'Enter') {
      //Enter
      const val = e.currentTarget.value
      if (val.length === 0) {
        setShowForm(false)
      } else {
        const boardId = bid ?? createGuidId()
        const item: any = {
          id: createGuidId(),
          title: val,
          priority: 0,
          chat: 0,
          attachment: 0,
          assignees: [],
        }

        if (bid === null) {
          let newBoardData: {
            id: string
            name: string
            items: {
              id: string
              priority: number
              title: string
              chat: number
              attachment: number
              assignees: {
                avt: string
              }[]
            }[]
          } = {
            id: boardId,
            name: '',
            items: [],
          }
          //if(boardId)
          newBoardData.items.push(item)
          setBoardData([...boardData, newBoardData])
        } else {
          let data = boardData.filter((todo) => {
            if (todo.id === bid) todo.items.push(item)
            return true
          })
          setBoardData(data)
        }
        setShowForm(false)
        e.currentTarget.value = ''
      }
    }
  }

  function handleRemove(id: string) {
    let data = boardData.filter((todo) => {
      todo.items = todo.items.filter((item) => item.id !== id)
      return true
    })
    console.log(id, data)
    setBoardData(data)
  }

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  return (
    <Layout>
      <div className="flex h-screen flex-col bg-hero bg-cover p-10">
        {/* Board header */}
        <div className="flex flex-initial justify-between">
          <div className="flex items-center">
            <h4 className="text-4xl font-bold text-gray-600">Studio Board</h4>
            <ChevronDownIcon
              className="ml-5 h-9 w-9 rounded-full
            bg-white p-1 text-gray-500 shadow-xl"
            />
          </div>
        </div>

        {/* Board columns */}
        {ready && (
          <>
            <DragDropContext onDragEnd={onDragEnd}>
              <div className="my-5 grid grid-cols-4 gap-5">
                {boardData.map((board, bIndex) => {
                  return (
                    <div key={board.name}>
                      <Droppable droppableId={bIndex.toString()}>
                        {(provided, snapshot) => (
                          <div
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                          >
                            <div
                              className={`relative flex flex-col
                            overflow-hidden rounded-md bg-gray-100 shadow-md
                            ${snapshot.isDraggingOver && 'bg-green-100'}`}
                            >
                              <span
                                className="absolute inset-x-0 top-0 h-1 w-full
                          bg-gradient-to-r from-pink-700 to-red-200"
                              ></span>
                              <h4 className=" mb-2 flex items-center justify-between p-3">
                                <span className="text-2xl text-gray-600">
                                  {board.name}
                                </span>
                                <DotsVerticalIcon className="h-5 w-5 text-gray-500" />
                              </h4>

                              <div
                                className="h-auto overflow-y-auto overflow-x-hidden"
                                style={{ maxHeight: 'calc(100vh - 290px)' }}
                              >
                                {board.items.length > 0 &&
                                  board.items.map((item, iIndex) => {
                                    return (
                                      <>
                                      <div onClick={openModal}>
                                           <CardItem
                                          key={item.id}
                                          data={item}
                                          index={iIndex}
                                          handleRemove={handleRemove}
                                        
                                        />
                                      </div>
                                     
                                        
                                      </>
                                    )
                                  })}

                                {provided.placeholder}
                              </div>

                              {showForm && selectedBoard === board.id ? (
                                <div className="flex justify-between p-3">
                                  <textarea
                                    className="w-full rounded border-gray-300 focus:ring-purple-400"
                                    rows={3}
                                    placeholder="Task info"
                                    name="title"
                                    onChange={(e) =>
                                      setTitle(e.currentTarget.value)
                                    }
                                    onKeyDown={(e) =>
                                      onTextAreaKeyPress(e, board.id)
                                    }
                                  />
                                  {/* <button onClick={handdleAdd}>save</button> */}
                                  <button onClick={() => setShowForm(false)}>
                                    <XCircleIcon className="h-5 w-5 text-red-500" />
                                  </button>
                                </div>
                              ) : (
                                <button
                                  className="my-3 flex items-center justify-center space-x-2 text-lg"
                                  onClick={() => {
                                    setSelectedBoard(board.id)
                                    setShowForm(true)
                                  }}
                                >
                                  <span>Add task</span>
                                  <PlusCircleIcon className="h-5 w-5 text-gray-500" />
                                </button>
                              )}
                            </div>
                          </div>
                        )}
                      </Droppable>
      
              <Transition appear show={isOpen} as={Fragment} key={board.id}>
              <Dialog as="div" className="relative z-10" onClose={closeModal}>
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="fixed inset-0 bg-black bg-opacity-25" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                  <div className="flex min-h-full items-center justify-center p-4 text-center">
                    <Transition.Child
                      as={Fragment}
                      enter="ease-out duration-300"
                      enterFrom="opacity-0 scale-95"
                      enterTo="opacity-100 scale-100"
                      leave="ease-in duration-200"
                      leaveFrom="opacity-100 scale-100"
                      leaveTo="opacity-0 scale-95"
                    >
                      <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                       
                        {board.items.map(i => (
                         <> 
                          
                          <input type="text" value={i.title} className="text-lg font-medium leading-6 text-gray-900 h-12 w-full" />
                         </> 
                        ))}
                       

                        <div className="mt-4">
                          <button
                            type="button"
                            className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                            onClick={closeModal}
                          >
                            Close
                          </button>
                        </div>
                      </Dialog.Panel>
                    </Transition.Child>
                  </div>
                </div>
              </Dialog>
            </Transition>
      
                    </div>
                  )

                  
                })}
                <div className="relative flex flex-col overflow-hidden rounded-md bg-gray-100 shadow-md">
                  <span
                    className="absolute inset-x-0 top-0 h-1 w-full
                          bg-gradient-to-r from-pink-700 to-red-200"
                  ></span>
                  <h4 className=" mb-2 flex items-center justify-between p-3">
                    <span className="text-2xl text-gray-600">
                      <button
                        className="my-3 flex items-center justify-center space-x-2 text-lg"
                        onClick={() => {
                          setShowForm(true)
                          setSelectedBoard('')
                        }}
                      >
                        <span>Add task</span>
                        <PlusCircleIcon className="h-5 w-5 text-gray-500" />
                      </button>

                      {showForm && selectedBoard === '' && (
                        <div className="flex justify-between p-3">
                          <textarea
                            className="w-full rounded border-gray-300 focus:ring-purple-400"
                            rows={3}
                            placeholder="Task info"
                            name="title"
                            onChange={(e) => setTitle(e.currentTarget.value)}
                            onKeyDown={(e) => onTextAreaKeyPress(e, null)}
                          />
                          {/* <button onClick={handdleAdd}>save</button> */}
                          <button onClick={() => setShowForm(false)}>
                            <XCircleIcon className="h-5 w-5 text-red-500" />
                          </button>
                        </div>
                      )}
                    </span>
                    <DotsVerticalIcon className="h-5 w-5 text-gray-500" />
                  </h4>
                </div>
              </div>
            </DragDropContext>

            
          </>
        )}
      </div>
    </Layout>
  )
}
