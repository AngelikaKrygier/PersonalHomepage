import styled from "styled-components";

export const Div = styled.div`
    max-width: 680px;
    width: 100%;
    align-self: flex-start;
    margin: 120px 0px 109px;
        @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
            max-width: 288px;
            margin: 48px 0px 30px;
        };
`;

export const Caption = styled.p`
    color: ${({ theme }) => theme.color.slateGrey};
    margin: 0px;
    font-weight: 700;
    font-size: 12px;
    line-height: 130%;
`;

export const Header = styled.h2`
    color: ${({ theme }) => theme.color.mainShaft};
    margin: 24px 0px;
    cursor: pointer;
    font-weight: 900;
    font-size: 32px;
    line-height: 120%;
    letter-spacing: 0.05em;
        &:hover{
                color: ${({ theme }) => theme.color.scienceBlue}
        };

        @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
            font-size: 18px;
            margin: 12px 0px;
        };
`;

export const Paragraph = styled.p`
    color: ${({ theme }) => theme.color.mainShaft};
    margin: 0px 0px 56px;
    font-weight: 400;
    font-size: 18px;
    line-height: 140%;
    letter-spacing: 0.05em;
        @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
            font-size: 14px;
            line-height: 17px;
            margin: 0px 0px 40px;
        };
`;

