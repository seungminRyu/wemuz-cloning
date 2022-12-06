import styled from "styled-components";
import fonts from "../../lib/styles/fonts";
import media from "../../lib/styles/media";
import palette from "../../lib/styles/palette";
import { formatPrice, parseDateString } from "../../lib/utils";
import useDetailInfo from "../../pages/detail/hooks/useDetailInfo";

export type DetailFundingStateProp = {};

function DetailFundingState(props: DetailFundingStateProp) {
    const {
        detailInfo: {
            fundingMoneyAchievementRate,
            fundingAudienceAchievementRate,
            fundingMoneyAmount,
            fundingAudienceAmount,
            fundingCriterion,
            fundingRemainingDates,
            fundingPeriod,
            fundingMoneyMinAmount,
            fundingAudienceMinAmount,
            fundingState,
        },
    } = useDetailInfo();

    const criterionStateLabelText =
        fundingCriterion === "audience" ? "참가 인원" : "달성 금액";
    const achievementAmount =
        fundingCriterion === "audience"
            ? fundingAudienceAmount
            : formatPrice(fundingMoneyAmount);
    const achievementRate =
        fundingCriterion === "audience"
            ? fundingAudienceAchievementRate
            : fundingMoneyAchievementRate;
    const achievementRateText = `${achievementRate} % 달성`;
    const goalAmountText =
        fundingCriterion === "audience"
            ? `목표인원: ${fundingAudienceMinAmount}`
            : `목표금액: ${fundingMoneyMinAmount}`;
    const periodText = (() => {
        const startDay = parseDateString(fundingPeriod.start);
        const endDay = parseDateString(fundingPeriod.end);
        return `예매기간: ${startDay.year}.${startDay.month}.${startDay.date}~${endDay.year}.${endDay.month}.${endDay.date}`;
    })();
    const isBeforeEnded =
        fundingState === "scheduled" || fundingState === "running";

    return (
        <Block>
            <StateContainer>
                <StateSection>
                    <StateLabel>{criterionStateLabelText}</StateLabel>
                    <StateInfo>
                        <span>{achievementAmount}</span>{" "}
                        {fundingCriterion === "audience" ? "명" : "원"}
                    </StateInfo>
                    <AchievementState>
                        <AchievementBar rate={achievementRate}>
                            <div></div>
                        </AchievementBar>
                        <p>{achievementRateText}</p>
                    </AchievementState>
                </StateSection>
                {isBeforeEnded && (
                    <StateSection>
                        <StateLabel>남은 기간</StateLabel>
                        <StateInfo>
                            <span>{fundingRemainingDates}</span> 일
                        </StateInfo>
                    </StateSection>
                )}
            </StateContainer>
            <GuideContainer>
                <GuidePerformInfo>{goalAmountText}</GuidePerformInfo>
                <GuidePerformInfo>{periodText}</GuidePerformInfo>
                <GuideTextContainer>
                    <p>
                        예매 마감일까지 목표 금액이 100% 이상 모이지 않으면
                        공연이 진행되지 않습니다.
                    </p>
                    <p>
                        본 공연은 목표 인원 또는 금액을 달성했을시에만
                        진행됩니다. 목표 금액 또는 인원을 달성하지 못하였을
                        경우에는 본 공연은 취소되며 예약된 결제가 진행되지
                        않습니다.
                    </p>
                </GuideTextContainer>
            </GuideContainer>
        </Block>
    );
}

const Block = styled.div`
    ${media.tablet} {
        padding: 0 40px;
    }

    ${media.mobile} {
        padding: 0 20px;
    }
`;

const StateContainer = styled.div`
    ${media.tablet} {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: 1fr;
    }

    ${media.mobile} {
        display: block;
    }
`;

const StateSection = styled.div`
    &:not(:first-child) {
        margin-top: 32px;
    }

    &:nth-child(2) {
        margin-top: 16px;
    }

    ${media.tablet} {
        && {
            margin-top: 0;
        }
    }

    ${media.mobile} {
        &&: not(: first-child) {
            margin-top: 30px;
        }

        &&: nth-child(2) {
            margin-top: 12px;
        }
    }
`;

const StateLabel = styled.p`
    ${fonts.size.scale16}
    color: ${palette.gray0};
`;

const StateInfo = styled.div`
    ${fonts.size.scale16}
    color: ${palette.gray1};
    margin-top: 16px;

    span {
        color: ${palette.black0};
        font-weight: ${fonts.weight.bold};
        font-size: 32px;
    }

    ${media.mobile} {
        margin-top: 12px;

        span {
            font-size: 22px;
        }
    }
`;

const AchievementState = styled.div`
    margin-top: 12px;

    p {
        color: ${palette.purple0};
        text-align: end;
        margin-top: 8px;
    }

    ${media.tablet} {
        p {
            text-align: start;
        }
    }

    ${media.mobile} {
        p {
            font-size: 13px;
            text-align: end;
        }
    }
`;

const AchievementBar = styled.div<{ rate: number }>`
    width: 100%;
    height: 6px;
    border-radius: 4px;
    background-color: ${palette.gray4};

    div {
        width: ${({ rate }) => (rate < 100 ? rate : 100)}%;
        height: 6px;
        border-radius: 4px;
        background-color: ${palette.purple3};
    }

    ${media.tablet} {
        display: none;
    }

    ${media.mobile} {
        display: block;
    }
`;

const GuideContainer = styled.div`
    ${fonts.size.scale14}
    background-color: ${palette.white2};
    border-radius: 4px;
    padding: 28px 16px 20px;
    margin-top: 40px;

    ${media.tablet} {
        background-color: ${palette.purple5};
        margin-top: 32px;
    }

    ${media.mobile} {
        padding: 20px 16px;
    }
`;

const GuidePerformInfo = styled.p`
    color: ${palette.purple0};

    & + & {
        margin-top: 6px;
    }

    ${media.tablet} {
        font-weight: ${fonts.weight.bold};
    }

    ${media.mobile} {
        & + & {
            margin-top: 4px;
        }
    }
`;

const GuideTextContainer = styled.div`
    color: ${palette.gray0};
    line-height: 18px;
    margin-top: 24px;

    p {
        position: relative;
        padding-left: 10px;
    }

    p:before {
        content: "-";
        position: absolute;
        left: 0;
        top: 0;
    }

    p + p {
        margin-top: 8px;
    }

    ${media.mobile} {
        line-height: 16px;
        margin-top: 20px;

        p + p {
            margin-top: 8px;
        }
    }
`;

export default DetailFundingState;
