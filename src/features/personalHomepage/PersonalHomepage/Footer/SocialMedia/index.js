import { IconContainer } from "./styled";

export const SocialMedia = ({ socialMediaList }) => (
    <IconContainer>
        {socialMediaList.map(({ name, url, Icon }) => (
            <li key={name}>
                <a href={url} title={name} target="_blank" rel="noreferrer noopener">
                    <Icon />
                </a>
            </li>
        ))}
    </IconContainer>
);