import { toast } from "react-toastify";
import { call, put, takeLatest } from "redux-saga/effects";
import { fetchUser, logoutUser } from "../../lib/api/core/api";
import { GetUserResponse } from "../../lib/api/core/types";
import { handleAxiosError } from "../../lib/utils";
import { getUserAsync, GET_USER, LOGOUT, logout } from "./actions";

function* logoutUserSaga(action: ReturnType<typeof logout>) {
    try {
        yield call(logoutUser, action.payload);
    } catch (e: any) {
        handleAxiosError(e);
    }
}

function* getUserSaga(action: ReturnType<typeof getUserAsync.request>) {
    try {
        const response: GetUserResponse = yield call(fetchUser, action.payload);

        if (response.tokens.access) {
            yield put(
                getUserAsync.success({
                    accessToken: response.tokens.access,
                    ...response.user,
                })
            );
        } else {
            throw new Error(`Wrong Response: ${JSON.stringify(response)}`);
        }
    } catch (e: any) {
        yield put(getUserAsync.failure(e));
        handleAxiosError(e);
        toast.warning(
            "로그인 중 문제가 발생하였습니다. 새로고침 후 다시 시도해주세요."
        );
        window.location.href = "/";
    }
}

export function* coreSaga() {
    yield takeLatest(GET_USER, getUserSaga);
    yield takeLatest(LOGOUT, logoutUserSaga);
}

export { coreSaga as default };
