import styled from "styled-components";
import "./variables/variables.css";

interface ButtonProps {
  title: string;
  variant?: "primary" | "secondary" | "sensitive";
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
    background-color: transparent;
    color: var(--button-foreground-primary-inverts);
    box-shadow: inset 0 0 0 var(--button-border-width-medium)
      var(--button-border-primary);
  }

  &.secondary:hover {
    background-color: var(--button-base-secondary-hover);
  }

  &.secondary:active {
    background-color: var(--button-base-secondary-pressed);
  }

  &.sensitive {
    background-color: var(--button-base-secondary);
  }
  &.sensitive:hover {
    background-color: var(--button-base-secondary-hover);
  }
`;

export const Button = ({ title, variant, onClick }: ButtonProps) => {
  return (
    <StyledButton className={variant} onClick={onClick}>
      {title}
    </StyledButton>
  );
};

export default Button;
