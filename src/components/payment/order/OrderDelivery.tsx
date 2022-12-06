import React, { useCallback, useRef, useState } from "react";
import styled from "styled-components";
import fonts from "../../../lib/styles/fonts";
import media from "../../../lib/styles/media";
import palette from "../../../lib/styles/palette";
import { OrderDeliveryLabel, OrderSectionHeader } from "./OrderStyles";
import OrderAddressInputs from "./OrderAddressInputs";
import OrderRecentAddress from "./OrderRecentAddress";

export type OrderDeliveryProp = {
    getIsAllAddressInputsFilledRef: React.MutableRefObject<
        (() => boolean) | null
    >;
};

export type DeliveryTab = "RECENT" | "INPUT";

function OrderDelivery(props: OrderDeliveryProp) {
    const { getIsAllAddressInputsFilledRef } = props;
    const [currentTab, setCurrentTab] = useState<DeliveryTab>("RECENT");
    const [deliveryInfo, setDeliveryInfo] = useState<{
        postNum: string;
        receiver: string;
        address: string;
        phoneNum: string;
    } | null>(null);
    const receiverInputRef = useRef<HTMLInputElement>(null);
    const postNumInputRef = useRef<HTMLInputElement>(null);
    const address1InputRef = useRef<HTMLInputElement>(null);
    const address2InputRef = useRef<HTMLInputElement>(null);
    const phoneNumInputRef = useRef<HTMLInputElement>(null);

    const onTabClick = (e: React.MouseEvent) => {
        const target: HTMLElement | null = e.target as any;
        if (!target) return;
        const $tabItem: HTMLDivElement | null = target.closest(".tab-item");
        if (!$tabItem) return;

        const selectedTabName = $tabItem.dataset.tabName as DeliveryTab;
        setCurrentTab(selectedTabName);
        setDeliveryInfo(null);
    };

    getIsAllAddressInputsFilledRef.current = useCallback(() => {
        if (
            !receiverInputRef.current ||
            !postNumInputRef.current ||
            !address1InputRef.current ||
            !address2InputRef.current ||
            !phoneNumInputRef.current
        )
            return false;

        return (
            !!receiverInputRef.current.value &&
            !!postNumInputRef.current.value &&
            !!address1InputRef.current.value &&
            !!address2InputRef.current.value &&
            !!phoneNumInputRef.current.value
        );
    }, []);

    return (
        <OrderDeliveryBlock>
            <OrderSectionHeader>배송지 정보</OrderSectionHeader>
            <Container>
                <DeliveryTabs onClick={onTabClick}>
                    <DeliveryTabItem
                        data-tab-name="RECENT"
                        className={`tab-item ${
                            currentTab === "RECENT" && "--active"
                        }`}
                    >
                        최근 배송지
                    </DeliveryTabItem>
                    <VerticalBar />
                    <DeliveryTabItem
                        data-tab-name="INPUT"
                        className={`tab-item ${
                            currentTab === "INPUT" && "--active"
                        }`}
                    >
                        직접 입력
                    </DeliveryTabItem>
                </DeliveryTabs>
                <DeliveryInfo>
                    {currentTab === "RECENT" && (
                        <OrderRecentAddress
                            receiverInputRef={receiverInputRef}
                            postNumInputRef={postNumInputRef}
                            address1InputRef={address1InputRef}
                            address2InputRef={address2InputRef}
                            phoneNumInputRef={phoneNumInputRef}
                        />
                    )}
                    {currentTab === "INPUT" && (
                        <OrderAddressInputs
                            receiverInputRef={receiverInputRef}
                            postNumInputRef={postNumInputRef}
                            address1InputRef={address1InputRef}
                            address2InputRef={address2InputRef}
                            phoneNumInputRef={phoneNumInputRef}
                        />
                    )}
                    <HorizontalBar />
                    <PostScript>
                        <OrderDeliveryLabel>
                            배송 시 요청사항 (선택)
                        </OrderDeliveryLabel>
                        <PostScriptTextArea
                            name="post-script"
                            className="post-script-input"
                            placeholder="배송 시 택배기사님께 요청하실 정보를 기입해 주세요."
                        />
                    </PostScript>
                </DeliveryInfo>
            </Container>
        </OrderDeliveryBlock>
    );
}

const OrderDeliveryBlock = styled.div`
    margin-top: 72px;

    ${media.mobile} {
        margin-top: 60px;
    }
`;

const Container = styled.div`
    border: 1px solid ${palette.gray3};
    border-radius: 4px;
    margin-top: 28px;

    ${media.mobile} {
        border-radius: 0;
        border-left: none;
        border-right: none;
        margin-top: 16px;
    }
`;

const DeliveryTabs = styled.div`
    display: grid;
    grid-template-columns: 1fr 1px 1fr;
`;

const DeliveryTabItem = styled.div`
    width: 100%;
    font-size: 18px;
    text-align: center;
    cursor: pointer;
    color: ${palette.gray1};
    background-color: ${palette.gray4};
    border-bottom: 1px solid ${palette.gray3};
    padding: 28px 0 27px;

    &.--active {
        color: ${palette.black0};
        font-weight: ${fonts.weight.bold};
        background-color: ${palette.white0};
        border-bottom: none;
    }

    ${media.mobile} {
        font-size: 14px;
        padding: 16px 0 16px;
    }
`;

const DeliveryInfo = styled.div`
    padding: 48px 40px;

    ${media.mobile} {
        padding: 28px 0 0;
    }
`;

const VerticalBar = styled.div`
    width: 1px;
    height: 100%;
    background-color: ${palette.gray3};
`;

const HorizontalBar = styled.div`
    width: 100%;
    height: 1px;
    background-color: ${palette.gray5};
    margin: 48px 0;

    ${media.mobile} {
        display: none;
    }
`;

const PostScript = styled.div`
    display: grid;
    grid-template-columns: 1fr;

    ${media.mobile} {
        padding: 28px 20px;
        background-color: ${palette.white2};
        margin-top: 28px;
    }
`;

const PostScriptTextArea = styled.textarea`
    display: inline-block;
    height: 48px;
    font-size: 18px;
    border: 1px solid ${palette.gray6};
    border-radius: 4px;
    box-sizing: border-box;
    resize: none;
    padding: 15px 16px 13px;
    margin-top: 16px;

    ${media.mobile} {
        height: 76px;
        font-size: 14px;
        line-height: 19px;
        padding: 11px 12px;
    }
`;

export default React.memo(OrderDelivery);
