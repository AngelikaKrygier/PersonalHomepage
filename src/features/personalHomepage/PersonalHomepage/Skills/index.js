import { Section } from "../Section";
import { skillsList } from "./skillsList";
import {toLearnList} from "./toLearnList"

export const Skills = () => (
    <>
        <Section
            tittle="My skillset includes 🛠️"
            skills={skillsList}
        >
        </Section>
        <Section
            tittle="What I want to learn next&nbsp;🚀"
            skills={toLearnList}
        >
        </Section>
    </>
);