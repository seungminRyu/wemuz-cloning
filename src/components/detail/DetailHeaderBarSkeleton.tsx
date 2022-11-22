import styled from "styled-components";
import media from "../../lib/styles/media";
import palette from "../../lib/styles/palette";
import { SkelElem } from "../common/Skeleton";

export type DetailHeaderBarSkeletonProp = {};

function DetailHeaderBarSkeleton(props: DetailHeaderBarSkeletonProp) {
    return (
        <DetailHeaderBarSkeletonBlock>
            <SkelElem size={"sm"} className="btn" idx={0} />
            <SkelElem size={"sm"} className="text" idx={0} />
            <SkelElem size={"sm"} className="btn" idx={0} />
        </DetailHeaderBarSkeletonBlock>
    );
}

const DetailHeaderBarSkeletonBlock = styled.div`
    display: none;

    ${media.tablet} {
        display: grid;
        grid-template-columns: 28px 1fr 28px;
        align-items: center;
        width: 100%;
        height: 58px;
        box-sizing: border-box;
        background-color: ${palette.white0};
        border-bottom: 1px solid ${palette.gray5};
        padding: 0 40px;
        margin-top: 80px;

        .btn {
            width: 32px;
            height: 32px;
        }

        .text {
            width: 300px;
            height: 24px;
            margin: 0 auto;
        }
    }

    ${media.mobile} {
        grid-template-columns: 20px 1fr 20px;
        height: 42px;
        padding: 0px 20px;
        margin-top: 60px;

        .btn {
            width: 24px;
            height: 24px;
        }

        .text {
            width: 200px;
            height: 20px;
        }
    }
`;

export default DetailHeaderBarSkeleton;
