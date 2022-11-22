import axios from "axios";
import {
    GetUserParams,
    GetUserResponse,
    LogoutUserParams,
    LogoutUserResponse,
    RenewAccessTokenParams,
    RenewAccessTokenResponse,
} from "./types";

export const fetchUser = (params: GetUserParams) =>
    axios
        .get<GetUserResponse>(
            `${process.env.REACT_APP_END_POINT}/api/v2/users/login/${params.snsType}/callback/?code=${params.code}`,
            {
                timeout: 4000,
                withCredentials:
                    process.env.REACT_APP_MODE === "deploy" ? true : false,
            }
        )
        .then((res) => {
            if (res.data.tokens.access) {
                localStorage.setItem(
                    "refresh",
                    JSON.stringify(res.data.tokens.refresh)
                );
                return res.data;
            } else {
                console.error("Error: ", res);
                throw new Error("Wrong response");
            }
        });

export const requestSnsLogin = (snsType: string) =>
    axios
        .get(
            `${process.env.REACT_APP_END_POINT}/api/v2/users/login/${snsType}/`
        )
        .then((res) => res.data);

export const logoutUser = (params: LogoutUserParams) => {
    return axios
        .get<LogoutUserResponse>(
            `${process.env.REACT_APP_END_POINT}/api/v2/users/logout/`,
            {
                headers: {
                    Authorization: params.accessKey,
                },
            }
        )
        .then((res) => {
            localStorage.removeItem("refresh");
            window.location.href = "/";
            return res.data;
        });
};

export const renewAccessToken = (params: RenewAccessTokenParams) =>
    axios
        .post<RenewAccessTokenResponse>(
            `${process.env.REACT_APP_END_POINT}/api/token/refresh/`,
            {
                refresh: params.refresh,
            },
            {
                headers: {
                    "Content-Type": "application/json",
                },
                timeout: 4000,
            }
        )
        .then((res) => {
            if (res.data.access) {
                return res.data.access;
            } else {
                console.error("Error: ", res);
                throw new Error("Wrong resoponse");
            }
        });

export const getUser = (params: { accessKey: string }) =>
    axios
        .get(`${process.env.REACT_APP_END_POINT}/api/v2/users/`, {
            headers: {
                Authorization: params.accessKey,
            },
            timeout: 4000,
            withCredentials:
                process.env.REACT_APP_MODE === "deploy" ? true : false,
        })
        .then((res) => {
            return res.data;
        });

export const getGenres = () =>
    axios
        .get(`${process.env.REACT_APP_END_POINT}/api/v2/core/genre`)
        .then((res) => {
            return res.data;
        });
