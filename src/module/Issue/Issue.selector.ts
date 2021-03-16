import { IRootState } from "./../../redux/store";
import { createSelector } from "reselect";

export const issueSelector = createSelector(
  (state: IRootState) => state.issue,
  (issue) => issue
);

export const listIssueFilterByStateSelector = createSelector(
  issueSelector,
  (issue) => {
    const { state, data } = issue;
    if (state === 3) {
      return data;
    }
    return data.filter((item) => item?.state === state);
  }
);

export const getIssueDetailByIdSelector = createSelector(
  listIssueFilterByStateSelector,
  (list) => (id: number) => list.find((item) => item?.id === id)
);
