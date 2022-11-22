import axios from "axios";
import {
    CheckAliasExistenceResponse,
    FetchSupportedFundingsParams,
    FetchSupportedFundingsResponse,
    FetchSupportDetailParams,
    FetchSupportDetailResponse,
    FetchSearchedAddressResponse,
    CheckAliasExistenceParams,
    FetchSearchedAddressParams,
    FetchSupporterMyPageParams,
    FetchSupporterMyPageResponse,
    FetchLikedFundingsParams,
    FetchLikedFundingsResponse,
    PostMusicianInfoParams,
    PostMusicianInfoResponse,
    FetchMusicianInfoParams,
    FetchMusicianInfoResponse,
} from "./types";

export const checkAliasExistence = async (props: CheckAliasExistenceParams) =>
    await axios.get<CheckAliasExistenceResponse>(
        `${process.env.REACT_APP_END_POINT}/api/v1/musicians/alias/?alias=${props.alias}`
    );

export const fetchSearchedAddress = async (
    params: FetchSearchedAddressParams
) =>
    await axios.get<FetchSearchedAddressResponse>(
        `${process.env.REACT_APP_KAKAO_END_POINT}${process.env.REACT_APP_KAKAO_ADDRESS_URL}?query=${params.query}&page=${params.page}`,
        {
            headers: {
                Authorization: `KakaoAK ${process.env.REACT_APP_KAKAO_ACCESS_KEY}`,
            },
        }
    );

export const fetchSupportedFundings = (params: FetchSupportedFundingsParams) =>
    axios
        .get<FetchSupportedFundingsResponse>(
            `${process.env.REACT_APP_END_POINT}/api/v2/fundings/mypage/supported_funding/?page=${params.page}`,
            {
                headers: {
                    Authorization: params.accessKey,
                },
            }
        )
        .then((res) => {
            if (res.data.results) {
                return res.data;
            } else {
                console.error("Error: ", res);
                throw new Error("Wrong response");
            }
        });

export const fetchSupportDetail = (params: FetchSupportDetailParams) =>
    axios
        .get<FetchSupportDetailResponse>(
            `${process.env.REACT_APP_END_POINT}/api/v2/fundings/mypage/supported_funding/${params.id}/`,
            {
                headers: {
                    Authorization: params.accessKey,
                },
            }
        )
        .then((res) => {
            if (res.data.funding) {
                return res.data;
            } else {
                console.error("Error: ", res);
                throw new Error("Wrong response");
            }
        });

export const fetchSupporterMyPage = (params: FetchSupporterMyPageParams) =>
    axios
        .get<FetchSupporterMyPageResponse>(
            `${process.env.REACT_APP_END_POINT}/api/v2/users/my_page/`,
            {
                headers: {
                    Authorization: params.accessKey,
                },
            }
        )
        .then((res) => {
            if (res.data.user_profile) {
                return res.data;
            } else {
                console.error("Error: ", res);
                throw new Error(
                    '[Wrong Response] Doesn\'t exist "user_profile" in response'
                );
            }
        });

export const fetchLikedFundings = (params: FetchLikedFundingsParams) =>
    axios
        .get<FetchLikedFundingsResponse>(
            `${process.env.REACT_APP_END_POINT}/api/v2/fundings/mypage/liked_funding?page=${params.page}&order_by=${params.order}`,
            {
                headers: {
                    Authorization: params.accessKey,
                },
            }
        )
        .then((res) => {
            if (res.data.results) {
                return res.data;
            } else {
                console.error("Error: ", res);
                throw new Error("Wrong Response");
            }
        });

export const postMusicianInfo = (params: PostMusicianInfoParams) =>
    axios.post<PostMusicianInfoResponse>(
        `${process.env.REACT_APP_END_POINT}/api/v2/musicians/mypage/`,
        params.postData,
        {
            headers: {
                Authorization: params.accessKey,
            },
        }
    );

export const fetchMusicianInfo = (params: FetchMusicianInfoParams) =>
    axios
        .get<FetchMusicianInfoResponse>(
            `${process.env.REACT_APP_END_POINT}/api/v2/musicians/mypage/`,
            {
                headers: {
                    Authorization: params.accessKey,
                },
            }
        )
        .then((res) => {
            if (res.data.id) {
                return res.data;
            } else {
                console.error("Error: ", res);
                throw new Error("Wrong Response");
            }
        });
