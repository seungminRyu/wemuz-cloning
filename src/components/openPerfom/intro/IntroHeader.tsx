import styled from "styled-components";
import fonts from "../../../lib/styles/fonts";
import media from "../../../lib/styles/media";
import palette from "../../../lib/styles/palette";

import headerImg from "../../../static/imgs/openPerform/intro_header.png";

export type IntroHeaderProp = {};

function IntroHeader(props: IntroHeaderProp) {
    return (
        <IntroHeaderBlock>
            <Left>
                <Head>
                    위뮤즈와 함께
                    <br />
                    내가 꿈꾸던 공연을 시작해 보세요
                </Head>
                <OpenPerformBtn>공연 시작하기</OpenPerformBtn>
            </Left>
            <Right>
                <img src={headerImg} alt="header" />
            </Right>
        </IntroHeaderBlock>
    );
}

const IntroHeaderBlock = styled.section`
    display: flex;
    max-width: 1360px;
    margin: 0 auto;

    ${media.tablet} {
        display: block;
        padding: 0 40px 40px;
    }

    ${media.mobile} {
        padding: 0 20px 20px;
    }
`;

const Left = styled.div`
    width: 50%;
    padding: 248px 0 0 40px;

    ${media.tablet} {
        width: 100%;
        padding: 120px 0 80px;
    }
`;

const Head = styled.h1`
    ${fonts.size.scale32}
    ${fonts.lineHeight.scale32}
    font-weight: ${fonts.weight.bold}
`;

const OpenPerformBtn = styled.button`
    ${fonts.size.scale18}
    font-weight: ${fonts.weight.bold};
    color: ${palette.white0};
    background-color: ${palette.purple0};
    border-radius: 4px;
    transition: background-color 0.2s;
    padding: 16px 40px;
    margin-top: 40px;

    &:hover {
        background-color: ${palette.purple3};
    }

    ${media.mobile} {
        font-weight: ${fonts.weight.regular};
        padding: 12px 20px;
        margin-top: 28px;
    }
`;

const Right = styled.div`
    width: 50%;

    img {
        width: 100%;
        height: 100%;
        aspect-ratio: 1 / 1;
        object-fit: cover;
    }

    ${media.tablet} {
        width: 100%;
    }
`;

export default IntroHeader;
