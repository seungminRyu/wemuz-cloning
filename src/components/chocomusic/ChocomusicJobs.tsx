import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import styled from "styled-components";
import palette from "../../lib/styles/palette";
import { getSampleImage } from "../../lib/styles/utils";

export type ChocomusicJobsProps = {
    active: boolean;
};

function ChocomusicJobs(props: ChocomusicJobsProps) {
    const { active } = props;
    const sampleImg = getSampleImage({});
    const sampleImgs = [sampleImg, sampleImg, sampleImg, sampleImg];

    return (
        <Block>
            <StyledSplide hasTrack={false} options={{ type: "loop" }}>
                <TextContainer>
                    <div>
                        <h2>초코뮤직으로부터 바뀌는 예술 문화</h2>
                        <p>뮤커톤 프로젝트</p>
                        <p>
                            음악을 좋아하는 사람들끼리 모여 소통, 합주, 공연을
                            목표로 하는 커뮤니티 프로그램
                        </p>
                        <PaginationBlock>
                            <PageBtn></PageBtn>
                            <span>1 / 4</span>
                            <PageBtn></PageBtn>
                        </PaginationBlock>
                    </div>
                </TextContainer>
                <SlideContainer>
                    <SplideTrack>
                        {sampleImgs.map((aImg) => (
                            <StyledSlide>
                                <SlideImg src={aImg} />
                            </StyledSlide>
                        ))}
                    </SplideTrack>
                </SlideContainer>
            </StyledSplide>
        </Block>
    );
}

const Block = styled.div`
    height: 100%;
`;

const StyledSplide = styled(Splide)`
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
`;

const TextContainer = styled.div`
    width: 50%;

    & > div {
        max-width: 720px;
        padding: 0 40px;
        margin-left: auto;
    }
`;

const PaginationBlock = styled.div`
    display: flex;
    align-items: center;
`;

const PageBtn = styled.button`
    width: 20px;
    height: 20px;
    background-color: ${palette.purple5};
`;

const SlideContainer = styled.div`
    width: 50%;
`;

const StyledSlide = styled(SplideSlide)`
    width: 640px;
    height: 360px;
`;

const SlideImg = styled.img`
    width: 640px;
    height: 360px;
`;

export default ChocomusicJobs;
