import React, { useState } from "react";
import {
  ChevronDownIcon,
  PlusIcon,
  DotsVerticalIcon,
  TrashIcon,
  ChatAlt2Icon,
  PaperClipIcon,
  PencilIcon
} from "@heroicons/react/outline";
import { Draggable } from "react-beautiful-dnd";
import { Button, Col, Modal, Row } from "react-bootstrap";

type Data={
  data:any;
  index:number;
  handleRemove:(id: string) => void;
  // handleUpdate:(id: string) => void;

}

function CardItem({ data, index, handleRemove }:Data) {
  
  const[boardData,setBoardData]=useState(data)
  const [tag, setTag] =useState(data.tag);
  const [title, setTitle] =useState(data.title);
  const [selectedBoard, setSelectedBoard] = useState('')
  const [selectedItem, setSelectedItem] = useState('')

  console.log("tag", data.tag)

  let [isOpen, setIsOpen] = useState(false)
  function openModal() {
    setIsOpen(true)
  }
  function closeModal() {
    setIsOpen(false)
  }
  let selectedModalData = () => {
    const datalist = boardData
      .find((e:any) => e.id == selectedBoard)
      ?.items.find((i:any) => i.id == selectedItem)
    return datalist
  }

  console.log(selectedModalData)
  
  return (
    <Draggable index={index} draggableId={data.id.toString()}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className="bg-white rounded-md p-3 m-3 mt-0 last:mb-0"
        >
          <label
            className={`bg-gradient-to-r
              px-2 py-1 rounded text-white text-sm
              ${
                data.priority === 0
                  ? "from-blue-600 to-blue-400"
                  : data.priority === 1
                  ? "from-green-600 to-green-400"
                  : "from-red-600 to-red-400"
              }
              `}
          >
            {data.priority === 0
              ? "Low Priority"
              : data.priority === 1
              ? "Medium Priority"
              : "High Priority"}
          </label>
          <h5 className="text-md my-3 text-lg leading-6">{data.title}</h5>
          <div className="flex justify-between">
            <div className="flex space-x-2 items-center">
              <span className="flex space-x-1 items-center">
                <ChatAlt2Icon className="w-4 h-4 text-gray-500" />
                <span>{data.chat}</span>
              </span>
              <span className="flex space-x-1 items-center">
                <PaperClipIcon className="w-4 h-4 text-gray-500" />
                <span>{data.attachment}</span>
              </span>
            </div>

            <ul className="flex space-x-3">
           
              <li>
                {/* <button
                  className="border border-dashed flex items-center w-9 h-9 border-gray-500 justify-center
                    rounded-full"
                >
                  <PlusIcon className="w-5 h-5 text-gray-500" />
                </button> */}
               <button onClick={openModal}><PencilIcon className="w-8 h-8 text-gray-500 text-right"/> </button> 
               <button onClick={() => handleRemove(data.id)}><TrashIcon className="w-8 h-8 text-red-500 text-right"/> </button> 

              </li>
            </ul>
          </div>


          <Modal
    backdrop="static"
    keyboard={false}
    show={isOpen}
    onHide={closeModal}
  >
    <Modal.Header closeButton>
      <Modal.Title> </Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Row>
        <Col
         md="12">
           <label>Title:</label>
          <input
            type="text"
            name="title"
            value={title}
            onChange={(e)=> setTitle(e.target.value)}
            className="h-12 w-full p-2"
          />
        </Col>
        <Col md="12">
        <label>Tag:</label> 
          <input
            type="text"
            name="tag"
            value={tag}
            onChange={(e)=> setTag(e.target.value)}
            className="h-12 w-full p-2"
          />
        </Col>
      </Row>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary">
        Close
      </Button>
      <Button variant="primary">
        Save
      </Button>
    </Modal.Footer>
  </Modal>
        </div>
        
      )}
    </Draggable>
  );
}

export default CardItem;