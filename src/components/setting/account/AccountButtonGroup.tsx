import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import styled from "styled-components";
import palette from "../../../lib/styles/palette";

export type AccountButtonGroupProp = {};

function AccountButtonGroup(props: AccountButtonGroupProp) {
    const navigate = useNavigate();

    const onConfirmBtnClick = () => {
        navigate("/setting");
        toast.success("계정 정보 수정을 완료했습니다.");
    };

    return (
        <AccountButtonGroupBlock>
            <DeleteAccountBtn
                onClick={() =>
                    toast.warning(
                        "현재 기능을 점검 중입니다. 잠시후 다시 시도해주세요."
                    )
                }
            >
                회원 탈퇴
            </DeleteAccountBtn>
            <ButtonContainer>
                <ConfirmBtn onClick={onConfirmBtnClick}>확인</ConfirmBtn>
            </ButtonContainer>
        </AccountButtonGroupBlock>
    );
}

const AccountButtonGroupBlock = styled.div`
    margin-top: 20px;
`;

const DeleteAccountBtn = styled.button`
    display: block;
    color: ${palette.purple0};
    border-bottom: 1px solid ${palette.purple0};
    padding: 1px 0;
    margin-left: auto;
`;

const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
    // justify-content: space-between;
    justify-content: center;
    width: 280px;
    margin: 48px auto 0;
`;

const CencelBtn = styled.button`
    width: 128px;
    color: ${palette.purple0};
    border-radius: 4px;
    border: 1px solid ${palette.purple0};
    background-color: ${palette.white0};
    padding: 11px 0;
`;

const ConfirmBtn = styled.button`
    width: 128px;
    color: ${palette.white0};
    border-radius: 4px;
    border: 1px solid ${palette.purple0};
    background-color: ${palette.purple0};
    padding: 11px 0;
`;

export default AccountButtonGroup;
