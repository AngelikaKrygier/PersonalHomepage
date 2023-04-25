import styled from "styled-components"

export const List = styled.ul`
    max-width: 1215px;
    margin: 24px 0 120px;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    list-style: none;
    padding: 0;
    grid-gap: 32px;
        
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        grid-template-columns: 1fr;
        grid-gap: 24px;
        margin: 24px 0 0;
    };
`;

export const StyledTile = styled.li`
    background-color: ${({ theme }) => theme.colors.tile.background};
    display: grid;
    grid-template-columns: auto;
    border: 6px solid ${({ theme }) => theme.colors.tile.border};
    box-shadow: ${({ theme }) => theme.basicBoxShadow};
    border-radius: ${({ theme }) => theme.basicBorderRadious};
    padding: 56px;
    transition: 0.5s;
    
    &:hover {
            border: 6px solid ${({ theme }) => theme.colors.tile.borderHover};
    };
        
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        min-height: 230px;
        padding: 24px;
    };
`;

export const Header = styled.h3`
    color: ${({ theme }) => theme.colors.primary};
    font-size: ${({theme})=>theme.fontSize.lXL};
    line-height: ${({theme})=>theme.lineHeight.basic};
    margin: 0;
        
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        font-size: ${({theme})=>theme.fontSize.sM};
    };
`;

export const Description = styled.p`
    color: ${({ theme }) => theme.colors.textPrimary};
    margin: 24px 0 16px 0;
    font-weight: ${({ theme }) => theme.fontWeight.regular};
    font-size: ${({theme})=>theme.fontSize.lM};
    line-height: ${({theme})=>theme.lineHeight.large};
    text-align: justify;
        
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        margin: 16px 0 16px 0;
        font-size: ${({theme})=>theme.fontSize.S};
    };
`;

export const Span = styled.span`
    color: ${({ theme }) => theme.colors.textPrimary};
    font-weight: ${({ theme }) => theme.fontWeight.regular};
    font-size: ${({theme})=>theme.fontSize.lM};
    line-height: ${({theme})=>theme.lineHeight.large};
    display: flex;
    align-self: self-end;
    gap: 8px;
    margin: 8px 0 0;
        
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        font-size: ${({theme})=>theme.fontSize.S};
    };
`;

export const Link = styled.a`
    color: ${({ theme }) => theme.colors.primary};
    margin: 0;
    text-decoration:none;
    cursor: pointer;
        
    &:hover {
        text-decoration: underline;
    };
        
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        font-size: ${({theme})=>theme.fontSize.S};
        line-height: ${({theme})=>theme.lineHeight.basic};
    };
`;