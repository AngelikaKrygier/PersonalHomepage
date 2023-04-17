import { Wrapper, Header, Paragraph, Div } from "./styled";
import { Tile } from "./Tile";
import { StyledGhPagesIcon } from "./styled";

export const Portfolio = () => (
    <Wrapper>
        <StyledGhPagesIcon/>
        <Header>Portfolio</Header>
        <Paragraph>My recent projects</Paragraph>
        <Div>
            <Tile />
            <Tile />
        </Div>
    </Wrapper>
);