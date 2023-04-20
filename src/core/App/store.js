import { configureStore } from "@reduxjs/toolkit";
import themeReducers from "../../common/SwitchTheme/themeSlice"

const store = configureStore({
    reducer: {
        theme: themeReducers
    }

});

export default store