import React, { useRef } from "react";
import { useNavigate, useParams, Navigate } from "react-router-dom";
import styled from "styled-components";
import media from "../../lib/styles/media";
import palette from "../../lib/styles/palette";
import OrderTerms from "../../components/payment/order/OrderTerms";
import Delivery from "../../components/payment/order/OrderDelivery";
import SupportStatement from "../../components/common/SupportStatement";
import OrderPaymentMethod from "../../components/payment/order/OrderPaymentMethod";
import OrderUserInfo from "../../components/payment/order/OrderUserInfo";
import PaymentHeader from "../../components/payment/PaymentHeader";
import PaymentSummary from "../../components/payment/PaymentSummary";
import { formatPhoneNum, parseDateString } from "../../lib/utils";
import { SelectedPackages } from ".";
import { toast } from "react-toastify";
import usePaymentFunding from "./hooks/usePaymentFunding";
import { MainContainer } from "../../components/global/GlobalStyles";
import PageTemplate from "../../components/global/PageTemplate";
import fonts from "../../lib/styles/fonts";
import useUserxx from "../../lib/hooks/useUserxx";

export type OrderProps = {
    commentOptionRef: React.MutableRefObject<{
        name: boolean;
        package: boolean;
    }>;
    userSelectionResult: React.MutableRefObject<{
        totalPackagesCount: number;
        priceAmount: number;
        packages: SelectedPackages;
    }>;
    isOptionsSubmitted: boolean;
    isPaymentFinished: boolean;
};

type IMPRequestPayResponse = any;

declare global {
    interface Window {
        IMP: any;
    }
}

