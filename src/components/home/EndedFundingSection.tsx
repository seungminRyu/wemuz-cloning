import {
    HomeEmptySection,
    HomeFundingCardGrid,
    HomeFundingsSection,
    HomeLoadNextFundingsBtn,
    HomeSectionHeading,
} from "./HomeStyles";
import EndedFundingCard from "./EndedFundingCard";
import Skeleton from "./CardSkelton";
import useHomeFundings from "./hooks/useHomeFundings";
import styled from "styled-components";
import media from "../../lib/styles/media";
import fonts from "../../lib/styles/fonts";
import palette from "../../lib/styles/palette";
import useToggle from "../../lib/hooks/useToggle";

import { ReactComponent as MoreIco } from "../../static/icons/home/ico_more.svg";

export type EndedFundingSectionProp = {};

function EndedFundingSection(props: EndedFundingSectionProp) {
    const [{ end_funding: endedFundings }, loading] = useHomeFundings();
    const [isShowAll, toggleIsShowAll] = useToggle(false);
    const fundingCnt = endedFundings.length;

    if (loading)
        return (
            <StyledHomeFundingsSection>
                <Skeleton num={4} />
            </StyledHomeFundingsSection>
        );

    const slicedEndingFundings = isShowAll
        ? endedFundings
        : endedFundings.slice(0, 3);

    const onMoreBtnClick = () => {
        toggleIsShowAll();
    };

    return (
        <StyledHomeFundingsSection>
            <HeadingContainer>
                <HomeSectionHeading>완료된 공연</HomeSectionHeading>
                <span>{fundingCnt}</span>
            </HeadingContainer>
            <MainContainer>
                {fundingCnt > 0 ? (
                    <>
                        <HomeFundingCardGrid>
                            {slicedEndingFundings.map((aEndedFunding, i) => (
                                <EndedFundingCard
                                    key={i}
                                    funding={aEndedFunding}
                                />
                            ))}
                        </HomeFundingCardGrid>
                        {!isShowAll && fundingCnt > 3 && (
                            <StyledHomeLoadNextFundingsBtn
                                onClick={onMoreBtnClick}
                            >
                                완료된 공연 더보기
                                <StyledMoreIco />
                            </StyledHomeLoadNextFundingsBtn>
                        )}
                    </>
                ) : (
                    <HomeEmptySection>
                        현재 공연 완료 공연이 없습니다.
                    </HomeEmptySection>
                )}
            </MainContainer>
        </StyledHomeFundingsSection>
    );
}

const StyledHomeFundingsSection = styled(HomeFundingsSection)`
    margin: 220px auto 200px;

    ${media.mobile} {
        margin: 110px auto 160px;
        padding: 0 20px;
    }
`;

const HeadingContainer = styled.div`
    display: flex;
    align-items: start;
    justify-content: center;

    span {
        font-size: 20px;
        font-weight: ${fonts.weight.bold};
        color: ${palette.purple0};
        margin-left: 8px;
        padding-top: 2px;
    }

    ${media.mobile} {
        span {
            font-size: 12px;
            margin-left: 4px;
        }
    }
`;

const MainContainer = styled.div`
    margin-top: 60px;

    ${media.mobile} {
        margin-top: 34px;
    }
`;

const StyledHomeLoadNextFundingsBtn = styled(HomeLoadNextFundingsBtn)`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const StyledMoreIco = styled(MoreIco)`
    margin-left: 8px;
    margin-top: -2px;

    ${media.mobile} {
        width: 16px;
        height: 16px;
        margin-left: 4px;
        margin-top: -2px;
    }
`;

export default EndedFundingSection;
