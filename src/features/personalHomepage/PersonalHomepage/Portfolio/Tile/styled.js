import styled from "styled-components";

export const StyledTile = styled.div`
    background-color: ${({ theme }) => theme.colors.tile.background};
    min-height: 322px;
    border: 6px solid rgba(209, 213, 218, 0.3);
    box-shadow: 0px -2px 50px rgba(9, 10, 51, 0.02), 0px 16px 58px rgba(9, 10, 51, 0.03);
    border-radius: ${({theme})=>theme.basicBorderRadious};
    padding: 56px;
        &:hover {
            border: 6px solid rgba(3, 102, 214, 0.2);
            box-shadow: 0px -2px 50px rgba(9, 10, 51, 0.02), 0px 16px 58px rgba(9, 10, 51, 0.03);
        }
        @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
            min-height: 230px;
            padding: 24px;
            max-width: 288px;
        };
`;

export const Header = styled.h3`
    color: ${({ theme }) => theme.colors.primary};
    font-size: 24px;
    line-height: 120%;
    margin:0px;
        @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
            font-size: 16px;
        };
`;

export const Description = styled.p`
    color: ${({ theme }) => theme.colors.textPrimary};
    margin:24px 0px 16px 0px;
    font-weight: ${({ theme }) => theme.fontWeight.regular};
    font-size: 18px;
    line-height: 140%;
        @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
            margin:16px 0px 16px 0px;
            font-size: 14px;
    };
`;

export const Span = styled.span`
    color: ${({ theme }) => theme.colors.textPrimary};
    font-weight: ${({ theme }) => theme.fontWeight.regular};
    font-size: 18px;
    line-height: 140%;
    display: flex;
    margin: 8px 0px 0px;
        @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
            font-size: 14px;
        };
`;

export const Link = styled.span`
    color: ${({ theme }) => theme.colors.primary};
        @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
            font-size: 14px;
            line-height: 120%;
        };
`;

