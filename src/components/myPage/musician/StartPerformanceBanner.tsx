import { Link } from "react-router-dom";
import styled from "styled-components";
import media from "../../../lib/styles/media";
import palette from "../../../lib/styles/palette";
import NewLine from "../../common/NewLine";

import startPerformanceBgImg from "../../../static/imgs/myPage/start_performance_bg.png";

export type StartPerformanceBannerProp = {};

function StartPerformanceBanner(props: StartPerformanceBannerProp) {
    return (
        <StartPerformanceBannerBlock>
            <StartPerformanceBannerInner>
                <p>
                    기획부터 진행까지 <NewLine device={["MOBILE"]} />
                    나만의 공연을 쉽고 간단하게!
                </p>
                <StartPerformaceLink to="/open-perform/intro">
                    공연 시작하기
                </StartPerformaceLink>
            </StartPerformanceBannerInner>
        </StartPerformanceBannerBlock>
    );
}

const StartPerformanceBannerBlock = styled.div`
    ${media.mobile} {
        display: grid;
        place-content: center;
        width: 0;
        margin: 0 auto;
    }
`;

const StartPerformanceBannerInner = styled.div`
    width: 100%;
    height: 146px;
    color: ${palette.white0};
    font-size: 18px;
    text-align: center;
    background-image: url(${startPerformanceBgImg});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    border-radius: 8px;
    padding-top: 40px;
    margin-top: 48px;

    ${media.mobile} {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100vw;
        height: 72px;
        border-radius: 0;
        font-size: 14px;
        text-align: start;
        line-height: 19px;
        padding: 0 28px;
    }
`;

const StartPerformaceLink = styled(Link)`
    display: inline-block;
    font-size: 16px;
    white-space: nowrap;
    background-color: ${palette.purple0};
    border-radius: 8px;
    transition: 0.2s background-color;
    padding: 12px 20px;
    margin-top: 16px;

    &,
    &:link,
    &:visited {
        color: ${palette.white0};
    }

    &:hover {
        background-color: ${palette.purple3};
    }

    ${media.mobile} {
        font-size: 13px;
        border-radius: 4px;
        padding: 8px 12px;
        margin-top: 0;
    }
`;

export default StartPerformanceBanner;
