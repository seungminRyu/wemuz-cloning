import styled from "styled-components";
import { fadeIn } from "../../../lib/styles/animations";
import fonts from "../../../lib/styles/fonts";
import media from "../../../lib/styles/media";
import palette from "../../../lib/styles/palette";
import { formatFundingState, formatRemainingDays } from "../../../lib/utils";
import { LikedFundings } from "../../../pages/myPage/hooks/useLikedList";
import FundingCard from "../../common/FundingCard";
import Likexx from "../../common/Likexx";
import LikedListEmpty from "./LikedListEmpty";
import LikedListFundingCardSkeleton from "./LikedListFundingCardSkeleton";

export type LikedListMainProp = {
    likedFundings: LikedFundings;
    isLoading: boolean;
    onClick: Function;
};

function LikedListMain(props: LikedListMainProp) {
    const { likedFundings, isLoading, onClick } = props;
    const likeCount = likedFundings.length;

    return (
        <LikedListMainBlock>
            {likeCount > 0 ? (
                <LikedFundingsGrid>
                    {likedFundings.map((aLikeFunding, i) => {
                        const stateText = `공연 ${formatFundingState(
                            aLikeFunding.funding_state
                        )}`;

                        const remainingDaysText =
                            aLikeFunding.funding_state === "running"
                                ? formatRemainingDays(
                                      aLikeFunding.remaining_days_by_end_date
                                  )
                                : undefined;

                        return (
                            <StyledFundingCard key={`liked-funding-${i}`}>
                                <FundingCard.Top>
                                    <FundingCard.Location>
                                        {aLikeFunding.location}
                                    </FundingCard.Location>
                                    <FundingCard.Thumbnail
                                        id={aLikeFunding.id}
                                        src={aLikeFunding.thumbnail}
                                    />
                                </FundingCard.Top>
                                <FundingCard.HeaderGrid
                                    topText={
                                        <FundingCard.State
                                            state={aLikeFunding.funding_state}
                                        >
                                            {stateText}
                                        </FundingCard.State>
                                    }
                                    mainText={
                                        <FundingCard.Title
                                            to={`/detail/${aLikeFunding.id}`}
                                        >
                                            {aLikeFunding.title}
                                        </FundingCard.Title>
                                    }
                                    bottomText={
                                        <Host>
                                            {aLikeFunding.funding_host_alias}
                                        </Host>
                                    }
                                    like={
                                        <LikeBox>
                                            <Likexx
                                                onClick={() =>
                                                    onClick(
                                                        aLikeFunding.id,
                                                        aLikeFunding.is_liked
                                                    )
                                                }
                                            >
                                                <Likexx.Ico
                                                    isLiked={
                                                        aLikeFunding.is_liked
                                                    }
                                                />
                                            </Likexx>
                                            <span>
                                                {aLikeFunding.number_of_likes}
                                            </span>
                                        </LikeBox>
                                    }
                                />
                                <FundingCard.Achievement
                                    value={aLikeFunding.money_achievement_rate}
                                    criterion={
                                        aLikeFunding.achievement_criterion
                                    }
                                    subText={
                                        <RemainingDays>
                                            {remainingDaysText}
                                        </RemainingDays>
                                    }
                                />
                            </StyledFundingCard>
                        );
                    })}
                    {isLoading &&
                        Array(6)
                            .fill(null)
                            .map((_, i) => (
                                <LikedListFundingCardSkeleton
                                    key={`liked-list-card-skeleton-${i}`}
                                />
                            ))}
                </LikedFundingsGrid>
            ) : (
                <LikedListEmpty />
            )}
        </LikedListMainBlock>
    );
}

const LikedListMainBlock = styled.div`
    margin-top: 24px;

    ${media.mobile} {
        margin-top: 16px;
    }
`;

const LikedFundingsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 20px;
    row-gap: 45px;

    ${media.tablet} {
        grid-template-columns: repeat(2, 1fr);
        column-gap: 32px;
    }

    ${media.mobile} {
        grid-template-columns: repeat(1, 1fr);
        column-gap: 0;
        row-gap: 37px;
    }
`;

const StyledFundingCard = styled(FundingCard)`
    opacity: 0;
    animation-name: ${fadeIn};
    animation-duration: 0.2s;
    animation-fill-mode: forwards;
`;

const Host = styled.p`
    ${fonts.size.scale16}
    color: ${palette.gray1};
    margin-top: 10px;
`;

const LikeBox = styled.div`
    display: flex;
    align-items: center;

    span {
        ${fonts.size.scale18}
        color: ${palette.purple0};
        margin-left: 4px;
    }
`;

const RemainingDays = styled.span`
    ${fonts.size.scale16}
    color: ${palette.gray1};
`;

export default LikedListMain;
