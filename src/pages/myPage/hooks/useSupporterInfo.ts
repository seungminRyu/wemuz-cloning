import { useEffect, useReducer } from "react";
import { fetchSupporterMyPage } from "../../../lib/api/myPage/api";
import useUserxx from "../../../lib/hooks/useUserxx";
import { handleAxiosError } from "../../../lib/utils";

export type UseSupporterInfoReturn = {
    userSupporterInfo: {
        supportedFundingsCount: number;
        likedFundingsCount: number;
    };
    loadSupporterInfo: () => Promise<void>;
};

const GET_SUPPORTER_MYPAGE = "GET_SUPPORTER_MYPAGE";
const GET_SUPPORTER_MYPAGE_SUCCESS = "GET_SUPPORTER_MYPAGE_SUCCESS";
const GET_SUPPORTER_MYPAGE_ERROR = "GET_SUPPORTER_MYPAGE_ERROR";

type getSuppoterInfoActions =
    | "GET_SUPPORTER_MYPAGE"
    | "GET_SUPPORTER_MYPAGE_SUCCESS"
    | "GET_SUPPORTER_MYPAGE_ERROR";

type Action = {
    type: getSuppoterInfoActions;
    data: any | null;
    error: Error | null;
};

type Async = {
    data: {
        supportedFundingsCount: number;
        likedFundingsCount: number;
        address: string;
        genres: Array<string>;
        name: string;
        avatar: string;
    } | null;
    loading: boolean;
    error: Error | null;
};

const initialSupporterInfo = {
    data: null,
    loading: false,
    error: null,
};

const supporterInfoReducer = (state: Async, action: Action): Async => {
    switch (action.type) {
        case GET_SUPPORTER_MYPAGE:
            return {
                loading: true,
                data: null,
                error: null,
            };
        case GET_SUPPORTER_MYPAGE_SUCCESS:
            return {
                loading: false,
                data: action.data,
                error: null,
            };
        case GET_SUPPORTER_MYPAGE_ERROR:
            return {
                loading: false,
                data: null,
                error: action.error,
            };
        default:
            throw new Error("Unhandled type of action");
    }
};

function useSupporterInfo() {
    const [supporterInfo, dispatchSupporterInfo] = useReducer(
        supporterInfoReducer,
        initialSupporterInfo
    );
    const user: any = useUserxx();
    const { accessKey, name, avatar } = user;

    useEffect(() => {
        loadSupporterInfo();
    }, []);

    const loadSupporterInfo = async () => {
        dispatchSupporterInfo({
            type: GET_SUPPORTER_MYPAGE,
            data: null,
            error: null,
        });

        try {
            const nextSupporterInfo = await fetchSupporterMyPage({
                accessKey,
            }).then((res) => ({
                name,
                avatar,
                genres: res.preferred_genres.map((aGenre) => aGenre.name),
                address: `${res.user_profile.address_depth_1} ${res.user_profile.address_depth_2}`,
                supportedFundingsCount: res.number_of_supported_funding,
                likedFundingsCount: res.number_of_liked_funding,
            }));

            dispatchSupporterInfo({
                type: GET_SUPPORTER_MYPAGE_SUCCESS,
                data: nextSupporterInfo,
                error: null,
            });
        } catch (e: any) {
            handleAxiosError(e);
            dispatchSupporterInfo({
                type: GET_SUPPORTER_MYPAGE_ERROR,
                data: null,
                error: e,
            });
        }
    };

    return {
        supporterInfo: supporterInfo.data,
        loading: !supporterInfo.data || supporterInfo.loading,
    };
}

export default useSupporterInfo;
