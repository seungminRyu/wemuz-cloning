import { createReducer } from "typesafe-actions";
import { HomeAction, HomeState } from ".";
import {
    GET_HOME_FUNDINGS,
    GET_HOME_FUNDINGS_SUCCESS,
    GET_HOME_FUNDINGS_ERROR,
} from "./actions";

const initialState: HomeState = {
    fundings: {
        loading: false,
        data: null,
        error: null,
    },
};

const reducer = createReducer<HomeState, HomeAction>(initialState, {
    [GET_HOME_FUNDINGS]: (state, action) => ({
        ...state,
        fundings: {
            loading: true,
            data: null,
            error: null,
        },
    }),
    [GET_HOME_FUNDINGS_SUCCESS]: (state, action) => ({
        ...state,
        fundings: {
            loading: false,
            data: action.payload,
            error: null,
        },
    }),
    [GET_HOME_FUNDINGS_ERROR]: (state, action) => ({
        ...state,
        fundings: {
            loading: false,
            data: null,
            error: action.payload,
        },
    }),
});

export default reducer;
