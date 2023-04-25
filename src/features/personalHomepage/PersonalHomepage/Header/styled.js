import styled from "styled-components";
import { ReactComponent as MsgIcon } from "../images/message.svg";

export const Wrapper = styled.header`
    margin: 0 0 63px;
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-gap: 66px;
    align-items: center;
    width:100%;
    
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        margin: 0 0 48px;
        grid-template-columns: 1fr;
        grid-gap: 13px;
    };
`;

export const Image = styled.img`
    max-width: 398px;
    border-radius: 100%;
        
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        max-width: 132px;
    };
`;

export const Contaiener = styled.div`
    max-width: 633px;
    display: grid;
`;

export const Caption = styled.p`
    margin: 0;
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    font-size: ${({theme})=>theme.fontSize.XS};
    text-transform: uppercase;
`;

export const StyledHeader = styled.h1`
    color: ${({ theme }) => theme.colors.textPrimary};
    margin: 12px 0 0;
    font-weight: ${({ theme }) => theme.fontWeight.hardBold};
    font-size: ${({theme})=>theme.fontSize.lXXL};
    line-height: ${({theme})=>theme.lineHeight.basic};
        
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        font-size: ${({theme})=>theme.fontSize.XL};
        margin: 8px 0 0;
    };
`;

export const Paragraph = styled.p`
    margin: 35px 0 32px;
    font-weight: ${({ theme }) => theme.fontWeight.regular};
    font-size: ${({theme})=>theme.fontSize.sXL};
    line-height: ${({theme})=>theme.lineHeight.large};
        
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        margin: 16px 0 24px;
        font-size: ${({theme})=>theme.fontSize.M};
    };
`;

export const MessageIcon = styled(MsgIcon)`
    width: 19px;
    height: 17px;
`;

