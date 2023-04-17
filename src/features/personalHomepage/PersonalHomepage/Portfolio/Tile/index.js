import { StyledTile, Header, Description, Span, Link } from "./styled";

export const Tile = () => (
    <StyledTile>
        <Header>Movies Brovser</Header>
        <Description>
            Project description, e.g. website where you can search
            for favourite movies and people.
            Project description, e.g. website where you can search.
        </Description>
        <Span>
            Demo:
            <Link>https://link.demo.comd</Link>
        </Span>
        <Span>
            Code:
            <Link>https://link.demo.com</Link>
        </Span>
    </StyledTile>
);