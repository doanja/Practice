import { ModalActionTypes, TOGGLE_MODAL, RESET_MODAL } from '../types/modalTypes';

export const toggleModal = (showModal: boolean, modalBody: string, modalTitle: string): ModalActionTypes => {
  return { type: TOGGLE_MODAL, showModal, modalBody, modalTitle };
};

export const resetModal = (): ModalActionTypes => {
  return { type: RESET_MODAL };
};
