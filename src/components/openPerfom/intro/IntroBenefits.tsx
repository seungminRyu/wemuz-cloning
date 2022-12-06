import { useRef } from "react";
import styled from "styled-components";
import useToggle from "../../../lib/hooks/useToggle";
import { fadeInFromBottom } from "../../../lib/styles/animations";
import fonts from "../../../lib/styles/fonts";
import media from "../../../lib/styles/media";
import palette from "../../../lib/styles/palette";
import {
    SectionHead,
    SectionHeaderContainer,
    SectionSubHead,
} from "./IntroStyles";
import useThrottler from "../../../lib/hooks/useThrottler";
import useObserve from "../../../lib/hooks/useObserve";

import benefits1Img from "../../../static/imgs/openPerform/intro_benefits1.png";
import benefits2Img from "../../../static/imgs/openPerform/intro_benefits2.png";
import benefits3Img from "../../../static/imgs/openPerform/intro_benefits3.png";
import benefits4Img from "../../../static/imgs/openPerform/intro_benefits4.png";

export type IntroBenefitsProp = {};

function IntroBenefits(props: IntroBenefitsProp) {
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

    useObserve(sectionRef, onExposed, "ratio", 0.3, [animated]);

    return (
        <IntroBenefitsBlock ref={sectionRef}>
            <SectionHeaderContainer animated={animated}>
                <SectionSubHead>
                    성공적인 공연 준비, 위뮤즈 플랫폼과 함께해요
                </SectionSubHead>
                <SectionHead>
                    위뮤즈와 공연을 함께하는 이유는 무엇인가요?
                </SectionHead>
            </SectionHeaderContainer>
            <BenefitsContainer>
                <BenefitCard animated={animated} idx={0}>
                    <img src={benefits1Img} alt="benefits-1" />
                    <h3>공연 비용이 들지 않아요</h3>
                    <p>
                        공연 장소, 셋 리스트, 공연 컨셉까지 내가 하고 싶은
                        공연을 직접 만들어보세요!
                        <br />
                        좋은 아이디어만 있다면 장비 대여와 장소 섭외, 마케팅은
                        위뮤즈가 도와드려요.
                    </p>
                </BenefitCard>
                <BenefitCard animated={animated} idx={1}>
                    <img src={benefits2Img} alt="benefits-2" />
                    <h3>내 음악을 사랑해 줄 팬을 모을 수 있어요</h3>
                    <p>
                        위뮤즈에서 내 음악을 사랑하고, 공감해 줄 팬들을
                        만나세요.
                        <br />
                        아티스트들의 활동과 가치를 함께 이해하고 더 널리
                        알려주실 거예요.
                    </p>
                </BenefitCard>
                <BenefitCard animated={animated} idx={2}>
                    <img src={benefits3Img} alt="benefits-3" />
                    <h3>정형화된 관객 데이터를 얻을 수 있어요</h3>
                    <p>
                        공연 전, 관객 정보를 먼저 파악해 더 완벽한 순간을 준비할
                        수 있도록 도와드려요.
                        <br />
                        공연 후, 공연에 참여한 관객들의 진솔한 피드백을 전달해
                        드려요.
                    </p>
                </BenefitCard>
                <BenefitCard animated={animated} idx={3}>
                    <img src={benefits4Img} alt="benefits-4" />
                    <h3>더 많은 공연 기회가 생겨요</h3>
                    <p>
                        위뮤즈와 함께하는 공간들은 아티스트들의 멋진 공연을 주의
                        깊게 보고 있답니다.
                        <br />
                        공연 후, 이어지는 섭외 제안으로 더 많은 무대 기회를
                        가져보세요.
                    </p>
                </BenefitCard>
            </BenefitsContainer>
        </IntroBenefitsBlock>
    );
}

const IntroBenefitsBlock = styled.section`
    max-width: 1440px;
    padding: 0 40px;
    margin: 212px auto 0;

    ${media.mobile} {
        padding: 0 20px;
        margin: 108px auto 0;
    }
`;

const BenefitsContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 44px;
    row-gap: 60px;
    width: 100%;
    margin-top: 60px;

    ${media.tablet} {
        grid-template-columns: 1fr 1fr;
        column-gap: 32px;
    }

    ${media.mobile} {
        grid-template-columns: 1fr;
        column-gap: 0;
        row-gap: 40px;
        margin-top: 36px;
    }
`;

const BenefitCard = styled.div<{ idx: number; animated: boolean }>`
    width: 100%;
    opacity: 0;
    animation-play-state: ${(props) => (props.animated ? "running" : "paused")};
    animation-name: ${fadeInFromBottom};
    animation-duration: 0.3s;
    animation-fill-mode: forwards;
    animation-timing-function: ease-out;
    animation-delay: ${(props) => `${0.3 + props.idx * 0.2}s`};

    img {
        width: 100%;
    }

    h3 {
        ${fonts.size.scale18};
        font-weight: ${fonts.weight.bold};
        margin-top: 36px;
    }

    p {
        ${fonts.size.scale18}
        ${fonts.lineHeight.scale18}
        color: ${palette.gray0};
        margin-top: 16px;
    }

    ${media.mobile} {
        h3 {
            margin-top: 28px;
        }

        p {
            margin-top: 12px;
        }
    }
`;

export default IntroBenefits;
