
import { ReactComponent as GhPagesIcon } from "../images/GhIcon.svg";
import { ReactComponent as FbIcon } from "../images/FbIcon.svg";
import { ReactComponent as LnIcon } from "../images/LiIcon.svg";
import { styledIcon } from "./SocialMedia/styled";

export const socialMediaList = [
    {
        name: "GhPage",
        url: "https://github.com/AngelikaKrygier",
        Icon: styledIcon(GhPagesIcon),
    },
    {
        name: "Facebook",
        url: "https://pl-pl.facebook.com/",
        Icon: styledIcon(FbIcon),
    },
    {
        name: "LinkedIn",
        url: "https://pl.linkedin.com/",
        Icon: styledIcon(LnIcon),
    },
];