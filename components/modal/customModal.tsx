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
    backdrop="static"
    keyboard={false}
  >
    <Modal.Header closeButton>
      <Modal.Title> </Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Row>
        <Col md="12">
          <input
            type="text"
            name="title"
            className="h-12 w-full p-2"
          />
        </Col>
        <Col md="12">
          <input
            type="text"
            name="tag"
          
            className="h-12 w-full p-2"
          />
        </Col>
      </Row>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary">
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