function Order(props: OrderProps) {
    const {
        commentOptionRef,
        userSelectionResult,
        isOptionsSubmitted,
        isPaymentFinished,
    } = props;
    const paymentMethodRef = useRef<string | null>(null);
    const merchantUid = useRef<string | null>(null);
    const getIsAllAddressInputsFilledRef = useRef<(() => boolean) | null>(null);
    const isAllTermsCheckedRef = useRef<(() => boolean) | null>(null);
    const params = useParams();
    const navigate = useNavigate();
    const [funding] = usePaymentFunding();
    const user = useUserxx();
    const sampleIsDeliverableService: boolean = false;
    const KAKAOPAY_QUIT_MODULE_ERROR_MSG =
        "[????????????] ???????????? ????????? ?????????????????????";

    if (!isOptionsSubmitted || isPaymentFinished) {
        return <Navigate to={`/payment/options/${params.id}`} />;
    }

    const createMerchantUid = () => {
        const date = new Date();
        const timeStamp =
            date.getFullYear() +
            `${date.getMonth() + 1}`.padStart(2, "0") +
            `${date.getDate()}`.padStart(2, "0") +
            "-" +
            `${date.getHours()}`.padStart(2, "0") +
            `${date.getMinutes()}`.padStart(2, "0") +
            `${date.getSeconds()}`.padStart(2, "0");
        return `${timeStamp}-${funding.id}-${user?.id}`;
    };

    const createPaymentPostData = () => {
        const method = paymentMethodRef.current;
        const endDateObj = parseDateString(funding.endDate);
        if (!method) {
            navigate(`/detail/${funding.id}`);
            throw new Error("Payment method doesn't exist");
        }

        return {
            payment_amounts: userSelectionResult.current.priceAmount,
            name_open_flag: commentOptionRef.current.name,
            package_open_flag: commentOptionRef.current.package,
            funding_packages: userSelectionResult.current.packages.map(
                (elem) => ({
                    funding_package: elem.id,
                    number_of_packages: elem.count,
                })
            ),
            total_number_of_packages:
                userSelectionResult.current.totalPackagesCount,
            number_of_donation_packages: 0,
            payment: {
                customer_uid: `cid_${merchantUid.current}`,
                merchant_uid: merchantUid.current,
                end_date: `${endDateObj.year}/${endDateObj.month}/${endDateObj.date}`,
                pg: method === "remittance" ? null : method,
            },
        };
    };

    const savePaymentPostDataInSession = () => {
        const paymentPostData = createPaymentPostData();
        sessionStorage.setItem(
            `mid_${merchantUid.current}`,
            JSON.stringify(paymentPostData)
        );
    };

    const iampRequestCallBack = async (res: IMPRequestPayResponse) => {
        if (!res.suceess && res.error_msg === KAKAOPAY_QUIT_MODULE_ERROR_MSG) {
            sessionStorage.removeItem(`mid_${merchantUid.current}`);
            return;
        }

        navigate(
            `../request?merchant_uid=${merchantUid.current}&funding_id=${funding.id}&imp_success=${res.success}`
        );
    };

    const reqeustIamportPaymentModule = () => {
        /**
         * ????????? ??????: iampRequestCallBack ?????? x, ?????? ?????? m_redirect_url??? ??????
         * ???????????? ??????: m_redirect_url??? ?????? x, ?????? ?????? iampRequestCallBack ??????
         * ????????? ????????? amount??? 0?????? ????????????. ????????? ???????????? ??????,???????????? ??????
         * customer_uid: ??????(?????????)??? 1:1??? ???????????? ???
         */
        const IMP = window.IMP;
        IMP.init(process.env.REACT_APP_MERCHANT_ID);
        IMP.request_pay(
            {
                customer_uid: `cid_${merchantUid.current}`,
                merchant_uid: merchantUid.current,
                name: funding.title,
                amount: 0,
                buyer_email: user?.email,
                buyer_name: user?.name,
                buyer_tel: formatPhoneNum(user?.phone),
                m_redirect_url: `${process.env.REACT_APP_PUBLIC_URL}/payment/request?merchant_uid=${merchantUid.current}&funding_id=${funding.id}`,
            },
            iampRequestCallBack
        );
    };

    const onNextStepBtnClick = () => {
        if (
            sampleIsDeliverableService &&
            getIsAllAddressInputsFilledRef.current &&
            !getIsAllAddressInputsFilledRef.current()
        ) {
            toast.warning("????????? ????????? ?????? ??????????????????.");
            return;
        }
        if (!paymentMethodRef.current) {
            toast.warning("?????? ????????? ??????????????????.");
            return;
        }
        if (isAllTermsCheckedRef.current && !isAllTermsCheckedRef.current()) {
            toast.warning("?????? ?????????????????? ?????? ??????????????????.");
            return;
        }

        merchantUid.current = createMerchantUid();
        savePaymentPostDataInSession();
        if (paymentMethodRef.current === "remittance") {
            navigate(
                `../request?merchant_uid=${merchantUid.current}&funding_id=${funding.id}`
            );
        } else {
            reqeustIamportPaymentModule();
        }
    };

    return (
        <PageTemplate>
            <OrderBlock>
                <PaymentHeader curStep={2} />
                <PaymentSummary />
                <OrderBody>
                    <SupportStatement
                        totalPackagesCount={
                            userSelectionResult.current.totalPackagesCount
                        }
                        priceAmount={userSelectionResult.current.priceAmount}
                        packages={userSelectionResult.current.packages}
                        headerText={"?????? ?????? ??????"}
                    />
                    <OrderUserInfo />
                    {sampleIsDeliverableService && (
                        <Delivery
                            getIsAllAddressInputsFilledRef={
                                getIsAllAddressInputsFilledRef
                            }
                        />
                    )}
                    <OrderPaymentMethod paymentMethodRef={paymentMethodRef} />
                    <OrderTerms
                        isAllTermsChecked={isAllTermsCheckedRef}
                        priceAmount={userSelectionResult.current.priceAmount}
                        endDate={funding.endDate}
                    />
                    <NextStepBtn onClick={onNextStepBtnClick}>
                        ?????? ????????????
                    </NextStepBtn>
                </OrderBody>
            </OrderBlock>
        </PageTemplate>
    );
}

const OrderBlock = styled(MainContainer)`
    ${media.mobile} {
        padding: 40px 0 120px;
    }
`;

const OrderBody = styled.main`
    padding-top: 100px;

    ${media.mobile} {
        padding-top: 60px;
    }
`;

const NextStepBtn = styled.button`
    ${fonts.size.scale18}
    display: block;
    color: ${palette.white0};
    background-color: ${palette.purple0};
    transition: background-color 0.2s;
    border-radius: 4px;
    padding: 17px 42px 15px;
    margin: 80px auto 0;

    &:hover {
        background-color: ${palette.purple3};
    }

    ${media.mobile} {
        padding: 12px 24px 12px;
        margin: 48px auto 0;
    }
`;

export default Order;
