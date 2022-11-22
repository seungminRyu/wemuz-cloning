import React from "react";
import styled from "styled-components";
import media from "../../../lib/styles/media";

import defaultAvatarImg from "../../../static/imgs/global/default_avatar.png";

export type GnbUserAvatarProp = {
    onClick?: Function;
    avatar?: string;
    className?: string;
};

function GnbUserAvatar(props: GnbUserAvatarProp) {
    const { onClick, avatar, className } = props;

    return (
        <GnbUserAvatarBlock
            id="g-tag-nav-userprofile"
            className={className}
            onClick={(e: React.MouseEvent<HTMLDivElement>) => {
                if (onClick) {
                    onClick(e);
                }
            }}
        >
            <img
                src={avatar ? avatar : defaultAvatarImg}
                alt="유저 프로필 사진"
            ></img>
        </GnbUserAvatarBlock>
    );
}

const GnbUserAvatarBlock = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;

    img {
        width: 44px;
        height: 44px;
        border-radius: 15px;
        object-fit: cover;
        box-shadow: 0 2px 2px 0 #0000001a;
    }

    ${media.mobile} {
        img {
            width: 32px;
            height: 32px;
            border-radius: 11px;
        }
    }
`;

export default GnbUserAvatar;
