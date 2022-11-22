import styled from "styled-components";
import fonts from "../../../lib/styles/fonts";
import media from "../../../lib/styles/media";
import palette from "../../../lib/styles/palette";
import { formatPaymentMethod, formatPrice } from "../../../lib/utils";
import { UnderLine } from "../../../styles/Texts";
import {
    parseDateString,
    formatTime,
    copyToClipboard,
} from "../../../lib/utils";

import { ReactComponent as CopyIco } from "../../../static/icons/global/ico_copy.svg";

export type ResultDetailsProp = {
    priceAmount: number;
    paymentMethod: string;
    scheduledPaymentDate: string;
    scheduledDeliveryDate?: string;
};

function ResultDetails(props: ResultDetailsProp) {
    const {
        priceAmount,
        paymentMethod,
        scheduledPaymentDate,
        scheduledDeliveryDate,
    } = props;

    const deadLineDateText = (() => {
        const todayVal = new Date().getTime();
        const aDateVal = 1000 * 60 * 60 * 24;
        const deadLineDateVal = todayVal + aDateVal;
        const deadLineDateStr = new Date(deadLineDateVal).toString();
        const { month, date, day } = parseDateString(deadLineDateStr);
        return `${month}월 ${date}일(${day}) ${formatTime(deadLineDateStr)}`;
    })();
    const scheduledPaymentDateText = (() => {
        const { year, month, date } = parseDateString(scheduledPaymentDate);
        return `${year}년 ${month}월 ${date}일`;
    })();

    const onCopyBtnClick = () => {
        const bankAccountText =
            "301-0299-1930-51 (농협은행, 주식회사 초코뮤직)";
        copyToClipboard(bankAccountText, "클립보드에 계좌번호를 복사했습니다.");
    };

    return (
        <Block>
            <h3>완료 내역</h3>
            <MainContainer>
                <Details>
                    <DetailRow>
                        <label>결제 금액</label>
                        <p className="amount">
                            총 {formatPrice(priceAmount)}원
                        </p>
                    </DetailRow>
                    <DetailRow>
                        <label>결제 수단</label>
                        <p className="method">
                            {formatPaymentMethod(paymentMethod)}
                        </p>
                    </DetailRow>
                    <DetailRow>
                        <label>결제 예정일</label>
                        <p className="due-date">{scheduledPaymentDateText}</p>
                    </DetailRow>
                    {/* 현재 상품 배송 패키지는 서비스 하지 않으므로 주석처리 */}
                    {/* {scheduledDeliveryDate && (
                        <DetailRow>
                            <label>전달 예정일</label>
                            <p className="due-date">
                                {scheduledDeliveryDateText}
                            </p>
                        </DetailRow>
                    )} */}
                </Details>
                <Notice>
                    {formatPaymentMethod(paymentMethod) !== "무통장 입금" ? (
                        <NoticeRow>
                            예매 마감일까지 목표에 미달할 경우 예정된 모든
                            결제는 자동으로 취소됩니다.
                        </NoticeRow>
                    ) : priceAmount === 0 ? (
                        <>
                            <NoticeRow>
                                해당 공연은 <span>무료로 진행되는 공연</span>
                                으로, 목표 금액 또는 인원과 달성여부에 관계없이
                                공연이 진행됩니다.
                            </NoticeRow>
                            <NoticeRow>
                                자동으로 공연예약 까지 완료되었으므로{" "}
                                <span>
                                    무통장 입금 계좌로 금액을 송금하실 필요가
                                    없습니다.
                                </span>{" "}
                            </NoticeRow>
                        </>
                    ) : (
                        <>
                            <NoticeRow>
                                무통장 입금 결제 수단은 아래의 계좌번호로 입금
                                확인 후 예매가 완료됩니다.
                                <br />
                                <div className="account-num">
                                    <span>
                                        농협은행 301-0299-1930-51 (주식회사
                                        초코뮤직)
                                    </span>
                                    <CopyBtn onClick={onCopyBtnClick}>
                                        <StyledCopyIco />
                                        복사
                                    </CopyBtn>
                                </div>
                            </NoticeRow>
                            <NoticeRow>
                                입금 기한은{" "}
                                <UnderLine>{deadLineDateText}</UnderLine>
                                까지 입니다.
                            </NoticeRow>
                            <NoticeRow>
                                최종 예매 금액과 입금하시는 금액이 동일해야
                                합니다.
                            </NoticeRow>
                            <NoticeRow>
                                입금하신 금액과 입금자명이 다르거나 주문취소 후
                                입금하신 경우에는 자동으로 입금 확인이
                                불가능합니다.
                            </NoticeRow>
                            <NoticeRow>
                                입금 후 공연이 취소되거나 목표 금액을 달성하지
                                못한 경우, 입금한 금액은 전액 환불됩니다.
                            </NoticeRow>
                        </>
                    )}
                </Notice>
            </MainContainer>
        </Block>
    );
}

