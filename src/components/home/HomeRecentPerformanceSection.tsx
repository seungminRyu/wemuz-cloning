import { useEffect, useRef, useState } from "react";
import styled, { css } from "styled-components";
import useSwiper from "../../lib/hooks/useSwiper";
import useToggle from "../../lib/hooks/useToggle";
import media from "../../lib/styles/media";
import palette from "../../lib/styles/palette";
import { DeviceType, getDeviceType } from "../../lib/utils";
import HomeRecentPerformanceModal from "./HomeRecentPerformanceModal";
import { HomeSectionHeading } from "./HomeStyles";
import useRecentPerformances from "./hooks/useRecentPerformances";
import Loader from "../common/Loader";
import useRecentPerformDetails from "./hooks/useRecentPerformDetails";
import { toast } from "react-toastify";
import wemuzImg from "../../static/imgs/global/img_empty_image.svg";
import fonts from "../../lib/styles/fonts";
import { ellipsis } from "../../lib/styles/utils";

import { ReactComponent as NextPageIco } from "../../static/icons/home/ico_next.svg";
import { ReactComponent as PrevPageIco } from "../../static/icons/home/ico_prev.svg";

export type HomeRecentPerformanceSectionProp = {};

function HomeRecentPerformanceSection(props: HomeRecentPerformanceSectionProp) {
    const {
        recentPerformDetails,
        loading: recentPerformDetailsLoading,
        error: recentPerformDetailsError,
        loadRecentPerformDetails,
    } = useRecentPerformDetails();
    const {
        recentPerformances,
        loading: recentPerformancesLoading,
        error: recentPerformancesError,
        refetch: refetchRecentPerformances,
    } = useRecentPerformances();
    const recentPerformsRef = useRef<HTMLDivElement>(null);
    const [performInfoModalOpen, togglePerformInfoModalOpen] = useToggle(false);
    const [modalIdx, setModalIdx] = useState(0);
    const performsCnt = recentPerformances
        ? recentPerformances.items.length
        : 0;
    const [swiperIdx, onResize, swipePrev, swipeNext] = useSwiper(
        recentPerformsRef,
        performsCnt - 2,
        300
    );

    const getSwipeOffset = () => {
        const curDevice: DeviceType = getDeviceType();

        switch (curDevice) {
            case "DESKTOP":
                return 464;
            case "TABLET":
                return 344;
            case "MOBILE":
                return 320;
        }
    };

    useEffect(() => {
        window.addEventListener("resize", () => {
            const swipeOffset = getSwipeOffset();
            onResize(swipeOffset);
        });
    }, []);

    if (performsCnt === 0) return null;

    if (recentPerformancesLoading)
        return (
            <Block>
                <Loading>
                    <Loader />
                </Loading>
            </Block>
        );

    const onNextClick = () => {
        const swipeOffset: number = getSwipeOffset();
        swipeNext(swipeOffset);
    };

    const onPrevClick = () => {
        const swipeOffset: number = getSwipeOffset();
        swipePrev(swipeOffset);
    };

    const onItemClick = async (idx: number, performanceId: number) => {
        setModalIdx(idx);
        try {
            loadRecentPerformDetails(performanceId);
            togglePerformInfoModalOpen();
        } catch {
            toast.warning("로드 중 문제가 발생했습니다.");
        }
    };

    const onModalNextPageBtnClick = () => {
        if (modalIdx < performsCnt - 1) {
            const nextPerformId = recentPerformances.items[modalIdx + 1].id;
            loadRecentPerformDetails(nextPerformId);
            setModalIdx(modalIdx + 1);
        }
    };

    const onModalPrevPageBtnClick = () => {
        if (modalIdx > 0) {
            const nextPerformId = recentPerformances.items[modalIdx - 1].id;
            loadRecentPerformDetails(nextPerformId);
            setModalIdx(modalIdx - 1);
        }
    };

    return (
        <Block>
            <HeadContainer>
                <StyledHomeSectionHeading>
                    최근 WEMUZ 공연
                </StyledHomeSectionHeading>
                <ButtonContainer>
                    <PrevBtn onClick={onPrevClick}>
                        <StyledPrevPageIco />
                    </PrevBtn>
                    <NextBtn onClick={onNextClick}>
                        <StyledNextPageIco />
                    </NextBtn>
                </ButtonContainer>
            </HeadContainer>
            <MainContainer>
                <RecentPerforms ref={recentPerformsRef}>
                    {recentPerformances.items.map((_: any, i: number) =>
                        i % 2 === 0 ? (
                            <RecentPerformsColumn key={i}>
                                <RecentPerformItem
                                    onClick={() => {
                                        onItemClick(
                                            i,
                                            recentPerformances.items[i].id
                                        );
                                    }}
                                >
                                    <img
                                        src={
                                            recentPerformances.items[i]
                                                .thumbnail || wemuzImg
                                        }
                                        alt="최근 위뮤즈 공연 썸네일"
                                    />
                                    <div>
                                        {recentPerformances.items[i].title}
                                    </div>
                                </RecentPerformItem>
                                {recentPerformances.items[i + 1] && (
                                    <RecentPerformItem
                                        onClick={() => {
                                            onItemClick(
                                                i + 1,
                                                recentPerformances.items[i + 1]
                                                    .id
                                            );
                                        }}
                                    >
                                        <img
                                            src={
                                                recentPerformances.items[i + 1]
                                                    .thumbnail || wemuzImg
                                            }
                                            alt="최근 위뮤즈 공연 썸네일"
                                        />
                                        <div>
                                            {
                                                recentPerformances.items[i + 1]
                                                    .title
                                            }
                                        </div>
                                    </RecentPerformItem>
                                )}
                            </RecentPerformsColumn>
                        ) : null
                    )}
                </RecentPerforms>
            </MainContainer>
            <HomeRecentPerformanceModal
                open={performInfoModalOpen}
                toggleOpen={togglePerformInfoModalOpen}
                itemIdx={modalIdx}
                lastIdx={recentPerformances.items.length - 1}
                loading={recentPerformDetailsLoading}
                recentPerformDetails={recentPerformDetails}
                onNextClick={onModalNextPageBtnClick}
                onPrevClick={onModalPrevPageBtnClick}
            />
        </Block>
    );
}

