import styled from "styled-components";

type CardProps = {
  children: any;
  gap?: "small" | "medium";
};

export const StyledCard = styled.div<CardProps>`
  all: unset;
  width: 360px;
  padding: var(--content-card-padding-default-all);
  background-color: var(--bg-default);
  border-radius: var(--border-radius-xl);
  display: flex;
  flex-direction: column;
  gap: var(--content-card-gap-default);
  align-items: flex-start;
  align-contents: flex-start;
`;

export const Card = ({ children }: CardProps) => {
  return <StyledCard>{children}</StyledCard>;
};

export default Card;
