import styled from "styled-components";
import { ReactComponent as GhIcon } from "../images/GhIcon.svg";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Header = styled.h2`
    color:${({ theme }) => theme.color.mainShaft};
    margin:12px 0px 0px;
    font-weight: 900;
    font-size: 30px;
    line-height: 36px;
    letter-spacing: 0.05em;
        @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
            font-size: 18px;
            line-height: 22px;
        };
`;

export const Paragraph = styled.p`
    color:${({ theme }) => theme.color.mainShaft};
    margin: 8px 0px 24px;
    font-weight: 400;
    font-size: 20px;
    line-height: 140%;
    letter-spacing: 0.05em;
        @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
            font-size: 17px;
            margin: 16px 0px 24px;
        };
`;

export const Div = styled.div`
    display: grid;
    justify-content: center;
    grid-template-columns: 1fr 1fr;
    grid-gap:32px;
    margin: 0px;
        @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
            grid-template-columns: 1fr;
        };
`;

export const StyledGhPagesIcon = styled(GhIcon)`
    width: 60px;
    height: 60px;
    fill: ${({ theme }) => theme.color.scienceBlue};
`;


