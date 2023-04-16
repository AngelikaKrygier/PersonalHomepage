import styled from "styled-components";

export const Wrapper = styled.div`
background-color: ${({ theme }) => theme.color.white};
box-shadow: 0px -2px 50px rgba(9, 10, 51, 0.02), 0px 16px 58px rgba(9, 10, 51, 0.03);
border-radius: 4px;
max-width: 1216px;
padding: 32px;
margin-top:63px;
`;

export const Header = styled.h1`
font-weight: 900;
font-size: 30px;
line-height: 36px;
letter-spacing: 0.05em;
padding-bottom: 15px;
border-bottom: 1px solid ${({ theme }) => theme.color.iron};
`;

export const Body = styled.ul`
display:grid;
grid-template-columns: 1fr 1fr 1fr;
justify-content: space-between;
grid-gap: 8px;
padding: 0px;
`;

export const ListItem = styled.li`
color: ${({ theme }) => theme.color.slateGrey};
font-size: 18px;
line-height: 140%;
letter-spacing: 0.05em;
list-style: none;
display: flex;
align-items: center;
margin: 0px;
&::before{
        content: " ";
        background-color: ${({ theme }) => theme.color.scienceBlue};
        display: block;
        height: 9px;
        width: 9px;
        margin-right: 16px;
        border-radius: 50%;
}
`;