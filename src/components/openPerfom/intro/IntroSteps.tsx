import styled from "styled-components";
import fonts from "../../../lib/styles/fonts";
import media from "../../../lib/styles/media";
import palette from "../../../lib/styles/palette";
import {
    SectionHead,
    SectionHeaderContainer,
    SectionSubHead,
} from "./IntroStyles";
import { fadeInFromLeft } from "../../../lib/styles/animations";
import useToggle from "../../../lib/hooks/useToggle";
import { useRef } from "react";
import useThrottler from "../../../lib/hooks/useThrottler";
import useObserve from "../../../lib/hooks/useObserve";

import step1Img from "../../../static/imgs/openPerform/intro_step1.png";
import step2Img from "../../../static/imgs/openPerform/intro_step2.png";
import step3Img from "../../../static/imgs/openPerform/intro_step3.png";
import step4Img from "../../../static/imgs/openPerform/intro_step4.png";
import step5Img from "../../../static/imgs/openPerform/intro_step5.png";

export type IntroStepsProp = {};

function IntroSteps(props: IntroStepsProp) {
    const [animated, _, setAnimated] = useToggle(false);
    const sectionRef = useRef<HTMLElement>(null);
    const throttler = useThrottler();

    const onExposed = () => {
        throttler(200, () => {
            if (!animated) {
                setAnimated(true);
            }
        });
    };

    useObserve(sectionRef, onExposed, "ratio", 0.7, [animated]);

    return (
        <IntroStepsBlock ref={sectionRef}>
            <SectionHeaderContainer animated={animated}>
                <SectionSubHead>어떻게 진행하는지 궁금한가요?</SectionSubHead>
                <SectionHead>
                    위뮤즈 공연 시작하기 진행 방식은 이래요
                </SectionHead>
            </SectionHeaderContainer>
            <StepsContainer>
                <StepBlock animated={animated} idx={0}>
                    <StepIconBlock bg={step1Img} />
                    <span>STEP1</span>
                    <p>공연 시작하기 작성 시작</p>
                </StepBlock>
                <StepBlock animated={animated} idx={1}>
                    <StepIconBlock bg={step2Img} />
                    <span>STEP2</span>
                    <p>제안서 제출 및 심사</p>
                </StepBlock>
                <StepBlock animated={animated} idx={2}>
                    <StepIconBlock bg={step3Img} />
                    <span>STEP3</span>
                    <p>공연 오픈</p>
                </StepBlock>
                <StepBlock animated={animated} idx={3}>
                    <StepIconBlock bg={step4Img} />
                    <span>STEP4</span>
                    <p>공연 진행</p>
                </StepBlock>
                <StepBlock animated={animated} idx={4}>
                    <StepIconBlock bg={step5Img} />
                    <span>STEP5</span>
                    <p>종료 및 정산</p>
                </StepBlock>
            </StepsContainer>
        </IntroStepsBlock>
    );
}

const IntroStepsBlock = styled.section`
    max-width: 1440px;
    padding: 0 40px;
    margin: 212px auto 0;

    ${media.mobile} {
        padding: 0 20px;
        margin: 108px auto 0;
    }
`;

const StepsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-top: 72px;

    ${media.tablet} {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        row-gap: 52px;
    }

    ${media.mobile} {
        grid-template-columns: repeat(2, 1fr);
        row-gap: 40px;
        margin-top: 48px;
    }
`;

const StepBlock = styled.div<{ animated: boolean; idx: number }>`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    opacity: 0;
    animation-play-state: ${(props) => (props.animated ? "running" : "paused")};
    animation-name: ${fadeInFromLeft};
    animation-duration: 0.3s;
    animation-fill-mode: forwards;
    animation-timing-function: ease-out;
    animation-delay: ${(props) => `${0.2 + props.idx / 10}s`};

    span {
        ${fonts.size.scale18}
        font-weight: ${fonts.weight.bold};
        text-align: center;
        margin-top: 28px;
    }

    p {
        ${fonts.size.scale18}
        color: ${palette.gray0};
        margin-top: 10px;
    }

    ${media.mobile} {
        span {
            margin-top: 20px;
        }

        p {
            margin-top: 8px;
        }
    }
`;

const StepIconBlock = styled.div<{ bg: string }>`
    width: 120px;
    height: 120px;
    background-color: ${palette.purple5};
    background-image: url(${(props) => props.bg});
    background-size: 88px;
    background-repeat: no-repeat;
    background-position: center;
    border-radius: 50%;

    ${media.mobile} {
        width: 96px;
        height: 96px;
        background-size: 72px;
    }
`;

export default IntroSteps;
