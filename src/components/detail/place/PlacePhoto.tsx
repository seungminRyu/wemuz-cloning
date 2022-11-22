import React from "react";
import styled, { css } from "styled-components";
import useLoopIndex from "../../../lib/hooks/useLoopIndex";
import media from "../../../lib/styles/media";

import { ReactComponent as NextIco } from "../../../static/icons/detail/ico_photo_next.svg";
import { ReactComponent as PrevIco } from "../../../static/icons/detail/ico_photo_prev.svg";
import { ReactComponent as NextSmIco } from "../../../static/icons/detail/ico_photo_next--sm.svg";
import { ReactComponent as PrevSmIco } from "../../../static/icons/detail/ico_photo_prev--sm.svg";
import { DetailSectionTitle } from "../DetailStyles";

export type PlacePhotoProp = {
    photos: string[];
};

function PlacePhoto(props: PlacePhotoProp) {
    const { photos } = props;
    const photoCnt = photos.length;
    const [curIdx, increaseCurIdx, decreaseCurIdx] = useLoopIndex(photoCnt - 1);

    return photoCnt > 0 ? (
        <PlacePhotoBlock>
            <DetailSectionTitle>공간 사진</DetailSectionTitle>
            <PhotoContainer>
                {photos.map((photo, i) => (
                    <PhotoCardImg
                        key={i}
                        src={photo}
                        alt="공간 사진"
                        idx={i}
                        curIdx={curIdx}
                    />
                ))}
                <PhotoPrevBtn onClick={decreaseCurIdx}>
                    <StyledPrevIco />
                    <StyledPrevSmIco />
                </PhotoPrevBtn>
                <PhotoNextBtn onClick={increaseCurIdx}>
                    <StyledNextIco />
                    <StyledNextSmIco />
                </PhotoNextBtn>
            </PhotoContainer>
            <PhotoPagenation>
                <div className="page-bullet-container">
                    {photos.map((_, i) => (
                        <PageBullet key={i} idx={i} curIdx={curIdx} />
                    ))}
                </div>
            </PhotoPagenation>
        </PlacePhotoBlock>
    ) : (
        <></>
    );
}

const PlacePhotoBlock = styled.div`
    width: 100%;
    margin-top: 72px;
`;

const PhotoContainer = styled.div`
    position: relative;
    width: 100%;
    margin-top: 28px;
`;

const photoBtnStyle = css`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    transition: opacity 0.3s;
    padding: 0;

    &:hover {
        opacity: 40%;
    }
`;

const PhotoPrevBtn = styled.button`
    ${photoBtnStyle}
    left: 12px;
`;

const PhotoNextBtn = styled.button`
    ${photoBtnStyle}
    right: 12px;
`;

const StyledNextIco = styled(NextIco)`
    width: 72px;
    height: 72px;

    ${media.mobile} {
        display: none;
    }
`;

const StyledPrevIco = styled(PrevIco)`
    width: 72px;
    height: 72px;

    ${media.mobile} {
        display: none;
    }
`;

const StyledNextSmIco = styled(NextSmIco)`
    display: none;

    ${media.mobile} {
        display: block;
        width: 16px;
        height: 32px;
    }
`;

const StyledPrevSmIco = styled(PrevSmIco)`
    display: none;

    ${media.mobile} {
        display: block;
        width: 16px;
        height: 32px;
    }
`;

const PhotoCardImg = styled.img<{ idx: number; curIdx: number }>`
    display: ${(props) => (props.idx === props.curIdx ? "block" : "none")};
    width: 100%;
    aspect-ratio: 100 / 75;
    border-radius: 4px;
    object-fit: cover;
    border: 1px solid #0000001a;
`;

const PhotoPagenation = styled.div`
    display: flex;
    margin-top: 21px;

    .page-bullet-container {
        display: flex;
        width: auto;
        margin: 0 auto;
    }

    ${media.mobile} {
        margin-top: 16px;
    }
`;

const PageBullet = styled.span<{ idx: number; curIdx: number }>`
    display: inline-block;
    width: 12px;
    height: 12px;
    border-radius: 6px;
    background-color: ${(props) =>
            props.idx === props.curIdx
                ? "var(--wemuz-purple);"
                : "var(--wemuz-gray);"}
        & + & {
        margin-left: 8px;
    }

    ${media.mobile} {
        width: 6px;
        height: 6px;
        border-radius: 3px;
        & + & {
            margin-left: 8px;
        }
    }
`;

export default PlacePhoto;
