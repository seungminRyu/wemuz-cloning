import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import styled from "styled-components";
import media from "../../lib/styles/media";
import palette from "../../lib/styles/palette";
import MyPageTabItem from "./MyPageTabItem";

export type MyPageTabProp = {};
export type MyPageTabType = "supporter" | "musician";

const getPageName = (path: string) => {
    const pathArr = path.split("/");
    const targetIdx = pathArr.length - 2;
    return pathArr[targetIdx];
};

function MyPageTab(props: MyPageTabProp) {
    const location = useLocation();
    const pageName = getPageName(location.pathname) as MyPageTabType;
    const [activeTab, setActiveTab] = useState<MyPageTabType>(pageName);

    return (
        <MyPageTabBlock>
            <MyPageTabInner>
                <TabContainer>
                    <MyPageTabItem
                        onClick={() => setActiveTab("supporter")}
                        link={`/my-page/supporter/home`}
                        active={activeTab === "supporter"}
                    >
                        <span>서포터</span>
                    </MyPageTabItem>
                    <MyPageTabItem
                        onClick={() =>
                            toast.warning("현재 서비스를 준비 중 입니다.")
                        }
                        // link={`/my-page/musician/home`}
                        link={`/my-page/supporter/home`}
                        active={activeTab === "musician"}
                    >
                        <span>뮤지션</span>
                    </MyPageTabItem>
                </TabContainer>
            </MyPageTabInner>
        </MyPageTabBlock>
    );
}

const MyPageTabBlock = styled.div`
    width: 100%;
    border-bottom: 1px solid ${palette.purple0};
`;

const MyPageTabInner = styled.ul`
    position: relative;
    max-width: 1440px;
    margin: 0 auto;
`;

const TabContainer = styled.div`
    position: absolute;
    bottom: -1px;
    right: 40px;
    display: flex;

    ${media.mobile} {
        right: 20px;
    }
`;

export default MyPageTab;
