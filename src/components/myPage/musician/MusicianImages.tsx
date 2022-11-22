import styled from "styled-components";
import media from "../../../lib/styles/media";
import standards from "../../../lib/styles/standards";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/core";
import React, { useRef, useState } from "react";
import { PageBullet } from "../../../styles/Pagenation";

import musiciansImg1 from "../../../static/imgs/myPage/musicians1.png";
import musiciansImg2 from "../../../static/imgs/myPage/musicians2.png";
import musiciansImg3 from "../../../static/imgs/myPage/musicians3.png";

export type MusicianImagesProp = {};

function MusicianImages(props: MusicianImagesProp) {
    const [curIdx, setCurIdx] = useState<number>(0);
    const splideRef = useRef<any | null>(null);

    const onSplideMoved = (newIdx: number) => {
        setCurIdx(newIdx);
    };

    const onPageClick = (e: React.MouseEvent<HTMLLIElement>) => {
        const targetIdx = e.currentTarget.value;
        if (!splideRef.current) return;
        splideRef.current.go(targetIdx);
    };

    return (
        <MusicianImagesBlock>
            <ImageContainer>
                <img src={musiciansImg1} alt="musicians-1" />
                <img src={musiciansImg2} alt="musicians-2" />
                <img src={musiciansImg3} alt="musicians-3" />
            </ImageContainer>
            <StyledSplide
                ref={splideRef}
                onMove={(_, idx) => {
                    onSplideMoved(idx);
                }}
                options={{
                    type: "loop",
                }}
            >
                <SplideSlide>
                    <img src={musiciansImg1} alt="musicians-1" />
                </SplideSlide>
                <SplideSlide>
                    <img src={musiciansImg2} alt="musicians-2" />
                </SplideSlide>
                <SplideSlide>
                    <img src={musiciansImg3} alt="musicians-3" />
                </SplideSlide>
            </StyledSplide>
            <Pagenation>
                {Array(3)
                    .fill(null)
                    .map((_, i) => (
                        <StyledPageBullet
                            value={i}
                            idx={i}
                            curIdx={curIdx}
                            onClick={onPageClick}
                        />
                    ))}
            </Pagenation>
        </MusicianImagesBlock>
    );
}

const MusicianImagesBlock = styled.div`
    ${media.tablet} {
        padding: 0 ${standards.padding.lg};
    }

    ${media.mobile} {
        padding: 0;
    }
`;

const ImageContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 320px);
    column-gap: 20px;
    width: 1000px;
    margin: 100px auto 0;

    img {
        width: 320px;
        height: 180px;
        object-fit: cover;
        border-radius: 4px;
    }

    ${media.tablet} {
        display: none;
    }
`;

const StyledSplide = styled(Splide)`
    display: none;

    .splide__arrows {
        display: none;
    }

    ${media.tablet} {
        display: block;
        width: 100%;
        border-radius: 4px;
        overflow: hidden;
        margin-top: 100px;

        img {
            width: 100%;
            aspect-ratio: 1 / 0.56;
            border-radius: 4px;
            object-fit: cover;
        }
    }

    ${media.mobile} {
        margin-top: 80px;
        border-radius: 0;

        img {
            border-radius: 0;
        }
    }
`;

const Pagenation = styled.ul`
    display: none;

    ${media.tablet} {
        display: flex;
        justify-content: center;
        margin: 20px auto 0;
    }

    ${media.mobile} {
        margin: 16px auto 0;
    }
`;

const StyledPageBullet = styled(PageBullet)`
    cursor: pointer;

    & + & {
        margin-left: 16px;
    }

    ${media.mobile} {
        & + & {
            margin-left: 6px;
        }
    }
`;

export default MusicianImages;
