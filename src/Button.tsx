import styled from "styled-components";
import "./variables/variables.css";

interface ButtonProps {
  title: string;
  secondary?: boolean;
  onClick?: any;
}

export const StyledButton = styled.button`
  all: unset;
  padding: var(--button-padding-medium-top-bottom)
    var(--button-padding-medium-left-right);
  background-color: var(--button-base-primary);
  border-radius: var(--button-border-radius-medium);
  cursor: pointer;
  font-family: var(--button-label-medium-font-family);
  font-weight: var(--button-label-medium-font-weight);
  line-height: var(--button-label-medium-line-height);
  font-size: var(--button-label-medium-font-size);
  letter-spacing: var(--button-label-medium-letter-spacing);
  display: inline-block;
  flex-grow: 0;
  align-self: flex-end;

  &:hover {
    background-color: var(--button-base-primary-hover);
  }

  &.secondary {
    background-color: var(--button-base-secondary);
  }
  &.secondary:hover {
    background-color: var(--button-base-secondary-hover);
  }
`;

export const Button = ({ title, secondary, onClick }: ButtonProps) => {
  return (
    <StyledButton className={secondary ? "secondary" : ""} onClick={onClick}>
      {title}
    </StyledButton>
  );
};

export default Button;
