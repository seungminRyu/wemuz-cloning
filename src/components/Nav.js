import styled from "styled-components";

/**
 * 네비게이션 텝 텍스트 폰트 사이즈: 16px
 * 네비게이션 텝 텍스트 폰트 굵기: 600
 */

function Nav() {
    return <Block></Block>;
}

const Block = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 60px;
    background-color: rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(30px);
    -webkit-backdrop-filter: blur(30px);
    box-shadow: 0 6px 14px rgb(0 0 0 / 15%);
    z-index: 100;
`;

export default Nav;
