import styled from "styled-components";

export const StyledButton = styled.button`
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 17px;
    height: 49px;
    border: 1px solid ${({theme})=>theme.colors.buttonLink.border};
    color: ${({ theme }) => theme.colors.buttonLink.text};
    background-color: ${({ theme }) => theme.colors.primary};
    border-radius: ${({ theme }) => theme.basicBorderRadious};
    font-weight: ${({ theme }) => theme.fontWeight.medium};
    font-size: ${({theme})=>theme.fontSize.sXL};
    line-height: ${({theme})=>theme.lineHeight.basic};
    transition: 0.3s;
    cursor: pointer;

    &:hover {
        border: 1px solid ${({ theme }) => theme.colors.buttonLink.border};
        box-shadow: 2px -2px 0 ${({ theme }) => theme.colors.buttonLink.hover},
            -2px 2px 0 ${({ theme }) => theme.colors.buttonLink.hover},
            2px 2px 0 ${({ theme }) => theme.colors.buttonLink.hover},
            -2px -2px 0 ${({ theme }) => theme.colors.buttonLink.hover};
    };

    &:active {
        border: 1px solid ${({ theme }) => theme.colors.buttonLink.border};
        box-shadow: inset 0 2px 0 ${({ theme }) => theme.colors.buttonLink.active};
    };
        
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        height: 46px;
        font-size: ${({theme})=>theme.fontSize.lM};
    };
`;

export const ButtonLink = styled.a`
    text-decoration: none;
`;