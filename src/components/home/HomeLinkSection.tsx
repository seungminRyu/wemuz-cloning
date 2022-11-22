import { Link } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import fonts from "../../lib/styles/fonts";
import media from "../../lib/styles/media";
import palette from "../../lib/styles/palette";

import { ReactComponent as LinkIco } from "../../static/icons/home/ico_link.svg";

export type HomeLinkSectionProp = {
    bgColor: string;
    textColor: string;
    img: string;
    mainText: string;
    subText: string;
    url: string;
    className?: string;
};

function HomeLinkSection(props: HomeLinkSectionProp) {
    const { bgColor, textColor, img, mainText, subText, url, className } =
        props;

    return (
        <ThemeProvider
            theme={{
                bgColor,
                textColor,
            }}
        >
            <HomeLinkSectionBlock className={className}>
                <Body>
                    <LeftBlock>
                        <div className="left-inner">
                            <StyledLink to={url}>
                                {mainText}
                                <StyledLinkIco />
                            </StyledLink>
                            <p>{subText}</p>
                        </div>
                        <span></span>
                    </LeftBlock>
                    <RightBlock>
                        <img src={img} alt="section-image" />
                    </RightBlock>
                </Body>
            </HomeLinkSectionBlock>
        </ThemeProvider>
    );
}

const HomeLinkSectionBlock = styled.div`
    display: grid;
    place-content: center;
    width: 100%;
`;

/**
 * 엘리먼트 z-index 정렬
 * RightBlock(배경 이미지, -2) > span(사선 블럭, -1) > Body (0)
 * 순으로 정렬
 */
const Body = styled.div`
    display: flex;
    width: 100vw;
    height: 165px;
    overflow: hidden;
    background-color: ${(props) => props.theme.bgColor};
    z-index: 0;

    ${media.mobile} {
        height: 108px;
    }
`;

const LeftBlock = styled.div`
    position: relative;
    width: 50%;
    height: 100%;

    .left-inner {
        max-width: 680px;
        padding-left: 60px;
        margin-left: auto;
    }

    span {
        position: absolute;
        right: -30px;
        top: -24px;
        display: block;
        width: 80px;
        height: 220px;
        background-color: ${(props) => props.theme.bgColor};
        transform: rotate(-20deg);
        z-index: -1;
    }

    p {
        ${fonts.size.scale18}
        color: ${palette.gray0};
        white-space: nowrap;
        margin-top: 16px;
    }

    ${media.tablet} {
        width: 60%;

        .left-inner {
            padding-left: 80px;
        }
    }

    ${media.mobile} {
        height: 108px;

        .left-inner {
            padding-left: 24px;
        }

        p {
            margin-top: 10px;
        }
    }
`;

const RightBlock = styled.div`
    width: 50%;
    height: 100%;
    z-index: -2;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    ${media.tablet} {
        width: 40%;
    }
`;

const StyledLink = styled(Link)`
    ${fonts.size.scale22}
    display: flex;
    align-items: center;
    font-weight: ${fonts.weight.bold};
    white-space: nowrap;
    margin-top: 56px;

    &,
    &:visited,
    &:link {
        color: ${(props) => props.theme.textColor};
    }

    ${media.mobile} {
        margin-top: 36px;
    }
`;

const StyledLinkIco = styled(LinkIco)`
    margin-top: -3px;
    margin-left: 2px;

    .ico-link-path {
        stroke: ${(props) => props.theme.textColor};
    }

    ${media.mobile} {
        width: 18px;
        height: 18px;
        margin-left: 0;
    }
`;

export default HomeLinkSection;
