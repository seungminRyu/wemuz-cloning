import styled from "styled-components";
import fonts from "../../../lib/styles/fonts";
import media from "../../../lib/styles/media";
import palette from "../../../lib/styles/palette";
import ModalTemplatexx from "../../common/ModalTemplatexx";

export type OrderTermsModalProp = {
    isOpen: boolean;
    toggleOpen: () => void;
    terms: string | null;
};

function OrderTermsModal(props: OrderTermsModalProp) {
    const { toggleOpen, isOpen, terms } = props;

    if (!terms) return null;

    const termsContentComponent = () => {
        switch (terms) {
            case "caution":
                return <Caution />;
            case "personalInformation":
                return <PersonalInformation />;
            case "paymentReservation":
                return <PaymentReservation />;
            case "cancelPayment":
                return <CancelPayment />;
            case "refundPolicy":
                return <RefundPolicy />;
            default: {
                toggleOpen();
                return null;
            }
        }
    };

    const onConfirmBtnClick = (): void => toggleOpen();

    return (
        <ModalTemplatexx isVisible={isOpen} onClick={toggleOpen}>
            <ModalContainer smallSize={terms === "responsibility"}>
                {termsContentComponent()}
                <ConfirmBtn onClick={onConfirmBtnClick}>확인</ConfirmBtn>
            </ModalContainer>
        </ModalTemplatexx>
    );
}

function Caution() {
    return (
        <>
            <TermsTitle>위뮤즈 공연 예매에 대한 유의사항 및 동의</TermsTitle>
            <TermsContainer>
                <TermsListedText>
                    위뮤즈 플랫폼에서의 예매는 공연 개설 아티스트와 공간 측이
                    협의한 공연 최소 예매목표 달성시 공연 개설이 확정되는
                    시스템입니다.
                </TermsListedText>
                <TermsListedText>
                    예매목표 달성후 개설 확정된 공연의 개설 과정에서 계획이
                    지연, 변경되거나 무산될 경우, 해당 공연의 예매자는
                    환불규정에 따라 환불을 요청할 수 있습니다.
                </TermsListedText>
                <TermsListedText>
                    제공되기로 한 물품 또는 서비스에 문제가 있는 경우 환불규정에
                    따라 환불을 요청할 수 있습니다.
                </TermsListedText>
            </TermsContainer>
        </>
    );
}

function PersonalInformation() {
    return (
        <>
            <TermsTitle>제3자에 대한 개인 정보 제공 동의</TermsTitle>
            <TermsContainer>
                <TermsMainText>
                    위뮤즈는 '예매하기'를 통한 결제 및 패키지 상품 전달을 위해,
                    이용자의 사전 동의 아래 제3자 '공연 개설 아티스트'에게
                    제공합니다. 위뮤즈는 이용자들의 개인 정보를 '수집하는 개인
                    정보의 항목, 수집 방법 및 이용목적'에서 고지한 범위 내에서
                    사용하며, 이용자의 사전 동의 없이는 동의 범위를 초과하여
                    이용하거나 원칙적으로 이용자의 개인 정보를 외부에 공개하지
                    않습니다.
                </TermsMainText>
                <TermsListItem>
                    <TermsListedText>개인 정보 제3자 제공 내역</TermsListedText>
                    <TermsSubText>
                        제공받는 자 : 공연 개설 아티스트
                    </TermsSubText>
                    <TermsSubText>
                        목적 : 예매 정보 확인 및 서비스 제공, 공연 진행과 관련된
                        공지 및 민원처리
                    </TermsSubText>
                    <TermsSubText>
                        항목 : 예매자 정보(이름, 이메일, 휴대폰 번호)
                    </TermsSubText>
                    <TermsSubText>
                        보유 기간 : 재화 또는 서비스의 제공이 완료된 즉시
                        파기(단, 관계법령에 정해진 규정에 따라 법정기간 동안
                        보관)
                    </TermsSubText>
                </TermsListItem>
                <TermsListItem>
                    <TermsListedText>
                        동의 거부권 등에 대한 고지
                    </TermsListedText>
                    <TermsSubText>
                        개인 정보 제공은 서비스 이용을 위해 꼭 필요합니다. 개인
                        정보 제공을 거부하실 수 있으나, 이 경우 서비스 이용이
                        제한될 수 있습니다.
                    </TermsSubText>
                </TermsListItem>
            </TermsContainer>
        </>
    );
}

