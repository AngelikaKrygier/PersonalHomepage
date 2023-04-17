import { Wrapper, Header, Body, ListItem } from "./styled";

export const Section = ({ tittle, skills }) => (
    <Wrapper>
        <Header>{tittle}</Header>
        <Body>
            {skills.map(skill => (
                <ListItem>{skill}</ListItem>
            ))}
        </Body>
    </Wrapper>
);