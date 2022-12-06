import styled from "styled-components";
import fonts from "../../../lib/styles/fonts";
import media from "../../../lib/styles/media";
import palette from "../../../lib/styles/palette";
import Popup from "../../common/Popup";

export type OptionsPopupProp = {
    open: boolean;
    toggleOpen: () => void;
    onClick: () => void;
};

function OptionsPopup(props: OptionsPopupProp) {
    const { open, toggleOpen, onClick } = props;

    return (
        <Popup
            responsive
            open={open}
            content={
                <>
                    <PopupHead>본 공연은 무료로 진행됩니다.</PopupHead>
                    <PopupText>
                        - 해당 공연은 <strong>무료로 진행되는 공연</strong>으로,
                        목표 금액 또는 인원과 달성여부에 관계없이 공연이
                        진행됩니다.
                    </PopupText>
                    <PopupText>
                        - 결제 과정에서 <strong>결제 수단은 무통장 입금</strong>
                        으로 선택하시되, 결제예약 완료 이후{" "}
                        <strong>
                            무통장 입금 계좌로 금액을 송금하실 필요가 없습니다.
                        </strong>{" "}
                        결제예약을 마치면 자동으로 공연예약이 완료됩니다.
                    </PopupText>
                </>
            }
            buttons={
                <>
                    <Popup.HalfSizeOutlineBtn responsive onClick={toggleOpen}>
                        취소
                    </Popup.HalfSizeOutlineBtn>
                    <Popup.HalfSizeMainBtn responsive onClick={onClick}>
                        확인했습니다.
                    </Popup.HalfSizeMainBtn>
                </>
            }
        />
    );
}

const PopupHead = styled.h2`
    ${fonts.size.scale22}
    font-weight: ${fonts.weight.bold};
    color: ${palette.purple0};
`;

const PopupText = styled.p`
    ${fonts.size.scale18}
    ${fonts.lineHeight.scale18} 
    color: ${palette.gray0};
    margin-top: 32px;

    strong {
        font-weight: ${fonts.weight.bold};
        color: ${palette.purple0};
    }

    & + & {
        margin-top: 28px;
    }

    ${media.mobile} {
        margin-top: 24px;

        & + & {
            margin-top: 22px;
        }
    }
`;

export default OptionsPopup;
