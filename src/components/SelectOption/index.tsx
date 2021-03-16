import React from "react";
import styled from "styled-components";

const Styled = styled.select``;

interface IOption {
  value: any;
  content: string;
}

interface IProps {
  options: IOption[];
}

interface IMergeProps
  extends IProps,
    React.SelectHTMLAttributes<HTMLSelectElement> {}

const SelectOption = (props: IMergeProps) => {
  const { options, ...rest }: IMergeProps = props;
  return (
    <Styled {...rest}>
      {options.map(({ value, content }: IOption) => (
        <option key={value} value={value}>
          {content}
        </option>
      ))}
    </Styled>
  );
};

export default React.memo(SelectOption);
