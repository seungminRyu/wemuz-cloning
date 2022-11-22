import React from "react";
import styled from "styled-components";
import { requestSnsLogin } from "../../../lib/api/core/api";
import fonts from "../../../lib/styles/fonts";
import media from "../../../lib/styles/media";
import palette from "../../../lib/styles/palette";
import { handleAxiosError } from "../../../lib/utils";

import { ReactComponent as GoogleLogo } from "../../../static/imgs/global/logo_google.svg";
import { ReactComponent as KakaoLogo } from "../../../static/imgs/global/logo_kakao.svg";

export type LoginSnsBtnGroupProp = {};

function LoginSnsBtnGroup(props: LoginSnsBtnGroupProp) {
    const onSnsLoginBtnClick = async (
        e: React.MouseEvent<HTMLButtonElement>
    ) => {
        const snsType = e.currentTarget.dataset.snsType;
        if (!snsType) {
            console.error("Couldn't get sns type");
            return;
        }

        try {
            sessionStorage.setItem("login_sns_type", snsType);
            const res = await requestSnsLogin(snsType);
            window.location.href = res.redirect_url;
        } catch (err) {
            handleAxiosError(err);
        }
    };

    return (
        <LoginSnsBtnGroupBlock>
            <KakaoSnsLoginBtn
                data-sns-type="kakao"
                onClick={onSnsLoginBtnClick}
            >
                <KakaoLogo />
                <span>카카오로 로그인</span>
            </KakaoSnsLoginBtn>
            <GoogleSnsLoginBtn
                data-sns-type="google"
                onClick={onSnsLoginBtnClick}
            >
                <GoogleLogo />
                <span>구글로 로그인</span>
            </GoogleSnsLoginBtn>
        </LoginSnsBtnGroupBlock>
    );
}

const LoginSnsBtnGroupBlock = styled.div`
    margin-top: 68px;

    ${media.tablet} {
        margin: 0 auto;
    }
`;

const SnsLoginBtn = styled.button`
    ${fonts.size.scale18}
    display: grid;
    grid-template-columns: 22px 1fr;
    align-items: center;
    width: 312px;
    height: 52px;
    color: ${palette.black0};
    border-radius: 8px;
    padding: 0 26px;

    & + & {
        margin-top: 20px;
    }

    span {
        text-align: center;
    }

    ${media.tablet} {
        & + & {
            margin-top: 24px;
        }
    }

    ${media.mobile} {
        width: 280px;
        height: 44px;
        padding: 0 23px;

        & + & {
            margin-top: 16px;
        }
    }
`;

const KakaoSnsLoginBtn = styled(SnsLoginBtn)`
    background-color: #fee500;
`;

const GoogleSnsLoginBtn = styled(SnsLoginBtn)`
    background-color: ${palette.white0};
    border: 1px solid ${palette.gray6};
`;

export default LoginSnsBtnGroup;
