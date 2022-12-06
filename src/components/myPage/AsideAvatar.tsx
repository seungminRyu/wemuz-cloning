import styled from "styled-components";
import media from "../../lib/styles/media";
import palette from "../../lib/styles/palette";
import Avatar from "../common/Avatar";
import { Link } from "react-router-dom";

import { ReactComponent as EditIco } from "../../static/icons/myPage/ico_edit.svg";

export type AsideAvatarProp = {
    avatar: string;
    tabName: string;
};

function AsideAvatar(props: AsideAvatarProp) {
    const { avatar, tabName } = props;

    return (
        <AsideAvatarBlock>
            <AvatarContainer>
                <StyledAvatar src={avatar} alt="유저 프로필 이미지" />
                <ProfileEditBtn
                    to={
                        tabName === "서포터"
                            ? "/setting/supporter"
                            : "/setting/musician"
                    }
                >
                    <StyledEditIco />
                </ProfileEditBtn>
            </AvatarContainer>
        </AsideAvatarBlock>
    );
}

const AsideAvatarBlock = styled.div`
    display: grid;
    place-content: center;

    ${media.tablet} {
        position: relative;
        width: 100%;
    }
`;

const AvatarContainer = styled.div`
    position: relative;

    ${media.tablet} {
        position: unset;
        padding-top: 20px;
    }
`;

const StyledAvatar = styled(Avatar)`
    width: 148px;
    height: 148px;
    border-radius: 50px;
    border: 1px solid #0000001a;
    box-shadow: 0 0 4px #33333333;

    ${media.mobile} {
        width: 96px;
        height: 96px;
        border-radius: 32px;
    }
`;

const StyledEditIco = styled(EditIco)`
    path {
        transition: fill 0.2s;
    }

    ${media.tablet} {
        width: 48px;
        height: 48px;

        path {
            fill: ${palette.purple3};
        }
    }

    ${media.mobile} {
        width: 28px;
        height: 28px;
    }
`;

const ProfileEditBtn = styled(Link)`
    position: absolute;
    bottom: 0;
    right: 0;
    display: inline-grid;
    place-content: center;
    width: 40px;
    height: 40px;
    background-color: ${palette.white0};
    border-radius: 50%;
    border: 1px solid ${palette.gray3};
    transition: background-color 0.2s;

    &:hover {
        background-color: ${palette.purple0};

        ${StyledEditIco} {
            path {
                fill: ${palette.white0};
            }
        }
    }

    ${media.tablet} {
        top: 0;
        right: 0;
        width: 48px;
        height: 48px;
        border-radius: 0;
        border: none;
        background: none;

        &:hover {
            background: none;

            ${StyledEditIco} {
                path {
                    fill: ${palette.purple0};
                }
            }
        }
    }

    ${media.mobile} {
        top: -4px;
        right: -4px;
        width: 36px;
        height: 36px;
    }
`;

export default AsideAvatar;