const Loading = styled.div`
    display: grid;
    place-items: center;
    width: 100%;
    height: 400px;
    background-color: ${palette.white2};
    border-radius: 12px;
`;

const Block = styled.div`
    width: 100%;
    margin-top: 160px;
    overflow-x: hidden;

    ${media.mobile} {
        margin-top: 110px;
    }
`;

const HeadContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1440px;
    margin: 0 auto;
    padding: 0 40px;

    ${media.mobile} {
        padding: 0 20px;
    }
`;

const StyledHomeSectionHeading = styled(HomeSectionHeading)`
    display: flex;
    text-align: start;
`;

const ButtonContainer = styled.div`
    display: flex;
`;

const PrevBtn = styled.button``;

const NextBtn = styled.button`
    margin-left: 8px;

    ${media.mobile} {
        margin-left: 0px;
    }
`;

const pageIcoStyle = css`
    .ico-next-path,
    .ico-prev-path {
        stroke: ${palette.gray3};
        transition: 0.2s stroke;
    }

    &.active {
        .ico-next-path,
        .ico-prev-path {
            stroke: ${palette.black0};
        }
    }

    &:hover {
        .ico-next-path,
        .ico-prev-path {
            stroke: ${palette.purple0};
        }
    }

    ${media.mobile} {
        width: 34px;
        height: 34px;
    }
`;

const StyledNextPageIco = styled(NextPageIco)`
    ${pageIcoStyle}
`;

const StyledPrevPageIco = styled(PrevPageIco)`
    ${pageIcoStyle}
`;

const MainContainer = styled.div`
    max-width: 1440px;
    padding: 0 40px;
    margin: 40px auto 0;

    section {
        width: calc(100% / 2);
        height: 3px;
        background-color: ${palette.purple3};
    }

    ${media.mobile} {
        padding: 0 20px;
        margin: 20px auto 0;
    }
`;

const RecentPerforms = styled.div`
    display: flex;
    width: 99999px;
`;

const RecentPerformsColumn = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 32px;
    width: 432px;

    & + & {
        margin-left: 32px;
    }

    ${media.tablet} {
        width: 312px;
    }

    ${media.mobile} {
        width: 300px;
        row-gap: 20px;

        & + & {
            margin-left: 20px;
        }
    }
`;

const RecentPerformItem = styled.div`
    position: relative;
    width: 100%;
    height: 295px;
    border-radius: 8px;
    cursor: pointer;
    overflow: hidden;
    padding-bottom: 40px;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    div {
        ${fonts.size.scale18}
        ${ellipsis}
        position: absolute;
        left: 0;
        bottom: 0;
        font-weight: ${fonts.weight.bold};
        width: 100%;
        background-color: ${palette.black0};
        color: ${palette.white0};
        padding: 16px 20px;
    }

    ${media.tablet} {
        height: 227px;
    }

    ${media.mobile} {
        height: 208px;
        padding-bottom: 38px;

        div {
            padding: 12px 16px;
        }
    }
`;

export default HomeRecentPerformanceSection;
