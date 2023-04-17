import styled from "styled-components";

export const Div = styled.div`
max-width: 670px;
text-align: left;
align-self: flex-start;
margin: 120px 0px 109px;
`;

export const Caption = styled.p`
color: ${({ theme }) => theme.color.slateGrey};
margin: 0px;
font-weight: 700;
font-size: 12px;
line-height: 130%;
`;

export const Header = styled.h2`
color: ${({ theme }) => theme.color.mainShaft};
margin: 24px 0px 24px 0px;
font-weight: 900;
font-size: 32px;
line-height: 39px;
letter-spacing: 0.05em;
`;

export const Paragraph = styled.p`
color: ${({ theme }) => theme.color.slateGrey};
margin: 0px 0px 56px 0px;
font-weight: 400;
font-size: 18px;
line-height: 140%;
letter-spacing: 0.05em;
`;
