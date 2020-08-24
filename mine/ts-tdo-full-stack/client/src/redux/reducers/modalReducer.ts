import { ModalState, ModalActionTypes, SET_MODAL_STATE, SET_ERROR_TEXT, RESET_MODAL, TOGGLE_MODAL } from '../types/modalTypes';

const initialState: ModalState = {
  showModal: false,
  modalBody: '',
  modalTitle: '',
};

const modalReducer = (state = initialState, action: ModalActionTypes) => {
  switch (action.type) {
    case SET_MODAL_STATE:
      return { ...state, showModal: action.payload };
    case SET_ERROR_TEXT:
      return { ...state, errorText: action.payload };
    case RESET_MODAL:
      return { ...state, showModal: false, errorText: '' };
    case TOGGLE_MODAL: {
      const { showModal, errorText, modalTitle } = action;
      return { ...state, showModal, errorText, modalTitle };
    }
    default:
      return state;
  }
};

export default modalReducer;
