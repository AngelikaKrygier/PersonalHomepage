import { PortfolioLoading } from "./PortfolioLoading";
import { PortfolioError } from "./PortfolioError";
import { PortfolioSuccess } from "./PortfolioSuccess";

export const Project = ({portfolioState, portfolio}) => {
    return <PortfolioError />;
    switch (portfolioState) {
        case "loading": 
        return <PortfolioLoading />;

        case "error": 
        return <PortfolioError />;

        case "success": 
        return <PortfolioSuccess portfolio={portfolio}/>;

        case "initial": 
        return null;
    };
};