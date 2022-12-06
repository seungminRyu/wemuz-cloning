import { toast } from "react-toastify";
import { deleteLike, postLike } from "../../../lib/api/home/api";
import useThrottler from "../../../lib/hooks/useThrottler";
import useUser from "../../../lib/hooks/useUser";
import { formatAccessKey, handleAxiosError } from "../../../lib/utils";

function useLike() {
    const user = useUser();
    const throttler = useThrottler();

    const onClick = (id: number, isLiked: boolean) => {
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
                } catch (e) {
                    handleAxiosError(e);
                }
            } else {
                toast.warning("로그인 후 이용해주세요.");
            }
        });
    };

    return {
        onClick,
    };
}

export default useLike;
