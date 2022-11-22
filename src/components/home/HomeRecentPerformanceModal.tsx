import React, { useState } from "react";
import styled, { css } from "styled-components";
import fonts from "../../lib/styles/fonts";
import media from "../../lib/styles/media";
import palette from "../../lib/styles/palette";
import { ModalContainer } from "../../styles/Containers";
import { ellipsis } from "../../lib/styles/utils";
import { fadeInFromBottom } from "../../lib/styles/animations";
import { HomeFundingInfoTag } from "./HomeStyles";
import { RecentPerformDetails } from "./hooks/useRecentPerformDetails";
import Loader from "../common/Loader";
import { parseDateString } from "../../lib/utils";
import ModalTemplatexx from "../common/ModalTemplatexx";
import MarkdownTypo from "../common/MarkdownTypo";

import { ReactComponent as CloseIco } from "../../static/icons/global/ico_close.svg";
import { ReactComponent as NextPageIco } from "../../static/icons/home/ico_next_2.svg";
import { ReactComponent as PrevPageIco } from "../../static/icons/home/ico_prev_2.svg";

export type HomeRecentPerformanceModalProp = {
    open: boolean;
    itemIdx: number;
    lastIdx: number;
    loading: boolean;
    recentPerformDetails: RecentPerformDetails;
    toggleOpen: () => void;
    onNextClick: () => void;
    onPrevClick: () => void;
};

function HomeRecentPerformanceModal(props: HomeRecentPerformanceModalProp) {
    const {
        open,
        toggleOpen,
        itemIdx,
        lastIdx,
        loading,
        recentPerformDetails,
        onNextClick,
        onPrevClick,
    } = props;
    const [curTab, setCurTab] = useState<"artist" | "place" | "performance">(
        "artist"
    );

    if (loading || !recentPerformDetails)
        return (
            <ModalTemplatexx isVisible={open} onClick={toggleOpen}>
                <StyledModalContainer>
                    <Loader.Container>
                        <Loader />
                    </Loader.Container>
                </StyledModalContainer>
            </ModalTemplatexx>
        );

    const {
        fundingTitle,
        achievementRate,
        youtubeUrl,
        performanceTitle,
        performanceDate,
        performanceGenre,
        host,
        hostPerformCount,
        hostPhoto,
        hostBio,
        stage,
        stageType,
        stageLogo,
        stagePerformCount,
        stageBio,
    } = recentPerformDetails;
    const dateText = (() => {
        const { year, month, date, day } = parseDateString(performanceDate);
        return `${year}.${month}.${date}(${day})`;
    })();
    const curPage = itemIdx + 1;
    const lastPage = lastIdx + 1;

    const onCloseClick = () => {
        toggleOpen();
    };

    const onTabItemClick = (e: React.MouseEvent<HTMLLIElement>) => {
        const targetTabName = e.currentTarget.dataset.name;
        if (
            targetTabName !== "artist" &&
            targetTabName !== "place" &&
            targetTabName !== "performance"
        )
            return;
        setCurTab(targetTabName);
    };

    return (
        <ModalTemplatexx isVisible={open} onClick={toggleOpen}>
            <StyledModalContainer>
                <TopContainer>
                    <Page>
                        <span>{curPage}</span> / {lastPage}
                    </Page>
                    <CloseBtn onClick={onCloseClick}>
                        <StyledCloseIco />
                    </CloseBtn>
                </TopContainer>
                <MainContainer>
                    <YoutubeBlock
                        src={youtubeUrl}
                        title={fundingTitle}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></YoutubeBlock>
                    <TitleContainer>
                        <PrevPageBtn onClick={onPrevClick}>
                            <StyledPrevPageIco />
                        </PrevPageBtn>
                        <Title>{fundingTitle}</Title>
                        <NextPageBtn onClick={onNextClick}>
                            <StyledNextPageIco />
                        </NextPageBtn>
                    </TitleContainer>
                    <FundingInfoBlock>
                        <p className="date">{dateText} 공연</p>
                        <p className="title">{performanceTitle}</p>
                        <HomeFundingInfoTag host={host} location={stage} />
                        <GenreTags>
                            <span>{performanceGenre}</span>
                        </GenreTags>
                    </FundingInfoBlock>
                    <TabBar>
                        <TabItem
                            onClick={onTabItemClick}
                            data-name="artist"
                            active={curTab === "artist"}
                        >
                            아티스트 정보
                        </TabItem>
                        <TabItem
                            onClick={onTabItemClick}
                            data-name="place"
                            active={curTab === "place"}
                        >
                            공간 정보
                        </TabItem>
                        <TabItem
                            onClick={onTabItemClick}
                            data-name="performance"
                            active={curTab === "performance"}
                        >
                            공연 사진
                        </TabItem>
                    </TabBar>
                    {curTab === "artist" && (
                        <TabContent>
                            <ProfileTop>
                                <ProfileAvatar src={hostPhoto} />
                                <ProfileTextBlock>
                                    <p className="name">{host}</p>
                                    <p className="funding-count">
                                        WEMUZ 공연 {hostPerformCount}회 진행
                                    </p>
                                </ProfileTextBlock>
                            </ProfileTop>
                            <HorizentalBar />
                            <ArtistProfileMain>
                                <p className="label">아티스트 소개</p>
                                <MarkdownTypo className="content">
                                    {hostBio}
                                </MarkdownTypo>
                            </ArtistProfileMain>
                        </TabContent>
                    )}
                    {curTab === "place" && (
                        <TabContent>
                            <ProfileTop>
                                <ProfileAvatar src={stageLogo} />
                                <ProfileTextBlock>
                                    <p className="name">{stage}</p>
                                    <p className="funding-count">
                                        WEMUZ 공연 {stagePerformCount}회 진행
                                    </p>
                                </ProfileTextBlock>
                            </ProfileTop>
                            <HorizentalBar />
                            <ProfileMain>
                                <PlaceInfoRow>
                                    <p className="label">공간 유형</p>
                                    <p className="content">{stageType}</p>
                                </PlaceInfoRow>
                                <PlaceInfoRow>
                                    <p className="label">공간 소개</p>
                                    <p className="content">{stageBio}</p>
                                </PlaceInfoRow>
                            </ProfileMain>
                        </TabContent>
                    )}
                    {curTab === "performance" && (
                        // api에 공연 사진이 없으므로 주석처리
                        // <PerformTabContent>
                        //     {performancePhotos.map((aPhoto: any) => (
                        //         <img src={aPhoto} />
                        //     ))}
                        // </PerformTabContent>
                        <EmptyTabContent>
                            <p>해당 공연의 사진을 준비 중 입니다.</p>
                        </EmptyTabContent>
                    )}
                </MainContainer>
            </StyledModalContainer>
        </ModalTemplatexx>
    );
}

