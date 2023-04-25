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
        line-height: ${({theme})=>theme.lineHeight.basic};
        color: ${({ theme }) => theme.colors.content.text};
        background-color: ${({ theme }) => theme.colors.content.background};
    };
`;