import { createReducer } from "typesafe-actions";
import {
    GET_FUNDING_DETAIL,
    GET_FUNDING_DETAIL_ERROR,
    GET_FUNDING_DETAIL_SUCCESS,
} from "./actions";
import { DetailAction, DetailState } from "./types";

const initialState: DetailState = {
    detailInfo: {
        loading: false,
        data: null,
        error: null,
    },
};

const reducer = createReducer<DetailState, DetailAction>(initialState, {
    [GET_FUNDING_DETAIL]: (state, action) => ({
        ...state,
        detailInfo: {
            loading: true,
            data: null,
            error: null,
        },
    }),
    [GET_FUNDING_DETAIL_SUCCESS]: (state, action) => ({
        ...state,
        detailInfo: {
            loading: false,
            data: action.payload,
            error: null,
        },
    }),
    [GET_FUNDING_DETAIL_ERROR]: (state, action) => ({
        ...state,
        detailInfo: {
            loading: false,
            data: null,
            error: action.payload,
        },
    }),
});

export default reducer;
