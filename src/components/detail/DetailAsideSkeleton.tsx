import React from "react";
import styled from "styled-components";
import { SkelElem } from "../common/Skeleton";

export type DetailAsideSkeletonProp = {};

function DetailAsideSkeleton(props: DetailAsideSkeletonProp) {
    return (
        <DetailAsideSkeletonBlock>
            <SkelElem size={"sm"} className="state" idx={0} />
            <SkelElem size={"sm"} className="bar" idx={0} />
            <SkelElem size={"sm"} className="state" idx={1} />
            <SkelElem size={"sm"} className="state" idx={2} />
            <SkelElem size={"sm"} className="text-box" idx={3} />
            <ButtonGroup>
                <SkelElem size={"sm"} className="btn-lg" idx={0} />
                <SkelElem size={"sm"} className="btn-sm" idx={1} />
                <SkelElem size={"sm"} className="btn-sm" idx={2} />
                <SkelElem size={"sm"} className="btn-sm" idx={3} />
            </ButtonGroup>
        </DetailAsideSkeletonBlock>
    );
}

const DetailAsideSkeletonBlock = styled.div`
    .state {
        width: 100%;
        height: 64px;
        margin-top: 32px;
    }

    .state:first-child {
        margin-top: 0;
    }

    .bar {
        width: 100%;
        height: 16px;
        margin-top: 8px;
    }

    .text-box {
        width: 100%;
        height: 196px;
        margin-top: 40px;
    }
`;

const ButtonGroup = styled.div`
    display: grid;
    grid-template-areas: "lg lg lg" "sm sm sm";
    grid-template-columns: repeat(3, 1fr);
    row-gap: 16px;
    column-gap: 8px;
    margin-top: 8px;

    .btn-lg {
        grid-area: lg;
        width: 100%;
        height: 53px;
    }

    .btn-sm {
        width: 100%;
        height: 42px;
    }
`;

export default DetailAsideSkeleton;
