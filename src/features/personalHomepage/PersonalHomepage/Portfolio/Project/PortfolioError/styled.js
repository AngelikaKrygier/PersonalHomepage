import styled from "styled-components";
import { ReactComponent as IconDanger } from "../../../images/Danger.svg";

export const WrapperError = styled.div`
    margin: 95px 0px 140px ;
    display:flex;
    flex-direction: column;
    align-items: center;
    color: ${({ theme }) => theme.colors.textPrimary};
       
        @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
            margin: 50px 0px;
        };
`;

export const StyledIconDanger = styled(IconDanger)`
    width:37px;
    height:33px;
    margin: 0;
`;

export const Message = styled.p`
    margin: 23px 0px 0px;
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    font-size: 24px;
    line-height: 120%;
    text-align: center;
        
        @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
            font-size: 18px;
        };
`;

export const SubMessage = styled.p`
    margin: 23px 0px 32px;
    font-size: 20px;
    line-height: 140%;
    text-align: center;
       
        @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
                font-size: 16px;
            };
`;