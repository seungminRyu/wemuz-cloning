import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";
import Loader from "../../../components/common/Loader";
import PageTemplate from "../../../components/global/PageTemplate";
import { MyPageMainContainer } from "../../../components/myPage/MyPageStyles";
import LikedListHeader from "../../../components/myPage/supporter/LikedListHeader";
import LikedListMain from "../../../components/myPage/supporter/LikedListMain";
import LikedListOrderSelect from "../../../components/myPage/supporter/LikedListOrderSelect";
import { deleteLike, postLike } from "../../../lib/api/home/api";
import useUserxx from "../../../lib/hooks/useUserxx";
import { handleAxiosError } from "../../../lib/utils";
import useLikedList from "../hooks/useLikedList";

export type LikedListProp = {};

function LikedList(props: LikedListProp) {
    const {
        likedFundings,
        orders,
        ordersMap,
        selectedViewOption,
        onOptionsItemClick,
        containerRef,
        isLoading,
        refetch,
    } = useLikedList();
    const user = useUserxx();

    if (!user) return <Navigate to={"/"} />;
    if (isLoading || !likedFundings)
        return (
            <PageTemplate>
                <Loader.Container>
                    <Loader />
                </Loader.Container>
            </PageTemplate>
        );

    const likeCount = likedFundings.length;

    const onLikeClick = async (id: number, isLiked: boolean) => {
        try {
            await toast
                .promise(
                    isLiked
                        ? deleteLike(id, user.accessKey)
                        : postLike(id, user.accessKey),
                    {
                        pending: "좋아요 요청 중입니다.",
                        success: isLiked
                            ? "공연을 좋아요에서 삭제했습니다."
                            : "공연을 좋아요에 추가했습니다.",
                        error: "좋아요 요청 중 에러가 발생했습니다.",
                    }
                )
                .then(async () => {
                    await refetch();
                });
        } catch (e) {
            handleAxiosError(e);
        }
    };

    return (
        <PageTemplate>
            <MyPageMainContainer ref={containerRef}>
                <LikedListHeader likeCount={likeCount} />
                <LikedListOrderSelect
                    selected={selectedViewOption}
                    options={orders}
                    optionsMap={ordersMap}
                    onClick={onOptionsItemClick}
                />
                <LikedListMain
                    likedFundings={likedFundings}
                    isLoading={isLoading}
                    onClick={onLikeClick}
                />
            </MyPageMainContainer>
        </PageTemplate>
    );
}

export default LikedList;
