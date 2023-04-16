import { Wrapper, Image, Div, Caption, StyledHeader, Paragraph, Button } from "./styled";
import photo from "../images/Osoba.jpg";

export const Header = () => (
    <Wrapper>
        <Image img src={photo} />
        <Div>
            <Caption>THIS IS</Caption>
            <StyledHeader>Angelika Krygier</StyledHeader>
            <Paragraph>
                👨🏻‍💻 I'm a passionate Frontend Developer in love with React,
                currently looking for new job opportunities.
            </Paragraph>
            <Button>HIRE ME!</Button>
        </Div>
    </Wrapper>
);