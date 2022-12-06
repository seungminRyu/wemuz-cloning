import { useEffect, useRef } from "react";
import styled, { css } from "styled-components";
import palette from "../../../lib/styles/palette";
import fonts from "../../../lib/styles/fonts";
import media from "../../../lib/styles/media";
import useSwiper from "../../../lib/hooks/useSwiper";
import { DeviceType, getDeviceType } from "../../../lib/utils";
import standards from "../../../lib/styles/standards";
import MarkdownTypo from "../../common/MarkdownTypo";
import { DetailSectionTitle } from "../DetailStyles";

import { ReactComponent as PrevIco } from "../../../static/icons/detail/ico_prev--on.svg";
import { ReactComponent as NextIco } from "../../../static/icons/detail/ico_next--on.svg";

export type HostInterviewProp = {
    interview: {
        question: string;
        answer: string;
        photo: string;
    }[];
};

function HostInterview(props: HostInterviewProp) {
    const { interview } = props;
    const cardContainerRef = useRef<HTMLDivElement | null>(null);
    const contentCnt: number = interview.length * 2;
    const [swiperIdx, onResize, swipePrev, swipeNext] = useSwiper(
        cardContainerRef,
        contentCnt,
        300
    );

    const getSwipeOffset = (): number => {
        const curDevice: DeviceType = getDeviceType();

        switch (curDevice) {
            case "DESKTOP":
            case "TABLET":
                return 358;
            case "MOBILE":
                return 279;
        }
    };

    useEffect(() => {
        window.addEventListener("resize", () => {
            const swipeOffset = getSwipeOffset();
            onResize(swipeOffset);
        });
    }, []);

    const onNextClick = (): void => {
        const swipeOffset: number = getSwipeOffset();
        swipeNext(swipeOffset);
    };

    const onPrevClick = (): void => {
        const swipeOffset: number = getSwipeOffset();
        swipePrev(swipeOffset);
    };

    return contentCnt !== 0 ? (
        <HostInterviewBlock>
            <Header>
                <DetailSectionTitle>뮤지션 인터뷰</DetailSectionTitle>
                <div>
                    <SwipePrevBtn onClick={onPrevClick}>
                        <StyledPrevIco />
                    </SwipePrevBtn>
                    <SwipeNextBtn onClick={onNextClick}>
                        <StyledNextIco />
                    </SwipeNextBtn>
                </div>
            </Header>
            <Container>
                <Inner ref={cardContainerRef}>
                    {interview.map((item, i) => {
                        return (
                            <>
                                <InterviewCard
                                    key={`interview-card-${i}`}
                                    className="interview-card"
                                >
                                    <MarkdownTypo className="question">
                                        {`Q${i + 1}.<br />${item.question}`}
                                    </MarkdownTypo>
                                    <MarkdownTypo className="answer">
                                        {item.answer}
                                    </MarkdownTypo>
                                </InterviewCard>
                                <InterviewPhotoCard
                                    key={`interview-photo-card-${i}`}
                                >
                                    <img
                                        src={item.photo}
                                        alt={`인터뷰 사진-${i + 1}`}
                                    />
                                </InterviewPhotoCard>
                            </>
                        );
                    })}
                </Inner>
            </Container>
        </HostInterviewBlock>
    ) : null;
}

const HostInterviewBlock = styled.div`
    width: 100%;
    margin-top: 72px;

    ${media.mobile} {
        box-sizing: border-box;
        padding: 0 ${standards.padding.sm};
        margin-top: 60px;
    }
`;

const Header = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Container = styled.div`
    position: relative;
    width: 100%;
    height: 440px;
    overflow: hidden;
    margin-top: 28px;

    ${media.tablet} {
        width: 100vw;
        margin-left: -${standards.padding.lg};
    }
    ${media.mobile} {
        height: 350px;
        margin-top: 22px;
        margin-left: -${standards.padding.sm};
    }
`;

const Inner = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    width: auto;

    ${media.tablet} {
        left: ${standards.padding.lg};
    }
    ${media.mobile} {
        left: ${standards.padding.sm};
    }
`;

const CardSwipeBtn = styled.button`
    display: inline-grid;
    place-content: center;
    width: 32px;
    height: 32px;
    border-radius: 8px;
    transition: background-color 0.3s;

    &:hover {
        background-color: ${palette.gray5};
    }

    &.--disabled:hover {
        background: none;
    }

    ${media.tablet} {
        &:hover {
            background: none;
        }
    }

    ${media.mobile} {
        width: 20px;
        height: 20px;
        font-size: 20px;

        & + & {
            margin-left: 4px;
        }
    }
`;

const SwipePrevBtn = styled(CardSwipeBtn)``;

const SwipeNextBtn = styled(CardSwipeBtn)``;

const swipeBtnIcoStyle = css`
    width: 24px;
    height: 24px;
    transition: stroke 0.3s;

    &:hover {
        path {
            stroke: ${palette.black0} !important;
        }
    }

    .--disabled &,
    .--disabled &:hover { {
        path {
            stroke: ${palette.gray3} !important;
        }
    }

    ${media.mobile} {
        width: 20px;
        height: 20px;
    }
`;

const StyledPrevIco = styled(PrevIco)`
    ${swipeBtnIcoStyle}
`;

const StyledNextIco = styled(NextIco)`
    ${swipeBtnIcoStyle}
`;

const InterviewCard = styled.div`
    width: 330px;
    height: 440px;
    font-size: 18px;
    line-height: 25px;
    box-sizing: border-box;
    background-color: #f4f4f4;
    box-shadow: 0 0 2px #33333340;
    border-radius: 4px;
    overflow-y: scroll;
    padding: 32px 24px 24px 24px;
    margin-right: 28px;

    .question {
        font-weight: ${fonts.weight.bold};
    }

    .answer {
        color: ${palette.gray0};
        margin-top: 28px;
    }

    ${media.mobile} {
        width: 263px;
        height: 350px;
        font-size: 14px;
        line-height: 19px;
        padding: 32px 20px 20px 20px;
        margin-right: 16px;
    }
`;

const InterviewPhotoCard = styled.div`
    width: 330px;
    height: 440px;
    box-shadow: 0 0 2px #33333340;
    border-radius: 4px;
    overflow: hidden;
    margin-right: 28px;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    ${media.mobile} {
        width: 263px;
        height: 350px;
        margin-right: 16px;
    }
`;

export default HostInterview;
