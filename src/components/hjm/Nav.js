import styled from "styled-components";
import logo from "../../static/assets/logo.png";

/**
 * 네비게이션 텝 텍스트 폰트 사이즈: 16px
 * 네비게이션 텝 텍스트 폰트 굵기: 600
 */

function Nav() {
    return (
        <Block>
            <Logo_img src={logo}></Logo_img>
            <Block_option1>공지사항</Block_option1>
            <Block_option2>문의사항</Block_option2>
            <Block_option3>프로젝트</Block_option3>
            <Block_button>로그인</Block_button>
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

const Logo_img = styled.img`
    width: 130px;
    height: 30px;
    margin: 15px;
    margin-left: 25px;
    &:hover {
        cursor: pointer;
    }
`;
const Block_option1 = styled.button`
    position: fixed;
    top: 21px;
    right: 350px;
    width: 80px;
    height: 18px;
    font-size: 16px;
    font-weight: 600;
    color: #fff;
    background-color: transparent;
    border: 0px;
    outline: opx;
    &:hover {
        consur: pointer;
        color: #785ffa;
    }
    &:after {
        display: block;
        content: "";
        border-bottom: solid 3px #785ffa;
        transform: scaleX(0);
        transition: transform 250ms ease-in-out;
    }
    &:hover:after {
        transform: scaleX(1);
    }
`;

const Block_option2 = styled.button`
    position: fixed;
    top: 21px;
    right: 260px;
    width: 80px;
    height: 18px;
    font-size: 16px;
    font-weight: 600;
    color: #fff;
    background-color: transparent;
    border: 0px;
    outline: opx;
    &:hover {
        consur: pointer;
        color: #785ffa;
    }
    &:after {
        display: block;
        content: "";
        border-bottom: solid 3px #785ffa;
        transform: scaleX(0);
        transition: transform 250ms ease-in-out;
    }
    &:hover:after {
        transform: scaleX(1);
    }
`;

const Block_option3 = styled.button`
    position: fixed;
    top: 21px;
    right: 170px;
    width: 80px;
    height: 18px;
    font-size: 16px;
    font-weight: 600;
    color: #fff;
    background-color: transparent;
    border: 0px;
    outline: opx;
    &:hover {
        consur: pointer;
        color: #785ffa;
    }
    &:after {
        display: block;
        content: "";
        border-bottom: solid 3px #785ffa;
        transform: scaleX(0);
        transition: transform 250ms ease-in-out;
    }
    &:hover:after {
        transform: scaleX(1);
    }
`;

const Block_button = styled.nav`
    position: fixed;
    top: 15px;
    right: 50px;
    height: 30px;
    width: 80px;
    text-align: center;
    line-height: 31px;
    background-color: #785ffa;
    border-radius: 5px;
    border: 0px;
    outline: opx;
    font-size: 16px;
    font-weight: 600;
    &:hover {
        background-color: white;
        color: black;
        cursor: pointer;
    }
    color: #fff;
`;

export default Nav;
