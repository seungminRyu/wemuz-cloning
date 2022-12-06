import { combineReducers } from "redux";
import { all } from "redux-saga/effects";
import payment, { paymentSaga } from "./payment";
import home, { homeSaga } from "./home";
import core, { coreSaga } from "./core";
import detail, { detailSaga } from "./detail";

const rootReducer = combineReducers({
    core,
    home,
    detail,
    payment,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
export function* rootSaga() {
    yield all([coreSaga(), homeSaga(), detailSaga(), paymentSaga()]);
}
