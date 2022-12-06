import styled from "styled-components";
import media from "../../../lib/styles/media";
import palette from "../../../lib/styles/palette";
import MainActivityTabItem from "../MainActivityTabItem";
import { MyPageHeading2 } from "../MyPageStyles";

export type SupporterActivityTabProp = {
    supportedFundingsCount: number;
    likedFundingsCount: number;
};

function SupporterActivityTab(props: SupporterActivityTabProp) {
    const { supportedFundingsCount, likedFundingsCount } = props;

    return (
        <SupporterActivityTabBlock>
            <MyPageHeading2>나의 서포터 활동</MyPageHeading2>
            <TabContainer>
                <MainActivityTabItem
                    tabName="공연"
                    count={supportedFundingsCount}
                    link="../supports"
                />
                <MainActivityTabItem
                    tabName="좋아요"
                    count={likedFundingsCount}
                    link="../likes"
                />
                {/* <MainActivityTabItem
                    tabName="작성 리뷰"
                    count={review}
                    link="/"
                /> */}
            </TabContainer>
        </SupporterActivityTabBlock>
    );
}

const SupporterActivityTabBlock = styled.div`
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

export default SupporterActivityTab;
