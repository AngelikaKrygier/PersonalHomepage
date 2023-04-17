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
        font-family: 'Inter', sans-serif;
        background-color: ${({ theme }) => theme.color.mercury};
        display: flex;
        justify-content: center;
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