import axios from "axios";
import {
    CancelPaymentParams,
    CancelPaymentRespones,
    GetPaymentFundingParams,
    GetPaymentFundingResponse,
    RequestPaymentParams,
    RequestPaymentRespones,
    RequestRefundFundingParams,
} from "./types";

export const getPaymentFunding = (params: GetPaymentFundingParams) =>
    axios
        .get<GetPaymentFundingResponse>(
            `${process.env.REACT_APP_END_POINT}/api/v2/fundings/support/${params.id}/`,
            {
                headers: {
                    Authorization: params.accessKey,
                },
            }
        )
        .then((res) => res.data)
        .catch((err) => {
            throw err;
        });

export const requestPayment = (params: RequestPaymentParams) =>
    axios.post<RequestPaymentRespones>(
        `${process.env.REACT_APP_END_POINT}/api/v2/fundings/support/${params.fundingId}/`,
        params.paymentInfo,
        {
            headers: {
                Authorization: params.accessKey,
            },
        }
    );

export const cancelPayment = (params: CancelPaymentParams) =>
    axios.post<CancelPaymentRespones>(
        `${process.env.REACT_APP_END_POINT}/api/v2/fundings/cancel/${params.fundingId}/`,
        {
            cause: params.cause,
        },
        {
            headers: {
                Authorization: params.accessKey,
            },
        }
    );

export const requestRefundFunding = (params: RequestRefundFundingParams) =>
    axios.post<RequestPaymentRespones>(
        `${process.env.REACT_APP_END_POINT}/api/v2/payments/refund/${params.id}/`,
        params.postData,
        {
            headers: {
                Authorization: params.accessKey,
            },
        }
    );
