import styled from "styled-components";
import fonts from "../../../lib/styles/fonts";
import media from "../../../lib/styles/media";
import palette from "../../../lib/styles/palette";
import Popup from "../../common/Popup";

export type SupportDetailCancelPopupProp = {
    open: boolean;
    toggleOpen: () => void;
    onClick: () => void;
};

function SupportDetailCancelPopup(props: SupportDetailCancelPopupProp) {
    const { open, toggleOpen, onClick } = props;

    return (
        <Popup
            responsive
            open={open}
            content={
                <>
                    <PopupHead>
                        취소 전, 아래 유의 사항을 확인해 주세요.
                    </PopupHead>
                    <PopupText>
                        취소 전, 아래의 유의 사항을 확인해 주세요. 예매 변경을
                        원하신다면, 잔여 수량을 먼저 확인하고 취소해주세요.
                        남아있는 예매 티켓 수량이 없을 경우 재예매가 불가할 수
                        있습니다.
                    </PopupText>
                    <PopupText>
                        예매 시스템 특성상, 취소 후 재예매가 어려울 수 있으니
                        신중하게 취소해 주세요.
                    </PopupText>
                </>
            }
            buttons={
                <>
                    <Popup.HalfSizeOutlineBtn responsive onClick={toggleOpen}>
                        다시 생각하기
                    </Popup.HalfSizeOutlineBtn>
                    <Popup.HalfSizeMainBtn responsive onClick={onClick}>
                        확인
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

export default SupportDetailCancelPopup;
