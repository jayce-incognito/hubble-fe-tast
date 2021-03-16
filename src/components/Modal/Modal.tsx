import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import enhance from "./Modal.enhance";
import { modalSelector } from "./Modal.selector";
import { IProps } from "./Modal.interface";
import useOutsideRef from "../../hooks/useDetectClickOutside";

const Styled = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  z-index: 10000;
  background-color: rgba(0, 0, 0, 0.3);
  min-width: 320px;
  .modal-content-wrapper {
    position: absolute;
    padding: 20px;
    overflow: hidden;
    background-color: #fff;
    border-radius: 10px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80%;
    height: 80%;
  }
  .close-icon {
    z-index: 2;
    margin-left: auto;
    font-size: 14px;
  }
  .modal-loading-tx {
    position: relative;
    height: 100%;
  }
  .header {
    margin-top: 0;
  }
`;

const Modal = (props: IProps) => {
  const modalState = useSelector(modalSelector);
  const { data } = modalState;
  const ref = React.useRef(null);
  const { onClose } = props;
  useOutsideRef(ref, onClose);
  if (!data) {
    return null;
  }
  return (
    <Styled className="modal-wrapper">
      <div className="modal-content-wrapper" ref={ref}>
        {data}
      </div>
    </Styled>
  );
};

export default enhance(React.memo(Modal));
