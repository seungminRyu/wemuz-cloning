import axios from "axios";
import { GetFundingDetailParam, GetFundingDetailResponse } from "./types";

export const getFundingDetail = (params: GetFundingDetailParam) => {
    const header = params.accessKey
        ? {
              headers: {
                  Authorization: params.accessKey,
              },
          }
        : {};

    return axios
        .get<GetFundingDetailResponse>(
            `${process.env.REACT_APP_END_POINT}/api/v2/fundings/item/${params.id}/`,
            {
                ...header,
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
};
