import { AxiosError } from "axios";
import { createAsyncAction } from "typesafe-actions";
import {
    GetHomeFundingsParams,
    GetHomeFundingsResponse,
} from "../../lib/api/home/type";

export const GET_HOME_FUNDINGS = "home/GET_HOME_FUNDINGS" as const;
export const GET_HOME_FUNDINGS_SUCCESS =
    "home/GET_HOME_FUNDINGS_SUCCESS" as const;
export const GET_HOME_FUNDINGS_ERROR = "home/GET_HOME_FUNDINGS_ERROR" as const;

export const getHomeFundingsAsync = createAsyncAction(
    GET_HOME_FUNDINGS,
    GET_HOME_FUNDINGS_SUCCESS,
    GET_HOME_FUNDINGS_ERROR
)<GetHomeFundingsParams, GetHomeFundingsResponse, AxiosError>();
