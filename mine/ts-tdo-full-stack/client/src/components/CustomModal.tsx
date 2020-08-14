import React from 'react';
import { Modal, Button } from 'react-bootstrap';

interface ModalProps {
  toggleModal: ToggleModal;
  showModal: boolean;
  title: string;
  body: JSX.Element;
  confirmButton?: boolean;
  confirmFunction?: Function;
}

const CustomModal: React.FC<ModalProps> = ({ toggleModal, showModal, title, body, confirmButton, confirmFunction }) => {
  return (
    <Modal centered show={showModal} onHide={toggleModal}>
      <Modal.Header className='bg-dark text-light'>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{body}</Modal.Body>
      <Modal.Footer>
        <Button variant='dark' type='button' onClick={() => toggleModal()}>
          Close
        </Button>

        {confirmButton && confirmFunction ? (
          <Button variant='primary' type='button' onClick={() => confirmFunction()}>
            Ok
          </Button>
        ) : null}
      </Modal.Footer>
    </Modal>
  );
};

export default CustomModal;
