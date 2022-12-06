import React, { useRef } from "react";
import styled, { css, keyframes } from "styled-components";
import media from "../../lib/styles/media";
import palette from "../../lib/styles/palette";
import { deleteLike, postLike } from "../../lib/api/home/api";
import { formatAccessKey, handleAxiosError } from "../../lib/utils";
import useUser from "../../lib/hooks/useUser";
import { toast } from "react-toastify";
import useToggle from "../../lib/hooks/useToggle";
import useThrottler from "../../lib/hooks/useThrottler";

import { ReactComponent as IcoLike } from "../../static/icons/home/ico_like.svg";

type LikesProps = {
    id: number;
    isLiked: boolean;
    likes: number;
};

function Likes(props: LikesProps) {
    const { id, isLiked, likes } = props;
    const user = useUser();
    const [isLikedState, toggleIsLikedState] = useToggle(isLiked);
    const likeCntRef = useRef<number>(likes);
    const throttler = useThrottler();

    const onClick = () => {
        throttler(300, async () => {
            if (user) {
                const accessKey = formatAccessKey(user.accessToken);
                try {
                    await toast.promise(
                        isLikedState
                            ? deleteLike(id, accessKey)
                            : postLike(id, accessKey),
                        {
                            pending: "좋아요 요청 중입니다.",
                            success: isLikedState
                                ? "공연을 좋아요에서 삭제했습니다."
                                : "공연을 좋아요에 추가했습니다.",
                            error: "좋아요 요청 중 에러가 발생했습니다.",
                        }
                    );
                    likeCntRef.current = isLikedState
                        ? likeCntRef.current - 1
                        : likeCntRef.current + 1;
                    toggleIsLikedState();
                } catch (err) {
                    handleAxiosError(err);
                }
            } else {
                toast.warning("로그인 후 이용해주세요.");
            }
        });
    };

    return (
        <LikesBlock isLiked={isLikedState}>
            <button className="likes-btn" onClick={onClick}>
                <IcoLike />
            </button>
            <span className="likes-num">{likeCntRef.current}</span>
        </LikesBlock>
    );
}

const shrink = keyframes`
    0% {
        transform: scale(100%);
    }
    50% {
        transform: scale(80%);
    }
    100% {
        transform: scale(100%);   
    }
`;

const LikesBlock = styled.div<{ isLiked: boolean }>`
    display: flex;
    align-items: center;
    cursor: pointer;

    .likes-btn {
        display: inline-grid;
        place-content: center;
        padding: 0;
        margin-right: 6px;

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
                    }
                }
            `}
    }

    .likes-num {
        font-size: 18px;
        color: ${(props) => (props.isLiked ? palette.purple0 : palette.gray1)};
    }

    ${media.mobile} {
        .likes-num {
            font-size: 14px;
        }

        .likes-btn {
            margin-top: -1px;
            margin-right: 3px;
    
            svg {
                transform: scale(0.75);
            }
    }
`;

export default React.memo(Likes);
