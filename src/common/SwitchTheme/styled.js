import styled, { css } from "styled-components";
import { ReactComponent as SunIcon } from "./sun.svg";

export const Wrapper = styled.div`
  align-self: flex-end;
  margin: 0;
    
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    margin: 32px 0 0;
  };
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  background: transparent;
  color: inherit;
  font-size: ${({theme})=>theme.fontSize.XS};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  text-transform: uppercase;
  line-height: ${({theme})=>theme.lineHeight.medium};
  border: none;
  padding: 0;
  outline-offset: 8px;
  cursor: pointer;
`;

export const Text = styled.span`
  margin-right: 12px;
  font-size: ${({theme})=>theme.fontSize.XS};
  text-transform: uppercase;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
    
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    display: none;
  };
`;

export const Box = styled.span`
  border-radius: 13px;
  display: flex;
  padding: 3px;
  width: 48px;
  border: 1px solid ${({ theme }) => theme.colors.switchTheme.border};
  background: ${({ theme }) => theme.colors.switchTheme.background};
`;

export const IconWrapper = styled.span`
  border-radius: 100%;
  display: flex;
  background: ${({ theme }) => theme.colors.switchTheme.backgroundIcon};
  padding: 3px;
  transition: transform 0.3s;
    
    ${({ moveToRight }) => moveToRight && css`
      transform: translateX(20px)`};
`;

export const Icon = styled(SunIcon)`
    stroke: ${({ theme }) => theme.colors.switchTheme.icon};
    fill: ${({ theme }) => theme.colors.switchTheme.icon};
`;