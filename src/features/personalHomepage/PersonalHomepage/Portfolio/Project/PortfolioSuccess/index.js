import { List, StyledTile, Header, Description, Span, Link } from "./styled";

export const PortfolioSuccess = ({ portfolio }) => (
    <List>
        {portfolio.map(({ id, name, description, homepage, html_url }) => (
            <StyledTile key={id}>
                <Header>{name}</Header>
                <Description>{description}</Description>
                {!!homepage && (
                    <Span>
                        <dt>Demo:</dt>
                        <Link href={homepage} target="_blank" rel="noreferrer" >Project Demo</Link>
                    </Span>
                )}
                <Span>
                    <dt>Code:</dt>
                    <Link target="_blank" rel="noreferrer" href={html_url} >Link to code</Link>
                </Span>
            </StyledTile>
        ))}
    </List>
);