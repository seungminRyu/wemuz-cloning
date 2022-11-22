import styled from "styled-components";
import fonts from "../../lib/styles/fonts";
import media from "../../lib/styles/media";
import palette from "../../lib/styles/palette";
import Popup from "./Popup";

export type RefundPolicyPopupProp = {
    open: boolean;
    toggleOpen: () => void;
};

function RefundPolicyPopup(props: RefundPolicyPopupProp) {
    const { open, toggleOpen } = props;

    return (
        <RefundPopup
            responsive
            open={open}
            content={
                <>
                    <PopupHead>환불 규정</PopupHead>
                    <Content>
                        <p>
                            결제 완료 이후 환불을 원하실 경우,{" "}
                            <span>
                                마이페이지 {">"} 공연 {">"} 결제 확인 {">"} 환불
                                규정 확인하기
                            </span>{" "}
                            또는 <span>고객센터 {">"} 문의하기</span>를 통해
                            가능합니다.
                        </p>
                        <div className="horizental-bar"></div>
                        <h3 className="mg-top-2">취소 수수료</h3>
                        <p className="mg-top-1 gray1">
                            환불요청시 접수한 날로부터 영업일 기준 3~5일 이내에
                            취소수수료를 제외한 금액을 환불받으실 수 있습니다.
                            신용카드 결제 시, 취소수수료 및 우편 발송비를 재승인
                            후 기존 승인금액을 취소 처리합니다.
                        </p>
                        <ul className="sub-text-list">
                            <li>
                                예매신청 당일 ~ 예매마감시간 전에 진행한
                                예약결제 취소는 수수료가 부과되지 않습니다.
                            </li>
                            <li>
                                결제청구가 완료된 결제에 대하여 관람일 5일전 ~
                                3일전 환불요청시 티켓 금액의 40%의 취소수수료가
                                부과됩니다.
                            </li>
                            <li>
                                결제청구가 완료된 결제에 대하여 관람일 2일전 ~
                                1일전 환불요청시 티켓 금액의 60%의 취소수수료가
                                부과됩니다.
                            </li>
                            <li>관람일 당일 환불은 불가능합니다.</li>
                        </ul>
                    </Content>
                </>
            }
            buttons={
                <>
                    <Popup.HalfSizeOutlineBtn
                        responsive
                        onClick={() => {
                            window.location.assign(
                                `${process.env.REACT_APP_QNA_URL}`
                            );
                        }}
                    >
                        문의하기
                    </Popup.HalfSizeOutlineBtn>
                    <Popup.HalfSizeMainBtn responsive onClick={toggleOpen}>
                        확인
                    </Popup.HalfSizeMainBtn>
                </>
            }
        />
    );
}

const RefundPopup = styled(Popup)`
    display: grid;
    grid-template-rows: 1fr 68px;
    height: 580px;

    ${Popup.ContentContainer} {
        height: 100%;
        overflow-y: scroll;
    }

    ${media.mobile} {
        height: 360px;
        grid-template-rows: 1fr 52px;
    }
`;

const PopupHead = styled.h2`
    ${fonts.size.scale22}
    font-weight: ${fonts.weight.bold};
    color: ${palette.purple0};
`;

const Content = styled.div`
    ${fonts.size.scale18}
    ${fonts.lineHeight.scale18} 
    color: ${palette.gray0};
    margin-top: 32px;

    span {
        font-weight: ${fonts.weight.bold};
    }

    h3 {
        font-weight: ${fonts.weight.bold};
        margin-top: 32px;
    }

    .horizental-bar {
        width: 100%;
        height: 1px;
        background-color: ${palette.gray3};
        margin-top: 32px;
    }

    .sub-text-list {
        width: 100%;
        background-color: ${palette.gray4};
        border-radius: 4px;
        padding: 24px 16px;
        margin-top: 20px;

        li {
            position: relative;
            ${fonts.size.scale16}
            ${fonts.lineHeight.scale16}
            padding-left: 16px;

            &:before {
                content: "";
                position: absolute;
                left: 0;
                top: 8px;
                display: inline-block;
                width: 6px;
                height: 6px;
                border-radius: 50%;
                background-color: ${palette.gray0};
            }
        }

        li + li {
            margin-top: 16px;
        }
    }

    .mg-top-1 {
        margin-top: 12px;
    }

    .mg-top-2 {
        margin-top: 32px;
    }

    .gray1 {
        color: ${palette.gray1};
    }

    ${media.mobile} {
        margin-top: 24px;

        .horizental-bar {
            margin-top: 24px;
        }

        .mg-top-1 {
            margin-top: 10px;
        }

        .mg-top-2 {
            margin-top: 24px;
        }

        .sub-text-list {
            padding: 20px 12px;

            li {
                padding-left: 10px;

                &:before {
                    top: 7px;
                    width: 4px;
                    height: 4px;
                }
            }

            li + li {
                margin-top: 12px;
            }
        }
    }
`;

export default RefundPolicyPopup;
