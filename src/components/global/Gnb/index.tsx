import React from "react";
import styled, {
    ThemeProvider,
    FlattenSimpleInterpolation,
} from "styled-components";
import GnbSideMenu from "./GnbSideMenu";
import useToggle from "../../../lib/hooks/useToggle";
import media from "../../../lib/styles/media";
import { Link } from "react-router-dom";
import palette from "../../../lib/styles/palette";
import fonts from "../../../lib/styles/fonts";
import GnbAvatarMenu from "./GnbAvatarMenu";
import standards from "../../../lib/styles/standards";
import OutsideClickHandler from "react-outside-click-handler";
import { getDeviceType, setPreventScroll } from "../../../lib/utils";
import GnbUserAvatar from "./GnbUserAvatar";
import useUser from "../../../lib/hooks/useUser";
import { withOpacity } from "../../../lib/styles/utils";

import { ReactComponent as WemuzLogo } from "../../../static/imgs/global/logo_wemuz.svg";

type GnbProps = {
    extendedStyle?: FlattenSimpleInterpolation;
    className?: string;
};

function Gnb(props: GnbProps) {
    const { extendedStyle, className } = props;
    const user = useUser();
    const userProfiles = user ? user.userprofile_info : null;
    const [sideBarOpen, toggleSideBarOpen, setSiderBarOpen] = useToggle(false);
    const [avatarMenuOpen, toggleAvatarMenuOpen, setAvatarMenuOpen] =
        useToggle(false);

    const onUserAvatarClick = (e: React.MouseEvent<HTMLDivElement>): void => {
        if (getDeviceType() === "MOBILE") {
            setPreventScroll(true);
            toggleSideBarOpen();
        } else {
            toggleAvatarMenuOpen();
        }
    };

    return (
        <ThemeProvider theme={defaultTheme}>
            <GnbBlock className={className} extends={extendedStyle}>
                <GnbContainer>
                    <NavLeft>
                        <HomeLink to="/" id="g-tag-nav-logo">
                            <StyledWemuzLogo />
                        </HomeLink>
                    </NavLeft>
                    <NavRight>
                        {user ? (
                            <OutsideClickHandler
                                onOutsideClick={() => setAvatarMenuOpen(false)}
                            >
                                <GnbUserAvatar
                                    onClick={onUserAvatarClick}
                                    avatar={userProfiles.avatar}
                                />
                                {avatarMenuOpen && <GnbAvatarMenu />}
                            </OutsideClickHandler>
                        ) : (
                            <LoginLink to="/login" id="g-tag-nav-login">
                                로그인
                            </LoginLink>
                        )}
                    </NavRight>
                </GnbContainer>
            </GnbBlock>
            <GnbSideMenu open={sideBarOpen} setOpen={setSiderBarOpen} />
        </ThemeProvider>
    );
}

const defaultTheme = {
    logoSrc: "",
    bgColor: palette.white0,
    textColor: palette.black0,
    btnColor: palette.purple0,
    shadow: `0 1px 4px ${palette.black0}${withOpacity(0.25)}`,
};

const GnbBlock = styled.nav<{ extends?: FlattenSimpleInterpolation }>`
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 100;
    transition: background-color 0.3s;
    background-color: ${(props) => props.theme.bgColor};
    color: ${(props) => props.theme.textColor};
    box-sizing: border-box;
    border-bottom: 1px solid #cccccc65;
    box-shadow: ${(props) => props.theme.shadow};
    ${(props) => props.extends}
`;

const GnbContainer = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 1440px;
    min-height: 80px;
    padding: 0 ${standards.padding.lg};
    margin: 0 auto;

    ${media.mobile} {
        min-height: 60px;
        padding: 0 ${standards.padding.sm};
    }
`;

const NavLeft = styled.div`
    display: flex;
    align-items: center;

    ${media.mobile} {
        width: 100%;
    }
`;

const HomeLink = styled(Link)`
    display: inline-block;
`;

const StyledWemuzLogo = styled(WemuzLogo)<{ theme?: string }>`
    width: 122px;
    height: 26px;

    .logo-wemuz-path {
        fill: ${(props) =>
            props.theme === "WHITE" ? palette.white0 : palette.purple0};
    }

    ${media.mobile} {
        width: 82px;
        height: 17px;
    }
`;

const NavRight = styled.div`
    display: flex;
    align-items: center;
`;

const LoginLink = styled(Link)`
    display: inline-block;
    font-size: 20px;
    font-weight: ${fonts.weight.bold};
    white-space: nowrap;
    border-radius: 4px;
    background-color: ${palette.purple0};
    transition: background-color 0.2s;
    padding: 13px 33px;

    &,
    &:visited,
    &:link {
        color: ${palette.white0};
    }

    &:hover {
        background-color: ${palette.purple3};
    }

    ${media.mobile} {
        font-size: 14px;
        padding: 8px 16px;
    }
`;

GnbBlock.defaultProps = {
    theme: defaultTheme,
};

export default Gnb;
