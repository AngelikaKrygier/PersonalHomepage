import { LoadingWrapper, Paragraph, StyledSpinner } from "./styled";

export const PortfolioLoading = () => (
    <LoadingWrapper>
        <Paragraph>
            Please wait, projects are being loaded…
        </Paragraph>
        <StyledSpinner/>
    </LoadingWrapper>
);