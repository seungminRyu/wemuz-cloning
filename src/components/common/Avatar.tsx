import React from "react";
import styled from "styled-components";

import defaultAvatarImg from "../../static/imgs/global/default_avatar.png";

export interface AvatarProp
    extends Omit<React.HTMLProps<HTMLImageElement>, "src"> {
    src: string | undefined | null;
}

function Avatar(props: AvatarProp) {
    const { src, className, ...rest } = props;
    const htmlProps = rest as any;

    return (
        <AvatarImg
            className={className}
            src={src ? src : defaultAvatarImg}
            {...htmlProps}
        />
    );
}

const AvatarImg = styled.img`
    display: block;
    object-fit: cover;
`;

export default Avatar;
