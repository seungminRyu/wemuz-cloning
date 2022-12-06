import styled, { css } from "styled-components";
import palette from "../../../lib/styles/palette";
import media from "../../../lib/styles/media";
import CreateMusicianForm from "./CreateMusicianForm";
import useCreateMusicianModal from "../hooks/useCreateMusicianModal";
import fonts from "../../../lib/styles/fonts";
import { setPreventScroll } from "../../../lib/utils";
import useToggle from "../../../lib/hooks/useToggle";
import ModalTemplate from "../../common/ModalTemplate";
import standards from "../../../lib/styles/standards";

import { ReactComponent as CloseIco } from "../../../static/icons/global/ico_close.svg";
import { ReactComponent as BackIco } from "../../../static/icons/global/ico_left_arrow_2.svg";

export type CreateMusicianModalProp = {
    open: boolean;
    toggleOpen: () => void;
};

function CreateMusicianModal(props: CreateMusicianModalProp) {
    const { open, toggleOpen } = props;
    const lastIdx = 4;
    const [addressSearchOpen, toggleAddressSearchOpen] = useToggle(false);
    const [curIdx, decreaseStepIdx, increaseStepIdx, onCompleteBtnClick] =
        useCreateMusicianModal(lastIdx);

    const onPrevStepBtnClick = () => {
        if (addressSearchOpen) {
            toggleAddressSearchOpen();
        }
        decreaseStepIdx();
    };

    const onCloseBtnClick = () => {
        setPreventScroll(false);
        toggleOpen();
    };

    return (
        <StyledModalTemplate open={open}>
            <CreateMusicianModalBlock>
                <Top>
                    <PrevStepBtn
                        onClick={onPrevStepBtnClick}
                        visible={curIdx !== 0}
                    >
                        <StyledBackIco />
                        <span>이전</span>
                    </PrevStepBtn>
                    <StepNum>{curIdx + 1}</StepNum>
                    <CloseBtn onClick={onCloseBtnClick}>
                        <StyledCloseIco />
                    </CloseBtn>
                </Top>
                <CreateMusicianForm
                    curIdx={curIdx}
                    addressSearchOpen={addressSearchOpen}
                    toggleAddressSearchOpen={toggleAddressSearchOpen}
                />
                {curIdx < lastIdx ? (
                    <NextStepBtn onClick={increaseStepIdx}>
                        다음 단계로
                    </NextStepBtn>
                ) : (
                    <CompleteBtn onClick={onCompleteBtnClick}>
                        뮤지션 프로필 생성
                    </CompleteBtn>
                )}
            </CreateMusicianModalBlock>
        </StyledModalTemplate>
    );
}

const StyledModalTemplate = styled(ModalTemplate)`
    ${media.tablet} {
        grid-template-columns: 1fr;
        padding: 0 ${standards.padding.lg};
    }

    ${media.mobile} {
        padding: 60px 0 0;
    }
`;

const CreateMusicianModalBlock = styled.div`
    display: grid;
    grid-template-rows: 48px 1fr 56px;
    width: 1024px;
    height: 660px;
    background-color: ${palette.white3};
    border-radius: 28px;
    padding: 62px 40px 60px;

    ${media.tablet} {
        width: 100%;
    }

    ${media.mobile} {
        grid-template-rows: 24px 1fr 56px;
        height: 100%;
        border-radius: 14px;
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
        padding: 40px 0 0;
    }
`;

const Top = styled.div`
    display: grid;
    grid-template-columns: 48px 1fr 48px;
    align-items: center;
    place-content: center;
    width: 100%;

    ${media.mobile} {
        grid-template-columns: 36px 1fr 36px;
        padding: 0 24px;
    }
`;

const StyledBackIco = styled(BackIco)`
    .ico-left-arrow-2-path {
        stroke: ${palette.gray0};
    }

    ${media.mobile} {
        width: 24px;
        height: 24px;
    }
`;

const PrevStepBtn = styled.button<{ visible: boolean }>`
    position: relative;
    display: inline-grid;
    place-content: center;
    width: 48px;
    height: 48px;
    visibility: ${(props) => (props.visible ? "visible" : "hidden")};

    span {
        position: absolute;
        top: 14px;
        left: 36px;
        color: ${palette.gray0};
        white-space: nowrap;
        font-size: 20px;
    }

    ${media.tablet} {
        span {
            display: none;
        }
    }

    ${media.mobile} {
        width: 36px;
        height: 36px;
    }
`;

const StepNum = styled.div`
    ${fonts.size.scale18}
    display: grid;
    place-content: center;
    width: 36px;
    height: 36px;
    color: ${palette.gray0};
    border-radius: 50%;
    background-color: ${palette.purple5};
    margin: 0 auto;

    ${media.mobile} {
        width: 24px;
        height: 24px;
    }
`;

const CloseBtn = styled.button`
    display: inline-grid;
    place-content: center;
    width: 48px;
    height: 48px;

    ${media.mobile} {
        width: 36px;
        height: 36px;
    }
`;

const StyledCloseIco = styled(CloseIco)`
    .ico-close-path {
        stroke: ${palette.gray0};
    }

    ${media.mobile} {
        width: 24px;
        height: 24px;
    }
`;

const buttonStyle = css`
    ${fonts.size.scale18}
    display: inline-block;
    color: ${palette.white0};
    border-radius: 8px;
    padding: 17px 28px 19px;
    background-color: ${palette.purple0};
    margin: 0 auto;

    ${media.mobile} {
        width: 100%;
        border-radius: 0;
        padding: 20px 0;
    }
`;

const NextStepBtn = styled.button`
    ${buttonStyle}
`;

const CompleteBtn = styled.button`
    ${buttonStyle}
`;

export default CreateMusicianModal;
