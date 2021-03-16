export interface IProps {}

export interface IComment {
  id: number;
  owner: string;
  comment: string;
}

export interface IIssueItem {
  id: number;
  title: string;
  owner: string;
  issue: string;
  issueColor: string;
  state: number;
  comments: IComment[];
}
