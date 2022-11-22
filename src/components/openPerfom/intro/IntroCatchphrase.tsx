import styled, { keyframes } from "styled-components";
import palette from "../../../lib/styles/palette";
import { fadeInFromBottom } from "../../../lib/styles/animations";
import useToggle from "../../../lib/hooks/useToggle";
import media from "../../../lib/styles/media";
import { useRef } from "react";
import useThrottler from "../../../lib/hooks/useThrottler";
import useObserve from "../../../lib/hooks/useObserve";

import catchphraseImg1 from "../../../static/imgs/openPerform/catchphrase1.png";
import catchphraseImg2 from "../../../static/imgs/openPerform/catchphrase2.png";
import catchphraseImg3 from "../../../static/imgs/openPerform/catchphrase3.png";
import catchphraseImg4 from "../../../static/imgs/openPerform/catchphrase4.png";
import catchphraseImg5 from "../../../static/imgs/openPerform/catchphrase5.png";
import catchphraseImg6 from "../../../static/imgs/openPerform/catchphrase6.png";
import catchphraseImg7 from "../../../static/imgs/openPerform/catchphrase7.png";
import catchphraseImg8 from "../../../static/imgs/openPerform/catchphrase8.png";
import catchphraseImg9 from "../../../static/imgs/openPerform/catchphrase9.png";
import catchphraseImg10 from "../../../static/imgs/openPerform/catchphrase10.png";
import catchphraseImg11 from "../../../static/imgs/openPerform/catchphrase11.png";
import catchphraseImg12 from "../../../static/imgs/openPerform/catchphrase12.png";
import catchphraseImg13 from "../../../static/imgs/openPerform/catchphrase13.png";

export type IntroCatchphraseProp = {};

function IntroCatchphrase(props: IntroCatchphraseProp) {
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

    useObserve(sectionRef, onExposed, "ratio", 1.2, [animated]);

    return (
        <IntroCatchphraseBlock ref={sectionRef}>
            <Inner animated={animated}>
                <LettersContainer>
                    <LetterImgBlock
                        src={catchphraseImg1}
                        alt="아"
                        animated={animated}
                        idx={0}
                    />
                    <LetterImgBlock
                        src={catchphraseImg2}
                        alt="티"
                        animated={animated}
                        idx={1}
                    />
                    <LetterImgBlock
                        src={catchphraseImg3}
                        alt="스"
                        animated={animated}
                        idx={2}
                    />
                    <LetterImgBlock
                        src={catchphraseImg4}
                        alt="트"
                        animated={animated}
                        idx={3}
                    />
                    <LetterImgBlock
                        src={catchphraseImg5}
                        alt=","
                        animated={animated}
                        idx={4}
                    />
                    <LetterImgBlock
                        src={catchphraseImg6}
                        alt="공"
                        animated={animated}
                        idx={5}
                    />
                    <LetterImgBlock
                        src={catchphraseImg7}
                        alt="간"
                        animated={animated}
                        idx={6}
                    />
                    <LetterImgBlock
                        src={catchphraseImg8}
                        alt=","
                        animated={animated}
                        idx={7}
                    />
                    <LetterImgBlock
                        src={catchphraseImg9}
                        alt="관"
                        animated={animated}
                        idx={8}
                    />
                    <LetterImgBlock
                        src={catchphraseImg10}
                        alt="객"
                        animated={animated}
                        idx={9}
                    />
                    <LetterImgBlock
                        src={catchphraseImg11}
                        alt="을"
                        animated={animated}
                        idx={10}
                    />
                    <LetterImgBlock
                        src={catchphraseImg12}
                        alt="잇"
                        animated={animated}
                        idx={11}
                    />
                    <LetterImgBlock
                        src={catchphraseImg13}
                        alt="다"
                        animated={animated}
                        idx={12}
                    />
                </LettersContainer>
            </Inner>
        </IntroCatchphraseBlock>
    );
}

const sectionOpen = keyframes`
    0% {
        height: 0;
    }
    100% {
        height: 285px;
    }
`;

const sectionOpenMobile = keyframes`
    0% {
        height: 0;
    }
    100% {
        height: 140px;
    }
`;

const IntroCatchphraseBlock = styled.section`
    width: 100%;
    height: 285px;

    ${media.mobile} {
        height: 140px;
    }
`;

const Inner = styled.div<{ animated: boolean }>`
    display: grid;
    place-content: center;
    width: 100%;
    height: 0;
    background-color: ${palette.purple0};
    color: ${palette.white0};
    text-align: center;
    animation-play-state: ${(props) => (props.animated ? "running" : "paused")};
    animation-name: ${sectionOpen};
    animation-duration: 0.5s;
    animation-fill-mode: forwards;
    animation-timing-function: ease-in-out;

    ${media.mobile} {
        animation-name: ${sectionOpenMobile};
    }
`;

const LettersContainer = styled.div`
    display: flex;
    justify-content: center;
`;

const LetterImgBlock = styled.img<{ idx: number; animated: boolean }>`
    height: 45px;
    width: ${(props) => {
        switch (props.idx) {
            case 4:
            case 7:
                return "10px";
            default:
                return "45px";
        }
    }};
    margin-left: ${(props) => {
        switch (props.idx) {
            case 5:
            case 8:
            case 11:
                return "60px";
            default:
                return "20px";
        }
    }};
    opacity: 0;
    animation-play-state: ${(props) => (props.animated ? "running" : "paused")};
    animation-name: ${fadeInFromBottom};
    animation-duration: 0.3s;
    animation-fill-mode: forwards;
    animation-timing-function: ease-out;
    animation-delay: ${(props) => `${0.5 + props.idx / 20}s`};

    ${media.tablet} {
        margin-left: ${(props) => {
            switch (props.idx) {
                case 5:
                case 8:
                case 11:
                    return "24px";
                default:
                    return "8px";
            }
        }};
    }

    ${media.mobile} {
        height: 20px;
        width: ${(props) => {
            switch (props.idx) {
                case 4:
                case 7:
                    return "5px";
                default:
                    return "20px";
            }
        }};
        margin-left: ${(props) => {
            switch (props.idx) {
                case 5:
                case 8:
                case 11:
                    return "12px";
                default:
                    return "5px";
            }
        }};
    }
`;

export default IntroCatchphrase;
