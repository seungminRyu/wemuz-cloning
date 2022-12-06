import React from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import styled, { css } from "styled-components";
import fonts from "../../lib/styles/fonts";
import palette from "../../lib/styles/palette";

import { ReactComponent as QnaIco } from "../../static/icons/global/ico_qna.svg";
import { ReactComponent as LinkIco } from "../../static/icons/global/ico_right_arrow_2.svg";

export type SettingTabListProp = {};

function SettingTabList(props: SettingTabListProp) {
    return (
        <SettingTabListBlock>
            <li>
                <StyledLink to="./supporter">
                    <TabItemText>서포터 프로필 수정</TabItemText>
                    <TabItemSubText>지역, 선호 장르 등</TabItemSubText>
                    <StyledLinkIco />
                </StyledLink>
            </li>
            <li>
                <StyledLink
                    to="/"
                    onClick={(e) => {
                        e.preventDefault();
                        toast.warning("현재 서비스를 준비중 입니다.");
                    }}
                >
                    <TabItemText>뮤지션 프로필 수정</TabItemText>
                    <TabItemSubText>
                        활동명, 활동지역, 포지션, 장르, 선호 아티스트 등
                    </TabItemSubText>
                    <StyledLinkIco />
                </StyledLink>
            </li>
            <li>
                <StyledLink to={"/setting/account"}>
                    <TabItemText>계정 정보 수정</TabItemText>
                    <TabItemSubText>
                        이름, 연락처, 이메일, SNS 연동, 회원 탈퇴 등
                    </TabItemSubText>
                    <StyledLinkIco />
                </StyledLink>
            </li>
            <HorizentalBar />
            <li>
                <StyledAnchor href={process.env.REACT_APP_QNA_URL}>
                    <StyledQnaIco />
                    <TabItemText>문의하기</TabItemText>
                    <TabItemSubText>찾으시는 설정이 없으신가요?</TabItemSubText>
                    <StyledLinkIco />
                </StyledAnchor>
            </li>
        </SettingTabListBlock>
    );
}

const SettingTabListBlock = styled.ul`
    margin-top: 30px;
`;

const tabItemStyle = css`
    position: relative;
    display: grid;
    grid-template-areas: "icon text" "icon sub-text";
    grid-template-columns: auto 1fr;
    column-gap: 4px;
    row-gap: 6px;
    cursor: pointer;
    padding: 12px 0;
`;

const StyledLink = styled(Link)`
    ${tabItemStyle}
`;

const StyledAnchor = styled.a`
    ${tabItemStyle}
`;

const TabItemText = styled.p`
    grid-area: text;
    color: ${palette.black0};
    font-size: 14px;
    font-weight: ${fonts.weight.bold};
`;

const TabItemSubText = styled.p`
    grid-area: sub-text;
    font-size: 13px;
    color: ${palette.gray1};
`;

const HorizentalBar = styled.div`
    width: 100%;
    height: 1px;
    background-color: ${palette.gray4};
    margin: 16px 0;
`;

const StyledQnaIco = styled(QnaIco)`
    width: 17px;
    height: 17px;
    margin-top: -1px;

    .ico-qna-path-1,
    .ico-qna-path-2 {
        stroke-width: 1.3px;
        stroke: ${palette.black0};
    }
`;

const StyledLinkIco = styled(LinkIco)`
    position: absolute;
    top: 20px;
    right: 2px;
    width: 20px;
    height: 20px;

    .ico-right-arrow-2-path {
        stroke: ${palette.gray1};
    }
`;

export default SettingTabList;
