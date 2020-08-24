export const SET_MODAL_STATE = 'SET_MODAL_STATE';
export const SET_ERROR_TEXT = 'SET_MODAL_ERROR';
export const RESET_MODAL = 'RESET_MODAL';
export const TOGGLE_MODAL = 'TOGGLE_MODAL';

export interface ModalState {
  showModal: boolean;
  modalBody: string;
  modalTitle: string;
}

interface SetModalState {
  type: typeof SET_MODAL_STATE;
  payload: boolean;
}

interface SetErrorText {
  type: typeof SET_ERROR_TEXT;
  payload: string;
}

interface ResetModal {
  type: typeof RESET_MODAL;
}

interface ToggleModal {
  type: typeof TOGGLE_MODAL;
  showModal: boolean;
  errorText: string;
  modalTitle: string;
}

export type ModalActionTypes = SetModalState | SetErrorText | ResetModal | ToggleModal;
