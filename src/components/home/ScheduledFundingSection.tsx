import { useState } from "react";
import styled, { css } from "styled-components";
import fonts from "../../lib/styles/fonts";
import media from "../../lib/styles/media";
import palette from "../../lib/styles/palette";
import { HomeSectionHeading } from "./HomeStyles";
import useHomeFundings from "./hooks/useHomeFundings";
import { parseDateString } from "../../lib/utils";
import Loader from "../common/Loader";
import FundingInfoTag from "../common/FundingInfoTag";
import { fadeInFromBottom } from "../../lib/styles/animations";

import { ReactComponent as HostIco } from "../../static/icons/home/ico_musician.svg";
import { ReactComponent as PlaceIco } from "../../static/icons/home/ico_place.svg";

export type ScheduledFundingSectionProp = {};

function ScheduledFundingSection(props: ScheduledFundingSectionProp) {
    const [{ scheduled_funding: scheduledFunding }, loading] =
        useHomeFundings();
    const [openedIdx, setOpenedIdx] = useState(0);
    const fundingCnt = scheduledFunding.length;

    if (loading)
        return (
            <Loader.Container>
                <Loader />
            </Loader.Container>
        );

    if (fundingCnt === 0) return null;

    const [performDateText, bannerPhoto1, bannerPhoto2] = (() => {
        const openedFunding = scheduledFunding[openedIdx];
        const { month, date, day } = parseDateString(
            openedFunding.performance_date
        );
        return [
            `${month}.${date}(${day})`,
            openedFunding.banner_photo,
            openedFunding.banner_photo_2,
        ];
    })();

    const onFundingItemClick = (targetIdx: number) => {
        setOpenedIdx(targetIdx);
    };

    return (
        <Block>
            <StyledHomeSectionHeading>
                지금 준비중인 공연
            </StyledHomeSectionHeading>
            <Container>
                <LargeOpenDateContainer>
                    <BackgroundImgContainer>
                        <img
                            src={bannerPhoto1}
                            alt="지금 준비중인 공연 썸네일"
                        />
                        <img
                            src={bannerPhoto2}
                            alt="지금 준비중인 공연 썸네일"
                        />
                    </BackgroundImgContainer>
                    <OpenDateTextContainer>
                        <p>오픈 예정</p>
                        <strong>{performDateText}</strong>
                    </OpenDateTextContainer>
                </LargeOpenDateContainer>
                <FundingListContainer>
                    {scheduledFunding.map((aFunding, i) => (
                        <FundingItemBlock
                            onClick={() => {
                                onFundingItemClick(i);
                            }}
                            opened={openedIdx === i}
                        >
                            <h3>{aFunding.title}</h3>
                            <div>
                                <InfoTagContainer>
                                    <StyledInfoTag text={aFunding.location} />
                                    <StyledInfoTag
                                        ico={<StyledHostIco />}
                                        text={aFunding.funding_host_alias}
                                    />
                                    <StyledInfoTag
                                        ico={<StyledPlaceIco />}
                                        text={aFunding.location}
                                    />
                                </InfoTagContainer>
                                <SmallOpenDateContainer>
                                    <BackgroundImgContainer>
                                        <img
                                            src={bannerPhoto1}
                                            alt="지금 준비중인 공연 썸네일"
                                        />
                                        <img
                                            src={bannerPhoto2}
                                            alt="지금 준비중인 공연 썸네일"
                                        />
                                    </BackgroundImgContainer>
                                    <OpenDateTextContainer>
                                        <p>오픈 예정</p>
                                        <strong>{performDateText}</strong>
                                    </OpenDateTextContainer>
                                </SmallOpenDateContainer>
                            </div>
                        </FundingItemBlock>
                    ))}
                </FundingListContainer>
            </Container>
        </Block>
    );
}

const Block = styled.section`
    max-width: 1440px;
    background-color: ${palette.white2};
    padding: 160px 40px 208px;
    margin: 0 auto;

    ${media.tablet} {
        padding: 160px 40px;
    }

    ${media.mobile} {
        padding: 90px 20px 80px;
    }
`;

