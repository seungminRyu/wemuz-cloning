import { createReducer } from "typesafe-actions";
import { PaymentState, PaymentAction } from "./types";
import {
    GET_PAYMENT_FUNDING,
    GET_PAYMENT_FUNDING_SUCCESS,
    GET_PAYMENT_FUNDING_ERROR,
} from "./actions";

const initialState: PaymentState = {
    funding: {
        loading: false,
        data: null,
        error: null,
    },
};

const reducer = createReducer<PaymentState, PaymentAction>(initialState, {
    [GET_PAYMENT_FUNDING]: (state, action) => ({
        ...state,
        funding: {
            loading: true,
            data: null,
            error: null,
        },
    }),
    [GET_PAYMENT_FUNDING_SUCCESS]: (state, action) => ({
        ...state,
        funding: {
            loading: false,
            data: action.payload,
            error: null,
        },
    }),
    [GET_PAYMENT_FUNDING_ERROR]: (state, action) => ({
        ...state,
        funding: {
            loading: true,
            data: null,
            error: action.payload,
        },
    }),
});

export default reducer;
