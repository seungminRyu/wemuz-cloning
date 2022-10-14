import styled from "styled-components";
import palette from "../styles/palette";

import { ReactComponent as LogoIco } from "../static/assets/logo.svg";

/**
 * 네비게이션 텝 텍스트 폰트 사이즈: 16px
 * 네비게이션 텝 텍스트 폰트 굵기: 600
 */

function Nav() {
    return (
        <Block>
            <Inner>
                <LogoLink href="">
                    <StyledLogoIco />
                </LogoLink>
                <BtnContainer>
                    <TabBtn>공지사항</TabBtn>
                    <TabBtn>문의사항</TabBtn>
                    <TabBtn>프로젝트</TabBtn>
                    <LoginBtn>로그인</LoginBtn>
                </BtnContainer>
            </Inner>
        </Block>
    );
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

const Inner = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1440px;
    height: 100%;
    padding: 0 40px;
    margin: 0 auto;
`;

const LogoLink = styled.a`
    display: block;
`;

const StyledLogoIco = styled(LogoIco)`
    width: 114px;

    path {
        transition: fill 0.2s;
    }

    &:hover {
        path {
            fill: ${palette.purple1};
        }
    }
`;

const BtnContainer = styled.div`
    display: flex;
    align-items: center;
`;

const TabBtn = styled.button`
    font-size: 16px;
    font-weight: 700;
    color: ${palette.white};
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
    transition: color 0.2s;

    &:hover {
        color: ${palette.purple1};
    }

    & + & {
        margin-left: 30px;
    }
`;

const LoginBtn = styled.button`
    font-size: 16px;
    font-weight: 700;
    color: ${palette.white};
    border: none;
    border-radius: 4px;
    background-color: ${palette.purple1};
    cursor: pointer;
    padding: 6px 18px;
    margin-left: 40px;
    transition: background-color 0.2s;

    &:hover {
        background-color: ${palette.purple2};
    }
`;

export default Nav;
