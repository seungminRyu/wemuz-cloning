import styled from "styled-components";

import bgImg from "../static/assets/main_bg.png";

/**
 * 메인 텍스트 폰트 사이즈: 54px
 * 메인 텍스트 폰트 굵기: 600
 */

function Main() {
    return <Block></Block>;
}

const Block = styled.main`
    width: 100%;
    height: 100%;
    background-image: url(${bgImg});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
`;

export default Main;
