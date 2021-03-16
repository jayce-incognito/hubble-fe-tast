import { ACTION_TOGGLE_MODAL } from "./Modal.constant";

export interface IModalReducer {
  data: any;
}

const initialState: IModalReducer = {
  data: null,
};

const reducer = (
  state = initialState,
  action: {
    type: string;
    payload: any;
  }
) => {
  switch (action.type) {
    case ACTION_TOGGLE_MODAL: {
      const { data } = action.payload;
      return {
        ...state,
        data,
      };
    }
    default:
      return state;
  }
};

export default reducer;
