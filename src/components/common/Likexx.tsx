import React, { ReactNode } from "react";
import styled, { css } from "styled-components";
import media from "../../lib/styles/media";
import palette from "../../lib/styles/palette";
import { shrink } from "../../lib/styles/animations";

import { ReactComponent as LikeIco } from "../../static/icons/home/ico_like.svg";

type LikexxProps = {
    onClick: React.MouseEventHandler;
    children: ReactNode;
    className?: string;
};

function Likexx(props: LikexxProps) {
    const { onClick, className, children } = props;

    return (
        <LikexxBlock className={className} onClick={onClick}>
            {children}
        </LikexxBlock>
    );
}

const LikexxBlock = styled.button`
    display: inline-grid;
    place-content: center;
    padding: 0;
`;

Likexx.Ico = styled(LikeIco)<{ isLiked: boolean }>`
    path {
        transition: fill 0.3s;
    }

    ${(props) =>
        props.isLiked &&
        css`
            animation: ${shrink} 0.4s;
            path {
                fill: ${palette.purple0} !important;
            }
        `}

    ${media.mobile} {
        transform: scale(0.75);
    }
`;

export default Likexx;
