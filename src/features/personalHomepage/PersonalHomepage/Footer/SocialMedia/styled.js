import styled from "styled-components";

export const IconContainer = styled.ul`
    display: flex;
    gap: 24px;
    padding: 0;
    list-style: none;
`;

export const styledIcon = (Icon) => styled(Icon)`
    width: 48px;
    height: 48px;
    cursor: pointer;
    fill: ${({ theme }) => theme.colors.footer.primary};
    transition: 0.5s;
    
    &:hover{
        fill: ${({ theme }) => theme.colors.footer.hover};
    };
        
    @media (max-width: ${({ theme }) => theme.breakpoint.small}px) {
        width: 32px;
    };
`;

