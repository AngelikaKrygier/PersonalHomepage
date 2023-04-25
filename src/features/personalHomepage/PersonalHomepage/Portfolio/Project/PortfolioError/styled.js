import styled from "styled-components";
import { ReactComponent as IconDanger } from "../../../images/Danger.svg";

export const WrapperError = styled.div`
    margin: 95px 0 140px ;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: ${({ theme }) => theme.colors.textPrimary};
       
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        margin: 50px 0;
    };
`;

export const StyledIconDanger = styled(IconDanger)`
    width: 37px;
    height: 33px;
    margin: 0;
`;

export const Message = styled.p`
    margin: 23px 0 0;
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    font-size: ${({theme})=>theme.fontSize.lXL};
    line-height: ${({theme})=>theme.lineHeight.basic};
    text-align: center;
        
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        font-size: ${({theme})=>theme.fontSize.lM};
    };
`;

export const SubMessage = styled.p`
    margin: 23px 0 32px;
    font-size: ${({theme})=>theme.fontSize.sXL};
    line-height: ${({theme})=>theme.lineHeight.large};
    text-align: center;
       
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        font-size: ${({theme})=>theme.fontSize.sM};
    };
`;