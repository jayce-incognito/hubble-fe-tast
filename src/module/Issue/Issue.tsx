import React, { ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Octicon from "../../components/Icons/Octicon";
import SelectOption from "../../components/SelectOption";
import { STATE_FACTORIES } from "./Issue.constant";
import { IIssueItem } from "./Issue.interface";
import { listIssueFilterByStateSelector } from "./Issue.selector";
import withIssue from "./Issue.enhance";
import { actionFetchData, actionSwitchState } from "./Issue.actions";
import { actionToggleModal } from "../../components/Modal";
import DetailsIssue from "./Issue.DetailsIssue";
import RefreshIcon from "../../components/Icons/Refresh";

const Styled = styled.div`
  border-radius: 10px;
  border: solid 1px #d1d5da;
  margin: 20px;
  .item {
    cursor: pointer;
    border-bottom: solid 1px #d1d5da;
    padding: 10px 20px;
    :last-child {
      border-bottom: none;
    }
    :hover {
      background-color: #e1e4e8;
    }
  }
  .item .left {
    margin-right: 10px;
  }
  .item .right .top {
    margin-bottom: 10px;
    .title {
      font-weight: 500;
      margin-right: 10px;
    }
  }
  .item .right .bot {
  }
  .main-bar {
    justify-content: flex-end;
  }
`;

const Item = React.memo((props: { data: IIssueItem }) => {
  const { data } = props;
  const { id, title, owner, issue, issueColor } = data;
  const dispatch = useDispatch();
  const handleShowDetail = () => {
    dispatch(actionToggleModal({ data: <DetailsIssue id={id} /> }));
  };
  return (
    <div className="item flex" onClick={handleShowDetail}>
      <div className="left">
        <Octicon />
      </div>
      <div className="right">
        <div className="top flex">
          <p className="title main-text fs-medium fw-medium">{title}</p>
          <p
            className="issue fs-small fw-medium"
            style={{ backgroundColor: issueColor }}
          >
            {issue}
          </p>
        </div>
        <div className="bot">
          <p className="sub-text fs-regular">{`#${id} opened on by ${owner}`}</p>
        </div>
      </div>
    </div>
  );
});

export const MainBar = React.memo(() => {
  const stateFactories = STATE_FACTORIES;
  const dispatch = useDispatch();
  const handleChangeOption = (e: ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();
    const state = e.target.value;
    dispatch(actionSwitchState(Number(state)));
  };
  const handleRefresh = () => dispatch(actionFetchData());
  return (
    <div className="main-bar flex">
      <RefreshIcon onClick={handleRefresh} />
      <SelectOption
        options={stateFactories}
        defaultValue={stateFactories[0].value}
        onChange={handleChangeOption}
      />
    </div>
  );
});

const Issue = () => {
  const list = useSelector(listIssueFilterByStateSelector);
  return (
    <Styled>
      <MainBar />
      {list && list.map((item) => <Item data={item} key={item.id} />)}
    </Styled>
  );
};

export default withIssue(React.memo(Issue));
