import styled from "styled-components"

export const List = styled.ul`
max-width: 1215px;
margin: 24px 0px 120px;
width: 100%;
display: grid;
grid-template-columns: repeat(2, 1fr);
list-style:none;
padding: 0px;
grid-gap:32px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        grid-template-columns: 1fr;
        grid-gap:24px;
    };
`;

export const StyledTile = styled.li`
    background-color: ${({ theme }) => theme.colors.tile.background};
    display: grid;
    grid-template-columns: auto;
    min-height: 322px;
    border: 6px solid ${({ theme }) => theme.colors.tile.border};
    box-shadow: ${({ theme }) => theme.basicBoxShadow};
    border-radius: ${({ theme }) => theme.basicBorderRadious};
    padding: 56px;
    transition: border-color 0.5s ease;
        &:hover {
            border: 6px solid ${({ theme }) => theme.colors.tile.borderHover};
        }
        @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
            min-height: 230px;
            padding: 24px;
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
    display:flex;
    align-self: self-end;
    gap:8px;
    margin: 8px 0px 0px;
        @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
            font-size: 14px;
        };
`;

export const Link = styled.a`
    color: ${({ theme }) => theme.colors.primary};
    margin:0px;
    text-decoration:none;
    cursor: pointer;
        &:hover {
            border-bottom: 1px solid;
        };

        @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
            font-size: 14px;
            line-height: 120%;
        };
`;