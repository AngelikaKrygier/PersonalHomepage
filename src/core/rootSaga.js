import { all } from "redux-saga/effects";
import { watchThemeFromLocalStorage } from "../common/SwitchTheme/themeSaga";
import { watchFetchPortfolio } from "../features/personalHomepage/portfolioSaga";

export default function* rootSaga() {
    yield all([
        watchFetchPortfolio(),
        watchThemeFromLocalStorage(),
    ]);
};