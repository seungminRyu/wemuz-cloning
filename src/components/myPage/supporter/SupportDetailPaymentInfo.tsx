import styled from "styled-components";
import fonts from "../../../lib/styles/fonts";
import media from "../../../lib/styles/media";
import palette from "../../../lib/styles/palette";
import {
    formatPaymentMethod,
    formatPaymentState,
    formatPrice,
    parseDateString,
} from "../../../lib/utils";
import { MyPageHeading2 } from "../MyPageStyles";
import {
    SupportDetailContent,
    SupportDetailInfoContainer,
    SupportDetailInfoRow,
    SupportDetailLabel,
} from "./SupportDetailStyles";

export type SupportDetailPaymentInfoProp = {
    paymentId: number;
    createdDate: string;
    scheduledDate: string;
    method: string;
    price: number;
    paymentState: string;
    supportedFundingState: string;
    fundingEndDate: string;
    refundCause: string;
    refundAmount: number;
    refundTime: string;
    cancelCause: string;
    cancelTime: string;
    toggleCancelPopupOpen: () => void;
};

const PAYMENT_SCHEDULED = "payment_scheduled";
const PAYMENT_SCHEDULE_CANCELLED = "payment_schedule_cancelled";
const PAYMENT_SCHEDULED_COMPLETED = "payment_completed";
const PAYMENT_SCHEDULED_FAIL = "payment_fail";
const PAYMENT_SCHEDULED_REFUND = "payment_refund";

const formatDateText = (dateStr: string) => {
    const { year, month, date } = parseDateString(dateStr);
    return `${year}.${month}.${date}`;
};

function SupportDetailPaymentInfo(props: SupportDetailPaymentInfoProp) {
    const {
        paymentId,
        createdDate,
        scheduledDate,
        method,
        price,
        paymentState,
        fundingEndDate,
        toggleCancelPopupOpen,
        refundCause,
        refundAmount,
        refundTime,
        cancelCause,
        cancelTime,
    } = props;

    const paymentMethodText = formatPaymentMethod(method);
    const paymentPriceText = `${formatPrice(price)} 원`;
    const refundAmountText = `${formatPrice(refundAmount)} 원`;
    const createdDateText = (() => {
        const { year, month, date, hour, minute } =
            parseDateString(createdDate);
        return (
            `${year}.${month}.${date}` +
            ` ${hour}`.padStart(2, "0") +
            ":" +
            `${minute}`.padStart(2, "0")
        );
    })();
    const paymentStateText = (() => {
        switch (paymentState) {
            case PAYMENT_SCHEDULE_CANCELLED:
                return `${formatPaymentState(paymentState)} (${formatDateText(
                    cancelTime
                )})`;
            case PAYMENT_SCHEDULED_COMPLETED:
                return `${formatPaymentState(paymentState)} (${formatDateText(
                    scheduledDate
                )})`;
            case PAYMENT_SCHEDULED_REFUND:
                return `${formatPaymentState(paymentState)} (${formatDateText(
                    refundTime
                )})`;
            default:
                return formatPaymentState(paymentState);
        }
    })();

    const onCancelPaymentClick = () => toggleCancelPopupOpen();

    return (
        <Block>
            <StyledMyPageHeading2>결제정보</StyledMyPageHeading2>
            <StyledSupportDetailInfoContainer>
                <SupportDetailInfoRow>
                    <SupportDetailLabel>결제번호</SupportDetailLabel>
                    <SupportDetailContent>{paymentId}</SupportDetailContent>
                </SupportDetailInfoRow>
                <SupportDetailInfoRow>
                    <SupportDetailLabel>결제신청</SupportDetailLabel>
                    <SupportDetailContent>
                        {createdDateText}
                    </SupportDetailContent>
                </SupportDetailInfoRow>
                <SupportDetailInfoRow>
                    <SupportDetailLabel>결제수단</SupportDetailLabel>
                    <SupportDetailContent>
                        {paymentMethodText}
                    </SupportDetailContent>
                </SupportDetailInfoRow>
                <SupportDetailInfoRow>
                    <SupportDetailLabel>결제금액</SupportDetailLabel>
                    <SupportDetailContent>
                        {paymentPriceText}
                    </SupportDetailContent>
                </SupportDetailInfoRow>
                <SupportDetailInfoRow>
                    <SupportDetailLabel>결제상태</SupportDetailLabel>
                    <SupportDetailContent>
                        {paymentStateText}
                        <PaymentNotice
                            price={price}
                            paymentState={paymentState}
                            refundCause={refundCause}
                            cancelCause={cancelCause}
                            fundingEndDate={fundingEndDate}
                            scheduledDate={scheduledDate}
                        />
                    </SupportDetailContent>
                </SupportDetailInfoRow>
                {paymentState === PAYMENT_SCHEDULED_REFUND && (
                    <SupportDetailInfoRow>
                        <SupportDetailLabel>환불금액</SupportDetailLabel>
                        <SupportDetailContent>
                            {refundAmountText}
                        </SupportDetailContent>
                    </SupportDetailInfoRow>
                )}
                {paymentState === PAYMENT_SCHEDULED && (
                    <CancelPaymentBtn onClick={onCancelPaymentClick}>
                        결제 예약 취소
                    </CancelPaymentBtn>
                )}
            </StyledSupportDetailInfoContainer>
        </Block>
    );
}

