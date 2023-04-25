import { PortfolioLoading } from "./PortfolioLoading";
import { PortfolioError } from "./PortfolioError";
import { PortfolioSuccess } from "./PortfolioSuccess";

export const Project = ({ portfolioState, portfolio }) => {

    switch (portfolioState) {
        case "loading":
            return <PortfolioLoading />;

        case "success":
            return <PortfolioSuccess portfolio={portfolio} />;

        default:
            return <PortfolioError />;
    };
};