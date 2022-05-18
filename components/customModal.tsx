import React, { useState } from 'react'
import { Button, Col, Modal, Row } from 'react-bootstrap'

type Props = {
 closeModal:Boolean | null;
 isOpen:Boolean | null;

}

const customModal = (props: Props) => {
    const [title, setTitle] = useState(null)
    const handleSaveModal= () => { }


  return (
    <Modal
    show={props.isOpen}
    onHide={props.closeModal}
    backdrop="static"
    keyboard={false}
  >
    <Modal.Header closeButton>
      <Modal.Title> {selectedModalData()?.title}</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Row>
        <Col md="12">
          <input
            type="text"
            name="title"
            value={selectedModalData()?.title}
            onChange={e=> setTitle(e.currentTarget.value)}
            className="h-12 w-full p-2"
          />
        </Col>
        <Col md="12">
          <input
            type="text"
            name="tag"
            value={selectedModalData()?.tag}
            className="h-12 w-full p-2"
          />
        </Col>
      </Row>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={props.closeModal}>
        Close
      </Button>
      <Button variant="primary" onClick={() => handleSaveModal()}>
        Save
      </Button>
    </Modal.Footer>
  </Modal>
  )
}

export default customModal