type PaymentNoticeProp = {
    price: number;
    paymentState: string;
    refundCause: string;
    cancelCause: string;
    fundingEndDate: string;
    scheduledDate: string;
};

function PaymentNotice(props: PaymentNoticeProp) {
    const {
        price,
        paymentState,
        refundCause,
        cancelCause,
        fundingEndDate,
        scheduledDate,
    } = props;

    const endDateText = formatDateText(fundingEndDate);
    const scheduledDateText = formatDateText(scheduledDate);

    switch (paymentState) {
        case PAYMENT_SCHEDULED:
            return price === 0 ? (
                <PaymentNoticeList>
                    <PaymentNoticeItem>
                        해당 공연은 <span>무료로 진행되는 공연</span>
                        으로, 목표 금액 또는 인원과 달성여부에 관계없이 공연이
                        진행됩니다.
                    </PaymentNoticeItem>
                    <PaymentNoticeItem>
                        자동으로 공연예약 까지 완료되었으므로{" "}
                        <span>
                            무통장 입금 계좌로 금액을 송금하실 필요가 없습니다.
                        </span>{" "}
                    </PaymentNoticeItem>
                </PaymentNoticeList>
            ) : (
                <PaymentNoticeList>
                    <PaymentNoticeItem>
                        예매 마감 후 1일 뒤인 <span>{scheduledDateText}</span>{" "}
                        에 결제가 진행되고, 카카오 알림톡 또는 휴대폰 문자로
                        결제내역이 전송됩니다.
                        <br />
                        결제 실패시 다음날 다시 결제를 시도하며, 최대 2회까지
                        결제를 다시 시도합니다.
                    </PaymentNoticeItem>
                    <PaymentNoticeItem>
                        예약 취소는 예매 마감일인 {endDateText}까지 가능합니다.{" "}
                    </PaymentNoticeItem>
                    <PaymentNoticeItem>
                        예매 패키지 종류 및 수량 변경은 불가하며, 예약 취소 후
                        다시 예매해야 합니다.
                    </PaymentNoticeItem>
                </PaymentNoticeList>
            );
        case PAYMENT_SCHEDULE_CANCELLED:
            return (
                <PaymentNoticeList>
                    <PaymentNoticeItem>사유 : {cancelCause}</PaymentNoticeItem>{" "}
                </PaymentNoticeList>
            );
        case PAYMENT_SCHEDULED_REFUND:
            return (
                <PaymentNoticeList>
                    <PaymentNoticeItem>사유 : {refundCause}</PaymentNoticeItem>{" "}
                </PaymentNoticeList>
            );
        // 실패사유는 백에서 처리해야될거 더 추가해야 되므로
        // 추가될때 까지 주석처리
        case PAYMENT_SCHEDULED_FAIL:
            return (
                // <PaymentNoticeList>
                //     <PaymentNoticeItem>
                //         사유 : {"{실패 사유}"}
                //     </PaymentNoticeItem>
                // </PaymentNoticeList>
                null
            );
        case PAYMENT_SCHEDULED_COMPLETED:
            return null;
        default:
            return null;
    }
}

const Block = styled.div`
    margin-top: 73px;

    ${media.mobile} {
        margin-top: 60px;
    }
`;

const StyledMyPageHeading2 = styled(MyPageHeading2)`
    ${media.mobile} {
        padding: 0 20px;
    }
`;

const StyledSupportDetailInfoContainer = styled(SupportDetailInfoContainer)`
    padding: 36px 32px 28px;

    ${media.mobile} {
        padding: 24px 20px 16px;
    }
`;

const PaymentNoticeList = styled.ul`
    width: 100%;
    margin-top: 10px;

    ${media.mobile} {
        margin-top: 8px;
    }
`;

const PaymentNoticeItem = styled.li`
    ${fonts.size.scale16}
    ${fonts.lineHeight.scale16}
    position: relative;
    color: ${palette.gray1};
    padding-left: 10px;

    & + & {
        margin-top: 6px;
    }

    span {
        color: ${palette.purple0};
    }

    &:before {
        content: "";
        position: absolute;
        left: 0;
        top: 7px;
        display: inline-block;
        width: 4px;
        height: 4px;
        border-radius: 50%;
        background-color: ${palette.gray1};
    }

    ${media.mobile} {
        padding-left: 8px;

        & + & {
            margin-top: 4px;
        }

        &:before {
            top: 5px;
        }
    }
`;

const CancelPaymentBtn = styled.button`
    ${fonts.size.scale18}
    width: 100%;
    color: ${palette.gray0};
    border: 1px solid ${palette.gray0};
    border-radius: 8px;
    padding: 18px 0;
    margin-top: 36px;
    transition: 0.2s background-color;

    &:hover {
        background-color: ${palette.gray5};
    }

    ${media.mobile} {
        border: 0.5px solid ${palette.gray0};
        border-radius: 4px;
        padding: 14px 0;
        margin-top: 24px;
    }
`;

export default SupportDetailPaymentInfo;
