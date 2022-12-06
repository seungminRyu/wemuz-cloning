import { call, put, takeLatest } from "redux-saga/effects";
import { apiGetHomeFundings } from "../../lib/api/home/api";
import { GetHomeFundingsResponse } from "../../lib/api/home/type";
import { handleAxiosError } from "../../lib/utils";
import { getHomeFundingsAsync, GET_HOME_FUNDINGS } from "./actions";

function* getHomeFundingsSaga(
    action: ReturnType<typeof getHomeFundingsAsync.request>
) {
    try {
        const res: GetHomeFundingsResponse = yield call(
            apiGetHomeFundings,
            action.payload
        );
        yield put(getHomeFundingsAsync.success(res));
    } catch (error: any) {
        yield put(getHomeFundingsAsync.failure(error));
        handleAxiosError(error);
    }
}

export function* homeSaga() {
    yield takeLatest(GET_HOME_FUNDINGS, getHomeFundingsSaga);
}

export { homeSaga as default };
