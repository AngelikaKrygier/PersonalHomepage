import { WrapperError, Message, SubMessage, StyledIconDanger } from "./styled";
import { Button } from "../../../Button";

export const PortfolioError = () => (
    <WrapperError>
        <StyledIconDanger />
        <Message>Ooops! Something went wrong...</Message>
        <SubMessage>
            Sorry, failed to load Github projects.<br />
            You can check them directly on Github.
        </SubMessage>
        <Button
            destinationLink="https://github.com/AngelikaKrygier"
            content="Go to GitHub"
        />
    </WrapperError>
);