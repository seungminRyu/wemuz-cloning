import React from "react";
import styled from "styled-components";
import media from "../../lib/styles/media";
import { SkelElem } from "../common/Skeleton";

export type DetailTopSkeletonProp = {};

function DetailTopSkeleton(props: DetailTopSkeletonProp) {
    return (
        <DetailTopSkeletonBlock>
            <Header>
                <SkelElem size={"sm"} className="header-1" idx={0} />
                <SkelElem size={"sm"} className="header-2" idx={1} />
                <SkelElem size={"sm"} className="header-3" idx={2} />
            </Header>
            <Media>
                <div className="media-inner">
                    <SkelElem size={"sm"} className="media-lg" idx={0} />
                    <SkelElem size={"sm"} className="media-sm" idx={1} />
                    <SkelElem size={"sm"} className="media-sm" idx={2} />
                    <SkelElem size={"sm"} className="media-sm" idx={3} />
                    <SkelElem size={"sm"} className="media-sm" idx={4} />
                </div>
            </Media>
            <Bar>
                <SkelElem className="performance-date" idx={0} />
            </Bar>
            <State>
                <div className="state-top">
                    <div className="state-item">
                        <SkelElem size={"sm"} className="state-1" idx={0} />
                        <SkelElem size={"sm"} className="state-2" idx={1} />
                        <SkelElem size={"sm"} className="state-3" idx={2} />
                    </div>
                    <div className="state-item">
                        <SkelElem size={"sm"} className="state-1" idx={0} />
                        <SkelElem size={"sm"} className="state-2" idx={1} />
                        <SkelElem size={"sm"} className="state-3" idx={2} />
                    </div>
                    <div className="state-item">
                        <SkelElem size={"sm"} className="state-1" idx={0} />
                        <SkelElem size={"sm"} className="state-2" idx={1} />
                        <SkelElem size={"sm"} className="state-3" idx={2} />
                    </div>
                </div>
                <div className="state-bottom">
                    <SkelElem className="sm state-4" idx={0} />
                </div>
            </State>
        </DetailTopSkeletonBlock>
    );
}

const DetailTopSkeletonBlock = styled.div`
    position: relative;
    max-width: 1440px;
    width: 100%;
    box-sizing: border-box;
    padding: 0 40px 20px;
    margin: 0 auto;

    ${media.tablet} {
        display: grid;
        grid-template-areas: "media" "bar" "header" "state";
        grid-template-columns: 1fr;
        padding: 0;
    }
`;

const Header = styled.div`
    padding-top: 60px;

    .header-1 {
        width: 180px;
        height: 22px;
    }

    .header-2 {
        width: 400px;
        height: 36px;
        margin-top: 36px;
    }

    .header-3 {
        width: 400px;
        height: 31px;
        margin-top: 12px;
    }

    ${media.tablet} {
        grid-area: header;
        padding: 0 40px;
        margin-top: 60px;
    }

    ${media.mobile} {
        padding: 0 20px;
        margin-top: 48px;

        .header-1 {
            width: 90%;
            height: 24px;
        }

        .header-2 {
            width: 90%;
            height: 24px;
            margin-top: 5px;
        }

        .header-3 {
            width: 60%;
            height: 16px;
            margin-top: 14px;
        }
    }
`;

const Media = styled.div`
    position: relative;
    width: 100%;
    aspect-ratio: 1360 / 504;
    margin-top: 24px;

    .media-inner {
        position: absolute;
        top: 0;
        left: 0;
        display: grid;
        grid-template-areas: "area-lg area-lg area-sm area-sm" "area-lg area-lg area-sm area-sm";
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: repeat(2, 1fr);
        grid-gap: 24px;
        width: 100%;
        height: 100%;
    }

    .media-lg {
        grid-area: area-lg;
        width: 100%;
        aspect-ratio: 320 / 240;
    }

    .media-sm {
        width: 100%;
        aspect-ratio: 320 / 240;
    }

    ${media.tablet} {
        grid-area: media;
        aspect-ratio: 320 / 240;
        margin-top: 57px;

        .media-lg {
            border-radius: 0;
        }
        .media-sm {
            display: none;
        }

        .media-inner {
            display: block;
        }
    }

    ${media.mobile} {
        margin-top: 42px;
    }
`;

const State = styled.div`
    display: none;

    ${media.tablet} {
        display: block;
        grid-area: state;
        padding: 0 40px;
        margin-top: 48px;

        .state-top {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
        }

        .state-1 {
            width: 50%;
            height: 20px;
        }

        .state-2 {
            width: 80%;
            height: 35px;
            margin-top: 14px;
        }

        .state-3 {
            width: 80%;
            height: 20px;
            margin-top: 4px;
        }

        .state-bottom {
            padding-bottom: 57px;
        }

        .state-4 {
            width: 100%;
            height: 150px;
            margin-top: 30px;
        }
    }

    ${media.mobile} {
        padding: 0 20px;
        margin-top: 40px;

        .state-top {
            display: block;
        }

        .state-item + .state-item {
            margin-top: 28px;
        }

        .state-1 {
            width: 30%;
            height: 14px;
        }

        .state-2 {
            width: 50%;
            height: 28px;
            margin-top: 8px;
        }

        .state-3 {
            display: none;
        }

        .state-bottom {
            padding-bottom: 52px;
        }

        .state-4 {
            width: 100%;
            height: 136px;
            margin-top: 32px;
        }
    }
`;

const Bar = styled.div`
    position: relative;
    display: grid;
    place-content: center;
    width: 100%;
    margin-top: 60px;

    .performance-date {
        width: 100vw;
        height: 76px;
    }

    ${media.tablet} {
        grid-area: bar;
        margin-top: 0;

        .performance-date {
            height: 58px;
            border-radius: 0;
        }
    }

    ${media.mobile} {
        .performance-date {
            height: 35px;
        }
    }
`;

export default DetailTopSkeleton;
