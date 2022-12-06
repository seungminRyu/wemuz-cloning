import styled from "styled-components";
import media from "../../../lib/styles/media";
import MainCommonTabItem from "../MainCommonTabItem";
import { MyPageHeading2 } from "../MyPageStyles";

export type MainWemuzServiceTabProp = {};

function MainWemuzServiceTab(props: MainWemuzServiceTabProp) {
    return (
        <MainWemuzServiceTabBlock>
            <MyPageHeading2>위뮤즈 서비스</MyPageHeading2>
            <TabContainer>
                <MainCommonTabItem link="/">
                    <span>회사 소개</span>
                </MainCommonTabItem>
                <MainCommonTabItem link="/">
                    <span>인터뷰 신청</span>
                </MainCommonTabItem>
                <MainCommonTabItem link="/">
                    <span>파트너 제휴</span>
                </MainCommonTabItem>
            </TabContainer>
        </MainWemuzServiceTabBlock>
    );
}

const MainWemuzServiceTabBlock = styled.div`
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

export default MainWemuzServiceTab;
