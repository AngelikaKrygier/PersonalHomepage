import styled from "styled-components";
import { ReactComponent as GhIcon } from "../images/GhIcon.svg";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width:100%;
`;

export const Header = styled.h2`
    color: ${({ theme }) => theme.colors.textPrimary};
    margin:12px 0px 0px;
    font-weight: ${({ theme }) => theme.fontWeight.hardBold};
    font-size: 30px;
    line-height: 120%;
        @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
            font-size: 18px;
        };
`;

export const Paragraph = styled.p`
    color:${({ theme }) => theme.colors.textPrimary};
    margin: 8px 0px 0px;
    font-weight: ${({ theme }) => theme.fontWeight.regular};
    font-size: 20px;
    line-height: 140%;
        @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
            font-size: 17px;
            margin: 16px 0px 24px;
        };
`;

export const StyledGhPagesIcon = styled(GhIcon)`
    width: 60px;
    height: 60px;
    fill: ${({ theme }) => theme.colors.primary};
`;


