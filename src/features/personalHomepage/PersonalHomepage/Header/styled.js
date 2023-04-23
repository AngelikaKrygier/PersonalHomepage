import styled from "styled-components";
import { ReactComponent as MsgIcon } from "../images/message.svg";

export const Wrapper = styled.div`
    margin: 0px 0px 63px;
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-gap: 66px;
    align-items: center;
    width:100%;
        @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
            margin: 32px 0px 48px;
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

export const Div = styled.div`
    max-width: 633px;
    display: grid;
`;

export const Caption = styled.p`
    margin: 0px;
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    font-size: 12px;
    text-transform: uppercase;
`;

export const StyledHeader = styled.h1`
    color: ${({ theme }) => theme.colors.textPrimary};
    margin: 12px 0 0;
    font-weight: ${({ theme }) => theme.fontWeight.hardBold};
    font-size: 38px;
    line-height: 120%;
        @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
            font-size: 22px;
            margin: 8px 0 0;
        };
`;

export const Paragraph = styled.p`
    margin: 35px 0 32px;
    font-weight: ${({ theme }) => theme.fontWeight.regular};
    font-size: 20px;
    line-height: 140%;
        @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
            margin: 16px 0 24px;
            font-size: 17px;
        };
`;

export const MessageIcon = styled(MsgIcon)`
    width: 19px;
    height: 17px;
`;