const StyledHomeSectionHeading = styled(HomeSectionHeading)`
    text-align: start;

    ${media.tablet} {
        text-align: center;
    }
`;

const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 680px;
    align-items: center;
    margin-top: 60px;

    ${media.tablet} {
        grid-template-columns: 1fr;
    }

    ${media.mobile} {
        margin-top: 34px;
    }
`;

const OpenDateContainer = styled.div`
    position: relative;
    border-radius: 8px;
    background-color: ${palette.gray4};
    overflow: hidden;
`;

const LargeOpenDateContainer = styled(OpenDateContainer)`
    width: 100%;
    height: 264px;

    ${media.tablet} {
        display: none;
    }
`;

const SmallOpenDateContainer = styled(OpenDateContainer)`
    display: none;

    ${media.tablet} {
        position: relative;
        display: block;
        width: 100%;
        height: 227px;
        margin-top: 28px;
    }

    ${media.mobile} {
        height: 105px;
        margin-top: 20px;
    }
`;

const BackgroundImgContainer = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;

    img {
        width: 50%;
        height: 100%;
        object-fit: cover;
    }
`;

const OpenDateTextContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${palette.black0}80;
    color: ${palette.white0};
    text-align: center;
    padding: 80px 10px 0;

    p {
        font-size: 22px;
        font-weight: ${fonts.weight.bold};
    }

    strong {
        display: inline-block;
        font-size: 44px;
        font-weight: ${fonts.weight.exbold};
        margin-top: 30px;
    }

    ${media.tablet} {
        padding-top: 62px;
    }

    ${media.mobile} {
        padding-top: 28px;

        p {
            font-size: 14px;
        }

        strong {
            font-size: 22px;
            margin-top: 12px;
        }
    }
`;

const FundingListContainer = styled.div`
    width: 720px;
    height: 320px;
    background-color: ${palette.purple5};
    overflow-y: scroll;
    border-radius: 8px;
    padding: 40px 60px 40px 72px;
    margin-left: -40px;

    ${media.tablet} {
        width: 100%;
        height: 632px;
        padding: 24px;
        margin-left: 0;
    }

    ${media.mobile} {
        height: 415px;
        padding: 12px;
    }
`;

const FundingItemBlock = styled.div<{ opened: boolean }>`
    cursor: pointer;

    h3 {
        ${fonts.size.scale18}
        font-weight: ${fonts.weight.bold};
    }

    & + & {
        border-top: 1px solid ${palette.gray4};
    }

    ${(props) =>
        props.opened
            ? css`
                  padding: 28px 24px;

                  h3 {
                      color: ${palette.purple0};
                  }

                  & > div {
                      display: block;
                  }
              `
            : css`
                  padding: 24px;

                  h3 {
                      color: ${palette.gray1};
                  }

                  & > div {
                      display: none;
                  }
              `};

    ${media.tablet} {
        ${(props) =>
            props.opened
                ? css`
                      padding: 36px 16px;
                  `
                : css`
                      padding: 24px 16px;
                  `};
    }

    ${media.mobile} {
        ${(props) =>
            props.opened
                ? css`
                      padding: 28px 8px;
                  `
                : css`
                      padding: 20px 8px;
                  `};
    }
`;

const InfoTagContainer = styled.div`
    display: flex;
    align-items: center;
    margin-top: 12px;
    animation: ${fadeInFromBottom} 0.3s;

    ${media.mobile} {
        margin-top: 8px;
    }
`;

const StyledInfoTag = styled(FundingInfoTag)`
    ${fonts.size.scale16}
    color: ${palette.gray1};
`;

const StyledHostIco = styled(HostIco)`
    .ico-musician-path {
        fill: ${palette.gray1};
    }
`;

const StyledPlaceIco = styled(PlaceIco)`
    .ico-place-path {
        fill: ${palette.gray1};
    }
`;

export default ScheduledFundingSection;
