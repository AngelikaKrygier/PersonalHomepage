import styled, { css } from "styled-components";
import { ReactComponent as GhPagesIcon } from "../../images/GhIcon.svg";
import { ReactComponent as FbIcon } from "../../images/FbIcon.svg";
import { ReactComponent as LnIcon } from "../../images/LiIcon.svg";

export const IconContainer = styled.div`
    display: flex;
    gap: 24px;
`;

const Icon = css`
    width: 48px;
    height: 48px;
    cursor: pointer;
    fill: ${({ theme }) => theme.color.mainShaft};
        &:hover{
            fill: ${({ theme }) => theme.color.scienceBlue}
        };
`;

export const StyledGhPagesIcon = styled(GhPagesIcon)`
   ${Icon}
`;

export const StyledFbIcon = styled(FbIcon)`
    ${Icon}
`;

export const StyledLnIcon = styled(LnIcon)`
    ${Icon}
`;