const TOP_CNTNR_LG_HEIGHT = "104px";
const TOP_CNTNR_SM_HEIGHT = "60px";
const PAGE_BTN_LG_SIZE = "28px";
const PAGE_BTN_SM_SIZE = "24px";

const StyledModalContainer = styled(ModalContainer)`
    position: relative;
    display: grid;
    grid-template-rows: ${TOP_CNTNR_LG_HEIGHT} 1fr;
    width: 688px;
    height: calc(100vh - 96px);
    overflow: hidden;
    padding: 0;

    ${media.mobile} {
        grid-template-rows: ${TOP_CNTNR_SM_HEIGHT} 1fr;
        width: 100%;
        height: 100%;
    }
`;

const TopContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    height: ${TOP_CNTNR_LG_HEIGHT};
    align-items: center;
    padding: 0 24px;

    ${media.mobile} {
        height: ${TOP_CNTNR_SM_HEIGHT};
        padding: 0 16px;
    }
`;

const Page = styled.div`
    ${fonts.size.scale18}
    grid-column: 2 / 3;
    letter-spacing: 4px;
    color: ${palette.gray2};
    margin: 0 auto;

    span {
        color: ${palette.black0};
    }
`;

const CloseBtn = styled.button`
    grid-column: 3 / 4;
    display: grid;
    place-content: center;
    width: 48px;
    height: 48px;
    margin-left: auto;

    ${media.mobile} {
        width: 24px;
        height: 24px;
    }
`;

const StyledCloseIco = styled(CloseIco)`
    .ico-close-path {
        stroke: ${palette.black0};
    }

    ${media.mobile} {
        width: 24px;
        height: 24px;
    }
`;

const MainContainer = styled.div`
    height: 100%;
    overflow-y: scroll;
`;

const YoutubeBlock = styled.iframe`
    width: 100%;
    aspect-ratio: 16 / 9;
`;

const TitleContainer = styled.div`
    position: sticky;
    top: 0;
    left: 0;
    display: grid;
    grid-template-columns: ${PAGE_BTN_LG_SIZE} 1fr ${PAGE_BTN_LG_SIZE};
    align-items: center;
    column-gap: 8px;
    width: 100%;
    height: 88px;
    background-color: ${palette.white2};
    border-bottom: 1px solid ${palette.gray4};
    z-index: 1;
    padding: 0 24px;

    ${media.mobile} {
        grid-template-columns: ${PAGE_BTN_SM_SIZE} 1fr ${PAGE_BTN_SM_SIZE};
        column-gap: 4px;
        height: 64px;
        padding: 0 12px;
    }
`;

const Title = styled.h2`
    ${fonts.size.scale22}
    ${ellipsis}
    font-weight: ${fonts.weight.bold};
    text-align: center;
`;

const PageBtn = styled.button`
    width: ${PAGE_BTN_LG_SIZE};
    height: ${PAGE_BTN_LG_SIZE};

    ${media.mobile} {
        width: ${PAGE_BTN_SM_SIZE};
        height: ${PAGE_BTN_SM_SIZE};
    }
