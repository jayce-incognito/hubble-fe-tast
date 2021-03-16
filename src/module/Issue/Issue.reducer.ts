import { IIssueItem } from "./Issue.interface";
import {
  ACTION_FETCHING,
  ACTION_FETCHED,
  ACTION_FETCH_FAIL,
  ACTION_SWITCH_STATE,
} from "./Issue.constant";

export interface IIssueReducer {
  isFetching: boolean;
  isFetched: boolean;
  data: IIssueItem[];
  state: number;
}

const initialState: IIssueReducer = {
  isFetching: false,
  isFetched: false,
  data: [],
  state: 1,
};

const reducer = (
  state = initialState,
  action: {
    type: string;
    payload: any;
  }
) => {
  switch (action.type) {
    case ACTION_FETCHING: {
      return {
        ...state,
        isFetching: true,
      };
    }
    case ACTION_FETCH_FAIL: {
      return {
        ...state,
        isFetching: false,
        isFetched: false,
      };
    }
    case ACTION_FETCHED: {
      return {
        ...state,
        isFetching: false,
        isFetched: true,
        data: [...action.payload],
      };
    }
    case ACTION_SWITCH_STATE: {
      return {
        ...state,
        state: action.payload,
      };
    }
    default:
      return state;
  }
};

export default reducer;
