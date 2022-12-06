import styled from "styled-components";
import { FundingCardInfo } from "../../lib/api/home/type";
import fonts from "../../lib/styles/fonts";
import media from "../../lib/styles/media";
import palette from "../../lib/styles/palette";
import { formatFundingState, parseDateString } from "../../lib/utils";
import HomeFundingCard from "./HomeFundingCard";
import Likes from "./Likes";

type EndedFundingCardProp = {
    funding: FundingCardInfo;
};

function EndedFundingCard(props: EndedFundingCardProp) {
    const {
        funding: {
            id,
            title,
            thumbnail,
            location,
            is_liked: isLiked,
            funding_host_alias: host,
            number_of_likes: likes,
            performance_date: performanceDate,
            achievement_criterion: achievementCriterion,
            money_achievement_rate: moneyAchievementRate,
            audience_achievement_rate: audienceAchievementRate,
            funding_state: fundingState,
        },
    } = props;
    const isFundingSuccessed = fundingState === "succeeded";
    const isPerformEnded = (() => {
        const performDateObj = new Date(performanceDate);
        const nowDateObj = new Date();
        return performDateObj.getTime() < nowDateObj.getTime();
    })();
    const achievementRate =
        achievementCriterion === "audience"
            ? audienceAchievementRate
            : moneyAchievementRate;
    const performDateText = (() => {
        const { month, date } = parseDateString(performanceDate);
        return `${month}월 ${date}일 ${
            isPerformEnded ? "공연 완료" : "공연 예정"
        }`;
    })();
    const fundingStateText = `공연 ${formatFundingState(fundingState)}`;

    return (
        <HomeFundingCard>
            <HomeFundingCard.Thumbnail
                id={id}
                location={location}
                thumbnail={thumbnail}
            >
                {isFundingSuccessed && (
                    <PerformanceDateTag isEneded={isPerformEnded}>
                        {performDateText}
                    </PerformanceDateTag>
                )}
            </HomeFundingCard.Thumbnail>
            <HomeFundingCard.SubHeaderBlock>
                <HomeFundingCard.SubHeaderText>
                    {fundingStateText}
                </HomeFundingCard.SubHeaderText>
                <Likes id={id} isLiked={isLiked} likes={likes} />
            </HomeFundingCard.SubHeaderBlock>
            <HomeFundingCard.HeaderTitleBlock to={`/detail/${id}`}>
                <HomeFundingCard.HeaderTitle>
                    {title}
                </HomeFundingCard.HeaderTitle>
            </HomeFundingCard.HeaderTitleBlock>
            <FundingInfoBlock>
                <HomeFundingCard.InfoTags location={location} host={host} />
                {isFundingSuccessed && (
                    <AchievementRate>{achievementRate}% 달성</AchievementRate>
                )}
            </FundingInfoBlock>
        </HomeFundingCard>
    );
}

const PerformanceDateTag = styled.div<{ isEneded: boolean }>`
    ${fonts.size.scale18}
    position: absolute;
    left: 0;
    bottom: 0;
    display: grid;
    place-items: center;
    width: 100%;
    height: 52px;
    font-weight: ${fonts.weight.bold};
    color: ${palette.white0};
    background-color: ${(props) =>
        props.isEneded ? palette.gray1 : palette.purple0};

    ${media.mobile} {
        height: 40px;
    }
`;

const FundingInfoBlock = styled.div`
    display: flex;
    justify-content: space-between;
`;

const AchievementRate = styled.span`
    ${fonts.size.scale18}
    font-weight: ${fonts.weight.bold};
    color: ${palette.purple0};
    margin-top: 16px;

    ${media.mobile} {
        margin-top: 12px;
    }
`;

export default EndedFundingCard;
