import styled from "styled-components";
import { ReactComponent as Spinner } from "../../../images/Ellipse.svg";

export const LoadingWrapper = styled.div`
  margin: 88px 0 140px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 48px;
    
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
      margin: 20px;
  };
`;

export const Paragraph = styled.p`
  margin: 0;
  font-size: ${({theme})=>theme.fontSize.sXL};
  line-height: ${({theme})=>theme.lineHeight.large};
  text-align: center;
  color: ${({ theme }) => theme.colors.textPrimary};
    
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: ${({theme})=>theme.fontSize.lM};
  };
`;

export const StyledSpinner = styled(Spinner)`
  border: 11px solid ${({ theme }) => theme.colors.spinner.border};
  border-radius: 50%;
  border-right-color: ${({ theme }) => theme.colors.spinner.animation};
  animation: rotate 1.4s linear infinite;
    
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    height: 100px;
    width: 100px;
    border-width: 6px;
  };

  @keyframes rotate {
      to {
        transform: rotate(360deg);
      };
    };
`;