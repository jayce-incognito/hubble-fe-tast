import { IRootState } from "./../../redux/store";
import { createSelector } from "reselect";
import { IModalReducer } from "./Modal.reducer";

export const modalSelector = createSelector(
  (state: IRootState) => state.modal,
  (modal: IModalReducer) => modal
);
