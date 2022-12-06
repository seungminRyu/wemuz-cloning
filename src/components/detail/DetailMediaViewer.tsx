import { ReactElement, useMemo } from "react";
import styled, { css } from "styled-components";
import useLoopIndex from "../../lib/hooks/useLoopIndex";
import palette from "../../lib/styles/palette";
import Gallery from "../common/Gallery";
import media from "../../lib/styles/media";

import { ReactComponent as CloseIco } from "../../static/icons/detail/ico_close.svg";
import { ReactComponent as PrevIco } from "../../static/icons/detail/ico_photo_prev.svg";
import { ReactComponent as NextIco } from "../../static/icons/detail/ico_photo_next.svg";

export type DetailMediaViewerProp = {
    videos: {
        id: number;
        name: string;
        path: string;
        size: number;
        thumbnail: string | null;
        type: string;
        uploaded: string | null;
    }[];
    photos: string[];
    toggleOpen: () => void;
    initialIdx?: number;
};

function DetailMediaViewer(props: DetailMediaViewerProp) {
    const { videos, photos, toggleOpen } = props;
    const mediaCnt = photos.length + videos.length;
    const [curIdx, increaseCurIdx, decreaseCurIdx] = useLoopIndex(mediaCnt - 1);

    const onCloseBtnClick = (): void => {
        toggleOpen();
        document.body.style.overflowY = "auto";
    };

    const onPrevBtnClick = (): void => {
        decreaseCurIdx();
    };

    const onNextBtnClick = (): void => {
        increaseCurIdx();
    };

    const mediaNodes: ReactElement[] = useMemo(
        () => [
            ...videos.map((video, i) => (
                <video controls>
                    <source src={video.path} />
                </video>
            )),
            ...photos.map((photo, i) => (
                <img
                    key={i}
                    src={photo}
                    alt={`공연소개 이미지 - ${i + 1}`}
                ></img>
            )),
        ],
        [videos, photos]
    );

    return (
        <DetailMediaViewerBlock>
            <div className="media-viewer-inner">
                <Header>
                    <div className="page">
                        <span className="cur-page">{curIdx + 1}</span>/
                        <span className="total-page">{mediaCnt}</span>
                    </div>
                    <div className="close-btn-wrapper">
                        <CloseBtn onClick={onCloseBtnClick}>
                            <StyledCloseIco />
                            <span>닫기</span>
                        </CloseBtn>
                    </div>
                </Header>
                <GalleryWrapper>
                    <Gallery curIdx={curIdx} slideNodes={mediaNodes} />
                </GalleryWrapper>
                <BtnGroup>
                    <PrevBtn onClick={onPrevBtnClick}>
                        <PrevIco />
                    </PrevBtn>
                    <NextBtn onClick={onNextBtnClick}>
                        <NextIco />
                    </NextBtn>
                </BtnGroup>
            </div>
        </DetailMediaViewerBlock>
    );
}

const DetailMediaViewerBlock = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    z-index: 1000;
    background-color: #000000;
    padding: 40px 40px 80px;

    .media-viewer-inner {
        width: 100%;
        height: 100%;
    }

    ${media.mobile} {
        padding: 24px 0;
    }
`;

const Header = styled.div`
    display: grid;
    width: 100%;
    grid-template-areas: ". page close";
    grid-template-columns: repeat(3, 1fr);

    .page {
        grid-area: page;
        color: var(--wemuz-white);
        text-align: center;

        .cur-page {
            color: ${palette.purple3};
            margin-right: 8px;
        }

        .total-page {
            margin-left: 8px;
        }
    }

    .close-btn-wrapper {
        grid-area: close;
    }

    ${media.mobile} {
        .page {
            font-size: 15px;
        }

        .close-btn-wrapper {
            padding-right: 14px;
        }
    }
`;

const CloseBtn = styled.button`
    display: flex;
    align-items: center;
    font-size: 18px;
    color: ${palette.gray4};
    background-color: #000000;
    border-radius: 8px;
    border: 1px solid ${palette.gray4};
    transition: opacity 0.3s;
    padding: 11px 16px 9px 14px;
    margin-left: auto;

    &:hover {
        opacity: 20%;
    }

    i {
        margin-right: 2px;
        margin-top: -2px;
    }

    ${media.mobile} {
        border: none;
        padding: 0;

        span {
            display: none;
        }
    }
`;

const StyledCloseIco = styled(CloseIco)`
    width: 20px;
    height: 20px;
`;

const GalleryWrapper = styled.div`
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding: 40px 80px 0;

    & > div {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
    }

    img,
    video {
        max-width: 100%;
        max-height: 100%;
    }

    ${media.mobile} {
        padding: 0;
    }
`;

const BtnGroup = styled.div`
    position: absolute;
    top: 50%;
    lett: 0;
    display: flex;
    justify-content: space-between;
    width: calc(100% - 80px);
    transform: translateY(-50%);

    ${media.mobile} {
        width: 100%;
    }
`;

const pageBtnStyle = css`
    transition: opacity 0.3s;

    &:hover {
        opacity: 20%;
    }

    i {
        width: 78px;
        height: 78px;
    }

    ${media.mobile} {
        i {
            width: 44px;
            height: 44px;
        }
    }
`;

const PrevBtn = styled.button`
    ${pageBtnStyle}
`;

const NextBtn = styled.button`
    ${pageBtnStyle}
`;

export default DetailMediaViewer;
