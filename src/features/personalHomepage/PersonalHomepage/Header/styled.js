import styled from "styled-components";

export const Wrapper = styled.div`
    margin: 0px 0px 63px;
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-gap: 66px;
    align-items: center;
    width:100%;
        @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
            grid-template-columns: 1fr;
            grid-gap: 13px;
            margin: 32px 0px 48px;
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
    color: ${({ theme }) => theme.colors.content.text};
    margin: 0px;
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    font-size: 12px;
    line-height: 130%;
    text-transform: uppercase;
`;

export const StyledHeader = styled.h1`
    color: ${({ theme }) => theme.colors.textPrimary};
    margin: 12px 0 0;
    font-weight: ${({ theme }) => theme.fontWeight.hardBold};
    font-size: 38px;
    line-height: 46px;
    letter-spacing: 0.05em;
        @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
            font-size: 22px;
            line-height: 27px;
            margin: 8px 0 0;
        };
`;

export const Paragraph = styled.p`
    color: ${({ theme }) => theme.colors.content.text};
    margin: 35px 0 32px;
    font-weight: ${({ theme }) => theme.fontWeight.regular};
    font-size: 20px;
    line-height: 140%;
    letter-spacing: 0.05em;
        @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
            margin: 16px 0 24px;
            font-size: 17px;
        };
`;

export const Button = styled.button`
    color: ${({ theme }) => theme.colors.buttonLink.text};
    background-color: ${({ theme }) => theme.colors.primary};
    text-align: center;
    border: none;
    padding: 12px;
    width: 154px;
    height: 49px;
    border: 1px solid ${({ theme }) => theme.colors.buttonLink.border};
    border-radius: 4px;
    font-weight: ${({ theme }) => theme.fontWeight.medium};
    font-size: 20px;
    line-height: 24px;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    cursor: pointer;

        &:hover {
            border: 1px solid ${({ theme }) => theme.colors.buttonLink.border};
            box-shadow: 2px -2px 0px #8CC2FF;
            border-radius: 4px;
        }

        &:active {
            border: 1px solid ${({ theme }) => theme.colors.buttonLink.border};
            box-shadow: inset 0px 2px 0px rgba(20, 70, 32, 0.2);
            border-radius: 4px;
        }

        @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
            width: 138px;
            height: 46px;
            font-size: 18px;
            line-height: 22px;
        };
`;