function PaymentReservation() {
    return (
        <>
            <TermsTitle>공연 예매를 위한 예약결제에 대한 동의</TermsTitle>
            <TermsContainer>
                <TermsListedText>
                    예약결제란, 미래의 특정날짜에 결제청구를 예약하고, 예약한
                    결제청구일이 되었을때 예약시 등록한 결제 수단으로 예약한
                    금액이 자동으로 청구되는 결제 시스템을 의미합니다.
                    예약결제취소는 결제청구 예약일 전까지 자유롭게 가능하며
                    변경에 대한 수수료가 들지 않습니다.
                </TermsListedText>
                <TermsListedText>
                    위뮤즈 플랫폼에서의 공연 예매는 예약결제를 통해 진행됩니다.
                    공연 예매의 결제청구일은 공연 개설자가 설정한 예매 마감일
                    다음날 입니다. 예매 마감일까지 최소 예매인원을 달성한 경우
                    공연개설이 확정됩니다. 공연개설 확정시, 결제청구일에 선택
                    결제수단으로 결제가 요청됩니다. 예매한 공연의 예매마감일까지
                    최소 예매인원을 달성하지 못할 경우 예약결제와 예매는
                    취소됩니다.
                </TermsListedText>
                <TermsListedText>
                    결제가 성공적으로 완료된 경우 예매가 확정되고 알림톡 또는
                    문자를 통해 해당 공연 티켓이 전달됩니다. 만약 결제 청구가
                    실패할 경우(계좌 잔액부족 등) 최대 2회까지 재결제를
                    시도합니다.
                </TermsListedText>
            </TermsContainer>
        </>
    );
}

function CancelPayment() {
    return (
        <>
            <TermsTitle>예약 결제 취소에 대한 동의</TermsTitle>
            <TermsContainer>
                <TermsListItem>
                    <TermsListedText>예약결제 취소</TermsListedText>
                    <TermsSubText>
                        예약 결제 등록 후, 예매 마감일 전까지 예약 결제 취소가
                        가능합니다.
                    </TermsSubText>
                </TermsListItem>
                <TermsListItem>
                    <TermsListedText>공연 취소</TermsListedText>
                    <TermsSubText>
                        위뮤즈 플랫폼 공연 예매기간 도중에 천재지변, 정부정책,
                        중대한 계약사항 변경 등의 이유로 공연이 지속가능하기가
                        힘들다고 판단될시에 위뮤즈 자체 심의를 통해 공연취소가
                        결정될 수 있습니다. 공연 취소가 된 경우, 예매 및 결제
                        예약 또한 자동으로 취소되며 고객분들에게 해당 내용이
                        전달됩니다.
                    </TermsSubText>
                </TermsListItem>
                <TermsListItem>
                    <TermsListedText>예매 목표 미달성</TermsListedText>
                    <TermsSubText>
                        공연 예매 마감일까지 예매 목표를 달성하지 못한 경우 해당
                        공연에 대한 예매 및 예약 결제가 자동으로 취소되며
                        고객분들에게 해당 내용이 전달됩니다.
                    </TermsSubText>
                </TermsListItem>
                <TermsListItem>
                    <TermsListedText>결제 실패</TermsListedText>
                    <TermsSubText>
                        결제 잔액부족등의 이유로 결제청구가 실패할 경우 최대
                        2회까지 재시도 됩니다. 재시도 한 결제요청이 모두 실패한
                        경우 자동으로 예매가 취소됩니다.
                    </TermsSubText>
                </TermsListItem>
            </TermsContainer>
        </>
    );
}

