import styled, { css } from "styled-components";
import media from "../../lib/styles/media";
import MainCommonTabItem from "./MainCommonTabItem";
import { MyPageHeading2 } from "./MyPageStyles";

import { ReactComponent as InfoIco } from "../../static/icons/myPage/ico_info.svg";
import { ReactComponent as NoticeIco } from "../../static/icons/myPage/ico_notice.svg";
import { ReactComponent as QnaIco } from "../../static/icons/myPage/ico_qna.svg";

export type MainWemuzTabProp = {};

function MainWemuzTab(props: MainWemuzTabProp) {
    return (
        <MainWemuzTabBlock>
            <MyPageHeading2>위뮤즈 메뉴</MyPageHeading2>
            <TabContainer>
                <MainCommonTabItem link="https://wemuz.me/policy?type=notice">
                    <StyledNoticeIco />
                    <span>공지사항</span>
                </MainCommonTabItem>
                <MainCommonTabItem link="https://wemuz.me/policy?type=terms">
                    <StyledInfoIco />
                    <span>이용가이드</span>
                </MainCommonTabItem>
                <MainCommonTabItem link="https://forms.gle/8obBSCDPpCRnz9HR6">
                    <StyledQnaIco />
                    <span>문의하기</span>
                </MainCommonTabItem>
            </TabContainer>
        </MainWemuzTabBlock>
    );
}

const MainWemuzTabBlock = styled.div`
    margin-top: 86px;

    ${media.mobile} {
        margin-top: 72px;
    }
`;

const TabContainer = styled.ul`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
    margin-top: 25px;

    ${media.mobile} {
        grid-template-columns: 1fr;
        margin-top: 20px;
    }
`;

const iconStyle = css`
    margin-right: 6px;

    ${media.mobile} {
        width: 20px;
        height: 20px;
        margin-right: 4px;
    }
`;

const StyledNoticeIco = styled(NoticeIco)`
    ${iconStyle}
`;

const StyledInfoIco = styled(InfoIco)`
    ${iconStyle}
`;

const StyledQnaIco = styled(QnaIco)`
    ${iconStyle}
`;

export default MainWemuzTab;
