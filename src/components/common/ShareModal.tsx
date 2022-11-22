import styled, { css } from "styled-components";
import fonts from "../../lib/styles/fonts";
import media from "../../lib/styles/media";
import palette from "../../lib/styles/palette";
import { setPreventScroll } from "../../lib/utils";
import ModalTemplatexx from "./ModalTemplatexx";
import { toast } from "react-toastify";

import { ReactComponent as CopyLinkIco } from "../../static/icons/detail/ico_copy_link.svg";
import { ReactComponent as FacebookIco } from "../../static/icons/detail/ico_facebook.svg";
import { ReactComponent as TwitterIco } from "../../static/icons/detail/ico_twitter.svg";
import { ReactComponent as KakaoIco } from "../../static/icons/detail/ico_kakao.svg";
import { ReactComponent as CloseIco } from "../../static/icons/detail/ico_close--gray.svg";

export type ShareModalProp = {
    title: string;
    thumbnail: string;
    open: boolean;
    toggleOpen: () => void;
};

function ShareModal(props: ShareModalProp) {
    const { title, thumbnail, open, toggleOpen } = props;

    const onCloseClick = (): void => {
        toggleOpen();
        setPreventScroll(false);
    };

    const onKakaoBtnClick = () => {
        toast.warning("기능을 점검중입니다.");
    };

    const onClipBoardBtnClick = () => {
        const link = window.location.href;
        const type = "text/plain";
        const blob = new Blob([link], { type });
        const clipboardItem = [new ClipboardItem({ [type]: blob })];
        navigator.clipboard.write(clipboardItem).then(
            () => toast.success("클립보드에 링크를 복사했습니다."),
            () => toast.error("클립보드 복사중 오류가 발생했습니다.")
        );
    };

    return (
        <ModalTemplatexx isVisible={open} onClick={onCloseClick}>
            <ShareModalBlock>
                <ModalTop>
                    <CloseBtn onClick={onCloseClick}>
                        <CloseIco />
                    </CloseBtn>
                </ModalTop>
                <Contents>
                    <p className="label">공연 공유하기</p>
                    <div className="contents-body">
                        <img
                            src={thumbnail}
                            alt="공연 썸네일"
                            className="thumbnail"
                        />
                        <p className="title">{title}</p>
                    </div>
                </Contents>
                <BtnGroup>
                    <ShareBtn onClick={onKakaoBtnClick}>
                        <StyledKakaoIco />
                        카카오
                    </ShareBtn>
                    {/* <ShareBtn onClick={onCloseClick}>
                        <StyledTwitterIco />
                        트위터
                    </ShareBtn>
                    <ShareBtn onClick={onCloseClick}>
                        <StyledFacebookIco />
                        페이스북
                    </ShareBtn> */}
                    <ShareBtn onClick={onClipBoardBtnClick}>
                        <StyledCopyLinkIco />
                        링크 복사
                    </ShareBtn>
                </BtnGroup>
            </ShareModalBlock>
        </ModalTemplatexx>
    );
}

const ShareModalBlock = styled.div`
    width: 496px;
    background-color: ${palette.white0};
    box-sizing: border-box;
    border-radius: 28px;
    border: 1px solid #0000001a;
    padding: 32px 0 68px;

    ${media.mobile} {
        width: 100%;
        height: 100%;
        background-color: ${palette.white2};
        border-radius: 0;
        border-top-right-radius: 18px;
        border-top-left-radius: 18px;
    }
`;

const ModalTop = styled.div`
    display: grid;
    place-content: end;
    padding: 0 32px;

    ${media.mobile} {
        padding: 0 24px;
    }
`;

const Contents = styled.div`
    width: 100%;
    box-sizing: border-box;
    padding: 24px 48px 0;

    .label {
        font-size: 22px;
        font-weight: ${fonts.weight.bold};
        color: ${palette.purple0};
    }

    .contents-body {
        display: flex;
        margin-top: 32px;

        .thumbnail {
            width: 100px;
            height: 75px;
            border-radius: 4px;
        }

        .title {
            font-size: 18px;
            line-height: 25px;
            color: ${palette.gray0};
            padding: 15px 0 15px 16px;
        }
    }

    ${media.mobile} {
        padding: 12px 28px 0;

        .label {
            font-size: 18px;
            text-align: center;
        }

        .contents-body {
            margin-top: 36px;

            .title {
                font-size: 14px;
                line-height: 19px;
                color: ${palette.gray1};
                padding: 10px 0 10px 16px;
            }
        }
    }
`;

const BtnGroup = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
    width: 100%;
    box-sizing: border-box;
    padding: 0 48px;
    margin-top: 32px;

    ${media.mobile} {
        padding: 0 28px;
        margin-top: 40px;
        gap: 12px;
    }
`;

const CloseBtn = styled.button`
    display: grid;
    place-content: center;
    width: 40px;
    height: 40px;

    i {
        width: 24px;
        height: 24px;
    }
`;

const ShareBtn = styled.button`
    display: flex;
    align-items: center;
    justify-content: start;
    font-size: 16px;
    color: ${palette.gray0};
    background-color: ${palette.white0};
    border-radius: 4px;
    border: 1px solid #0000001a;
    padding: 14px 12px;

    ${media.mobile} {
        padding: 12px 10px;
    }
`;

const iconStyle = css`
    width: 28px;
    height: 28px;
    margin-right: 6px;

    ${media.mobile} {
        width: 24px;
        height: 24px;
    }
`;

const StyledKakaoIco = styled(KakaoIco)`
    ${iconStyle}
`;
const StyledTwitterIco = styled(TwitterIco)`
    ${iconStyle}
`;
const StyledFacebookIco = styled(FacebookIco)`
    ${iconStyle}
`;
const StyledCopyLinkIco = styled(CopyLinkIco)`
    ${iconStyle}
`;

export default ShareModal;
