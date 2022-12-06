import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import fonts from "../../../lib/styles/fonts";
import media from "../../../lib/styles/media";
import palette from "../../../lib/styles/palette";
import CheckBoxInput from "../../common/CheckBoxInput";
import { formatPrice } from "../../../lib/utils";
import useToggle from "../../../lib/hooks/useToggle";
import OrderTermsModal from "./OrderTermsModal";

import { ReactComponent as icoMore } from "../../../static/icons/purchase/ico_more_terms.svg";

export type OrderTermsProp = {
    isAllTermsChecked: React.MutableRefObject<(() => boolean) | null>;
    priceAmount: number;
    endDate: string;
};

function OrderTerms(props: OrderTermsProp) {
    const { isAllTermsChecked, priceAmount, endDate } = props;
    const [isModalOpen, toggleIsModalOpen] = useToggle(false);
    const [selectedTerms, setSelectedTerms] = useState<string | null>(null);
    const termsInputRefs = useRef<(HTMLInputElement | null)[]>([]);

    useEffect(() => {
        const defineIsAllTermsChecked = () => {
            isAllTermsChecked.current = () => {
                let ret = true;
                termsInputRefs.current.forEach((input) => {
                    if (!input) return;
                    ret = ret && input.checked;
                });
                return ret;
            };
        };

        defineIsAllTermsChecked();
    }, []);

    const paymentDateText = (() => {
        const endDateObj = new Date(endDate);
        const aDateVal = 24 * 60 * 60 * 1000;
        const paymentDateVal = endDateObj.getTime() + aDateVal;
        const paymentDateObj = new Date(paymentDateVal);
        return `${paymentDateObj.getFullYear()}년 ${
            paymentDateObj.getMonth() + 1
        }월 ${paymentDateObj.getDate()}일`;
    })();

    const termsList = [
        {
            label: "caution",
            title: "위뮤즈 공연 예매에 대한 유의사항 및 동의 (필수)",
        },
        {
            label: "personalInformation",
            title: "제3자에 대한 개인 정보 제공 동의 (필수)",
        },
        {
            label: "paymentReservation",
            title: "공연 예매 결제에 대한 동의 (필수)",
        },
        {
            label: "cancelPayment",
            title: "예약 결제 취소에 대한 동의 (필수)",
        },
        {
            label: "refundPolicy",
            title: "공연 예매 환불 규정에 대한 동의 (필수)",
        },
    ];

    const onShowTermsBtnClick = (terms: string) => {
        setSelectedTerms(terms);
        toggleIsModalOpen();
    };

    return (
        <Block>
            <Amount>
                <p className="amount-lebel">최종 예매 금액</p>
                <p className="amount-value">{formatPrice(priceAmount)}원</p>
            </Amount>
            <TermsList>
                {termsList.map((aTerms, i) => (
                    <TermsItem key={`terms-item-${i}`}>
                        <StyledCheckBoxInput
                            className="terms-check-input"
                            type="checkbox"
                            name="terms"
                            id={`terms-${i}`}
                            inputRef={(el) => (termsInputRefs.current[i] = el)}
                        />
                        <TermsTitleContainer>
                            <label htmlFor={`terms-${i}`}>{aTerms.title}</label>
                            <ShowDetailBtn
                                onClick={() =>
                                    onShowTermsBtnClick(aTerms.label)
                                }
                            >
                                <span>자세히 보기</span>
                                <StyledIcoMore />
                            </ShowDetailBtn>
                        </TermsTitleContainer>
                    </TermsItem>
                ))}
                <PaymentInfoText>
                    목표 달성 시, <span>{paymentDateText}</span>에 결제됩니다.
                    목표를 달성하지 못하거나 공연 예매가 중단된 경우 예약된
                    결제는 자동으로 취소됩니다.
                </PaymentInfoText>
            </TermsList>
            <OrderTermsModal
                isOpen={isModalOpen}
                toggleOpen={toggleIsModalOpen}
                terms={selectedTerms}
            />
        </Block>
    );
}

const Block = styled.div`
    margin-top: 72px;

    ${media.mobile} {
        font-size: 16px;
        margin-top: 60px;
    }
`;

const Amount = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    font-size: 22px;
    font-weight: ${fonts.weight.bold};
    color: ${palette.purple0};
    background-color: ${palette.purple5};
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    padding: 36px 40px;

    .amount-value {
        text-align: end;
    }

    ${media.mobile} {
        font-size: 16px;
        padding: 24px 20px 23px;
        border-radius: 0;
    }
`;

const TermsList = styled.ul`
    border: 1px solid ${palette.gray3};
    border-top: none;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    padding: 36px 40px;

    .check-box-label {
        display: inline-block;
        width: 18px;
        height: 18px;
        border: 1px solid #aaaaaa;
    }

    ${media.mobile} {
        padding: 28px 20px;
        border-radius: 0;
        border: none;
        border-bottom: 1px solid ${palette.gray3};
    }
`;

const TermsItem = styled.li`
    display: flex;
    align-items: center;
    font-size: 18px;

    & + & {
        margin-top: 20px;
    }

    ${media.mobile} {
        & + & {
            margin-top: 16px;
        }

        font-size: 14px;
        align-items: unset;
    }
`;

const ShowDetailBtn = styled.button`
    span {
        font-size: 18px;
        color: ${palette.purple0};
        border-bottom: 1px solid transparent;
        transition: border-bottom 0.2s;
    }

    &:hover {
        span {
            border-bottom: 1px solid ${palette.purple0};
        }
    }

    ${media.mobile} {
        display: inline-block;
        transform: translateY(3px);
        margin-left: 6px;

        span {
            display: none;
        }
    }
`;

const StyledCheckBoxInput = styled(CheckBoxInput)`
    margin-top: -3px;

    label {
        width: 18px;
        height: 18px;
        border: 1px solid ${palette.gray6};

        &::before {
            width: 18px;
            height: 18px;
            background-size: 18px;
        }
    }

    ${media.mobile} {
        margin-top: 2px;

        label {
            width: 14px;
            height: 14px;
            border: 1px solid ${palette.gray6};

            &::before {
                width: 14px;
                height: 14px;
                background-size: 14px;
            }
        }
    }
`;

const TermsTitleContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-left: 10px;

    label {
        cursor: pointer;
    }

    ${media.mobile} {
        display: inline;
        line-height: 19px;
    }
`;

const StyledIcoMore = styled(icoMore)`
    display: none;

    ${media.mobile} {
        display: inline-block;
    }
`;

const PaymentInfoText = styled.p`
    ${fonts.size.scale16}
    ${fonts.lineHeight.scale16}
    color: ${palette.gray0};
    padding-left: 28px;
    margin-top: 10px;

    span {
        font-weight: ${fonts.weight.bold};
        color: ${palette.purple0};
    }

    ${media.mobile} {
        padding-left: 20px;
        margin-top: 8px;
    }
`;

export default OrderTerms;
