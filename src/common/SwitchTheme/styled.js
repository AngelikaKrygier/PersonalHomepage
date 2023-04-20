import styled from "styled-components";

export const Wrapper = styled.div`
    align-self: flex-end;
    margin: 115px 0px 0px;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  color: ${({theme})=>theme.colors.switchTheme.text};
  background: transparent;
  font-size: 12px;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  text-transform: uppercase;
  line-height: 1.3;
  border: none;
  padding: 0px;
  cursor: pointer;
`;