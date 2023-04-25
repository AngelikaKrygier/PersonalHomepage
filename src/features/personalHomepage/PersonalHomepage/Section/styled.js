import styled from "styled-components";

export const Wrapper = styled.section`
    background-color: ${({ theme }) => theme.colors.section.background};
    box-shadow: ${({ theme }) => theme.basicBoxShadow};
    border-radius: ${({ theme }) => theme.basicBorderRadious};
    padding: 32px;
    margin: 0 0 72px;
    width: 100%;
        
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        margin: 0 0 50px;
        padding: 16px;
    };
`;

export const Header = styled.h1`
    font-weight: ${({ theme }) => theme.fontWeight.hardBold};
    font-size: ${({theme})=>theme.fontSize.sXXL};
    line-height: ${({theme})=>theme.lineHeight.basic};
    padding-bottom: 15px;
    margin: 0;
    border-bottom: 1px solid ${({ theme }) => theme.colors.section.headerUnderline};
    color: ${({ theme }) => theme.colors.textPrimary};
        
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        font-size: ${({theme})=>theme.fontSize.lM};
        padding-bottom: 12px;
    };
`;

export const Body = styled.ul`
    padding: 32px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 8px;
    margin: 0;
    padding: 32px 0 0;
        
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        grid-template-columns: 1fr;
        padding: 12px 0 0;
        grid-gap: 8px;
    };
`;

export const ListItem = styled.li`
    color: ${({ theme }) => theme.colors.section.text};
    font-size: ${({theme})=>theme.fontSize.lM};
    line-height: ${({theme})=>theme.lineHeight.large};
    list-style: none;
    display: flex;
    align-items: center;
    margin: 0;
        
    &::before{
        content: " ";
        background-color: ${({ theme }) => theme.colors.primary};
        display: block;
        height: 9px;
        width: 9px;
        margin-right: 16px;
        border-radius: 50%;
                
        @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
            height: 6px;
            width: 6px;
        };
        };
        
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        font-size: ${({theme})=>theme.fontSize.S};
        line-height: ${({theme})=>theme.lineHeight.basic};
    };
`;