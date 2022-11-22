import React, { memo } from "react";
import styled from "styled-components";
import useToggle from "../../lib/hooks/useToggle";
import media from "../../lib/styles/media";
import MediaGrid from "../common/MediaGrid";
import DetailHeader from "./DetailHeader";
import DetailFundingState from "./DetailFundingState";
import DetailMediaViewer from "./DetailMediaViewer";
import palette from "../../lib/styles/palette";
import { parseDateString, setPreventScroll } from "../../lib/utils";
import useDetailInfo from "../../pages/detail/hooks/useDetailInfo";
import PerformanceDate from "../common/PerformanceDate";
import DetailTopSkeleton from "./DetailTopSkeleton";

import { ReactComponent as MoreIco } from "../../static/icons/detail/ico_more.svg";

export type DetailTopProp = {};

function DetailTop(props: DetailTopProp) {
    const [viewerOpen, toggleViewerOpen] = useToggle(false);
    const {
        detailInfo: {
            fundingTitle,
            fundingState,
            fundingVideos,
            fundingPhotos,
            placeAddress,
            placeName,
            performanceScheduledTime,
        },
        loading,
    } = useDetailInfo();

    const onMoreBtnClick = (): void => {
        toggleViewerOpen();
        setPreventScroll(true);
    };

    return !loading ? (
        <DetailTopBlock>
            <DetailHeader
                state={fundingState}
                location={placeAddress}
                title={fundingTitle}
            />
            <MediaGridWrapper>
                <MediaGrid videos={fundingVideos} photos={fundingPhotos} />
                <MoreBtn onClick={onMoreBtnClick}>
                    <StyledMoreIco />
                    더보기
                </MoreBtn>
            </MediaGridWrapper>
            <StyledPerformanceDate
                placeName={placeName}
                date={performanceScheduledTime}
            />
            <FundingStateWrapper>
                <DetailFundingState />
            </FundingStateWrapper>
            {viewerOpen && (
                <DetailMediaViewer
                    videos={fundingVideos}
                    photos={fundingPhotos}
                    toggleOpen={toggleViewerOpen}
                />
            )}
        </DetailTopBlock>
    ) : (
        <DetailTopSkeleton />
    );
}

const DetailTopBlock = styled.header`
    position: relative;
    max-width: 1440px;
    width: 100%;
    box-sizing: border-box;
    padding: 0 40px 20px;
    margin: 0 auto;

    ${media.tablet} {
        display: grid;
        grid-template-areas: "media" "performance-date" "header" "state";
        grid-template-columns: 1fr;
        padding: 57px 0;
    }

    ${media.mobile} {
        padding: 42px 0 52px;
    }
`;

const MoreBtn = styled.button`
    position: absolute;
    bottom: 196px;
    right: 60px;
    display: inline-flex;
    align-items: center;
    font-size: 16px;
    color: ${palette.black1};
    border-radius: 8px;
    background-color: ${palette.white0};
    box-shadow: 0 0 4px #33333333;
    transition: background-color 0.3s;
    padding: 10px 10px 9px 8px;

    &:hover {
        background-color: ${palette.gray3};
    }

    i {
        margin-right: 2px;
    }

    ${media.tablet} {
        display: none;
    }
`;

const StyledMoreIco = styled(MoreIco)`
    width: 20px;
    height: 20px;
`;

const MediaGridWrapper = styled.div`
    ${media.tablet} {
        grid-area: media;
    }
`;

const StyledPerformanceDate = styled(PerformanceDate)`
    margin-top: 60px;

    .inner {
        background-color: ${palette.purple5};
    }

    .date,
    .place-name {
        color: ${palette.black0};
    }

    ${media.tablet} {
        grid-area: performance-date;
        margin-top: 0;

        .inner {
            padding: 21px 0 19px;
        }

        .date,
        .place-name {
            color: ${palette.purple0};
        }
    }

    ${media.mobile} {
        .inner {
            padding: 12px 20px 11px;
        }
    }
`;

const FundingStateWrapper = styled.div`
    display: none;

    ${media.tablet} {
        grid-area: state;
        display: block;
    }
`;

export default memo(DetailTop);
