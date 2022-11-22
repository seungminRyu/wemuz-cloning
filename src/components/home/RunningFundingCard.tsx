import { FundingCardInfo } from "../../lib/api/home/type";
import { parseDateString, formatPrice } from "../../lib/utils";
import HomeFundingCard from "./HomeFundingCard";
import Likes from "./Likes";

type RunningFundingCardProp = {
    funding: FundingCardInfo;
};

function RunningFundingCard(props: RunningFundingCardProp) {
    const { funding } = props;
    const {
        id,
        title,
        thumbnail,
        location,
        is_liked: isLiked,
        least_package_price: leastPrice,
        funding_host_alias: host,
        number_of_likes: likes,
        achievement_criterion: achievementCriterion,
        money_achievement_rate: moneyAchievementRate,
        audience_achievement_rate: audienceAchievementRate,
        performance_date: performanceDate,
        remaining_days_by_end_date: remainingDates,
    } = funding;
    const achievementRate =
        achievementCriterion === "audience"
            ? audienceAchievementRate
            : moneyAchievementRate;
    const performDateText = (() => {
        const { year, month, date, day } = parseDateString(performanceDate);
        return `${year}.${month}.${date} (${day}) 공연`;
    })();

    return (
        <HomeFundingCard>
            <HomeFundingCard.Thumbnail
                id={id}
                location={location}
                thumbnail={thumbnail}
            />
            <HomeFundingCard.SubHeaderBlock>
                <HomeFundingCard.SubHeaderText>
                    {performDateText}
                </HomeFundingCard.SubHeaderText>
                <Likes id={id} isLiked={isLiked} likes={likes} />
            </HomeFundingCard.SubHeaderBlock>
            <HomeFundingCard.HeaderTitleBlock to={`/detail/${id}`}>
                <HomeFundingCard.HeaderTitle>
                    {title}
                </HomeFundingCard.HeaderTitle>
            </HomeFundingCard.HeaderTitleBlock>
            <HomeFundingCard.InfoTags location={location} host={host} />
            <HomeFundingCard.PriceText>
                {`1인 ${formatPrice(leastPrice)}원~`}
            </HomeFundingCard.PriceText>
            <HomeFundingCard.AchievementRate
                rate={achievementRate}
                remainingDates={remainingDates}
            />
        </HomeFundingCard>
    );
}

export default RunningFundingCard;
