import styled from "styled-components";

export const Wrapper = styled.div`
max-width: 1216px;
max-height: 398px;
margin-top: 115px;
display:grid;
grid-template-columns: 1fr 2fr;
grid-gap: 66px;
align-items: center;
`;

export const Image = styled.img`
max-width: 398px;
border-radius: 100%;
border: 1px solid;
`;

export const Div = styled.div`
max-width: 633px;
`;

export const Caption = styled.p`
color: ${({ theme }) => theme.color.slateGrey};
font-weight: 700;
font-size: 12px;
line-height: 130%;
`;

export const StyledHeader = styled.h1`
font-weight: 900;
font-size: 38px;
line-height: 46px;
`;

export const Paragraph = styled.p`
color: ${({ theme }) => theme.color.slateGrey};
font-weight: 400;
font-size: 20px;
line-height: 140%;
letter-spacing: 0.05em;
`;

export const Button = styled.button`
color: ${({ theme }) => theme.color.white};
background-color: ${({ theme }) => theme.color.scienceBlue};
border: none;
padding: 12px;
width: 154px;
height: 49px;
border: 1px solid rgba(209, 213, 218, 0.3);
border-radius: 4px;
`;

