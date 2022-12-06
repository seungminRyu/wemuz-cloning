import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import fonts from "../../../lib/styles/fonts";
import media from "../../../lib/styles/media";
import palette from "../../../lib/styles/palette";
import {
    formatFundingState,
    formatPaymentState,
    formatPrice,
    parseDateString,
} from "../../../lib/utils";
import { SupportedFundingsItem } from "../../../pages/myPage/hooks/useSupportedFundings";

import defaultImg from "../../../static/imgs/global/img_empty_image.svg";

export type SupportedListFundingBoxProp = {
    supportedFunding: SupportedFundingsItem;
};

function SupportedListFundingBox(props: SupportedListFundingBoxProp) {
    const {
        // - 예매취소 사유
        // - 예매환불 날짜
        // 데이터 없음
        supportedFunding: {
            fundingThumbnail,
            fundingState,
            fundingtitle,
            hostName,
            paymentAmounts,
            paymentState,
            paymentDate,
            orderDate,
            supportId,
        },
    } = props;
    const orderDateText = (() => {
        const { year, month, date } = parseDateString(orderDate);
        return `${year}.${month}.${date} 예매`;
    })();
    const paymentInfoText = (() => {
        const { year, month, date } = parseDateString(paymentDate);
        switch (paymentState) {
            case "payment_scheduled":
                return `${year}.${month}.${date} 결제 예정`;
            default:
                return "";
        }
    })();
    const stateText = `예매 ${formatFundingState(fundingState)}`;
    const priceText = `${formatPrice(paymentAmounts)}원`;

    return (
        <SupportedListFundingBoxBlock>
            <TimeStamp>{orderDateText}</TimeStamp>
            <FundingInfo>
                <Thumbnail
                    src={fundingThumbnail || defaultImg}
                    alt="공연 썸네일"
                />
                <InfoContainer>
                    <State>
                        <StateIndicator state={fundingState} /> {stateText}
                    </State>
                    <Title to={`../support/${supportId}`}>{fundingtitle}</Title>
                    <Price>{priceText}</Price>
                    <Host>by {hostName}</Host>
                </InfoContainer>
            </FundingInfo>
            <PaymentInfo>
                <PaymentState>{formatPaymentState(paymentState)}</PaymentState>
                <PaymentInfoText state={paymentState}>
                    {paymentInfoText}
                </PaymentInfoText>
            </PaymentInfo>
        </SupportedListFundingBoxBlock>
    );
}

const SupportedListFundingBoxBlock = styled.div`
    width: 100%;
    border: 1px solid ${palette.gray4};
    border-radius: 8px;
    padding: 24px;

    & + & {
        margin-top: 16px;
    }

    ${media.mobile} {
        border-radius: 4px;
        padding: 16px;

        & + & {
            margin-top: 10px;
        }
    }
`;

const TimeStamp = styled.p`
    ${fonts.size.scale14};
    color: ${palette.gray0};

    ${media.mobile} {
        text-align: end;
    }
`;

const FundingInfo = styled.div`
    display: grid;
    grid-template-areas: "thumbnail info";
    grid-template-columns: 100px 1fr;
    column-gap: 20px;
    margin-top: 16px;

    ${media.mobile} {
        grid-template-areas: "info thumbnail";
        grid-template-columns: 1fr 64px;
        column-gap: 12px;
        margin-top: 8px;
    }
`;

const Thumbnail = styled.img`
    grid-area: thumbnail;
    width: 100px;
    height: 75px;
    object-fit: cover;
    border-radius: 4px;

    ${media.mobile} {
        width: 64px;
        height: 48px;
        margin-top: 18px;
    }
`;

const InfoContainer = styled.div`
    display: grid;
    grid-area: info;
    grid-template-areas: "state state" "title price" "host host";
    grid-template-columns: 1fr 120px;

    ${media.mobile} {
        grid-template-areas: "state" "title" "host" "price";
        grid-template-columns: 1fr;
    }
`;

const State = styled.div`
    ${fonts.size.scale14}
    grid-area: state;
    display: flex;
    align-items: center;
`;

const StateIndicator = styled.span<{ state: string }>`
    display: inline-block;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    margin-right: 6px;
    ${(props) => {
        switch (props.state) {
            case "running":
                return css`
                    background-color: ${palette.purple0};
                `;
            case "cancelled":
            case "failed":
                return css`
                    background-color: ${palette.gray2};
                `;
            case "succeeded":
                return css`
                    background-color: ${palette.black0};
                `;
            default:
                return css`
                    background-color: ${palette.gray2};
                `;
        }
    }}

    ${media.mobile} {
        width: 4px;
        height: 4px;
        margin-right: 4px;
    }
`;

const Title = styled(Link)`
    ${fonts.size.scale20}
    ${fonts.lineHeight.scale20}
    grid-area: title;
    font-weight: ${fonts.weight.bold};
    margin-top: 8px;
    cursor: pointer;

    &,
    &:link,
    &:visited {
        color: ${palette.black0};
    }

    &:hover {
        text-decoration: underline;
        text-underline-offset: 3px;
    }

    ${media.mobile} {
        margin-top: 6px;
    }
`;

const Price = styled.p`
    ${fonts.size.scale20}
    ${fonts.lineHeight.scale20}
    grid-area: price;
    text-align: end;
    margin-top: 8px;

    ${media.mobile} {
        text-align: start;
        margin-top: 10px;
    }
`;

const Host = styled.p`
    ${fonts.size.scale16}
    ${fonts.lineHeight.scale16}
    grid-area: host;
    color: ${palette.gray0};
    margin-top: 10px;

    ${media.mobile} {
        margin-top: 6px;
    }
`;

const PaymentInfo = styled.div`
    display: flex;
    justify-content: space-between;
    border-top: 1px solid ${palette.gray4};
    padding-top: 24px;
    margin-top: 24px;
`;

const PaymentState = styled.p`
    ${fonts.size.scale18}
    ${fonts.lineHeight.scale18}
    font-weight: ${fonts.weight.bold};
    color: ${palette.purple0};
`;

const PaymentInfoText = styled.p<{ state: string }>`
    ${fonts.size.scale18}
    ${fonts.lineHeight.scale18}
    ${(props) =>
        props.state === "payment_scheduled"
            ? css`
                  color: ${palette.red0};
              `
            : css`
                  color: ${palette.gray0};
              `}
`;

export default SupportedListFundingBox;
