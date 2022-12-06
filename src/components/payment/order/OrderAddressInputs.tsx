import React from "react";
import styled from "styled-components";
import media from "../../../lib/styles/media";
import palette from "../../../lib/styles/palette";
import { OrderDeliveryLabel } from "./OrderStyles";

export type OrderAddressInputsProps = {
    receiverInputRef: React.RefObject<HTMLInputElement>;
    postNumInputRef: React.RefObject<HTMLInputElement>;
    address1InputRef: React.RefObject<HTMLInputElement>;
    address2InputRef: React.RefObject<HTMLInputElement>;
    phoneNumInputRef: React.RefObject<HTMLInputElement>;
};

function OrderAddressInputs(props: OrderAddressInputsProps) {
    const {
        receiverInputRef,
        postNumInputRef,
        address1InputRef,
        address2InputRef,
        phoneNumInputRef,
    } = props;

    return (
        <OrderAddressInputsBlock>
            <InputRow>
                <OrderDeliveryLabel htmlFor="receiver">
                    받는 사람
                </OrderDeliveryLabel>
                <Input
                    ref={receiverInputRef}
                    type="text"
                    name="receiver"
                    className="receiver-input"
                />
            </InputRow>
            <InputRow>
                <OrderDeliveryLabel htmlFor="post-num">주소</OrderDeliveryLabel>
                <div className="input-container">
                    <div className="input-row">
                        <Input
                            ref={postNumInputRef}
                            type="text"
                            name="post-num"
                            className="post-num-input"
                        />
                        <SearchAddresBtn>주소 검색</SearchAddresBtn>
                    </div>
                    <div className="input-row">
                        <Input
                            ref={address1InputRef}
                            type="text"
                            name="address-area1"
                            className="address-area1-input"
                        />
                    </div>
                    <div className="input-row">
                        <Input
                            ref={address2InputRef}
                            type="text"
                            name="address-area2"
                            className="address-area2-input"
                            placeholder="상세 주소를 입력해 주세요."
                        />
                    </div>
                </div>
            </InputRow>
            <InputRow>
                <OrderDeliveryLabel htmlFor="phone-num">
                    연락처
                </OrderDeliveryLabel>
                <Input
                    ref={phoneNumInputRef}
                    type="tel"
                    name="phone-num"
                    className="phone-num-input"
                    placeholder="휴대폰 번호를 입력해주세요."
                />
            </InputRow>
        </OrderAddressInputsBlock>
    );
}

const OrderAddressInputsBlock = styled.div``;

const InputRow = styled.div`
    display: grid;
    grid-template-columns: 94px 1fr;

    & + & {
        margin-top: 36px;
    }

    .input-row + .input-row {
        margin-top: 12px;
    }

    ${media.mobile} {
        grid-template-columns: 1fr;
        padding: 0 20px;

        & + & {
            margin-top: 24px;
        }

        .input-row + .input-row {
            margin-top: 8px;
        }
    }
`;

const Input = styled.input`
    display: inline-block;
    font-size: 18px;
    border: 1px solid ${palette.gray6};
    border-radius: 4px;
    box-sizing: border-box;
    padding: 15px 16px 13px;

    &.receiver-input {
        width: 280px;
    }

    &.post-num-input {
        width: 142px;
    }

    &.address-area1-input,
    &.address-area2-input {
        width: 100%;
    }

    &.phone-num-input {
        width: 280px;
    }

    ${media.mobile} {
        font-size: 14px;
        padding: 11px 12px;

        &.receiver-input,
        &.phone-num-input {
            width: 100%;
        }
    }
`;

const SearchAddresBtn = styled.button`
    font-size: 18px;
    color: ${palette.white0};
    background-color: ${palette.purple0};
    border-radius: 4px;
    padding: 15px 28px 13px;
    margin-left: 12px;

    ${media.mobile} {
        font-size: 14px;
        padding: 11px 20px;
        margin-left: 8px;
    }
`;

export default OrderAddressInputs;
