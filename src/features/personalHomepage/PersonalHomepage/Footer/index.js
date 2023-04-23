import { Div, Caption, Header, Paragraph } from "./styled";
import { socialMediaList } from "./socialMediaList";
import { SocialMedia } from "./SocialMedia";

export const Footer = () => (
    <Div>
        <Caption>Lets's talk</Caption>
        <Header>angelika.krygier.ak@gmail.com</Header>
        <Paragraph>
            I'm always open to new projects. If you have a website, dashboard or&nbsp;mobile 
            app in mind and need some help to make your ideas come to&nbsp;life,
            feel free to conatct me.
        </Paragraph>
        <SocialMedia socialMediaList={socialMediaList}></SocialMedia>
    </Div>
);
