export const TOGGLE_MODAL = 'TOGGLE_MODAL';

export const RESET_MODAL = 'RESET_MODAL';

export interface ModalState {
  showModal: boolean;
  modalBody: string;
  modalTitle: string;
}

interface ToggleModal {
  type: typeof TOGGLE_MODAL;
  showModal: boolean;
  modalBody: string;
  modalTitle: string;
}

interface ResetModal {
  type: typeof RESET_MODAL;
}

export type ModalActionTypes = ToggleModal | ResetModal;
