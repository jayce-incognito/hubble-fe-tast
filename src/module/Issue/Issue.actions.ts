import { cachePromise } from "../../utils/cache";
import { IRootState } from "./../../redux/store";
import {
  ACTION_FETCHING,
  ACTION_FETCHED,
  ACTION_FETCH_FAIL,
  ACTION_SWITCH_STATE,
} from "./Issue.constant";
import { issueSelector } from "./Issue.selector";
import { apiGetListIssues } from "./Issue.services";

export const actionFetching = () => ({
  type: ACTION_FETCHING,
});

export const actionFetched = (payload: any) => ({
  type: ACTION_FETCHED,
  payload,
});

export const actionFetchFail = () => ({
  type: ACTION_FETCH_FAIL,
});

export const actionFetchData = () => async (
  dispatch: any,
  getState: () => IRootState
) => {
  try {
    const state = getState();
    const { isFetching } = issueSelector(state);
    if (isFetching) {
      return;
    }
    dispatch(actionFetching());
    const data = await cachePromise("issue-list", apiGetListIssues);
    dispatch(actionFetched(data));
  } catch (error) {
    dispatch(actionFetchFail());
    throw error;
  }
};

export const actionSwitchState = (state: number) => ({
  type: ACTION_SWITCH_STATE,
  payload: state,
});
