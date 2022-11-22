import React from "react";
import { toast } from "react-toastify";
import styled from "styled-components";
import palette from "../../../lib/styles/palette";
import { SettingContent, SettingLabel } from "../SettingStyles";

export type AccountSocialsProp = {
    email: string | null;
    kakaoEmail: string | null;
    googleEmail: string | null;
};

function AccountSocials(props: AccountSocialsProp) {
    const { email, kakaoEmail, googleEmail } = props;

    const onConnectBtnClick = () => {
        toast.warning("기능 점검 중입니다. 잠시후 다시 시도 해주세요.");
    };

    return (
        <AccountSocialsBlock>
            <SocialItem>
                <SettingLabel>이메일</SettingLabel>
                <SettingContent>
                    {email ? email : "이메일 정보가 없습니다."}
                </SettingContent>
            </SocialItem>
            <SocialItem>
                <LabelContainer>
                    <SettingLabel>카카오 계정 연동</SettingLabel>
                    {!kakaoEmail && (
                        <ConnectBtn onClick={onConnectBtnClick}>
                            연동
                        </ConnectBtn>
                    )}
                </LabelContainer>
                <SettingContent>
                    {kakaoEmail ? kakaoEmail : "연동된 카카오 계정이 없습니다."}
                </SettingContent>
            </SocialItem>
            {/* <SocialItem>
                <LabelContainer>
                    <SettingLabel>구글 계정 연동</SettingLabel>
                    <ConnectBtn onClick={onConnectBtnClick}>연동</ConnectBtn>
                </LabelContainer>
                <SettingContent>
                    {googleEmail ? googleEmail : "연동된 구글 계정이 없습니다."}
                </SettingContent>
            </SocialItem> */}
        </AccountSocialsBlock>
    );
}

const AccountSocialsBlock = styled.div`
    border-bottom: 1px solid ${palette.gray4};
    padding-bottom: 48px;
`;

const LabelContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const ConnectBtn = styled.button`
    display: inline-block;
    color: ${palette.purple0};
    border-bottom: 1px solid ${palette.purple0};
    padding: 1px 0;
`;

const SocialItem = styled.div`
    margin-top: 48px;
`;

export default AccountSocials;
