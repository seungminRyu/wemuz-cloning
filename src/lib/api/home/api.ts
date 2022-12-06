import axios from "axios";
import { store } from "../../..";
import { setUser } from "../../../modules/core";
import { formatAccessKey, handleAxiosError } from "../../utils";
import { renewAccessToken } from "../core/api";
import {
    FetchRecentPerformancesParams,
    FetchRecentPerformancesResponse,
    FetchRecentPerformDetailsParams,
    FetchRecentPerformDetailsResponse,
    GetHomeFundingsParams,
    GetHomeFundingsResponse,
} from "./type";

export const apiGetHomeFundings = (params: GetHomeFundingsParams) => {
    const header = params.accessKey
        ? {
              headers: {
                  Authorization: params.accessKey,
              },
          }
        : {};

    return axios
        .get<GetHomeFundingsResponse>(
            `${process.env.REACT_APP_END_POINT}/api/v2/fundings/home/`,
            {
                timeout: 8000,
                ...header,
            }
        )
        .then((res) => {
            if (res.data.banner_funding) {
                return res.data;
            } else {
                console.error("Error: ", res);
                throw new Error("Wrong response");
            }
        })
        .catch(async (e) => {
            const refreshItem = localStorage.getItem("refresh");
            if (e.response.status === 401 && refreshItem) {
                const refreshToken = JSON.parse(refreshItem);
                const accessToken = await renewAccessToken({
                    refresh: refreshToken,
                });

                const user = store.getState().core.user.data;
                store.dispatch(
                    setUser({
                        ...user,
                        accessToken,
                    })
                );
                const accessKey = formatAccessKey(accessToken);
                return axios
                    .get<GetHomeFundingsResponse>(
                        `${process.env.REACT_APP_END_POINT}/api/v2/fundings/home/`,
                        {
                            timeout: 8000,
                            headers: {
                                Authorization: accessKey,
                            },
                        }
                    )
                    .then((res) => {
                        if (res.data.banner_funding) {
                            return res.data;
                        } else {
                            console.error("Error: ", res);
                            throw new Error("Wrong response");
                        }
                    });
            } else {
                throw e;
            }
        });
};

export const postLike = (id: number, accessKey: string) =>
    axios
        .post(
            `${process.env.REACT_APP_END_POINT}/api/v2/fundings/like/`,
            {
                funding: id,
            },
            {
                headers: {
                    Authorization: accessKey,
                },
            }
        )
        .then((res) => {
            if (res.status !== 201) {
                console.error("Error: ", res);
                throw new Error("Wrong response");
            }
        });

export const deleteLike = (id: number, accessKey: string) =>
    axios
        .delete(
            `${process.env.REACT_APP_END_POINT}/api/v2/fundings/like/${id}/`,
            {
                headers: {
                    Authorization: accessKey,
                },
            }
        )
        .then((res) => {
            if (res.status !== 204) {
                console.error("Error: ", res);
                throw new Error("Wrong response");
            }
        });

export const fetchRecentPerformances = (
    params: FetchRecentPerformancesParams
) =>
    axios
        .get<FetchRecentPerformancesResponse>(
            `${
                process.env.REACT_APP_END_POINT
            }/api/v2/fundings/home/recent_fp/${params.page ? params.page : ""}`
        )
        .then((res) => {
            if (res.data.results) {
                return res.data;
            } else {
                throw new Error("Wrong response");
            }
        });

export const fetchRecentPerformDetails = (
    params: FetchRecentPerformDetailsParams
) =>
    axios
        .get<FetchRecentPerformDetailsResponse>(
            `${process.env.REACT_APP_END_POINT}/api/v2/fundings/home/recent_fp/${params.id}`
        )
        .then((res) => {
            if (res.data.funding_title) {
                return res.data;
            } else {
                throw new Error("Wrong response");
            }
        });
