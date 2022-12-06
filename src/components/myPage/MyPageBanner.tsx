import React from "react";
import styled from "styled-components";
import fonts from "../../lib/styles/fonts";
import media from "../../lib/styles/media";
import palette from "../../lib/styles/palette";

import bannerBgImg from "../../static/imgs/myPage/banner_bg.png";

export type MyPageBannerProp = {};

function MyPageBanner(props: MyPageBannerProp) {
    return (
        <MyPageBannerBlock>
            <h1>마이페이지</h1>
        </MyPageBannerBlock>
    );
}

const MyPageBannerBlock = styled.div`
    width: 100%;
    height: 280px;
    background-image: url(${bannerBgImg});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    padding-top: 135px;

    h1 {
        font-size: 28px;
        font-weight: ${fonts.weight.bold};
        color: ${palette.purple0};
        letter-spacing: 0.56px;
        text-align: center;
    }

    ${media.mobile} {
        height: 192px;
        padding-top: 96px;

        h1 {
            font-size: 18px;
            letter-spacing: 0.36px;
        }
    }
`;

export default MyPageBanner;
