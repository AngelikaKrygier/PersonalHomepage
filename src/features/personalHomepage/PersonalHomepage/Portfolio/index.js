import { Wrapper, Header, Paragraph } from "./styled";
import { StyledGhPagesIcon } from "./styled";
import { Project } from "./Project";
import { useEffect } from "react";
import { fetchPortfolio, selectPortfolio, selectPortfolioState } from "../../portfolioSlice";
import { useDispatch, useSelector } from "react-redux";

export const Portfolio = () => {
    const dispatch = useDispatch();
    const portfolioState = useSelector(selectPortfolioState);
    const portfolio = useSelector(selectPortfolio);

    useEffect(() => {
        dispatch(fetchPortfolio())
    }, [])

    return (
        <Wrapper>
            <StyledGhPagesIcon />
            <Header>Portfolio</Header>
            <Paragraph>My recent projects</Paragraph>
            <Project
                portfolio={portfolio}
                portfolioState={portfolioState}
            />
        </Wrapper>
    );
};