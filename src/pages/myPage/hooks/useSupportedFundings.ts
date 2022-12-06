import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { fetchSupportedFundings } from "../../../lib/api/myPage/api";
import useUser from "../../../lib/hooks/useUser";
import { formatAccessKey, handleAxiosError } from "../../../lib/utils";

export type SupportedFundings = SupportedFundingsItem[] | null;

export type SupportedFundingsItem = {
    supportId: number;
    fundingThumbnail: string;
    fundingState: string;
    fundingtitle: string;
    hostName: string;
    paymentAmounts: number;
    paymentState: string;
    paymentDate: string;
    orderDate: string;
};

function useSupportedFundings() {
    const [supportedFundings, setSupportedFundings] =
        useState<SupportedFundings>(null);
    const user = useUser();
    const navigate = useNavigate();

    const loadSupportedFundings = async () => {
        const accessKey = formatAccessKey(user.accessToken);
        try {
            const res = await fetchSupportedFundings({ accessKey, page: 1 });
            const loadedSupportedFundings = res.results.map((elem) => ({
                supportId: elem.user_support_funding.id,
                fundingThumbnail: elem.funding.thumbnail,
                fundingState: elem.funding.funding_state,
                fundingtitle: elem.funding.title,
                hostName: elem.funding_host.host_name,
                paymentAmounts: elem.payment.payment_amounts,
                paymentState: elem.payment.payment_state,
                paymentDate: elem.payment.schedule_at,
                orderDate: elem.user_support_funding.created,
            }));
            setSupportedFundings(loadedSupportedFundings);
        } catch (e) {
            handleAxiosError(e);
            navigate("../home");
            toast.warning("페이지 로드 중 문제가 발생했습니다.");
        }
    };

    return {
        supportedFundings,
        loadSupportedFundings,
        loading: !supportedFundings ? true : false,
    };
}

export default useSupportedFundings;
