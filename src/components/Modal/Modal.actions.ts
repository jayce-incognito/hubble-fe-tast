import { ACTION_TOGGLE_MODAL } from "./Modal.constant";

export const actionToggleModal = ({ data = null }: { data?: any }) => ({
  type: ACTION_TOGGLE_MODAL,
  payload: {
    data,
  },
});
