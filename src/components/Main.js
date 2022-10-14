import styled from "styled-components";

import bgImg from "../static/assets/main_bg.png";
import palette from "../styles/palette";

/**
 * 메인 텍스트 폰트 사이즈: 54px
 * 메인 텍스트 폰트 굵기: 600
 */

function Main() {
    return (
        <Block>
            <Inner>
                <h1>
                    음악,
                    <br />
                    함께할 누군가가 필요할때
                </h1>
            </Inner>
        </Block>
    );
}

const Block = styled.main`
    width: 100%;
    height: 100%;
    background-image: url(${bgImg});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
`;

const Inner = styled.div`
    max-width: 1440px;
    padding: 430px 40px 0;
    margin: 0 auto;

    h1 {
        font-size: 56px;
        font-weight: 800;
        color: ${palette.white};
        padding-left: 110px;
        margin: 0;
    }
`;

export default Main;
