import { Section } from "../Section";
import { toLearnList } from "./toLearnList";

export const ToLearn = () => (
    <Section
        tittle="What I want to learn next🚀"
        skills={toLearnList}
    >
    </Section>
);