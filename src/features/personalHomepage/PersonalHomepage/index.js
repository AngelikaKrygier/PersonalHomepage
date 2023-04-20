import { SwitchTheme } from "../../../common/SwitchTheme";
import { Header } from "./Header";
import { Skills } from "./Skills";
import { ToLearn } from "./ToLearn";
import { Portfolio } from "./Portfolio";
import { Footer } from "./Footer";

export const PersonalHomepage = () => (
    <>
        <SwitchTheme />
        <Header />
        <Skills />
        <ToLearn />
        <Portfolio />
        <Footer />
    </>
);