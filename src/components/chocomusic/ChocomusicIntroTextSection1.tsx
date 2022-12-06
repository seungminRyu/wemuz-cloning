import styled from "styled-components";
import media from "../../lib/styles/media";
import palette from "../../lib/styles/palette";
import introimg1 from "../../static/imgs/chocomusic/introtextimg1.png";
import introimg2 from "../../static/imgs/chocomusic/introtextimg2.png";
import intromobimg1 from "../../static/imgs/chocomusic/intromobileimg1.png";
import intromobimg2 from "../../static/imgs/chocomusic/intromobileimg2.png";

export type ChocomusicIntroTextSection1Prop = {
    active: boolean;
};

function ChocomusicIntroTextSection1(props: ChocomusicIntroTextSection1Prop) {
    const { active } = props;

    return (
        <Block active={active}>
            <div>
                <IntroText active={active}>
                    <Title active={active}>공연으로 완성되는 특별한 경험</Title>
                    <Text active={active}>
                        아티스트와 관객이 함께한 값진 순간을<br></br>감성을
                        불어넣은 특별한 공연으로 완성시킵니다.
                    </Text>
                </IntroText>
                <Img active={active}></Img>
                {active && (
                    <Footer>
                        <Box1></Box1>
                        <User>
                            <Title2>위뮤즈 가입자 수</Title2>
                            <Text2>500명</Text2>
                        </User>
                        <With>
                            <Title2>함께한 공연 수</Title2>
                            <Text2>500회</Text2>
                        </With>
                        <Like>
                            <Title2>평균 공연 만족도</Title2>
                            <Text2>100%</Text2>
                        </Like>
                        <Box2></Box2>
                    </Footer>
                )}
            </div>
        </Block>
    );
}
const Block = styled.section<{ active: boolean }>`
    position: relative;
    height: 100%;
    background-size: contain;
    background: ${({ active }) =>
        active ? `url(${introimg2})` : palette.white0};
    transition: background-color 0.2s;
    background-size: cover;
    background-position: center;
    
    ${media.mobile} {
        background-image: ${({ active }) =>
            active ? `url(${intromobimg2})` : ""};
`;

const IntroText = styled.div<{ active: boolean }>`
    text-align: center;
    height: 40vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: ${({ active }) => (active ? `150px` : ``)};

    ${media.mobile} {
        padding-top: ${({ active }) => (active ? `100px` : ``)};
    }
`;

const Title = styled.div<{ active: boolean }>`
    font-weight: bolder;
    font-size: 25px;
    color: ${({ active }) => (active ? palette.white0 : palette.black0)};
`;

const Text = styled.div<{ active: boolean }>`
    font-size: 15px;
    line-height: 22px;
    padding-top: 20px;
    color: ${({ active }) => (active ? palette.white0 : palette.black0)};
`;

const Img = styled.div<{ active: boolean }>`
    display: flex;
    position: absolute;
    bottom: 0px;
    background-size: contain;
    width: 100%;
    height: 450px;
    background-size: cover;
    background-image: ${({ active }) => (active ? "" : `url(${introimg1})`)};

    ${media.mobile} {
        background-image: ${({ active }) =>
            active ? "" : `url(${intromobimg1})`};
    }
`;

const Footer = styled.div`
    display: flex;
    width: 100%;
    position: absolute;
    text-align: center;
    bottom: 0px;

    ${media.mobile} {
        flex-direction: column;
        height: 250px;
    }
`;

const Box1 = styled.div`
    background-color: ${palette.black1};
    opacity: 0.8;
    backdrop-filter: blur(15px);
    width: 220px;
    height: 130px;
    border: 1px solid ${palette.gray2};

    ${media.mobile} {
        display: none;
    }
`;
const User = styled.div`
    background-color: ${palette.black1};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    opacity: 0.8;
    backdrop-filter: blur(15px);
    width: 360px;
    height: 130px;
    border: 1px solid ${palette.gray2};

    ${media.mobile} {
        width: 100%;
    }
`;
const With = styled.div`
    background-color: ${palette.black1};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    opacity: 0.8;
    backdrop-filter: blur(15px);
    width: 360px;
    height: 130px;
    border: 1px solid ${palette.gray2};

    ${media.mobile} {
        width: 100%;
    }
`;
const Like = styled.div`
    background-color: ${palette.black1};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    opacity: 0.8;
    backdrop-filter: blur(15px);
    width: 360px;
    height: 130px;
    border: 1px solid ${palette.gray2};

    ${media.mobile} {
        width: 100%;
    }
`;
const Box2 = styled.div`
    background-color: ${palette.black1};
    opacity: 0.8;
    backdrop-filter: blur(15px);
    height: 130px;
    width: 220px;
    border: 1px solid ${palette.gray2};

    ${media.mobile} {
        display: none;
    }
`;

const Title2 = styled.div`
    font-size: 12px;
    font-weight: lighter;
    padding-bottom: 15px;
    color: ${palette.white0};
`;
const Text2 = styled.div`
    font-size: 23px;
    font-weight: bold;
    color: ${palette.white0};
`;
export default ChocomusicIntroTextSection1;
