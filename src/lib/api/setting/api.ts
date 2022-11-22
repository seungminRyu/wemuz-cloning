import axios from "axios";
import {
    FetchSupporterInfoParams,
    FetchSupporterInfoResponse,
    PostSupporterInfoParams,
    PostSupporterInfoResponse,
} from "./types";

export const fetchSupporterInfo = (params: FetchSupporterInfoParams) =>
    axios
        .get<FetchSupporterInfoResponse>(
            `${process.env.REACT_APP_END_POINT}/api/v2/users/my_page/config/`,
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
                console.error(res);
                throw new Error("Wrong Response");
            }
        });

export const postSupporterInfo = (params: PostSupporterInfoParams) =>
    axios.post<PostSupporterInfoResponse>(
        `${process.env.REACT_APP_END_POINT}/api/v2/users/my_page/config/`,
        params.postData,
        {
            headers: {
                Authorization: params.accessKey,
                "Content-Type": "multipart/form-data",
            },
        }
    );
// .then((res) => {
//     if (res.data.user_profile) {
//         return res.data;
//     } else {
//         console.error(res);
//         throw new Error("Wrong Response");
//     }
// });
