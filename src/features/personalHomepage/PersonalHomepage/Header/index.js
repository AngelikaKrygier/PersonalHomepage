import { Wrapper, Image, Contaiener, Caption, StyledHeader, Paragraph, MessageIcon } from "./styled";
import { Button } from "../Button";
import photo from "../images/Person.jpg";

export const Header = () => (
    <Wrapper>
        <Image img src={photo} alt="Angelika Krygier" />
        <Contaiener>
            <Caption>This is</Caption>
            <StyledHeader>Angelika Krygier</StyledHeader>
            <Paragraph>
                👨🏻‍💻 I'm a frontend developer who really enjoys working with React and is interested
                all kinds of IT systems that support companies such as CRM, WMS, ERP.<br />
                Currently, I'm looking for new job opportunities in this field.
            </Paragraph>
            <Button
                destinationLink="mailto:angelika.krygier.ak.gmail.com"
                icon={<MessageIcon />}
                content="Hire Me"
            />
        </Contaiener>
    </Wrapper>
);