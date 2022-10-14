import styled from "styled-components";
import logoImg from "../../static/assets/wemuz.png";

/**
 * 네비게이션 텝 텍스트 폰트 사이즈: 16px
 * 네비게이션 텝 텍스트 폰트 굵기: 600
 */

function Nav() {
    return (
        <Block>
            <LOGO src={logoImg}></LOGO>
            <Block1>
                <Block_bnt>공지사항</Block_bnt>
                <Block_bnt>문의사항</Block_bnt>
                <Block_bnt>프로젝트</Block_bnt>
                <Block_bnt1>로그인</Block_bnt1>
            </Block1>
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

const LOGO = styled.img`
    position: fixed;
    top: 17px;
    left: 35px;
    width: 130px;
    object-fit: contain;
    &:hover {
        cursor: pointer;
    }
`;

const Block1 = styled.nav`
    position: fixed;
    right: 150px;
    top: 15px;
`;

const Block_bnt = styled.button`
    left: 80px;
    margin-right:15px;
    height: 35px;
    color: white;
    background-color:transparent;
    border:0px;
    outline:opx;
    font-size:20px;
    font-weight:600;
    text-transform:uppercase;
    &:hover{
        consur:pointer;
        color: #785FFA;
        transition-duration :0.5s;
    }
    &:after {
        display:block;
        content: '';
        border-bottom: solid 3px #785FFA;  
        transform: scaleX(0);  
        transition: transform 250ms ease-in-out;
        transition-duration :0.5s;
      }
      &:hover:after { transform: scaleX(1); }
}
`;

const Block_bnt1 = styled.button`
    position: fixed;
    top: 15px;
    right: 50px;
    height: 30px;
    width: 80px;
    background-color: #785ffa;
    color: white;
    border-radius: 5px;
    border: 0px;
    outline: opx;
    font-size: 16px;
    font-weight: 600;
    &:hover {
        background-color: white;
        color: black;
        cursor: pointer;
        transition-duration: 0.5s;
    }
`;
export default Nav;
