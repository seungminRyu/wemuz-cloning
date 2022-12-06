import { Link } from "react-router-dom";
import styled, { css, keyframes } from "styled-components";
import fonts from "../../../lib/styles/fonts";
import media from "../../../lib/styles/media";
import palette from "../../../lib/styles/palette";
import GnbProjectLink from "./GnbProjectLink";
import { logout } from "../../../modules/core";
import { useDispatch } from "react-redux";
import useUserxx from "../../../lib/hooks/useUserxx";

export type GnbAvatarMenuProp = {};

function GnbAvatarMenu(props: GnbAvatarMenuProp) {
    const dispatch = useDispatch();
    const user = useUserxx();
    if (!user) return null;

    const { accessKey, name } = user;

    const onLogoutBtnClick = () => {
        dispatch(logout({ accessKey }));
    };

    return (
        <GnbAvatarMenuBlock className="avatar-menu">
            <UserAlias>
                <span>{name}</span>
            </UserAlias>
            <MenuList>
                <li>
                    <StyledLink to="/my-page/supporter/home">
                        마이페이지
                    </StyledLink>
                </li>
                <li>
                    <StyledLink to="/setting">설정</StyledLink>
                </li>
                <HorizentalBar />
                <li>
                    <StyledAnchor href="https://wemuz.me/policy?type=notice">
                        공지사항
                    </StyledAnchor>
                </li>
                <li>
                    <StyledAnchor href={process.env.REACT_APP_QNA_URL}>
                        문의사항
                    </StyledAnchor>
                </li>
                <HorizentalBar />
                <li>
                    <StyledLink to="open-perform/intro">
                        공연 시작하기
                    </StyledLink>
                </li>
                <li onClick={onLogoutBtnClick}>
                    <LogoutBtn>로그아웃</LogoutBtn>
                </li>
                <li>
                    <GnbProjectLink />
                </li>
            </MenuList>
        </GnbAvatarMenuBlock>
    );
}

const fadeInPopUp = keyframes`
    from {
        opacity: 0;
        transform: scale(90%);
    }
    to {
        opacity: 100%;
        transform: scale(100%);
    }
`;

const GnbAvatarMenuBlock = styled.div`
    position: absolute;
    right: 40px;
    top: 68px;
    width: 228px;
    background-color: ${palette.white0};
    border: 1px solid ${palette.purple3};
    border-radius: 4px;
    box-shadow: 0 0 4px #00000033;
    opacity: 0;
    overflow: hidden;
    z-index: 101;
    animation: ${fadeInPopUp} 0.1s ease-in-out forwards;

    ${media.mobile} {
        display: none;
    }
`;

const UserAlias = styled.div`
    display: grid;
    place-content: center;
    width: 100%;
    height: 63px;
    font-size: 18px;
    font-weight: ${fonts.weight.bold};
    color: ${palette.purple0};
    background-color: ${palette.purple5};
    border-bottom: solid 1px ${palette.purple3};
`;

const MenuList = styled.ul`
    background-color: ${palette.white0};
    padding: 8px 0 16px;
`;

const menuItemStyle = css`
    display: inline-block;
    font-size: 16px;
    transition: background-color 0.3s;
    padding: 12px 20px;
    color: ${palette.black0};

    &,
    &: visited,
    &: link {
        color: inherit;
    }
`;

const StyledLink = styled(Link)`
    ${menuItemStyle}
`;

const StyledAnchor = styled.a`
    ${menuItemStyle}
`;

const LogoutBtn = styled.button`
    display: inline-block;
    font-size: 16px;
    transition: background-color 0.3s;
    padding: 12px 20px;
    color: ${palette.black0};
`;

const HorizentalBar = styled.div`
    width: 196px;
    height: 1px;
    background-color: ${palette.gray3};
    padding: 0 16px;
    margin: 8px auto;
`;

export default GnbAvatarMenu;
