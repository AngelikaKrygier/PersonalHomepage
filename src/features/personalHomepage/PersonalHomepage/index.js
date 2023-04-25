import { SwitchTheme } from "../../../common/SwitchTheme";
import { Header } from "./Header";
import { Skills } from "./Skills";
import { Portfolio } from "./Portfolio";
import { Footer } from "./Footer";
import { Container } from "../../../common/Container";

export const PersonalHomepage = () => (
    <Container>
        <SwitchTheme />
        <Header />
        <Skills />
        <Portfolio />
        <Footer />
    </Container>
);