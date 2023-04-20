import styled from "styled-components";

export const Div = styled.div`
    align-self: flex-start;
    max-width: 680px;
    width: 100%;
    margin: 120px 0px 109px;
        @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
            max-width: 288px;
            margin: 48px 0px 30px;
        };
`;

export const Caption = styled.p`
    margin: 0px;
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    font-size: 12px;
    line-height: 130%;
`;

export const Header = styled.h2`
    margin: 24px 0px;
    color: ${({ theme }) => theme.colors.footer.primary};
    font-weight: ${({ theme }) => theme.fontWeight.hardBold};
    font-size: 32px;
    cursor: pointer;
        &:hover{
            color: ${({ theme }) => theme.colors.footer.hover}
        };

        @media (max-width: 768px) {
            margin: 12px 0px;
            font-size: 18px;
        };
`;

export const Paragraph = styled.p`
    margin: 0px 0px 56px;
    color: ${({ theme }) => theme.colors.footer.primary};
    font-weight: ${({ theme }) => theme.fontWeight.regular};
    font-size: 18px;
    line-height: 140%;
        @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
            font-size: 14px;
            line-height: 120%;
            margin: 0px 0px 40px;
        };
`;