const Block = styled.div`
    margin-top: 100px;

    h3 {
        ${fonts.size.scale22}
        font-weight: ${fonts.weight.bold};
    }

    ${media.mobile} {
        margin-top: 60px;

        h3 {
            padding: 0 20px;
        }
    }
`;

const MainContainer = styled.div`
    border: 1px solid ${palette.gray3};
    border-radius: 4px;
    padding: 0 40px;
    margin-top: 28px;

    ${media.mobile} {
        border-right: none;
        border-left: none;
        border-radius: 0;
        padding: 0;
        margin-top: 16px;
    }
`;

const Details = styled.div`
    padding: 40px 0 32px;

    ${media.mobile} {
        padding: 24px 20px;
    }
`;

const DetailRow = styled.div`
    ${fonts.size.scale18}
    display: grid;
    grid-template-columns: 126px 1fr;

    & + & {
        margin-top: 28px;
    }

    label {
        font-weight: ${fonts.weight.bold};
    }

    p {
        color: ${palette.gray0};
    }

    p.amount {
        color: ${palette.purple0};
        font-weight: ${fonts.weight.bold};
    }

    ${media.mobile} {
        grid-template-columns: 1fr;

        & + & {
            margin-top: 20px;
        }

        p {
            margin-top: 8px;
        }
    }
`;

const Notice = styled.ul`
    border-top: 1px solid ${palette.gray3};
    padding: 28px 0;

    ${media.mobile} {
        background-color: ${palette.white2};
        border-top: none;
        padding: 16px 20px;
    }
`;

const NoticeRow = styled.li`
    ${fonts.size.scale16}
    ${fonts.lineHeight.scale18}
    position: relative;
    color: ${palette.gray0};
    padding-left: 12px;

    & + & {
        margin-top: 16px;
    }

    &:before {
        content: "";
        position: absolute;
        left: 0;
        top: 8px;
        display: inline-block;
        width: 4px;
        height: 4px;
        border-radius: 50%;
        background-color: ${palette.gray0};
    }

    .account-num {
        display: inline-flex;
        align-items: center;
    }

    span {
        font-weight: ${fonts.weight.bold};
        word-break: keep-all;
    }
`;

const CopyBtn = styled.button`
    ${fonts.size.scale16}
    ${fonts.lineHeight.scale16}
    display: inline-flex;
    align-items: center;
    font-weight: ${fonts.weight.bold};
    color: ${palette.purple0};
    padding: 0;
    margin-left: 10px;

    ${media.mobile} {
        width: 60px;
    }
`;

const StyledCopyIco = styled(CopyIco)`
    width: 18px;
    height: 18px;
    margin: -3px 4px 0 0;

    .ico-copy-path {
        stroke: ${palette.purple0};
    }

    ${media.mobile} {
        width: 14px;
        height: 14px;
        margin: -2px 2px 0 0;
    }
`;

export default ResultDetails;
