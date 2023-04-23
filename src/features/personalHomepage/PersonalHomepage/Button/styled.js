import styled from "styled-components";

export const StyledButton = styled.button`
    display:flex;
    align-items: center;
    gap: 16px;
    padding: 17px;
    border: 1px solid ${({theme})=>theme.colors.buttonLink.border};
    height: 49px;
    color: ${({ theme }) => theme.colors.buttonLink.text};
    background-color: ${({ theme }) => theme.colors.primary};
    border-radius: ${({ theme }) => theme.basicBorderRadious};
    font-weight: ${({ theme }) => theme.fontWeight.medium};
    font-size: 20px;
    line-height: 120%;
    transition: 0.3s;
    cursor: pointer;
        &:hover {
            border: 1px solid ${({ theme }) => theme.colors.buttonLink.border};
            box-shadow: 2px -2px 0px ${({ theme }) => theme.colors.buttonLink.hover};
        };
        &:active {
            border: 1px solid ${({ theme }) => theme.colors.buttonLink.border};
            box-shadow: inset 0px 2px 0px ${({ theme }) => theme.colors.buttonLink.active};
        };
        @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
            height: 46px;
            font-size: 18px;
        };
`;

export const ButtonLink = styled.a`
    text-decoration: none;
`;