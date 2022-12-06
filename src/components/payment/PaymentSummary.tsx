import React from "react";
import styled, { css } from "styled-components";
import fonts from "../../lib/styles/fonts";
import media from "../../lib/styles/media";
import palette from "../../lib/styles/palette";
import PerformanceDate from "../common/PerformanceDate";
import { formatPrice } from "../../lib/utils";
import usePurchaseFunding from "../../pages/payment/hooks/usePaymentFunding";

export type PaymentSummaryProp = {};

function PaymentSummary(props: PaymentSummaryProp) {
    const [
        {
            thumbnail,
            title,
            hostAlias,
            hostPhoto,
            criterion,
            moneyAmount,
            audienceAmount,
            moneyAchievementRate,
            audienceAchievementRate,
            placeName,
            remainingDates,
            performanceDate,
        },
        loading,
    ] = usePurchaseFunding();

    if (loading) return null;
    return (
        <Block>
            <Main>
                <Thumbnail>
                    <img src={thumbnail} alt="공연 썸네일" />
                </Thumbnail>
                <Header>
                    <p className="title">{title}</p>
                    <Host>
                        <img
                            className="host-avatar"
                            src={hostPhoto}
                            alt="호스트 프로필 사진"
                        />
                        <p className="host-name">{hostAlias}</p>
                    </Host>
                    <FundingState>
                        <AchievementValue>
                            {criterion === "audience"
                                ? `${audienceAmount}명`
                                : `${formatPrice(moneyAmount)}원`}
                        </AchievementValue>
                        <AchievementRate>
                            {criterion === "audience"
                                ? audienceAchievementRate
                                : moneyAchievementRate}
                            % 달성
                        </AchievementRate>
                        <RemainingDates isHighlight={remainingDates <= 3}>
                            {remainingDates}일 남음
                        </RemainingDates>
                    </FundingState>
                </Header>
            </Main>
            <PerformanceDate date={performanceDate} placeName={placeName} />
        </Block>
    );
}

const Block = styled.div``;

const Main = styled.div`
    display: grid;
    grid-template-areas: "thumbnail header";
    grid-template-columns: 220px 1fr;
    column-gap: 36px;
    padding: 72px 0;

    ${media.mobile} {
        grid-template-areas: "header thumbnail";
        grid-template-columns: 1fr 64px;
        column-gap: 12px;
        padding: 40px 20px;
    }
`;

const Thumbnail = styled.div`
    grid-area: thumbnail;

    img {
        width: 220px;
        height: 165px;
        object-fit: cover;
        border-radius: 4px;
    }

    ${media.mobile} {
        img {
            width: 64px;
            height: 48px;
        }
    }
`;

const Header = styled.div`
    grid-area: header;
    padding-top: 27px;

    .title {
        ${fonts.size.scale22}
        line-height: 30px;
        font-weight: ${fonts.weight.bold};
    }

    ${media.tablet} {
        padding-top: 12px;
    }

    ${media.mobile} {
        padding: 0;

        .title {
            line-height: 22px;
        }
    }
`;

const Host = styled.div`
    display: flex;
    align-items: center;
    margin-top: 12px;

    .host-avatar {
        width: 28px;
        height: 28px;
        object-fit: cover;
        border-radius: 10px;
        margin-right: 8px;
    }

    .host-name {
        font-size: 18px;
        color: ${palette.gray0};
    }

    ${media.mobile} {
        display: none;
    }
`;

const FundingState = styled.div`
    ${fonts.size.scale16}
    ${fonts.lineHeight.scale16}
    margin-top: 28px;

    span:not(:last-child) {
        position: relative;
        margin-right: 17px;
    }

    span:not(:last-child)::before {
        content: "";
        position: absolute;
        top: 7px;
        right: -11px;
        width: 3px;
        height: 3px;
        border-radius: 50%;
        background-color: ${palette.gray0};
    }

    ${media.mobile} {
        margin-top: 12px;

        span:not(:last-child) {
            margin-right: 14px;
        }

        span:not(:last-child)::before {
            top: 6px;
            right: -9px;
        }
    }
`;

const AchievementValue = styled.span`
    color: ${palette.gray0};
    white-space: nowrap;
`;
const AchievementRate = styled.span`
    color: ${palette.purple0};
    white-space: nowrap;
`;
const RemainingDates = styled.span<{ isHighlight: boolean }>`
    color: ${palette.red0};
    white-space: nowrap;
    padding: 1px 2px;
    ${(props) =>
        props.isHighlight &&
        css`
            background-color: #ffeeee;
            border-radius: 2px;
        `}

    ${media.mobile} {
        padding: 0 1px;
    }
`;

export default React.memo(PaymentSummary);
