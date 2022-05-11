import styled from "styled-components";
import "./variables/variables.css";

interface TypeProps {
  children: any;
  type?: string;
}

export const StyledType = styled.span`
  all: unset;
  color: var(--text-default);
  font-family: var(--button-medium-font-family);
  font-weight: var(--button-medium-font-weight);
  line-height: var(--button-medium-line-height);
  font-size: var(--button-medium-font-size);
  letter-spacing: var(--button-medium-letter-spacing);
  display: block;
  text-align: left;

  &.body {
    font-size: var(--body1-font-size);
  }
  &.h5 {
    font-size: var(--h5-font-size);
    font-weight: Bold;
  }
`;

export const Type = ({ children, type }: TypeProps) => {
  return <StyledType className={`${type}`}>{children}</StyledType>;
};

export default Type;
