import { memo } from "react";
import styled, { css } from "styled-components";
import useLoopIndex from "../../lib/hooks/useLoopIndex";
import media from "../../lib/styles/media";
import palette from "../../lib/styles/palette";

import { ReactComponent as NextIco } from "../../static/icons/detail/ico_photo_next_2.svg";
import { ReactComponent as PrevIco } from "../../static/icons/detail/ico_photo_prev_2.svg";

export type MediaGridProp = {
    videos: {
        id: any;
        name: any;
        path: any;
        size: any;
        thumbnail: any;
        type: any;
        uploaded: any;
    }[];
    photos: string[];
};

function MediaGrid(props: MediaGridProp) {
    const { videos, photos } = props;
    const videosCnt = videos.length;
    const photosCnt = photos.length;
    const [curIdx, increaseCurIdx, decreaseCurIdx] = useLoopIndex(
        photosCnt + videosCnt - 1
    );

    const onPrevBtnClick = (): void => decreaseCurIdx();
    const onNextBtnClick = (): void => increaseCurIdx();

    return (
        <MediaGridBlock>
            <div className="media-grid-container">
                {videos.map((video, i) => (
                    <MediaBlock key={i} idx={i} curIdx={curIdx}>
                        {/* <VideoController>
                            <video>
                                <source src={video.path} />
                            </video>
                        </VideoController> */}
                        <video controls poster={video.thumbnail}>
                            <source src={video.path} />
                        </video>
                    </MediaBlock>
                ))}
                {photos.map((photo, i) => (
                    <MediaBlock key={i} idx={videosCnt + i} curIdx={curIdx}>
                        <img src={photo} alt={`공연 소개 사진-${i + 1}`} />
                    </MediaBlock>
                ))}
                <PrevBtn onClick={onPrevBtnClick}>
                    <StyledPrevIco />
                </PrevBtn>
                <NextBtn onClick={onNextBtnClick}>
                    <StyledNextIco />
                </NextBtn>
            </div>
        </MediaGridBlock>
    );
}

const MediaGridBlock = styled.div`
    position: relative;
    width: 100%;
    aspect-ratio: 1360 / 504;

    .media-grid-container {
        position: absolute;
        top: 0;
        left: 0;
        display: grid;
        grid-template-areas: "area-0 area-0 area-1 area-2" "area-0 area-0 area-3 area-4";
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: repeat(2, 1fr);
        grid-gap: 24px;
        width: 100%;
        height: 100%;
    }

    ${media.tablet} {
        aspect-ratio: 320 / 240;

        .media-grid-container {
            display: block;
        }
    }
`;

const MediaBlock = styled.div<{ idx: number; curIdx: number }>`
    width: 100%;
    ${({ idx }) =>
        idx < 5
            ? css`
                  grid-area: area-${idx};
              `
            : css`
                  display: none;
              `};

    .video-controller {
        width: 100%;
        height: 100%;
    }

    img,
    video {
        width: 100%;
        aspect-ratio: 320 / 240;
        object-fit: cover;
        border-radius: 4px;
    }

    ${media.tablet} {
        height: 100%;
        ${({ idx, curIdx }) =>
            idx === curIdx
                ? css`
                      display: block;
                  `
                : css`
                      display: none;
                  `};
        img,
        video {
            width: 100%;
            height: 100%;
            border-radius: 0px;
        }
    }
`;

const mediaBtnStyle = css`
    display: none;

    ${media.tablet} {
        position: absolute;
        top: 50%;
        display: inline-block;
        transform: translateY(-50%);
    }
`;

const PrevBtn = styled.button`
    ${mediaBtnStyle}

    ${media.tablet} {
        left: 0;
    }
`;

const NextBtn = styled.button`
    ${mediaBtnStyle}

    ${media.tablet} {
        right: 0;
    }
`;

const mediaIconStyle = css`
    width: 60px;
    height: 60px;

    &: hover {
        #stroke {
            stroke: ${palette.white0} !important;
            transition: stroke 0.3s;
        }
    }

    ${media.mobile} {
        width: 40px;
        height: 40px;
    }
`;

const StyledNextIco = styled(NextIco)`
    ${mediaIconStyle}
`;

const StyledPrevIco = styled(PrevIco)`
    ${mediaIconStyle}
`;

export default memo(MediaGrid);
