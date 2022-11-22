import React from "react";
import styled from "styled-components";
import media from "../../lib/styles/media";
import palette from "../../lib/styles/palette";
import { SkelElem } from "../common/Skeleton";

export type DetailBottomTabBarSkeletonProp = {};

function DetailBottomTabBarSkeleton(props: DetailBottomTabBarSkeletonProp) {
    return (
        <DetailBottomTabBarSkeletonBlock>
            <SkelElem size={"sm"} className="btn" idx={0} />
            <SkelElem size={"sm"} className="btn" idx={1} />
            <SkelElem size={"sm"} className="btn" idx={2} />
        </DetailBottomTabBarSkeletonBlock>
    );
}

const DetailBottomTabBarSkeletonBlock = styled.div`
    display: none;

    ${media.tablet} {
        display: grid;
        grid-template-columns: 80px 80px 1fr;
        column-gap: 8px;
        width: 100%;
        height: 92px;
        box-sizing: border-box;
        background-color: ${palette.white0};
        box-shadow: 0 0 4px #0000001a;
        padding: 10px 20px;
        z-index: 100;

        .btn {
            width: 100%;
            height 100%;
        }
    }

    ${media.mobile} {
        grid-template-columns: 52px 52px 1fr;
        column-gap: 6px;
        height: 62px;
        padding: 6px 12px;
    }
`;

export default DetailBottomTabBarSkeleton;
