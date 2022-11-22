import styled, { css } from "styled-components";
import palette from "../../lib/styles/palette";
import fonts from "../../lib/styles/fonts";
import useUser from "../../lib/hooks/useUser";
import { getFundingBtnText, setPreventScroll } from "../../lib/utils";
import Like from "../common/Like";
import { shrink } from "../../lib/styles/animations";
import useGetUserFundingPermissionState from "./hooks/useGetUserFundingPermissionState";
import useHandleFundingPermission from "./hooks/useHandleFundingPermission";

import { ReactComponent as LikeIco } from "../../static/icons/global/ico_like.svg";
import { ReactComponent as ShareIco } from "../../static/icons/global/ico_share.svg";
import { ReactComponent as QnaIco } from "../../static/icons/global/ico_qna.svg";

export type DetailAsideButtonGroupProp = {
    id: number;
    state: string;
    startDate: string;
    ageLimit: number;
    likeCnt: number;
    isLiked: boolean;
    onLikeClick: () => void;
    toggleShareOpen: () => void;
};

function DetailAsideButtonGroup(props: DetailAsideButtonGroupProp) {
    const {
        id,
        state,
        startDate,
        ageLimit,
        likeCnt,
        isLiked,
        toggleShareOpen,
        onLikeClick,
    } = props;
    const user = useUser();
    const fundingBtnText = getFundingBtnText(state, startDate);
    const getUserFundingPermissionState = useGetUserFundingPermissionState();
    const handleFundingPermission = useHandleFundingPermission();

    const onFundingBtnClick = () => {
        const userFundingPermissionState = getUserFundingPermissionState(
            user,
            ageLimit
        );
        handleFundingPermission(userFundingPermissionState, id);
    };

    const onShareBtnClick = () => {
        setPreventScroll(true);
        toggleShareOpen();
    };

    return (
        <DetailAsideButtonGroupBlock>
            <FundingBtn
                onClick={onFundingBtnClick}
                disabled={state !== "running"}
            >
                {fundingBtnText}
            </FundingBtn>
            <StyledLike id={id} isLiked={isLiked} onClick={onLikeClick}>
                <StyledLikeIco />
                <span>{likeCnt}</span>
            </StyledLike>
            <ShareBtn onClick={onShareBtnClick}>
                <StyledShareIco />
                공유
            </ShareBtn>
            <QnaBtn>
                <a href={process.env.REACT_APP_QNA_URL}>
                    <StyledQnaIco />
                    문의
                </a>
            </QnaBtn>
        </DetailAsideButtonGroupBlock>
    );
}

const DetailAsideButtonGroupBlock = styled.div`
    display: grid;
    grid-template-areas: "funding funding funding" "like share question";
    grid-template-columns: repeat(3, 1fr);
    row-gap: 16px;
    column-gap: 8px;
`;

const FundingBtn = styled.button`
    grid-area: funding;
    width: 100%;
    font-size: 18px;
    color: ${palette.white0};
    font-weight: ${fonts.weight.bold};
    background-color: ${(props) =>
        props.disabled ? palette.gray3 : palette.purple0};
    border-radius: 4px;
    transition: background-color 0.3s;
    padding: 17px 0 15px;
    margin-top: 8px;

    ${(props) =>
        !props.disabled &&
        css`
            &:hover {
                background-color: ${palette.purple3};
            }
        `};

    a {
        width: 100%;
        height: 100%;

        &,
        &:link,
        &:visited {
            color: inherit;
        }
    }
`;

const bottomBtnStyle = css`
    text-align: start;
    width: 100%;
    color: ${palette.gray0};
    background-color: ${palette.white0};
    border: 1px solid ${palette.gray0};
    font-size: 16px;
    border-radius: 4px;
    transition: background-color 0.3s;
    padding: 11px 0 11px 40px;

    &: hover {
        background-color: ${palette.gray5};
    }
`;

const StyledLike = styled(Like)`
    ${bottomBtnStyle}
    position: relative;
    grid-area: like;
    padding: 12px 0 10px 45px;
    color: ${(props) => (props.isLiked ? palette.purple0 : palette.black0)};
    animation: none;

    svg {
        ${(props) =>
            props.isLiked
                ? css`
                      animation: ${shrink} 0.3s;
                  `
                : css`
                      animation: none;
                  `};
    }
`;

const StyledLikeIco = styled(LikeIco)`
    position: absolute;
    left: 17px;
    top: 8px;
`;

const ShareBtn = styled.button`
    ${bottomBtnStyle}
    grid-area: share;
    position: relative;
`;

const StyledShareIco = styled(ShareIco)`
    position: absolute;
    left: 12px;
    top: 8px;
    width: 24px;
    height: 24px;
`;

const QnaBtn = styled.button`
    ${bottomBtnStyle}
    grid-area: question;
    position: relative;

    a {
        width: 100%;
        height: 100%;

        &,
        &:link,
        &:visited {
            color: inherit;
        }
    }
`;

const StyledQnaIco = styled(QnaIco)`
    position: absolute;
    left: 12px;
    top: 8px;
    width: 24px;
    height: 24px;
`;

export default DetailAsideButtonGroup;
