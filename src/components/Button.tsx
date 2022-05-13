import styled from "styled-components";
import "../variables/variables.css";

interface ButtonProps {
  title?: string;
  variant?: "primary" | "secondary" | "sensitive";
  size?: "small" | "medium" | "large";
  onClick?: any;
}

export const StyledButton = styled.button<ButtonProps>`
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

  &.small {
    padding: var(--button-padding-small-top-bottom)
      var(--button-padding-small-left-right);
    font-family: var(--button-label-small-font-family);
    font-weight: var(--button-label-small-font-weight);
    line-height: var(--button-label-small-line-height);
    font-size: var(--button-label-small-font-size);
    letter-spacing: var(--button-label-small-letter-spacing);
  }

  &.large {
    padding: var(--button-padding-large-top-bottom)
      var(--button-padding-large-left-right);
    font-family: var(--button-label-large-font-family);
    font-weight: var(--button-label-large-font-weight);
    line-height: var(--button-label-large-line-height);
    font-size: var(--button-label-large-font-size);
    letter-spacing: var(--button-label-large-letter-spacing);
  }

  &:hover {
    background-color: var(--button-base-primary-hover);
  }

  &:active {
    background-color: var(--button-base-primary-pressed);
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
  &.sensitive:active {
    background-color: var(--button-base-secondary-pressed);
  }

  &:focus-visible {
    background-color: var(--button-base-primary);
    box-shadow: inset 0 0 0 var(--button-border-width-medium)
      var(--button-border-focused);
  }
`;

export const Button = ({ title, variant, size, onClick }: ButtonProps) => {
  return (
    <StyledButton className={`${variant} ${size}`} onClick={onClick}>
      {title}
    </StyledButton>
  );
};

/** @component */
export default Button;
