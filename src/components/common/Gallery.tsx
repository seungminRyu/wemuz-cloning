import React, { ReactElement } from "react";
import styled from "styled-components";

export type GalleryProp = {
    curIdx: number;
    slideNodes: ReactElement[];
};

function Gallery(props: GalleryProp) {
    const { curIdx, slideNodes } = props;

    return (
        <GalleryBlock>
            {slideNodes.map((slideNode, i) => (
                <SlideNodeWrapper curIdx={curIdx} idx={i} key={i}>
                    {slideNode}
                </SlideNodeWrapper>
            ))}
        </GalleryBlock>
    );
}

const GalleryBlock = styled.div``;

const SlideNodeWrapper = styled.div<{ curIdx: number; idx: number }>`
    display: ${(props) => (props.curIdx === props.idx ? "flex" : "none")};
    align-items: center;
    justify-content:
    width: 100%;
    height: 100%;
`;

export default Gallery;
