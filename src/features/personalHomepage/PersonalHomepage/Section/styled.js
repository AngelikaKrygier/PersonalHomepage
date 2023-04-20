import styled from "styled-components";

export const Wrapper = styled.div`
    background-color: ${({theme})=>theme.colors.section.background};
    box-shadow: 0px -2px 50px rgba(9, 10, 51, 0.02), 0px 16px 58px rgba(9, 10, 51, 0.03);
    border-radius: 4px;
    padding: 32px;
    margin: 0px 0px 72px;
    width: 100%;
        @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
            margin: 0px 0px 50px;
            padding: 16px;
        }
`;

export const Header = styled.h1`
    font-weight: ${({ theme }) => theme.fontWeight.hardBold};
    font-size: 30px;
    line-height: 36px;
    letter-spacing: 0.05em;
    padding-bottom: 15px;
    margin: 0px;
    border-bottom: 1px solid ${({theme})=>theme.colors.section.headerUnderline};
    color: ${({theme})=>theme.colors.textPrimary};
        @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
            font-size: 18px;
            line-height: 22px;
            padding-bottom: 12px;
        }
`;

export const Body = styled.ul`
    padding: 32px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 8px;
    margin: 0;
    padding: 32px 0px 0px;
        @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
            grid-template-columns: 1fr;
            padding: 12px 0px 0px;
            grid-gap: 8px;
        };
`;

export const ListItem = styled.li`
    color: ${({theme})=>theme.colors.section.text};
    font-size: 18px;
    line-height: 140%;
    letter-spacing: 0.05em;
    list-style: none;
    display: flex;
    align-items: center;
    margin: 0px;
    &::before{
            content: " ";
            background-color: ${({theme})=>theme.colors.primary};
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
        font-size: 14px;
        line-height: 17px;
    }
`;