import React from "react";
import styled from "styled-components";
import useUserxx from "../../../lib/hooks/useUserxx";
import fonts from "../../../lib/styles/fonts";
import media from "../../../lib/styles/media";
import palette from "../../../lib/styles/palette";
import { formatPhoneNum } from "../../../lib/utils";
import { OrderSectionHeader } from "./OrderStyles";

export type OrderUserInfoProp = {};

function OrderUserInfo(props: OrderUserInfoProp) {
    const user = useUserxx();

    if (!user) return null;
    const { name, phone, email } = user;

    return (
        <Block>
            <OrderSectionHeader>나의 정보</OrderSectionHeader>
            <MainContainer>
                <InfoBody>
                    <InfoRow>
                        <span className="info-label">이름</span>
                        <div className="info-content">{name}</div>
                    </InfoRow>
                    <InfoRow>
                        <span className="info-label">연락처</span>
                        <div className="info-content">
                            {formatPhoneNum(phone)}{" "}
                            {/* <EditPhoneNumberBtn>번호 수정</EditPhoneNumberBtn> */}
                        </div>
                    </InfoRow>
                    <InfoRow>
                        <span className="info-label">이메일</span>
                        <div className="info-content">{email}</div>
                    </InfoRow>
                    <div className="bottom-bar"></div>
                </InfoBody>
                <GuideText>
                    <p>위 연락처와 이메일로 위뮤즈 관련 소식이 전달됩니다.</p>
                </GuideText>
            </MainContainer>
        </Block>
    );
}

const Block = styled.div`
    margin-top: 73px;

    ${media.mobile} {
        margin-top: 60px;
    }
`;

const MainContainer = styled.div`
    border: 1px solid ${palette.gray3};
    border-radius: 4px;
    margin-top: 28px;

    ${media.mobile} {
        border-radius: 0;
        border: none;
        border-top: 1px solid ${palette.gray3};
        border-bottom: 1px solid ${palette.gray3};
        margin-top: 16px;
    }
`;

const InfoBody = styled.div`
    padding: 40px 40px 0px;

    .bottom-bar {
        width: 100%;
        height: 1px;
        background-color: ${palette.gray4};
        margin-top: 32px;
    }

    ${media.mobile} {
        padding: 20px 24px;

        .bottom-bar {
            display: none;
        }
    }
`;
const InfoRow = styled.div`
    display: grid;
    grid-template-columns: 94px 1fr;
    font-size: 18px;

    & + & {
        margin-top: 28px;
    }

    .info-label {
        font-weight: ${fonts.weight.bold};
    }

    .info-content {
        display: flex;
        align-items: center;
        color: ${palette.gray0};
    }

    ${media.mobile} {
        grid-template-columns: 1fr;
        font-size: 14px;

        & + & {
            margin-top: 20px;
        }

        .info-content {
            margin-top: 8px;
        }
    }
`;

const EditPhoneNumberBtn = styled.button`
    ${fonts.size.scale16}
    display: inline-block;
    color: ${palette.purple0};
    padding: 0;
    margin-left: 16px;
    margin-top: -4px;
    border-bottom: 1px solid transparent;
    transition: border-bottom 0.2s;

    &:hover {
        border-bottom: 1px solid ${palette.purple0};
    }

    ${media.mobile} {
        border-bottom: 1px solid ${palette.purple0};
        padding: 1px 1px;
        margin-left: auto;
    }
`;

const GuideText = styled.div`
    font-size: 16px;
    color: ${palette.gray0};
    padding: 28px 40px;

    ${media.mobile} {
        font-size: 13px;
        background-color: ${palette.white2};
        padding: 16px 20px;
    }
`;

export default React.memo(OrderUserInfo);
