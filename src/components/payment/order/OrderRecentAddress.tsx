import React from "react";
import styled from "styled-components";
import media from "../../../lib/styles/media";
import palette from "../../../lib/styles/palette";
import RadioInput from "../../common/RadioInput";
import fonts from "../../../lib/styles/fonts";

import { ReactComponent as CloseIco } from "../../../static/icons/global/ico_close.svg";

export type OrderRecentAddressProps = {
    receiverInputRef: React.RefObject<HTMLInputElement>;
    postNumInputRef: React.RefObject<HTMLInputElement>;
    address1InputRef: React.RefObject<HTMLInputElement>;
    address2InputRef: React.RefObject<HTMLInputElement>;
    phoneNumInputRef: React.RefObject<HTMLInputElement>;
};

function OrderRecentAddress(props: OrderRecentAddressProps) {
    const {
        receiverInputRef,
        postNumInputRef,
        address1InputRef,
        address2InputRef,
        phoneNumInputRef,
    } = props;

    const onAddressItemClick = () => {
        if (
            !receiverInputRef.current ||
            !postNumInputRef.current ||
            !address1InputRef.current ||
            !address2InputRef.current ||
            !phoneNumInputRef.current
        )
            return;
        receiverInputRef.current.value = "김꿀벌";
        postNumInputRef.current.value = "46241";
        address1InputRef.current.value = "부산광역시 금정구 부산대학로63번길";
        address2InputRef.current.value = "2(장전동, 부산대학교) 제6공학관 2층";
        phoneNumInputRef.current.value = "010-1234-1234";
    };

    return (
        <OrderRecentAddressBlock>
            <RecentAddressList>
                <HiddenInputContainer>
                    <input ref={postNumInputRef} type="text" name="post-num" />
                    <input ref={receiverInputRef} type="text" name="receiver" />
                    <input
                        ref={address1InputRef}
                        type="text"
                        name="address-area1"
                    />
                    <input
                        ref={address2InputRef}
                        type="text"
                        name="address-area2"
                    />
                    <input
                        ref={phoneNumInputRef}
                        type="text"
                        name="phone-num"
                    />
                </HiddenInputContainer>
                <RecentAddressItem>
                    <RadioInput
                        onLabelClick={onAddressItemClick}
                        name="address"
                        id="address-1"
                    />
                    <AddressInfo>
                        <p className="receiver">
                            <span className="receiver-name">김꿀벌</span>
                            <span className="receiver-phone-num">
                                010-1234-1234
                            </span>
                        </p>
                        <p className="address">
                            [46241] 부산광역시 금정구 부산대학로63번길 2
                            (장전동, 부산대학교) 제6공학관 2층
                        </p>
                    </AddressInfo>
                    <DeleteBtn>
                        <StyledCloseIco />
                    </DeleteBtn>
                </RecentAddressItem>
                <RecentAddressItem>
                    <RadioInput
                        onLabelClick={onAddressItemClick}
                        name="address"
                        id="address-2"
                    />
                    <AddressInfo>
                        <p className="receiver">
                            <span className="receiver-name">김꿀벌</span>
                            <span className="receiver-phone-num">
                                010-1234-1234
                            </span>
                        </p>
                        <p className="address">
                            [46241] 부산광역시 금정구 부산대학로63번길 2
                            (장전동, 부산대학교) 제6공학관 2층
                        </p>
                    </AddressInfo>
                    <DeleteBtn>
                        <StyledCloseIco />
                    </DeleteBtn>
                </RecentAddressItem>
            </RecentAddressList>
        </OrderRecentAddressBlock>
    );
}

const OrderRecentAddressBlock = styled.div`
    padding: 0 20px;
`;

const HiddenInputContainer = styled.div`
    position: absolute;
    left: -9999px;
    opacity: 0;
`;

const RecentAddressList = styled.ul``;

const RecentAddressItem = styled.li`
    display: grid;
    grid-template-columns: 20px 1fr 40px;

    & + & {
        margin-top: 36px;
    }

    ${media.mobile} {
        grid-template-columns: 16px 1fr 16px;

        & + & {
            margin-top: 24px;
        }
    }
`;

const AddressInfo = styled.div`
    font-size: 18px;
    padding: 0 20px 0 16px;

    .receiver-name {
        font-weight: ${fonts.weight.bold};
        margin-right: 12px;
    }

    .address {
        line-height: 25px;
        margin-top: 12px;
    }

    ${media.mobile} {
        font-size: 14px;
        padding: 0 16px 0 8px;

        .receiver-name {
            margin-right: 6px;
        }

        .address {
            line-height: 19px;
            margin-top: 8px;
        }
    }
`;

const DeleteBtn = styled.button`
    display: inline-grid;
    place-content: center;
    width: 40px;
    height: 40px;

    ${media.mobile} {
        width: 20px;
        height: 20px;
    }
`;

const StyledCloseIco = styled(CloseIco)`
    width: 24px;
    height: 24px;

    path.cls-2 {
        stroke: ${palette.gray2};
    }

    ${media.mobile} {
        width: 20px;
        height: 20px;
    }
`;

export default OrderRecentAddress;
