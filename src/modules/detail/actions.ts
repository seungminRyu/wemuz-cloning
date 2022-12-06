import { AxiosError } from "axios";
import { createAsyncAction } from "typesafe-actions";
import { GetFundingDetailParam } from "../../lib/api/detail/types";
import { DetailInfo } from "./types";

export const GET_FUNDING_DETAIL = "detail/GET_FUNDING_DETAIL" as const;
export const GET_FUNDING_DETAIL_SUCCESS =
    "detail/GET_FUNDING_DETAIL_SUCCESS" as const;
export const GET_FUNDING_DETAIL_ERROR =
    "detail/GET_FUNDING_DETAIL_ERROR" as const;

export const getFundingDetailAsync = createAsyncAction(
    GET_FUNDING_DETAIL,
    GET_FUNDING_DETAIL_SUCCESS,
    GET_FUNDING_DETAIL_ERROR
)<GetFundingDetailParam, DetailInfo, AxiosError>();
