import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { IIssueItem, IComment } from "./Issue.interface";
import { getIssueDetailByIdSelector } from "./Issue.selector";

const Styled = styled.div`
  .comment {
    border: solid 1px #d1d5da;
    border-radius: 4px;
    padding: 20px;
    margin-bottom: 20px;
  }
  .comment p.owner {
    height: 32px;
    line-height: 32px !important;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
  }
  .issue {
    max-width: 100px;
    margin: 10px 0;
  }
`;

interface IProps {
  id: number;
}

interface IPropsComment {
  data: IComment;
}

const Comment = React.memo((props: IPropsComment) => {
  const { data } = props;
  const { owner, comment } = data;
  return (
    <div className="comment">
      <p className="fs-regular sub-text m-b-10 owner">
        <span className="fw-medium main-text">{owner}</span>
        <span>{` commented`}</span>
      </p>
      <p className="fs-regular fw-regular">{comment}</p>
    </div>
  );
});

const DetailsIssue = (props: IProps) => {
  const { id: idIssue } = props;
  const data: IIssueItem | undefined = useSelector(getIssueDetailByIdSelector)(
    idIssue
  );
  if (!data) {
    return null;
  }
  const { id, title, comments, issueColor, issue }: IIssueItem = data;
  return (
    <Styled>
      <p className="title fw-medium fs-medium">{`${title} #${id}`}</p>
      <div
        className="issue fs-small fw-medium"
        style={{ backgroundColor: issueColor }}
      >
        {issue}
      </div>
      {comments.map((item) => (
        <Comment data={item} key={item.id} />
      ))}
    </Styled>
  );
};

export default React.memo(DetailsIssue);
