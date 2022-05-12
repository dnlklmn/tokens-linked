import styled from "styled-components";
import "./variables/variables.css";

interface TypeProps {
  children: any;
  type?: string;
}

export const StyledType = styled.span`
  all: unset;
  color: var(--text-default);
  font-family: var(--button-label-medium-font-family);
  font-weight: var(--button-label-medium-font-weight);
  line-height: var(--button-label-medium-line-height);
  font-size: var(--button-labbel-medium-font-size);
  letter-spacing: var(--button-label-medium-letter-spacing);
  display: block;

  &.body1 {
    font-size: var(--body-1-font-size);
  }
  &.h5 {
    font-size: var(--heading-5-font-size);
    font-weight: Bold;
  }
`;

export const Type = ({ children, type }: TypeProps) => {
  return <StyledType className={`${type}`}>{children}</StyledType>;
};

export default Type;
