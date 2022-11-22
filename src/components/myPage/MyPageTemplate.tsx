import React, { ReactElement } from "react";
import styled, { css } from "styled-components";
import media from "../../lib/styles/media";
import palette from "../../lib/styles/palette";
import standards from "../../lib/styles/standards";
import FixedBarTemplate from "../common/FixedBarTemplate";
import MyPageBanner from "./MyPageBanner";
import MyPageTab from "./MyPageTab";
import TopHeaderBar from "./TopHeaderBar";

export type MyPageTemplateProp = {
    aside?: ReactElement;
    main: ReactElement;
    className?: string;
};

function MyPageTemplate(props: MyPageTemplateProp) {
    const { aside, main, className } = props;

    return (
        <MyPageTemplateBlock className={className}>
            <FixedBarTemplate locate="TOP">
                <TopHeaderBar />
            </FixedBarTemplate>
            <MyPageBanner />
            <MyPageTab />
            <MainContainer className="main-container" aside={!!aside}>
                {aside}
                {main}
            </MainContainer>
        </MyPageTemplateBlock>
    );
}

const MyPageTemplateBlock = styled.div``;

const MainContainer = styled.div<{ aside: boolean }>`
    ${(props) =>
        props.aside &&
        css`
            display: grid;
            grid-template-columns: 280px 1fr;
            column-gap: 80px;
            max-width: 1440px;
        `}
    background-color: ${palette.white0};
    padding: 60px ${standards.padding.lg} 200px;
    margin: 0 auto;

    ${media.tablet} {
        grid-template-columns: 1fr;
        column-gap: 0;
        padding: 0;
    }
`;

export default MyPageTemplate;
