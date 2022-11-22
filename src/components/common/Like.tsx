import React, { ReactNode } from "react";
import styled, { css } from "styled-components";
import media from "../../lib/styles/media";
import palette from "../../lib/styles/palette";
import { deleteLike, postLike } from "../../lib/api/home/api";
import { formatAccessKey, handleAxiosError } from "../../lib/utils";
import useUser from "../../lib/hooks/useUser";
import { toast } from "react-toastify";
import useThrottler from "../../lib/hooks/useThrottler";
import { shrink } from "../../lib/styles/animations";

import { ReactComponent as IcoLike } from "../../static/icons/home/ico_like.svg";

type LikeProps = {
    id: number;
    isLiked: boolean;
    onClick: () => void;
    className?: string;
    children?: ReactNode;
    iconStyle?: React.CSSProperties;
};

function Like(props: LikeProps) {
    const { id, isLiked, onClick, className, children, iconStyle } = props;
    const user = useUser();
    const throttler = useThrottler();

    const onLikeBtnClick = () => {
        throttler(300, async () => {
            if (user) {
                const accessKey = formatAccessKey(user.accessToken);
                try {
                    await toast.promise(
                        isLiked
                            ? deleteLike(id, accessKey)
                            : postLike(id, accessKey),
                        {
                            pending: "좋아요 요청 중입니다.",
                            success: isLiked
                                ? "공연을 좋아요에서 삭제했습니다."
                                : "공연을 좋아요에 추가했습니다.",
                            error: "좋아요 요청 중 에러가 발생했습니다.",
                        }
                    );
                    onClick();
                } catch (e) {
                    handleAxiosError(e);
                }
            } else {
                toast.warning("로그인 후 이용해주세요.");
            }
        });
    };

    return (
        <LikeBlock
            className={className}
            isLiked={isLiked}
            onClick={onLikeBtnClick}
        >
            {children ? children : <IcoLike style={iconStyle} />}
        </LikeBlock>
    );
}

const LikeBlock = styled.button<{ isLiked: boolean }>`
    display: inline-grid;
    place-content: center;
    padding: 0;

    svg {
        path {
            transition: fill 0.3s;
        }
    }

${(props) =>
    props.isLiked &&
    css`
        animation: ${shrink} 0.4s;

        svg {
            path {
                fill: ${palette.purple0} !important;
                stroke: ${palette.purple0} !important;
            }
        }
    `}

    ${media.mobile} {
        svg {
            transform: scale(0.75);
        }

`;

export default React.memo(Like);
