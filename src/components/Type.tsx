import styled from "styled-components";

type TypeProps = {
  text?: string;
  textStyle?: "body1" | "body2" | "h4" | "h5" | "h6";
};

export const StyledType = styled.span`
  all: unset;
  color: var(--text-default);
  display: block;

  &.body1 {
    font-family: var(--body-1-font-family);
    font-weight: var(--body-1-font-weight);
    line-height: var(--body-1-line-height);
    font-size: var(--body-1-font-size);
  }
  &.body2 {
    font-family: var(--body-2-font-family);
    font-weight: var(--body-2-font-weight);
    line-height: var(--body-2-line-height);
    font-size: var(--body-2-font-size);
  }
  &.h4 {
    font-family: var(--heading-4-font-family);
    font-weight: var(--heading-4-font-weight);
    line-height: var(--heading-4-line-height);
    font-size: var(--heading-4-font-size);
  }
  &.h5 {
    font-family: var(--heading-5-font-family);
    font-weight: var(--heading-5-font-weight);
    line-height: var(--heading-5-line-height);
    font-size: var(--heading-5-font-size);
  }
  &.h6 {
    font-family: var(--heading-6-font-family);
    font-weight: var(--heading-6-font-weight);
    line-height: var(--heading-6-line-height);
    font-size: var(--heading-6-font-size);
  }
`;

export const Type = ({ text, textStyle }: TypeProps) => {
  return <StyledType className={`${textStyle}`}>{text}</StyledType>;
};

export default Type;
