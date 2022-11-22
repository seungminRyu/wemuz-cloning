import { useState } from "react";
import styled from "styled-components";
import media from "../../lib/styles/media";
import palette from "../../lib/styles/palette";
import { Link } from "react-router-dom";
import HomeBannerSkeleton from "./HomeBannerSkeleton";
import useHomeFundings from "./hooks/useHomeFundings";
import fonts from "../../lib/styles/fonts";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import { PaginationData } from "@splidejs/splide";
import { splideClassNames } from "../../lib/utils/Splide";
import { fadeIn } from "../../lib/styles/animations";
import FundingInfoTag from "../common/FundingInfoTag";

import { ReactComponent as HostIco } from "../../static/icons/home/ico_musician.svg";
import { ReactComponent as PlaceIco } from "../../static/icons/home/ico_place.svg";

function HomeBanner() {
    const [{ banner_funding: banners }, loading] = useHomeFundings();
    const [curBannerIdx, setCurBannerIdx] = useState(0);

    if (loading) return <HomeBannerSkeleton />;

    const {
        id,
        title,
        location,
        funding_host_alias: host,
    } = banners[curBannerIdx];
    const bannerCnt = banners.length;

    const setPageNumToPageItem = (pageData: PaginationData) => {
        pageData.items.forEach((aPageItem) => {
            aPageItem.button.textContent = String(
                `${aPageItem.page + 1}`.padStart(2, "0")
            );
        });
    };

    return bannerCnt !== 0 ? (
        <Block>
            <StyledSplide
                hasTrack={false}
                options={{ type: "loop" }}
                onPaginationMounted={(_, pageData) => {
                    setPageNumToPageItem(pageData);
                }}
                onMove={(_, idx) => {
                    setCurBannerIdx(idx);
                }}
            >
                <Inner>
                    <FundingInfo>
                        <TitleBlock>
                            <Link to={`/detail/${id}`}>
                                <h1 className="title">{title}</h1>
                            </Link>
                        </TitleBlock>
                        <InfoTagContainer>
                            <FundingInfoTag ico={<HostIco />} text={host} />
                            <FundingInfoTag
                                ico={<PlaceIco />}
                                text={location}
                            />
                        </InfoTagContainer>
                        <Pagination className={splideClassNames.pagination} />
                    </FundingInfo>
                    <FundingImgs>
                        <SplideTrack>
                            {banners.map((aBanner) => (
                                <StyledSplideSlide>
                                    <Link to={`/detail/${aBanner.id}`}>
                                        <img
                                            src={aBanner.banner_photo}
                                            alt="배너 사진"
                                        />
                                        <img
                                            src={aBanner.banner_photo_2}
                                            alt="배너 사진"
                                        />
                                    </Link>
                                </StyledSplideSlide>
                            ))}
                        </SplideTrack>
                    </FundingImgs>
                </Inner>
            </StyledSplide>
        </Block>
    ) : null;
}

const Block = styled.div`
    width: 100%;
    height: 576px;
    background-color: ${palette.purple5};
    border-bottom-left-radius: 80px;
    border-bottom-right-radius: 80px;
    padding-top: 180px;

    ${media.tablet} {
        height: auto;
        border-bottom-left-radius: 42px;
        border-bottom-right-radius: 42px;
        padding: 80px 0;
    }

    ${media.mobile} {
        border-bottom-left-radius: 26px;
        border-bottom-right-radius: 26px;
        padding: 60px 0 36px;
    }
`;

const StyledSplide = styled(Splide)`
    .${splideClassNames.arrow} {
        display: none;
    }
`;

const Inner = styled.div`
    display: grid;
    grid-template-areas: "info image";
    grid-template-columns: 1fr 736px;
    column-gap: 100px;
    justify-content: space-between;
    width: 100%;
    max-width: 1440px;
    box-sizing: border-box;
    padding: 0 40px;
    margin: 0 auto;
    animation: ${fadeIn} 0.2s;

    ${media.tablet} {
        grid-template-areas:
            "image"
            "info";
        grid-template-columns: 1fr;
        height: auto;
        padding: 0px;
    }
`;

const FundingInfo = styled.div`
    grid-area: info;

    ${media.tablet} {
        padding: 0 40px;
    }

    ${media.mobile} {
        padding: 0 20px;
    }
`;

const TitleBlock = styled.div`
    display: -webkit-box;
    white-space: normal;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 100%;
    height: 100px;
    margin-top: 40px;

    h1 {
        ${fonts.size.scale36}
        ${fonts.lineHeight.scale36}
        font-weight: ${fonts.weight.exbold};
        color: ${palette.black0};
    }

    ${media.tablet} {
        margin-top: 60px;
    }

    ${media.mobile} {
        height: 60px;
        margin-top: 36px;
    }
`;

const InfoTagContainer = styled.div`
    display: flex;
    align-items: center;
    margin-top: 32px;

    ${media.mobile} {
        margin-top: 24px;
    }
`;

const Pagination = styled.ul`
    display: grid;
    grid-template-columns: repeat(auto-fit, 36px);
    column-gap: 12px;
    row-gap: 8px;
    justify-content: start;
    width: 100%;
    margin-top: 60px;

    button {
        ${fonts.size.scale16}
        font-weight: ${fonts.weight.bold};
        color: ${palette.gray2};
        position: relative;
        padding-bottom: 7px;
        padding-right: 16px;

        &:before {
            content: "";
            position: absolute;
            bottom: 0;
            left: 0;
            display: inline-block;
            width: 100%;
            height: 2px;
            background-color: ${palette.gray2};
            border-radius: 1px;
        }

        &.is-active {
            color: ${palette.purple0};
        }

        &.is-active:before {
            background-color: ${palette.purple0};
        }
    }

    ${media.mobile} {
        grid-template-columns: repeat(auto-fit, 24px);
        column-gap: 10px;
        row-gap: 6px;
        margin-top: 48px;

        button {
            padding-bottom: 5px;
            padding-right: 8px;

            &:before {
                height: 1px;
            }
        }
    }
`;

const FundingImgs = styled.div`
    grid-area: image;
    width: 736px;
    height: 276px;
    overflow-x: hidden;
    border-radius: 4px;

    ${media.tablet} {
        width: 100%;
        height: auto;
        border-radius: 0;
    }
`;

const StyledSplideSlide = styled(SplideSlide)`
    width: 736px;
    height: 276px;

    a {
        display: flex;
        width: 100%;
        height: 100%;
    }

    img {
        width: 50%;
        height: 100%;
        object-fit: cover;
    }

    ${media.tablet} {
        width: 100%;
        height: auto;
        aspect-ratio: 8 / 3;
        border-radius: 0;
        transform: none;
    }
`;

export default HomeBanner;
