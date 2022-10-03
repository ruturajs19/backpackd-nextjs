import styled from "styled-components";

export const ButtonWrapper = styled.button<{ width?: string; height?: string }>`
  width: ${({ width }) => width ?? "fit-content"};
  height: ${({ height }) => height};
  /* padding: 4% 5%; */
  border: none;
  border-radius: 0.25rem;
  color: #fff;
  background-color: #1266f1;
  box-shadow: 0 2px 5px 0 rgb(0 0 0 / 20%), 0 2px 10px 0 rgb(0 0 0 / 10%);
`;
