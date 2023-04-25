import { createSlice } from "@reduxjs/toolkit";

const portfolioSlice = createSlice({
  name: "portfolio",
  initialState: {
    portfolio: null,
    portfolioState: "loading",
  },
  reducers: {
    fetchPortfolio: () => ({
      portfolioState: "loading",
      portfolio: null,
    }),
    fetchPortfolioSuccess: (_, { payload: portfolio }) => ({
      portfolioState: "success",
      portfolio,
    }),
    fetchPortfolioError: () => ({
      portfolioState: "error",
      portfolio: null,
    }),
  },
});

export const {
  fetchPortfolio,
  fetchPortfolioSuccess,
  fetchPortfolioError,
} = portfolioSlice.actions;

export const selectPortfolioSliceState = state => state.portfolio;
export const selectPortfolio = state => selectPortfolioSliceState(state).portfolio;
export const selectPortfolioState = state => selectPortfolioSliceState(state).portfolioState;

export default portfolioSlice.reducer;