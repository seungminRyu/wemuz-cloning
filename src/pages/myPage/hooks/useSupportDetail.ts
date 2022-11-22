import { useReducer } from "react";
import { useParams } from "react-router-dom";
import { fetchSupportDetail } from "../../../lib/api/myPage/api";
import useUser from "../../../lib/hooks/useUser";
import { formatAccessKey, handleAxiosError } from "../../../lib/utils";
import { SelectedPackages } from "../../payment";

export type UseSupportedFundingsReturn = {
    supportDetail: SupportDetail;
    initSupportDetail: () => Promise<void>;
};

const GET_SUPPORT_DETAIL = "GET_SUPPORT_DETAIL";
const GET_SUPPORT_DETAIL_SUCCESS = "GET_SUPPORT_DETAIL_SUCCESS";
const GET_SUPPORT_DETAIL_ERROR = "GET_SUPPORT_DETAIL_ERROR";

type getSupportDetailActions =
    | "GET_SUPPORT_DETAIL"
    | "GET_SUPPORT_DETAIL_SUCCESS"
    | "GET_SUPPORT_DETAIL_ERROR";

type Action = {
    type: getSupportDetailActions;
    data: any | null;
    error: Error | null;
};

type Async = {
    data: SupportDetail | null;
    loading: boolean;
    error: Error | null;
};

type SupportDetail = {
    fundingId: number;
    fundingTitle: string;
    fundingHost: string;
    fundingState: string;
    fundingEndDate: string;
    packagesTotalCount: number;
    supportedPackages: SelectedPackages;
    paymentId: number;
    paymentCreatedDate: string;
    paymentScheduledDate: string;
    paymentMethod: string;
    paymentPrice: number;
    paymentState: string;
    paymentRefundCause: string;
    paymentRefundAmount: number;
    paymentRefundTime: string;
    paymentCancelCause: string;
    paymentCancelTime: string;
};

const initialSupportDetail = {
    data: null,
    loading: false,
    error: null,
};

const supportDetailReducer = (state: Async, action: Action): Async => {
    switch (action.type) {
        case GET_SUPPORT_DETAIL:
            return {
                loading: true,
                data: null,
                error: null,
            };
        case GET_SUPPORT_DETAIL_SUCCESS:
            return {
                loading: false,
                data: action.data,
                error: null,
            };
        case GET_SUPPORT_DETAIL_ERROR:
            return {
                loading: false,
                data: null,
                error: action.error,
            };
        default:
            throw new Error("Unhandled type of action");
    }
};

function useSupportDetail() {
    const params = useParams();
    const user = useUser();
    const [supportDetail, dispatchSupportDetail] = useReducer(
        supportDetailReducer,
        initialSupportDetail
    );

    const initSupportDetail = async () => {
        dispatchSupportDetail({
            type: GET_SUPPORT_DETAIL,
            data: null,
            error: null,
        });

        try {
            const accessKey = formatAccessKey(user.accessToken);
            const res = await fetchSupportDetail({
                id: params.id as string,
                accessKey,
            });
            let totalCount = 0;

            res.all_packages_supported_funding.forEach((elem) => {
                totalCount += elem.number_of_packages;
            });

            const nextSupportDetail = {
                fundingId: res.funding.id,
                fundingTitle: res.funding.title,
                fundingHost: res.funding_host.host_name,
                fundingState: res.funding.funding_state,
                fundingEndDate: res.funding.end_date,
                packagesTotalCount: totalCount,
                supportedPackages: res.all_packages_supported_funding.map(
                    (elem) => {
                        let optionsMap: any = {};
                        elem.funding_package_info.packageoption_info.forEach(
                            (optionsElem) => {
                                if (optionsMap[optionsElem.name]) {
                                    optionsMap[optionsElem.name].count += 1;
                                } else {
                                    optionsMap[optionsElem.name] = {
                                        id: optionsElem.id,
                                        name: optionsElem.name,
                                        count: 1,
                                    };
                                }
                            }
                        );

                        return {
                            id: elem.id,
                            count: elem.number_of_packages,
                            price: elem.funding_package_info.price,
                            name: elem.funding_package_info.name,
                            items: elem.funding_package_info.packageitem_info.map(
                                (itemsElem) => ({
                                    count: itemsElem.service_count,
                                    name: itemsElem.funding_service_info.name,
                                    photo: itemsElem.funding_service_info
                                        .introduction_photo,
                                })
                            ),
                            options: Object.keys(optionsMap).map(
                                (elem) => optionsMap[elem]
                            ),
                        };
                    }
                ),
                paymentId: res.payment.id,
                paymentCreatedDate: res.payment.created,
                paymentScheduledDate: res.payment.schedule_at,
                paymentMethod: res.payment.pg,
                paymentPrice: res.payment.payment_amounts,
                paymentState: res.payment.payment_state,
                paymentRefundCause: res.refund_payment.cause || "",
                paymentRefundAmount: res.refund_payment.refund_amount || 0,
                paymentRefundTime: res.refund_payment.refunded_at || "",
                paymentCancelCause: res.cancel_payment_schedule.cause || "",
                paymentCancelTime:
                    res.cancel_payment_schedule.cancelled_at || "",
            };

            dispatchSupportDetail({
                type: GET_SUPPORT_DETAIL_SUCCESS,
                data: nextSupportDetail,
                error: null,
            });
        } catch (e: any) {
            handleAxiosError(e);
            dispatchSupportDetail({
                type: GET_SUPPORT_DETAIL_ERROR,
                data: null,
                error: e,
            });
        }
    };

    return {
        supportDetail: supportDetail.data,
        initSupportDetail,
        loading: !supportDetail.data || supportDetail.loading,
    };
}

export default useSupportDetail;
