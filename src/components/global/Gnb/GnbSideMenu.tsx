import React from "react";
import styled, { css } from "styled-components";
import media from "../../../lib/styles/media";
import palette from "../../../lib/styles/palette";
import GnbUserAvatar from "./GnbUserAvatar";
import fonts from "../../../lib/styles/fonts";
import GnbProjectLink from "./GnbProjectLink";
import { Link } from "react-router-dom";
import { setPreventScroll } from "../../../lib/utils";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../../lib/api/core/api";
import useUserxx from "../../../lib/hooks/useUserxx";

import { ReactComponent as CloseIco } from "../../../static/icons/global/ico_close.svg";
import { ReactComponent as WemuzLogo } from "../../../static/imgs/global/logo_wemuz.svg";

export type GnbSideMenuProps = {
    open: boolean;
    setOpen: React.Dispatch<boolean>;
};

function GnbSideMenu(props: GnbSideMenuProps) {
    const { open, setOpen } = props;
    const dispatch = useDispatch();
    const user = useUserxx();
    if (!user) return null;
    const { accessKey, avatar, name, email } = user;

    const onCloseBtnClick = () => {
        setPreventScroll(false);
        setOpen(false);
    };

    const onLogoutBtnClick = () => {
        dispatch(logoutUser({ accessKey }));
    };

    return (
        <GnbSideMenuBlock open={open}>
            <Top>
                <StyledWemuzLogo />
                <CloseBtn onClick={onCloseBtnClick}>
                    <StyledCloseIco />
                </CloseBtn>
            </Top>
            <Header>
                <StyledGnbUserAvatar avatar={avatar} />
                <UserInfo>
                    <p className="name">{name}</p>
                    {/* <p className="type">{type}</p> */}
                </UserInfo>
            </Header>
            <Body>
                <MenuList>
                    <li>
                        <StyledLink
                            to="/my-page/supporter/home"
                            onClick={onCloseBtnClick}
                        >
                            마이페이지
                        </StyledLink>
                    </li>
                    <li>
                        <StyledLink to="/setting" onClick={onCloseBtnClick}>
                            설정
                        </StyledLink>
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
                        <StyledLink to="/open-perform/intro">
                            공연 시작하기
                        </StyledLink>
                    </li>
                    <li>
                        <LogoutBtn onClick={onLogoutBtnClick}>
                            로그아웃
                        </LogoutBtn>
                    </li>
                </MenuList>
                <StyledGnbProjectLink />
            </Body>
        </GnbSideMenuBlock>
    );
}

const GnbSideMenuBlock = styled.div<{ open: boolean }>`
    display: none;

    ${media.mobile} {
        position: fixed;
        top: 0;
        left: 0;
        display: grid;
        grid-template-rows: auto auto 1fr;
        width: 100%;
        height: 100%;
        background-color: #f8f8f8;
        z-index: 1000;
        min-height: 440px;

        ${(props) =>
            props.open
                ? css`
                      visibility: visible;
                      transform: translateX(0);
                      transition: visibility 0s, transform 0.2s;
                  `
                : css`
                      visibility: hidden;
                      transform: translateX(-100%);
                      transition: visibility 0.2s, transform 0.2s;
                  `}
    }
`;

const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 60px;
    padding: 0 20px;
    background-color: ${palette.purple0};
`;

const StyledWemuzLogo = styled(WemuzLogo)`
    width: 82px;
    height: 17px;

    .logo-wemuz-path {
        fill: ${palette.white0};
    }
`;

const CloseBtn = styled.button`
    display: grid;
    place-content: center;
    width: 32px;
    height: 32px;
`;

const StyledCloseIco = styled(CloseIco)`
    width: 30px;
    height: 30px;

    .ico-close-path {
        stroke: ${palette.white0};
    }
`;

const Header = styled.div`
    display: grid;
    grid-template-columns: auto 1fr;
    column-gap: 20px;
    align-items: center;
    border-bottom: solid 1px ${palette.purple3};
    padding: 20px;
`;

const StyledGnbUserAvatar = styled(GnbUserAvatar)`
    width: 72px;
    height: 72px;

    img {
        width: 72px;
        height: 72px;
        border-radius: 24px;
    }
`;

const UserInfo = styled.div`
    .name {
        font-size: 14px;
        font-weight: ${fonts.weight.bold};
        color: ${palette.purple0};
    }

    .type {
        font-size: 13px;
        color: ${palette.gray1};
        margin-top: 6px;
    }
`;

const Body = styled.div`
    display: grid;
    grid-template-rows: 1fr auto;
    padding: 8px 12px 12px;
`;

const MenuList = styled.ul`
    padding: 0 4px;
`;

const menuItemStyle = css`
    display: inline-block;
    font-size: 13px;
    padding: 14px 4px;

    &,
    &:link,
    &:visited {
        color: ${palette.black0};
    }
`;

const StyledAnchor = styled.a`
    ${menuItemStyle}
`;

const StyledLink = styled(Link)`
    ${menuItemStyle}
`;

const LogoutBtn = styled.button`
    ${menuItemStyle}
`;

const HorizentalBar = styled.div`
    width: 100%;
    height: 1px;
    background-color: ${palette.gray3};
    margin: 8px auto;
`;

const StyledGnbProjectLink = styled(GnbProjectLink)`
    width: 100%;
    height: 54px;
    padding: 12px 16px;
    margin: 0;

    span {
        font-size: 13px;
    }
`;

export default React.memo(GnbSideMenu);
