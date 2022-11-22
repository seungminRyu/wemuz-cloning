import { createAsyncAction } from "typesafe-actions";
import { AxiosError } from "axios";
import { GetPaymentFundingParams } from "../../lib/api/payment/types";
import { PaymentFunding } from "./types";

export const GET_PAYMENT_FUNDING = "payment/GET_PAYMENT_FUNDING" as const;
export const GET_PAYMENT_FUNDING_SUCCESS =
    "payment/GET_PAYMENT_FUNDING_SUCCESS" as const;
export const GET_PAYMENT_FUNDING_ERROR =
    "payment/GET_PAYMENT_FUNDING_ERROR" as const;

export const getPaymentFundingAsync = createAsyncAction(
    GET_PAYMENT_FUNDING,
    GET_PAYMENT_FUNDING_SUCCESS,
    GET_PAYMENT_FUNDING_ERROR
)<GetPaymentFundingParams, PaymentFunding, AxiosError>();
