import { useEffect, useRef } from "react";
import styled from "styled-components";
import media from "../../lib/styles/media";
import useDetailInfo from "../../pages/detail/hooks/useDetailInfo";
import DetailAsideButtonGroup from "./DetailAsideButtonGroup";
import DetailAsideSkeleton from "./DetailAsideSkeleton";
import DetailFundingState from "./DetailFundingState";
import DetailPackageSelect from "./DetailPackageSelect";

export type DetailAsideProp = {
    toggleShareOpen: () => void;
    isLiked: boolean;
    likeCnt: number;
    onClick: () => void;
};

function DetailAside(props: DetailAsideProp) {
    const { toggleShareOpen, isLiked, likeCnt, onClick } = props;
    const {
        detailInfo: {
            fundingId,
            fundingState,
            fundingPeriod,
            performanceAgeLimit,
        },
        loading,
    } = useDetailInfo();
    const asideRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!asideRef.current) return;
    });

    return (
        <DetailAsideBlock ref={asideRef}>
            {!loading ? (
                <>
                    <DetailFundingState />
                    <DetailAsideButtonGroup
                        toggleShareOpen={toggleShareOpen}
                        id={fundingId}
                        startDate={fundingPeriod.start}
                        state={fundingState}
                        ageLimit={performanceAgeLimit}
                        likeCnt={likeCnt}
                        isLiked={isLiked}
                        onLikeClick={onClick}
                    />
                    <DetailPackageSelect />
                </>
            ) : (
                <DetailAsideSkeleton />
            )}
        </DetailAsideBlock>
    );
}

const DetailAsideBlock = styled.aside`
    // position: sticky;
    // top: 120px;
    width: 100%;
    box-sizing: border-box;
    padding: 40px;

    ${media.tablet} {
        display: none;
    }
`;

export default DetailAside;
