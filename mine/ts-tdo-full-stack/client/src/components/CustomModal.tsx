import React from 'react';
import { Modal, Button } from 'react-bootstrap';

interface ModalProps {
  toggleModal: ToggleModal;
  showModal: boolean;
  title: string;
  body: JSX.Element;
  confirmFunction?: Function;
}

const CustomModal: React.FC<ModalProps> = ({ toggleModal, showModal, title, body, confirmFunction }) => {
  return (
    <Modal centered show={showModal} onHide={toggleModal}>
      <Modal.Header className='bg-dark text-light'>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{body}</Modal.Body>
      <Modal.Footer>
        {confirmFunction ? (
          <Button variant='dark' type='button' onClick={() => confirmFunction()}>
            Close
          </Button>
        ) : (
          <Button variant='dark' type='button' onClick={() => toggleModal()}>
            Close
          </Button>
        )}
      </Modal.Footer>
    </Modal>
  );
};

export default CustomModal;
