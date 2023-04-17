import { Div, Caption, Header, Paragraph } from "./styled";
import { ReactComponent as GitHubPagesIcon } from "../images/GhIcon.svg";

export const Footer = () => (
    <Div>
        <Caption>LETS'S TALK</Caption>
        <Header>angelika.krygier96@gmail.com</Header>
        <Paragraph>I'm always open to new projects whenever
            I have the time. If you have a website, dashboard or
            mobile app in mind and need some help to make your ideas come to life,
            feel free to conatct me
        </Paragraph>
        <div>
            <GitHubPagesIcon></GitHubPagesIcon>
        </div>
    </Div>
);
