import styled from "styled-components";
import media from "../../../lib/styles/media";
import palette from "../../../lib/styles/palette";
import MainActivityTabItem from "../MainActivityTabItem";
import { MyPageHeading2 } from "../MyPageStyles";

export type MusicianActivityTabProp = {
    fundingCount: number;
    projectCount: number;
};

function MusicianActivityTab(props: MusicianActivityTabProp) {
    const { fundingCount, projectCount } = props;

    return (
        <MusicianActivityTabBlock>
            <MyPageHeading2>나의 뮤지션 활동</MyPageHeading2>
            <TabContainer>
                <MainActivityTabItem
                    tabName="공연"
                    count={fundingCount}
                    link="/"
                />
                <MainActivityTabItem
                    tabName="프로젝트"
                    count={projectCount}
                    link="/"
                />
                {/* 팀 페이지 만들때 까지 주석처리 */}
                {/* <MainActivityTabItem tabName="소속 팀" count={team} link="/" /> */}
            </TabContainer>
        </MusicianActivityTabBlock>
    );
}

const MusicianActivityTabBlock = styled.div`
    margin-top: 14px;

    ${media.tablet} {
        margin-top: 0;
    }
`;

const TabContainer = styled.ul`
    display: grid;
    // grid-template-columns: repeat(3, 1fr);
    grid-template-columns: repeat(2, 1fr);
    width: 100%;
    border-radius: 4px;
    border: 1px solid ${palette.gray3};
    background-color: ${palette.white0};
    margin-top: 25px;

    ${media.tablet} {
        border: 1px solid ${palette.gray4};
    }

    ${media.mobile} {
        margin-top: 20px;
    }
`;

export default MusicianActivityTab;
