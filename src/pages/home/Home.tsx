import { useEffect, useRef, useState } from "react";
import styled, { css } from "styled-components";
import HomeBanner from "../../components/home/HomeBanner";
import palette from "../../lib/styles/palette";
import media from "../../lib/styles/media";
import { useNavigate } from "react-router-dom";
import PageTemplate from "../../components/global/PageTemplate";
import { useDispatch, useSelector } from "react-redux";
import { getHomeFundingsAsync } from "../../modules/home";
import { RootState } from "../../modules";
import useUser from "../../lib/hooks/useUser";
import { formatAccessKey } from "../../lib/utils";
import { renewAccessToken } from "../../lib/api/core/api";
import { setUser } from "../../modules/core";
import HomeLinkSection from "../../components/home/HomeLinkSection";
import RunningFundingSection from "../../components/home/RunningFundingSection";
import EndedFundingSection from "../../components/home/EndedFundingSection";
import HomeRecentPerformanceSection from "../../components/home/HomeRecentPerformanceSection";
import ScheduledFundingSection from "../../components/home/ScheduledFundingSection";
import useDebouncer from "../../lib/hooks/useDebouncer";
import useWindowScrollEvent from "../../lib/hooks/useWindowScrollEvent";
import useThrottler from "../../lib/hooks/useThrottler";

import initPerformanceImg from "../../static/imgs/home/init_performance_section.png";
import suggestionImg from "../../static/imgs/home/suggestion_section.png";

function Home() {
    const error = useSelector((state: RootState) => state.home.fundings.error);
    const [gnbType, setGnbType] = useState<"trans" | "white">("trans");
    const user = useUser();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const debouncer = useDebouncer();
    const throttler = useThrottler();

    const onScroll = () => {
        throttler(100, () => {
            if (window.scrollY === 0) {
                setGnbType("trans");
            } else {
                setGnbType("white");
            }
        });

        debouncer(100, () => {
            if (window.scrollY === 0) {
                setGnbType("trans");
            } else {
                setGnbType("white");
            }
        });
    };

    useWindowScrollEvent(onScroll);

    useEffect(() => {
        const accessKey = user ? formatAccessKey(user.accessToken) : null;
        dispatch(getHomeFundingsAsync.request({ accessKey }));
    }, []);

    useEffect(() => {
        // 401 응답시 access token 갱신을 위한 로직. axios 인터셉터로 구현하기 위해 주석 처리
        // cnt.current += 1;
        // testConsoleLog("Home", "Effect count: ", cnt.current);

        // const renewUser = async (refreshToken: string) => {
        //     testConsoleLog("Home", "Renew access token start");
        //     const accessToken = await renewAccessToken({
        //         refresh: refreshToken,
        //     });
        //     dispatch(
        //         setUser({
        //             ...user,
        //             accessToken,
        //         })
        //     );
        //     testConsoleLog("Home", "Renew access token end");
        // };

        if (error) {
            navigate("/error?type=inspection");
            // const refreshItem = localStorage.getItem("refresh");
            // if (refreshItem && error.response.status === 401) {
            //     const refreshToken = JSON.parse(refreshItem);
            //     renewUser(refreshToken);
            // } else {
            //     navigate("/error?type=inspection");
            // }
        }
    });

    return (
        <StyledPageTemplate type={gnbType}>
            <HomeBanner />
            <HomeRecentPerformanceSection />
            <StyledHomeLinkSection
                bgColor={palette.purple5}
                textColor={palette.purple0}
                img={initPerformanceImg}
                mainText={"위뮤즈, 공연 시작하기"}
                subText={"기획부터 진행까지 나만의 공연을 쉽고 간단하게!"}
                url={"/open-perform/intro"}
            />
            <RunningFundingSection />
            <ScheduledFundingSection />
            <HomeLinkSection
                bgColor={palette.blue2}
                textColor={palette.blue0}
                img={suggestionImg}
                mainText={"제안하기"}
                subText={"이런 장소, 이런 아티스트와의 공연 어떤가요?"}
                url={"/"}
            />
            <EndedFundingSection />
        </StyledPageTemplate>
    );
}

const StyledPageTemplate = styled(PageTemplate)<{ type: "trans" | "white" }>`
    margin-top: 0;

    ${PageTemplate.Gnb} {
        ${(props) =>
            props.type === "trans" &&
            css`
                background-color: transparent;
                box-shadow: none;
                border-bottom: none;
            `}
    }

    ${media.tablet} {
        ${PageTemplate.Gnb} {
            ${(props) =>
                props.type === "trans" &&
                css`
                    background-color: ${palette.white0};
                `}

            background-color: ${palette.white0};
            border-bottom: 0.5px solid ${palette.gray6};
        }
    }
`;

const StyledHomeLinkSection = styled(HomeLinkSection)`
    margin-top: 208px;

    ${media.mobile} {
        margin-top: 100px;
    }
`;

export default Home;
