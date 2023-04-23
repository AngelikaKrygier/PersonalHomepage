import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
    };

    *,
    ::after,
    ::before {
        box-sizing: inherit;
    };

    body {
        display: flex;
        justify-content: center;
        font-family: 'Inter', sans-serif;
        letter-spacing: 0.05em;
        line-height: 120%;
        color: ${({ theme }) => theme.colors.content.text};
        background-color: ${({ theme }) => theme.colors.content.background};
        transition: background 0.5s;
    };

    #root {
        max-width: 1216px;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 0px;
            @media (max-width:${({ theme }) => theme.breakpoint.mobileMax}px) {
                width: 292px;
            };
    };
`;