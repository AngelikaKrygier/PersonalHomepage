import { Section } from "../Section";
import { toLearnList } from "./toLearnList";

export const ToLearn = () => (
    <Section
        tittle="What I want to learn next&nbsp;🚀"
        skills={toLearnList}
    >
    </Section>
);