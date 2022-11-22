import styled from "styled-components";
import palette from "../../lib/styles/palette";
import fonts from "../../lib/styles/fonts";
import media from "../../lib/styles/media";
import FixedBarTemplate from "../common/FixedBarTemplate";
import useDetailInfo from "../../pages/detail/hooks/useDetailInfo";
import Like from "../common/Like";
import { getFundingBtnText } from "../../lib/utils";
import DetailBottomTabBarSkeleton from "./DetailBottomTabBarSkeleton";

import { ReactComponent as QnaIco } from "../../static/icons/global/ico_qna.svg";
import { ReactComponent as LikeIco } from "../../static/icons/global/ico_like.svg";

export type DetailBottomTabBarProp = {
    state: string;
    startDate: string;
    isLiked: boolean;
    likeCnt: number;
    onLikeClick: () => void;
    togglePackageSelectOpen: () => void;
};

function DetailBottomTabBar(props: DetailBottomTabBarProp) {
    const {
        state,
        startDate,
        isLiked,
        likeCnt,
        onLikeClick,
        togglePackageSelectOpen,
    } = props;
    const {
        detailInfo: { fundingId },
        loading,
    } = useDetailInfo();
    const packageBtnText = getFundingBtnText(state, startDate);

    return (
        <FixedBarTemplate locate="BOTTOM">
            {!loading ? (
                <DetailBottomTabBarBlock>
                    <StyledLike
                        isLiked={isLiked}
                        onClick={onLikeClick}
                        id={fundingId}
                    >
                        <>
                            <StyledLikeIco isliked={isLiked} />
                            {likeCnt}
                        </>
                    </StyledLike>
                    <QnaAnchor href={process.env.REACT_APP_QNA_URL}>
                        <StyledQnaIco />
                        문의
                    </QnaAnchor>
                    <PackageBtn
                        disabled={state !== "running"}
                        onClick={togglePackageSelectOpen}
                    >
                        {packageBtnText}
                    </PackageBtn>
                </DetailBottomTabBarBlock>
            ) : (
                <DetailBottomTabBarSkeleton />
            )}
        </FixedBarTemplate>
    );
}

const DetailBottomTabBarBlock = styled.div`
    display: none;

    ${media.tablet} {
        display: grid;
        grid-template-columns: 80px 80px 1fr;
        column-gap: 8px;
        width: 100%;
        box-sizing: border-box;
        background-color: ${palette.white0};
        box-shadow: 0 0 4px #0000001a;
        padding: 10px 20px;
        z-index: 100;
    }

    ${media.mobile} {
        grid-template-columns: 52px 52px 1fr;
        column-gap: 6px;
        padding: 6px 12px;
    }
`;

const StyledLike = styled(Like)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    font-size: 16px;
    color: ${palette.black0};
    border: 1px solid ${palette.gray3};
    border-radius: 4px;
    padding: 8px 0;

    ${media.mobile} {
        font-size: 12px;
        padding: 7px 0 8px;
    }
`;

const StyledLikeIco = styled(LikeIco)<{ isliked: boolean }>`
    width: 36px;
    height: 36px;

    .ico-like-path {
        fill: ${(props) => (props.isliked ? palette.purple0 : "none")};
        stroke: ${(props) => (props.isliked ? palette.purple0 : palette.gray0)};
        stroke-width: 1.5px;
    }

    ${media.mobile} {
        width: 20px;
        height: 20px;
    }
`;

const QnaAnchor = styled.a`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
    font-size: 16px;
    border: 1px solid ${palette.gray3};
    border-radius: 4px;
    cursor: pointer;
    padding: 8px 0;
    &,
    &: link,
    &: visited {
        color: ${palette.gray0};
    }

    ${media.mobile} {
        font-size: 12px;
        padding: 7px 0 7px;
    }
`;

const StyledQnaIco = styled(QnaIco)`
    width: 36px;
    height: 36px;

    ${media.mobile} {
        width: 20px;
        height: 20px;
    }
`;

const PackageBtn = styled.button`
    width: 100%;
    height: 100%;
    border-radius: 4px;
    font-size: 22px;
    font-weight: ${fonts.weight.bold};
    color: ${palette.white0};
    background-color: ${(props) =>
        props.disabled ? palette.gray3 : palette.purple0};

    ${media.mobile} {
        font-size: 16px;
    }
`;

export default DetailBottomTabBar;
