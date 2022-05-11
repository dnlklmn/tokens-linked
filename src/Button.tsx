import styled from "styled-components";
import "./variables/variables.css";

interface ButtonProps {
  title: string;
}

export const StyledButton = styled.button`
  all: unset;
  padding: var(--button-padding-default-top-bottom)
    var(--button-padding-default-left-right);
  background-color: var(--button-base-primary);
  border-radius: var(--border-radius-md);
  cursor: pointer;
  font-family: var(--button-default-font-family);
  font-weight: var(--button-default-font-weight);
  line-height: var(--button-default-line-height);
  font-size: var(--button-default-font-size);
  letter-spacing: var(--button-default-letter-spacing);

  &:hover {
    background-color: var(--button-base-primary-hover);
  }
`;

export const Button = ({ title }: ButtonProps) => {
  return <StyledButton>{title}</StyledButton>;
};

export default Button;
