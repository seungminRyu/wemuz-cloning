import React, { useState } from "react";
import styled from "styled-components";
import fonts from "../../../lib/styles/fonts";
import media from "../../../lib/styles/media";
import palette from "../../../lib/styles/palette";
import RadioInput from "../../common/RadioInput";
import { OrderSectionHeader } from "./OrderStyles";
import NewLine from "../../common/NewLine";
import { copyToClipboard } from "../../../lib/utils";

import { ReactComponent as CopyIco } from "../../../static/icons/global/ico_copy.svg";

export type OrderPaymentMethodProp = {
    paymentMethodRef: React.MutableRefObject<string | null>;
};

function OrderPaymentMethod(props: OrderPaymentMethodProp) {
    const { paymentMethodRef } = props;
    const [curMethod, setCurMethod] = useState<string>("");

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        paymentMethodRef.current = e.target.value;
        setCurMethod(e.target.value);
    };

    const onCopyBtnClick = () => {
        const bankAccountText =
            "301-0299-1930-51 (농협은행, 주식회사 초코뮤직)";
        copyToClipboard(bankAccountText, "클립보드에 계좌번호를 복사했습니다.");
    };

    return (
        <Block>
            <OrderSectionHeader>결제 수단</OrderSectionHeader>
            <MainContainer>
                <MethodContainer>
                    {/* 
                    무통장 입금은 pg 결제 통과된 이후 사용하지 않을 예정
                    pg 통과 후 완전히 삭제할것
                    */}
                    <MethodItem>
                        <RadioInput
                            className="method"
                            name="payment-method"
                            id="remittance"
                            value="remittance"
                            onChange={onChange}
                        />
                        <label className="method-label" htmlFor="remittance">
                            무통장 입금
                        </label>
                    </MethodItem>
                    <MethodItem disabled>
                        <RadioInput
                            className="method"
                            name="payment-method"
                            id="kakao"
                            value="kakao"
                            onChange={onChange}
                            disabled
                        />
                        <label className="method-label" htmlFor="kakao">
                            카카오 페이
                        </label>
                    </MethodItem>
                    <MethodItem disabled>
                        <RadioInput
                            className="method"
                            name="payment-method"
                            id="naver"
                            value="naver"
                            onChange={onChange}
                            disabled
                        />
                        <label className="method-label" htmlFor="naver">
                            네이퍼 페이
                        </label>
                    </MethodItem>
                </MethodContainer>
                {curMethod === "remittance" && (
                    <RemittanceNotice>
                        <HorizentalBar />
                        <AccountInfo>
                            <span>입금 계좌 : </span>
                            <span className="account-number">
                                농협은행 301-0299-1930-51{" "}
                                <NewLine device={["MOBILE"]} />
                                (주식회사 초코뮤직)
                            </span>
                            <AccountCopyBtn onClick={onCopyBtnClick}>
                                <StyledCopyIco /> 복사
                            </AccountCopyBtn>
                        </AccountInfo>
                        <ul>
                            <li>
                                입금하신 금액과 입금자명이 다르거나 주문취소 후
                                입금하신 경우에는 자동으로 입금 확인이
                                불가능합니다.
                            </li>
                            <li>
                                무통장 입금 주문 방식은 입금 확인 후 예매가
                                완료되며 패키지(상품)가 전달됩니다.
                            </li>
                            <li>
                                최종 예매 금액과 입금하시는 금액이 동일해야
                                합니다.
                                <br />
                                여러 개의 예매 금액을 입금하시면 안되며, 금액을
                                정확히 일치하게 입금하셔야 합니다.
                            </li>
                            <li>
                                입금 기한은 예매 완료 후 24시간 이내입니다. (단,
                                판매 종료 시간이 24시간 이내인 공연의 경우 입금
                                기한은 해당 공연의 예매 종료 시간입니다.)
                            </li>
                            <li>
                                ATM 기기에서는 100원 단위 입금이 불가능합니다.
                                은행 창구 또는 통장 및 카드를 이용하여
                                이체하셔야 합니다.
                            </li>
                        </ul>
                    </RemittanceNotice>
                )}
            </MainContainer>
        </Block>
    );
}

const Block = styled.div`
    font-size: 18px;
    margin-top: 73px;

    ${media.mobile} {
        font-size: 14px;
        margin-top: 60px;
    }
`;

const MainContainer = styled.div`
    border: 1px solid ${palette.gray3};
    border-radius: 4px;
    margin-top: 28px;
    ${media.mobile} {
        border-radius: 0;
        border: none;
        border-top: 1px solid ${palette.gray3};
        border-bottom: 1px solid ${palette.gray3};
        margin-top: 16px;
    }
`;

const MethodContainer = styled.div`
    display: flex;
    padding: 38px 40px 32px;

    ${media.mobile} {
        padding: 28px 24px;
    }
`;

const MethodItem = styled.div<{ disabled?: boolean }>`
    display: flex;
    align-items: center;

    & + & {
        margin-left: 80px;
    }

    .method-label {
        color: ${(props) => (props.disabled ? palette.gray2 : palette.black0)};
        cursor: pointer;
        margin-left: 16px;
        margin-top: -2px;
    }

    ${media.mobile} {
        & + & {
            margin-left: 24px;
        }

        .method-label {
            margin-left: 6px;
            margin-top: -1px;
        }
    }
`;

const RemittanceNotice = styled.div`
    padding: 0 40px 32px;

    ul {
        margin-top: 28px;
    }

    li {
        ${fonts.size.scale16}
        ${fonts.lineHeight.scale16}
        position: relative;
        color: ${palette.gray0};
        padding-left: 12px;

        &:before {
            content: "";
            position: absolute;
            top: 7px;
            left: 0px;
            display: inline-block;
            width: 4px;
            height: 4px;
            border-radius: 50%;
            background-color: ${palette.gray0};
        }
    }

    li + li {
        margin-top: 16px;
    }

    ${media.mobile} {
        background-color: ${palette.white1};
        padding: 24px 20px;

        ul {
            margin-top: 20px;
        }

        li {
            padding-left: 8px;

            &:before {
                top: 5px;
                width: 3px;
                height: 3px;
            }
        }

        li + li {
            margin-top: 12px;
        }
    }
`;

const AccountInfo = styled.div`
    display: flex;
    align-items: center;

    span {
        ${fonts.size.scale18}
        ${fonts.lineHeight.scale18}
        font-weight: ${fonts.weight.bold};
        color: ${palette.purple0};
    }

    .account-number {
        word-break: keep-all;
        margin-right: 12px;
    }

    ${media.mobile} {
        display: grid;
        grid-template-columns: 64px 1fr 44px;
        align-items: unset;
    }
`;

const AccountCopyBtn = styled.button`
    ${fonts.size.scale18}
    ${fonts.lineHeight.scale18}
    display: inline-flex;
    align-items: center;
    width: 58px;
    height: 20px;
    font-weight: ${fonts.weight.bold};
    color: ${palette.black0};
    padding: 0;

    ${media.mobile} {
        width: 44px;
        height: 16px;
    }
`;

const StyledCopyIco = styled(CopyIco)`
    margin: -3px 4px 0 0;

    ${media.mobile} {
        width: 16px;
        height: 16px;
        margin: -2px 2px 0 0;
    }
`;

const HorizentalBar = styled.div`
    width: 100%;
    height: 1px;
    background-color: ${palette.gray4};
    margin-bottom: 32px;

    ${media.mobile} {
        display: none;
    }
`;

export default OrderPaymentMethod;
