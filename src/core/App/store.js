import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import themeReducers from "../../common/SwitchTheme/themeSlice";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        theme: themeReducers
    },
    middleware: [sagaMiddleware]
});

sagaMiddleware.run(rootSaga);

export default store;