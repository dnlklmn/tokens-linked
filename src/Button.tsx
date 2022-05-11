import styled from "styled-components";
import "./variables/variables.css";

interface ButtonProps {
  title: string;
  secondary?: boolean;
  onClick?: any;
}

export const StyledButton = styled.button`
  all: unset;
  padding: var(--button-padding-default-top-bottom)
    var(--button-padding-default-left-right);
  background-color: var(--button-base-primary);
  border-radius: var(--border-radius-full);
  cursor: pointer;
  font-family: var(--button-medium-font-family);
  font-weight: var(--button-medium-font-weight);
  line-height: var(--button-medium-line-height);
  font-size: var(--button-medium-font-size);
  letter-spacing: var(--button-medium-letter-spacing);
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
