import { useState } from "react";
import {
    HomeFundingCardGrid,
    HomeFundingsSection,
    HomeLoadNextFundingsBtn,
    HomeSectionHeading,
} from "./HomeStyles";
import RunningFundingCard from "./RunningFundingCard";
import Skeleton from "./CardSkelton";
import useHomeFundings from "./hooks/useHomeFundings";
import styled from "styled-components";
import media from "../../lib/styles/media";
import palette from "../../lib/styles/palette";
import HomeEmptySection from "./HomeEmptySection";

export type RunningFundingSectionProp = {};

function RunningFundingSection(props: RunningFundingSectionProp) {
    const [{ running_funding: runningFundings }, loading] = useHomeFundings();
    const [pageIdx, setPageIdx] = useState(0);
    const fundingsCnt = runningFundings.length;
    const lastPageIdx = Math.ceil(fundingsCnt / 3) - 1;

    if (loading)
        return (
            <StyledHomeFundingsSection>
                <Skeleton num={4} />
            </StyledHomeFundingsSection>
        );

    const onMoreBtnClick = () => {
        if (pageIdx < lastPageIdx) {
            setPageIdx(pageIdx + 1);
        }
    };

    return (
        <StyledHomeFundingsSection>
            <HomeSectionHeading>예매 진행 중인 공연</HomeSectionHeading>
            <MainContainer>
                {fundingsCnt > 0 ? (
                    <>
                        <HomeFundingCardGrid>
                            {runningFundings
                                .slice(0, pageIdx * 3 + 3)
                                .map((aRunningFunding, i) => (
                                    <RunningFundingCard
                                        key={i}
                                        funding={aRunningFunding}
                                    />
                                ))}
                        </HomeFundingCardGrid>
                        {pageIdx < lastPageIdx && (
                            <StyledLoadNextFundingsBtn onClick={onMoreBtnClick}>
                                예매 진행 중인 공연 더보기
                                <span>
                                    <strong>{pageIdx + 1}</strong>
                                    <div>|</div>
                                    {lastPageIdx + 1}
                                </span>
                            </StyledLoadNextFundingsBtn>
                        )}
                    </>
                ) : (
                    <HomeEmptySection text={"현재 진행중인 공연이 없습니다."} />
                )}
            </MainContainer>
        </StyledHomeFundingsSection>
    );
}

const StyledHomeFundingsSection = styled(HomeFundingsSection)`
    margin: 220px auto 148px;

    ${media.mobile} {
        margin: 110px auto 100px;
        padding: 0 20px;
    }
`;

const MainContainer = styled.div`
    margin-top: 60px;

    ${media.mobile} {
        margin-top: 34px;
    }
`;

const StyledLoadNextFundingsBtn = styled(HomeLoadNextFundingsBtn)`
    span {
        color: ${palette.gray6};
        margin-left: 20px;

        strong {
            color: ${palette.purple0};
        }

        div {
            display: inline-block;
            margin: 0 12px;
        }
    }

    ${media.mobile} {
        span {
            margin-left: 12px;

            div {
                margin: 0 8px;
            }
        }
    }
`;

export default RunningFundingSection;
