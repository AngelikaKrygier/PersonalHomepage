import { Wrapper, Image, Div, Caption, StyledHeader, Paragraph, Button } from "./styled";
import photo from "../images/Person.jpg";

export const Header = () => (
    <Wrapper>
        <Image img src={photo} />
        <Div>
            <Caption>This is</Caption>
            <StyledHeader>Angelika Krygier</StyledHeader>
            <Paragraph>
                👨🏻‍💻 I'm a frontend developer who really enjoys working with React and is interested 
                creating all kinds of IT systems that support companies such as CRM, WMS, ERP.<br/>
                Currently, I'm looking for new job opportunities in this field.
            </Paragraph>
            <Button>Hire me!</Button>
        </Div>
    </Wrapper>
);