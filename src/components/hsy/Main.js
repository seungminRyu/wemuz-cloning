import styled from "styled-components";

import bgImg from "../../static/assets/main_bg.png";

/**
 * 메인 텍스트 폰트 사이즈: 54px
 * 메인 텍스트 폰트 굵기: 600
 */

function Main() {
    return (
        <Block>
            <BlockText>
                음악,<br></br>함께할 누군가가 필요할 때
            </BlockText>
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

const BlockText = styled.main`
    position: fixed;
    line-height: 75px;
    font-size: 54px;
    font-weight: 600;
    color: white;
    top: 300px;
    left: 255px;
`;

export default Main;
