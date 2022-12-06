import { createReducer } from "typesafe-actions";
import { CoreAction, CoreState } from "./types";
import {
    GET_USER,
    GET_USER_ERROR,
    GET_USER_SUCCESS,
    LOGOUT,
    SET_USER,
} from "./actions";

const initialState: CoreState = {
    user: {
        loading: false,
        data: null,
        error: null,
    },
};

const reducer = createReducer<CoreState, CoreAction>(initialState, {
    [SET_USER]: (state, action) => ({
        ...state,
        user: {
            loading: false,
            data: action.payload,
            error: null,
        },
    }),
    [GET_USER]: (state, action) => ({
        ...state,
        user: {
            loading: true,
            data: null,
            error: null,
        },
    }),
    [GET_USER_SUCCESS]: (state, action) => ({
        ...state,
        user: {
            loading: false,
            data: action.payload,
            error: null,
        },
    }),
    [GET_USER_ERROR]: (state, action) => ({
        ...state,
        user: {
            loading: true,
            data: null,
            error: action.payload,
        },
    }),
    [LOGOUT]: (state, action) => ({
        ...state,
        user: {
            loading: false,
            data: null,
            error: null,
        },
    }),
});

export default reducer;
