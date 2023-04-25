import styled from "styled-components";

export const FooterContainer = styled.footer`
    align-self: flex-start;
    max-width: 680px;
    width: 100%;
    margin: 0 0 109px;
        
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        max-width: 288px;
        margin: 48px 0 30px;
    };
`;

export const Caption = styled.p`
    margin: 0;
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    font-size: ${({theme})=>theme.fontSize.XS};
    line-height: ${({theme})=>theme.lineHeight.medium};
    text-transform: uppercase;
`;

export const Header = styled.h2`
    margin: 24px 0;
    color: ${({ theme }) => theme.colors.footer.primary};
    font-weight: ${({ theme }) => theme.fontWeight.hardBold};
    font-size: ${({theme})=>theme.fontSize.XXL};
    cursor: pointer;
    transition: 0.5s;
    
    &:hover{
        color: ${({ theme }) => theme.colors.footer.hover}
    };
        
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        margin: 12px 0;
        font-size: ${({theme})=>theme.fontSize.lM};
    };
`;

export const Paragraph = styled.p`
    margin-bottom: 56px;
    color: ${({ theme }) => theme.colors.footer.primary};
    font-weight: ${({ theme }) => theme.fontWeight.regular};
    font-size: ${({theme})=>theme.fontSize.lM};
    line-height: ${({theme})=>theme.lineHeight.large};
       
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        font-size: ${({theme})=>theme.fontSize.S};
        line-height: ${({theme})=>theme.lineHeight.basic};
        margin-bottom: 40px;
    };
`;

export const Link = styled.a`
    text-decoration: none;
    color: ${({ theme }) => theme.colors.footer.primary};
    
    &:hover{
        color: ${({ theme }) => theme.colors.footer.hover}
    };
`;