function RefundPolicy() {
    return (
        <>
            <TermsTitle>공연 예매 환불 규정에 대한 동의</TermsTitle>
            <StyledTermsContainer>
                <p>
                    결제 완료 이후 환불을 원하실 경우,{" "}
                    <span>
                        마이페이지 {">"} 공연 {">"} 결제 확인 {">"} 환불 규정
                        확인하기
                    </span>{" "}
                    또는 <span>고객센터 {">"} 문의하기</span>를 통해 가능합니다.
                </p>
                <HorizentalBar />
                <h3 className="mg-top-2">취소 수수료</h3>
                <p className="mg-top-1 gray1">
                    환불요청시 접수한 날로부터 영업일 기준 3~5일 이내에
                    취소수수료를 제외한 금액을 환불받으실 수 있습니다. 신용카드
                    결제 시, 취소수수료 및 우편 발송비를 재승인 후 기존
                    승인금액을 취소 처리합니다.
                </p>
                <RefundSubtextList>
                    <li>
                        예매신청 당일 ~ 예매마감시간 전에 진행한 예약결제 취소는
                        수수료가 부과되지 않습니다.
                    </li>
                    <li>
                        결제청구가 완료된 결제에 대하여 관람일 5일전 ~ 3일전
                        환불요청시 티켓 금액의 40%의 취소수수료가 부과됩니다.
                    </li>
                    <li>
                        결제청구가 완료된 결제에 대하여 관람일 2일전 ~ 1일전
                        환불요청시 티켓 금액의 60%의 취소수수료가 부과됩니다.
                    </li>
                    <li>관람일 당일 환불은 불가능합니다.</li>
                </RefundSubtextList>
            </StyledTermsContainer>
        </>
    );
}

const ModalContainer = styled.div<{ smallSize: boolean }>`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: ${(props) =>
        props.smallSize ? "57px 145px 82px" : "57px 340px 82px"};
    width: 530px;
    border-radius: 28px;
    background-color: ${palette.white2};
    padding: 48px 48px 40px;

    ${media.mobile} {
        grid-template-rows: 42px 1fr 58px;
        width: 100%;
        height: 100%;
        border-radius: 0;
        border-top-left-radius: 12px;
        border-top-right-radius: 12px;
        background-color: ${palette.white2};
        padding: 60px 0 0;
    }
`;

const TermsTitle = styled.h3`
    ${fonts.size.scale22}
    font-weight: ${fonts.weight.bold};
    color: ${palette.purple0};

    ${media.mobile} {
        padding: 0 20px;
    }
`;

const TermsContainer = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    overflow-y: scroll;

    ${media.mobile} {
        padding: 0 20px;
        margin-top: 0;
    }
`;

const TermsMainText = styled.p`
    ${fonts.size.scale18}
    ${fonts.lineHeight.scale18}
    color: ${palette.gray0};
`;

const TermsSubText = styled(TermsMainText)`
    color: ${palette.gray1};
    padding-left: 16px;
    margin-top: 12px;

    ${media.mobile} {
        padding-left: 12px;
        margin-top: 8px;
    }
`;

const TermsListItem = styled.div`
    margin-top: 28px;
    ${media.mobile} {
        margin-top: 24px;
    }
`;

const TermsListedText = styled(TermsMainText)`
    position: relative;
    padding-left: 16px;

    &:before {
        position: absolute;
        top: 6px;
        left: 0;
        content: "";
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background-color: ${palette.gray0};
    }

    & + & {
        margin-top: 16px;
    }

    ${media.mobile} {
        padding-left: 12px;

        &:before {
            top: 4px;
            width: 6px;
            height: 6px;
        }

        & + & {
            margin-top: 12px;
        }
    }
`;

const ConfirmBtn = styled.button`
    display: block;
    font-size: 18px;
    color: ${palette.white0};
    border-radius: 4px;
    background-color: ${palette.purple0};
    transition: background-color 0.2s;
    padding: 14px 54px;
    margin: 32px auto 0;

    &:hover {
        background-color: ${palette.purple3};
    }

    ${media.mobile} {
        width: 100%;
        height: 58px;
        font-size: 16px;
        border-radius: 0;
        padding: 20px 0;
        margin: 0;
    }
`;

const StyledTermsContainer = styled(TermsContainer)`
    ${fonts.size.scale18}
    ${fonts.lineHeight.scale18} 
    color: ${palette.gray0};

    span {
        font-weight: ${fonts.weight.bold};
    }

    h3 {
        font-weight: ${fonts.weight.bold};
        margin-top: 32px;
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
        .mg-top-1 {
            margin-top: 10px;
        }

        .mg-top-2 {
            margin-top: 24px;
        }
    }
`;

const HorizentalBar = styled.div`
    width: 100%;
    height: 1px;
    background-color: ${palette.gray3};
    margin-top: 32px;

    ${media.mobile} {
        margin-top: 24px;
    }
`;

const RefundSubtextList = styled.ul`
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

    ${media.mobile} {
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
`;

export default OrderTermsModal;
