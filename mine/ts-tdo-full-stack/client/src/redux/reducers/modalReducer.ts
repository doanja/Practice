import { ModalState, ModalActionTypes, TOGGLE_MODAL, RESET_MODAL } from '../types/modalTypes';

const initialState: ModalState = {
  showModal: false,
  modalBody: '',
  modalTitle: 'Error',
};

const modalReducer = (state = initialState, action: ModalActionTypes) => {
  switch (action.type) {
    case TOGGLE_MODAL: {
      const { showModal, modalBody, modalTitle } = action;
      return { ...state, showModal, modalBody, modalTitle };
    }
    case RESET_MODAL:
      return { ...state, showModal: false, modalBody: '', modalTitle: 'Error' };
    default:
      return state;
  }
};

export default modalReducer;
