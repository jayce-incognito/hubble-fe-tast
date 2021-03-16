import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../../components/Icons/Loading";
import { actionFetchData } from "./Issue.actions";
import { issueSelector } from "./Issue.selector";

interface IProps {}

const enhance = (WrappedComponent: React.FunctionComponent) => (
  props: IProps
) => {
  const dispatch = useDispatch();
  const { isFetching } = useSelector(issueSelector);
  React.useEffect(() => {
    dispatch(actionFetchData());
  }, []);
  if (isFetching) {
    return <Loading center />;
  }
  return <WrappedComponent {...props} />;
};

export default enhance;
