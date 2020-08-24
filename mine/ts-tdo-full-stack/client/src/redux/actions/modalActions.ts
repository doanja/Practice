import { ModalActionTypes, SET_MODAL_STATE, SET_ERROR_TEXT, RESET_MODAL, TOGGLE_MODAL } from '../types/modalTypes';

export const setModalState = (showModal: boolean): ModalActionTypes => {
  return { type: SET_MODAL_STATE, payload: showModal };
};

export const setErrorText = (errorText: string): ModalActionTypes => {
  return { type: SET_ERROR_TEXT, payload: errorText };
};

export const resetModal = (): ModalActionTypes => {
  return { type: RESET_MODAL };
};

export const toggleModal = (showModal: boolean, errorText: string, modalTitle: string): ModalActionTypes => {
  return { type: TOGGLE_MODAL, showModal, errorText, modalTitle };
};
