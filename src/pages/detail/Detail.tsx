import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import DetailTop from "../../components/detail/DetailTop";
import DetailMain from "../../components/detail/DetailMain";
import DetailNav from "../../components/detail/DetailNav";
import DetailAside from "../../components/detail/DetailAside";
import useToggle from "../../lib/hooks/useToggle";
import ShareModal from "../../components/common/ShareModal";
import media from "../../lib/styles/media";
import PageTemplate from "../../components/global/PageTemplate";
import DetailHeaderBar from "../../components/detail/DetailHeaderBar";
import DetailBottomTabBar from "../../components/detail/DetailBottomTabBar";
import { getFundingDetailAsync } from "../../modules/detail";
import useDetailInfo from "./hooks/useDetailInfo";
import DetailPackageSelectModal from "../../components/detail/DetailPackageSelectModal";
import { toast } from "react-toastify";
import palette from "../../lib/styles/palette";
import useUserxx from "../../lib/hooks/useUserxx";

export type DetailProp = {};

function Detail(props: DetailProp) {
    const {
        detailInfo: {
            fundingTitle,
            fundingState,
            fundingPeriod,
            fundingThumbnail,
            fundingLikeCount,
            fundingIsLiked,
        },
        loading,
        error,
    } = useDetailInfo();
    const [shareOpen, toggleShareOpen] = useToggle(false);
    const [packageSelectOpen, togglePackageSelectOpen] = useToggle(false);
    const [supporterOpen, toggleSupporterOpen] = useToggle(false);
    const user = useUserxx();
    const params = useParams() as any;
    const dispatch = useDispatch();
    const navigate = useNavigate();
    // onClick에 의한 isLike, likeCnt 값의 변경이 state로 관리되어
    // DetailAsideButtonGroup, DetailBottomTabBar로 전달된다.
    const [isLikedState, toggleIsLikedState, setIsLikedState] =
        useToggle(false);
    const [likeCntState, setLikeCntState] = useState<number>(0);

    useEffect(() => {
        if (error) {
            navigate("/");
            toast.warning("공연 상세페이지를 불러오는 중 에러가 발생했습니다.");
        }
    }, [error]);

    useEffect(() => {
        if (!loading) {
            setLikeCntState(fundingLikeCount);
            setIsLikedState(fundingIsLiked);
        }
    }, [loading]);

    useEffect(() => {
        const accessKey = user ? user.accessKey : null;
        dispatch(getFundingDetailAsync.request({ id: params.id, accessKey }));
    }, []);

    const onLikeClick = () => {
        toggleIsLikedState();
        const nextLikeCntState = isLikedState
            ? likeCntState - 1
            : likeCntState + 1;
        setLikeCntState(nextLikeCntState);
    };

    return (
        <StyledPageTemplate>
            <Block>
                <DetailHeaderBar toggleShareOpen={toggleShareOpen} />
                <DetailTop />
                <DetailNav
                    supporterOpen={supporterOpen}
                    toggleSupporterOpen={toggleSupporterOpen}
                />
                <MainContainer>
                    <DetailMain
                        loading={loading}
                        supporterOpen={supporterOpen}
                    />
                    <DetailAside
                        toggleShareOpen={toggleShareOpen}
                        isLiked={isLikedState}
                        likeCnt={likeCntState}
                        onClick={onLikeClick}
                    />
                </MainContainer>
                <DetailBottomTabBar
                    togglePackageSelectOpen={togglePackageSelectOpen}
                    state={fundingState}
                    startDate={fundingPeriod.start}
                    isLiked={isLikedState}
                    likeCnt={likeCntState}
                    onLikeClick={onLikeClick}
                />
                <DetailPackageSelectModal
                    open={packageSelectOpen}
                    toggleOpen={togglePackageSelectOpen}
                />
                <ShareModal
                    thumbnail={fundingThumbnail}
                    title={fundingTitle}
                    open={shareOpen}
                    toggleOpen={toggleShareOpen}
                />
            </Block>
        </StyledPageTemplate>
    );
}

const StyledPageTemplate = styled(PageTemplate)`
    ${PageTemplate.Gnb} {
        box-shadow: none;
    }
`;

const Block = styled.div`
    width: 100%;

    video {
        background-color: ${palette.black1};
    }
`;

const MainContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 360px;
    max-width: 1440px;
    margin: 0 auto;

    ${media.tablet} {
        grid-template-columns: 100%;
    }
`;

export default Detail;