`;

const PrevPageBtn = styled(PageBtn)``;
const NextPageBtn = styled(PageBtn)``;

const pageIcoStyle = css`
    width: 100%;
    height: 100%;
`;

const StyledNextPageIco = styled(NextPageIco)`
    ${pageIcoStyle}
`;

const StyledPrevPageIco = styled(PrevPageIco)`
    ${pageIcoStyle}
`;

const FundingInfoBlock = styled.div`
    padding: 40px 60px;

    .date {
        ${fonts.size.scale16}
        color: ${palette.gray1};
    }

    .title {
        ${fonts.size.scale18}
        font-weight: ${fonts.weight.bold};
        margin-top: 24px;
    }

    ${media.mobile} {
        padding: 36px 20px;

        .title {
            margin-top: 20px;
        }
    }
`;

const GenreTags = styled.div`
    display: flex;
    margin-top: 28px;

    span {
        ${fonts.size.scale16}
        color: ${palette.gray1};
        background-color: ${palette.purple5};
        border-radius: 2px;
        padding: 6px;
    }

    span + span {
        margin-left: 8px;
    }

    ${media.mobile} {
        margin-top: 28px;

        span + span {
            margin-left: 6px;
        }
    }
`;

const TabBar = styled.ul`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-top: 1px solid ${palette.purple3};
    border-bottom: 1px solid ${palette.purple3};
`;

const TabItem = styled.li<{ active: boolean }>`
    ${fonts.size.scale18}
    width: 100%;
    text-align: center;
    cursor: pointer;
    color: ${(props) => (props.active ? palette.purple0 : palette.gray2)};
    background-color: ${(props) =>
        props.active ? palette.purple5 : palette.white2};
    padding: 20px 0;

    & + & {
        border-left: 1px solid ${palette.purple3};
    }

    ${media.mobile} {
        padding: 16px 0;
    }
`;

const TabContent = styled.div`
    opacity: 0;
    animation: ${fadeInFromBottom} 0.4s forwards;
    padding: 60px;

    ${media.mobile} {
        padding: 48px 20px;
    }
`;

const ProfileTop = styled.div`
    display: flex;
    padding: 0 12px;

    ${media.mobile} {
        padding: 0 8px;
    }
`;

const ProfileAvatar = styled.img`
    width: 72px;
    height: 72px;
    border-radius: 24px;
    object-fit: cover;
    border: 1px solid #0000001a;

    ${media.mobile} {
        width: 40px;
        height: 40px;
        border-radius: 14px;
    }
`;

const ProfileTextBlock = styled.div`
    padding: 11px 0;
    margin-left: 28px;

    .name {
        ${fonts.size.scale18}
        font-weight: ${fonts.weight.bold};
    }

    .funding-count {
        ${fonts.size.scale18}
        color: ${palette.gray0};
        margin-top: 12px;
    }

    ${media.mobile} {
        padding: 2px 0;
        margin-left: 12px;

        .funding-count {
            margin-top: 6px;
        }
    }
`;

const HorizentalBar = styled.div`
    width: 100%;
    height: 1px;
    background-color: ${palette.gray4};
    border-radius: 0.5px;
    margin: 36px 0;

    ${media.mobile} {
        margin: 32px 0;
    }
`;

const ProfileMain = styled.div`
    ${fonts.size.scale16}
    ${fonts.lineHeight.scale16}
    padding: 0 12px;

    .label {
        color: ${palette.gray1};
    }

    .content {
        color: ${palette.gray0};
    }

    ${media.mobile} {
        padding: 0 8px;
    }
`;

const ArtistProfileMain = styled(ProfileMain)`
    .content {
        margin-top: 12px;
    }

    ${media.mobile} {
        .content {
            margin-top: 10px;
        }
    }
`;

const PlaceInfoRow = styled.div`
    display: grid;
    grid-template-columns: 96px 1fr;

    & + & {
        margin-top: 16px;
    }

    ${media.mobile} {
        grid-template-columns: 71px 1fr;

        & + & {
            margin-top: 6px;
        }
    }
`;

const PerformTabContent = styled(TabContent)`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    row-gap: 24px;
    column-gap: 24px;
    width: 100%;
    padding: 48px 36px;

    img {
        width: 100%;
        aspect-ratio: 1 / 0.75;
        object-fit: cover;
    }

    ${media.mobile} {
        row-gap: 8px;
        column-gap: 8px;
        padding: 28px 12px;
    }
`;

const EmptyTabContent = styled(TabContent)`
    padding: 100px 60px;

    p {
        ${fonts.size.scale16}
        color: ${palette.gray1};
        text-align: center;
    }

    ${media.mobile} {
        padding: 60px 20px;
    }
`;

export default HomeRecentPerformanceModal;
