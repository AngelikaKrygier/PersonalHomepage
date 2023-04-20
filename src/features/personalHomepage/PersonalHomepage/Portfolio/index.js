import { Wrapper, Header, Paragraph, Div } from "./styled";
import { Tile } from "./Tile";
import { StyledGhPagesIcon } from "./styled";
import { useSelector } from "react-redux";
import { selectPortfolio, selectPortfolioLoading } from "../portfolioSlice";

export const Portfolio = () => {
    const loading = useSelector(selectPortfolioLoading)
    const portfolio = useSelector(selectPortfolio)

    return (
        <Wrapper>
            <StyledGhPagesIcon />
            <Header>Portfolio</Header>
            <Paragraph>My recent projects</Paragraph>
            <Div>
                {loading ? "Please wait, projects are being loaded..." : portfolio}
            </Div>
        </Wrapper>

    );
};