import {all} from "redux-saga/effects";
import { watchThemeFromLocalStorage } from "../../common/SwitchTheme/themeSaga";

export default function* rootSaga() {
    yield all([
        watchThemeFromLocalStorage(),
    ]);
};