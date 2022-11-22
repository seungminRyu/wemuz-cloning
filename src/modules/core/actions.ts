import { createAction, createAsyncAction } from "typesafe-actions";
import { AxiosError } from "axios";
import {
    GetUserParams,
    GetUserResponse,
    LogoutUserParams,
    SetUserParams,
} from "../../lib/api/core/types";

export const LOGOUT = "core/LOGOUT" as const;
export const logout = createAction(LOGOUT)<LogoutUserParams>();

export const SET_USER = "core/SET_USER" as const;
export const setUser = createAction(SET_USER)<SetUserParams>();

export const GET_USER = "core/GET_USER" as const;
export const GET_USER_SUCCESS = "core/GET_USER_SUCCESS" as const;
export const GET_USER_ERROR = "core/GET_USER_ERROR" as const;

export const getUserAsync = createAsyncAction(
    GET_USER,
    GET_USER_SUCCESS,
    GET_USER_ERROR
    // )<GetUserParams, GetUserResponse, AxiosError>();
)<GetUserParams, any, AxiosError>();
