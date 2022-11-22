import styled from "styled-components";
import media from "../../../lib/styles/media";
import { SkelElem } from "../../common/Skeleton";

export type LikedListFundingCardSkeletonProp = {};

function LikedListFundingCardSkeleton(props: LikedListFundingCardSkeletonProp) {
    return (
        <LikedListFundingCardSkeletonBlock>
            <ThumbnailSkel size="sm" idx={0} />
            <TextSkel1 size="sm" idx={1} />
            <TextSkel2 size="sm" idx={2} />
            <TextSkel3 size="sm" idx={3} />
        </LikedListFundingCardSkeletonBlock>
    );
}

const LikedListFundingCardSkeletonBlock = styled.div``;

const ThumbnailSkel = styled(SkelElem)`
    width: 100%;
    aspect-ratio: 1 / 0.75;
`;

const TextSkel1 = styled(SkelElem)`
    width: 40%;
    height: 20px;
    margin-top: 28px;

    ${media.mobile} {
        height: 16px;
        margin-top: 16px;
    }
`;

const TextSkel2 = styled(SkelElem)`
    width: 100%;
    height: 32px;
    margin-top: 20px;

    ${media.mobile} {
        height: 28px;
        margin-top: 8px;
    }
`;
const TextSkel3 = styled(SkelElem)`
    width: 100%;
    height: 32px;
    margin-top: 8px;

    ${media.mobile} {
        height: 28px;
    }
`;

export default LikedListFundingCardSkeleton;
