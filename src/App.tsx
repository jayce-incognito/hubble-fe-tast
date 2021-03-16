import React from "react";
import "./reset.scss";
import styled, { createGlobalStyle } from "styled-components";
import Issue from "./module/Issue";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Modal from "./components/Modal";

export const FONT_SIZES = {
  superSmall: 12,
  small: 13,
  regular: 15,
  medium: 18,
  superMedium: 20,
  large: 22,
  avgLarge: 30,
  veryLarge: 38,
  superLarge: 40,
};

const GlobalStyled = createGlobalStyle`
  #root {
    .fw-regular{
        font-weight: 400;
    }
    .fw-medium{
        font-weight: 500;
    }
    .fw-light{
        font-weight: 200;
    }
    .fw-bold {
        font-weight: 700;
    }
    .fs-small {
        font-size: ${FONT_SIZES.small}px;
        line-height: ${FONT_SIZES.small + 3}px;
    }
    .fs-regular {
        font-size: ${FONT_SIZES.regular}px;
        line-height: ${FONT_SIZES.regular + 3}px;
    }
    .fs-medium {
        font-size: ${FONT_SIZES.medium}px;
        line-height: ${FONT_SIZES.medium + 3}px;
    }
    .fs-supermedium {
        font-size: ${FONT_SIZES.superMedium}px;
        line-height: ${FONT_SIZES.superMedium + 3}px;
    }
    .fs-large{
        font-size: ${FONT_SIZES.large}px;
        line-height: ${FONT_SIZES.large + 3}px;
    }
    .fs-avglarge{
        font-size: ${FONT_SIZES.avgLarge}px;
        line-height: ${FONT_SIZES.avgLarge + 3}px;
    }
    .fs-verylarge{
        font-size: ${FONT_SIZES.veryLarge}px;
        line-height: ${FONT_SIZES.veryLarge + 3}px;
    }
  }
  .flex {
    display: flex;
    align-items: center;
  }
  .main-text {
    color: #000000;
  }
  .sub-text {
    color: #8a8a8e;
  }
  .issue {
      padding: 4px;
      border-radius: 4px;
      color: #fff;
      max-width: 100%;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      text-align: center;
  }
  .m-b-10 {
      margin-bottom: 10px;
  }
`;

const Styled = styled.div``;

const enhance = (WrappedComp: React.FunctionComponent | any) => (
  props: any
) => {
  return <WrappedComp {...props} />;
};

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <GlobalStyled />
        <Styled className="app-container">
          <Issue />
          <Modal />
        </Styled>
      </div>
    </Provider>
  );
};

export default enhance(App);
