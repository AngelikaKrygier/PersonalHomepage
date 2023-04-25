import styled from "styled-components";
import { ReactComponent as GhIcon } from "../images/GhIcon.svg";

export const Wrapper = styled.article`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`;

export const Header = styled.h2`
    color: ${({ theme }) => theme.colors.textPrimary};
    margin: 12px 0 0;
    font-weight: ${({ theme }) => theme.fontWeight.hardBold};
    font-size: ${({theme})=>theme.fontSize.sXXL};
    line-height: ${({theme})=>theme.lineHeight.basic};
        
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        font-size: ${({theme})=>theme.fontSize.lM};
    };
`;

export const Paragraph = styled.p`
    color: ${({ theme }) => theme.colors.textPrimary};
    margin: 8px 0 0;
    font-weight: ${({ theme }) => theme.fontWeight.regular};
    font-size: ${({theme})=>theme.fontSize.sXL};
    line-height: ${({theme})=>theme.lineHeight.large};
        
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        font-size: ${({theme})=>theme.fontSize.M};
        margin: 16px 0 0;
    };
`;

export const StyledGhPagesIcon = styled(GhIcon)`
    width: 60px;
    height: 60px;
    fill: ${({ theme }) => theme.colors.primary};
`;


