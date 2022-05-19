import styled from "styled-components";

type FlexProps = {
  children: any;
  column?: boolean;
  alignEnd?: boolean;
  gap?: "small" | "medium";
};

export const StyledFlex = styled.div`
  all: unset;
  display: flex;
  width: 100%;
  flex-direction: ${(props: FlexProps) => (props.column ? `column` : `row`)};
  gap: ${(props: FlexProps) =>
    props.gap === "medium"
      ? `var(--content-card-gap-default)`
      : `var(--content-card-gap-small)`};
  align-items: ${(props: FlexProps) =>
    props.alignEnd ? `flex-end` : `flex-start`};
  justify-content: flex-end;
`;

export const Flex = ({ column, children, alignEnd, gap }: FlexProps) => {
  return (
    <StyledFlex column={column} alignEnd={alignEnd} gap={gap}>
      {children}
    </StyledFlex>
  );
};

export default Flex;
