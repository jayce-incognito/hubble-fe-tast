import ModalReducer, {
  IModalReducer,
} from "./../components/Modal/Modal.reducer";
import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { IIssueReducer } from "./../module/Issue/Issue.reducer";
import { issueReducer } from "../module/Issue";

export interface IRootState {
  issue: IIssueReducer;
  modal: IModalReducer;
}

const reducer = combineReducers({
  issue: issueReducer,
  modal: ModalReducer,
});

export const store = createStore(reducer, applyMiddleware(thunk));
