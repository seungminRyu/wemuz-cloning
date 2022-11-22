import { useState } from "react";
import styled, { css } from "styled-components";
import media from "../../../lib/styles/media";
import palette from "../../../lib/styles/palette";
import useToggle from "../../../lib/hooks/useToggle";
import fonts from "../../../lib/styles/fonts";
import PerformanceDate from "../../common/PerformanceDate";
import Like from "../../common/Like";
import useUserxx from "../../../lib/hooks/useUserxx";

import { ReactComponent as LikeIco } from "../../../static/icons/global/ico_like.svg";
import { ReactComponent as QnaIco } from "../../../static/icons/global/ico_qna.svg";
import { ReactComponent as ShareIco } from "../../../static/icons/global/ico_share.svg";

export type ResultHeaderProp = {
    id: number;
    title: string;
    thumbnail: string;
    likeCount: number;
    isLiked: boolean;
    placeName: string;
    performanceDate: string;
    orderNum: number;
    toggleShareOpen: () => void;
    // isDeliverable: boolean; 현재 배송 상품 패키지는 서비스하지 않으므로 주석처리
};

function ResultHeader(props: ResultHeaderProp) {
    const {
        id,
        title,
        thumbnail,
        likeCount,
        isLiked,
        placeName,
        performanceDate,
        orderNum,
        toggleShareOpen,
    } = props;
    const [likeState, setLikeState] = useState<number>(likeCount);
    const [isLikedState, toggleIsLikedState] = useToggle(isLiked);
    const user = useUserxx();

    if (!user) return null;
    const { name } = user;

    const onLikeClick = () => {
        if (isLikedState) {
            setLikeState(likeState - 1);
        } else {
            setLikeState(likeState + 1);
        }
        toggleIsLikedState();
    };

    const onQnaClick = () => window.open(process.env.REACT_APP_QNA_URL);
    const onShareClick = () => toggleShareOpen();

    return (
        <Block>
            <h2>공연 예매 완료</h2>
            <MainContainer>
                <FundingThumbnail>
                    <img src={thumbnail} alt="공연 썸네일" />
                </FundingThumbnail>
                <FundingTitle>
                    <p>{title}</p>
                </FundingTitle>
                <HeaderDescription>
                    <p>
                        <span className="user-name">{name}</span>님이{" "}
                        <span className="order">{orderNum}번째</span>로 예매에
                        참여하셨어요. <br />
                        멋진 공연이 더 알려질 수 있도록 공연을 공유해 주세요.
                    </p>
                </HeaderDescription>
                <HeaderBtnGroup>
                    <LikeBtn
                        id={id}
                        isLiked={isLikedState}
                        onClick={onLikeClick}
                    >
                        <StyledLikeIco isLiked={isLikedState} />
                        <span>{likeState}</span>
                    </LikeBtn>
                    <QnaBtn onClick={onQnaClick}>
                        <StyledQna />
                        문의
                    </QnaBtn>
                    <ShareBtn onClick={onShareClick}>
                        <StyledShare />
                        공유
                    </ShareBtn>
                </HeaderBtnGroup>
            </MainContainer>
            <StyledPerformanceDate
                date={performanceDate}
                placeName={placeName}
            />
        </Block>
    );
}

const Block = styled.header`
    h2 {
        font-size: 32px;
        font-weight: ${fonts.weight.bold};
        color: ${palette.black1};
    }

    ${media.mobile} {
        padding: 0 20px;

        h2 {
            font-size: 22px;
        }
    }
`;

const MainContainer = styled.div`
    display: grid;
    grid-template-areas: "thumbnail title" "thumbnail description" "thumbnail btn-group" "thumbnail .";
    grid-template-columns: 200px 1fr;
    grid-template-rows: auto auto auto;
    column-gap: 36px;
    margin-top: 72px;

    ${media.mobile} {
        grid-template-areas: "title thumbnail" "description description" "btn-group btn-group";
        grid-template-columns: 1fr 64px;
        column-gap: 12px;
        margin-top: 40px;
    }
`;

const FundingThumbnail = styled.div`
    grid-area: thumbnail;

    img {
        width: 200px;
        height: 150px;
        object-fit: cover;
        border-radius: 4px;
    }

    ${media.mobile} {
        img {
            width: 64px;
            height: 48px;
        }
    }
`;

const FundingTitle = styled.div`
    grid-area: title;

    p {
        ${fonts.size.scale22}
        font-weight: ${fonts.weight.bold};
        line-height: 30px;
        margin-top: 4px;
    }

    ${media.mobile} {
        p {
            line-height: 22px;
        }
    }
`;

const HeaderDescription = styled.div`
    grid-area: description;

    p {
        ${fonts.size.scale18}
        color: ${palette.gray0};
        line-height: 25px;
        margin-top: 12px;

        .user-name {
            font-weight: ${fonts.weight.bold};
            color: ${palette.black0};
        }

        .order {
            position: relative;
            font-weight: ${fonts.weight.bold};
            color: ${palette.purple0};

            &::before {
                position: absolute;
                bottom: 0;
                left: 0;
                content: "";
                display: inline-block;
                width: 100%;
                height: 4px;
                border-radius: 4px;
                background-color: ${palette.purple5};
                z-index: -1;
            }
        }
    }

    ${media.mobile} {
        p {
            line-height: 19px;
            margin-top: 12px;

            .order {
                &::before {
                    top: 0;
                    width: 100%;
                    height: 100%;
                    border-radius: 0;
                }
            }
        }
    }
`;

const HeaderBtnGroup = styled.div`
    grid-area: btn-group;
    margin-top: 24px;
`;

const headerBtnStyle = css`
    display: inline-flex;
    align-items: center;
    font-size: 16px;
    color: ${palette.gray0};
    border: 1px solid ${palette.gray0};
    border-radius: 4px;
    transition: background-color 0.2s;
    padding: 8px 19px 8px 12px;
    margin-right: 12px;

    &:hover {
        background-color: ${palette.gray5};
    }

    ${media.mobile} {
        font-size: 12px;
        padding: 6px 14px 6px 10px;
        margin-right: 6px;
    }
`;

const LikeBtn = styled(Like)`
    ${headerBtnStyle}
    padding: 8px 24px 8px 17px;

    span {
        margin-bottom: -1px;
    }

    ${media.mobile} {
        padding: 6px 20px 6px 12px;
    }
`;

const QnaBtn = styled.button`
    ${headerBtnStyle}
`;

const ShareBtn = styled.button`
    ${headerBtnStyle}
`;

const iconStyle = css`
    margin-right: 4px;

    ${media.mobile} {
        width: 20px;
        height: 20px;
    }
`;

const StyledLikeIco = styled(LikeIco)<{ isLiked: boolean }>`
    ${iconStyle};

    path {
        fill: ${(props) =>
            props.isLiked ? `${palette.purple0}` : "#00000000"};
        stroke: ${(props) =>
            props.isLiked ? `${palette.purple0}` : `${palette.gray0}`};
    }
`;

const StyledQna = styled(QnaIco)`
    ${iconStyle};
`;

const StyledShare = styled(ShareIco)`
    ${iconStyle};
`;

const StyledPerformanceDate = styled(PerformanceDate)`
    margin-top: 72px;

    .condition {
        color: ${palette.purple0};
    }

    span {
        color: ${palette.black0};
    }

    ${media.tablet} {
        & > div {
            color: ${palette.black0};
        }
    }

    ${media.mobile} {
        margin-top: 42px;
    }
`;

export default ResultHeader;
