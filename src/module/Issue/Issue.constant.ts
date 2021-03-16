import { IIssueItem } from "./Issue.interface";

export const ACTION_FETCHED = `[Issue] Fetched data`;
export const ACTION_FETCHING = `[Issue] Fetching data`;
export const ACTION_FETCH_FAIL = `[Issue] Fetch fail data`;
export const ACTION_SWITCH_STATE = `[Issue] Switch state`;

export const STATE_FACTORIES = [
  {
    value: 1,
    content: "Open",
  },
  {
    value: 2,
    content: "Close",
  },
  {
    value: 3,
    content: "All",
  },
];

export const FACTORIES: IIssueItem[] = [
  {
    id: 1,
    title: "Refactor codes",
    owner: "nnluukhtn",
    issue: "help wanted",
    issueColor: "#34d058",
    state: 1,
    comments: [
      {
        id: 1,
        owner: "nnluukhtn",
        comment:
          "The codes now is not clean and not well designed. Please consider refactoring",
      },
      {
        id: 2,
        owner: "oshanz",
        comment: `some tips:
          set up rubocop
          use pagination`,
      },
    ],
  },
  {
    id: 2,
    title: "Add more tests",
    owner: "nnluukhtn",
    issue: "enhancement",
    issueColor: "#2188ff",
    state: 1,
    comments: [
      {
        id: 1,
        owner: "nnluukhtn",
        comment:
          "There is no test as of now. We might want to update our tests to improve coverage",
      },
    ],
  },
  {
    id: 3,
    title: "Update README",
    owner: "nnluukhtn",
    issue: "enhancement",
    issueColor: "#2188ff",
    state: 1,
    comments: [
      {
        id: 1,
        owner: "nnluukhtn",
        comment: "We need a better README instead of current dummy version",
      },
    ],
  },
  {
    id: 4,
    title: "Setup demo project",
    owner: "nnluukhtn",
    issue: "close",
    issueColor: "#F40000",
    state: 2,
    comments: [
      {
        id: 1,
        owner: "nnluukhtn",
        comment: "Init repo",
      },
    ],
  },
];
