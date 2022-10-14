import styled from "styled-components";
import bgImg from "../../static/assets/main_bg.png";

/**
 * 메인 텍스트 폰트 사이즈: 54px
 * 메인 텍스트 폰트 굵기: 600
 */

function Main() {
    return (
        <Block>
            <Block_mainText>
                음악, <br></br>함께 할 누군가가 필요할 때
            </Block_mainText>
        </Block>
    );
}

const Block = styled.main`
    position: fixed;
    width: 100%;
    height: 100%;
    background-image: url(${bgImg});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
`;

const Block_mainText = styled.main`
    width: 621px;
    height: 127px;
    margin: 370px 670px 0 149px;
    font-family: NanumSquareRound;
    font-size: 56px;
    font-weight: 800;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: left;
    color: #fff;
`;

export default Main;
