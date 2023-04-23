import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import themeReducers from "../common/SwitchTheme/themeSlice";
import rootSaga from "./rootSaga";
import portfolioReducers from "../features/personalHomepage/portfolioSlice";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        theme: themeReducers,
        portfolio: portfolioReducers,
    },
    middleware: [sagaMiddleware]
});

sagaMiddleware.run(rootSaga);
export default store;