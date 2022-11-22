import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import palette from "../../../lib/styles/palette";
import media from "../../../lib/styles/media";

export type ResultLinkContainerProp = {};

function ResultLinkContainer(props: ResultLinkContainerProp) {
    return (
        <ResultLinkContainerBlock>
            <StyledLink className="my-page-link" to="/my-page/supporter/home">
                마이페이지
            </StyledLink>
            <StyledLink className="home-link" to="/">
                위뮤즈 홈
            </StyledLink>
        </ResultLinkContainerBlock>
    );
}

const ResultLinkContainerBlock = styled.div`
    display: grid;
    grid-template-areas: ". my-page . home .";
    grid-template-columns: 1fr auto 40px auto 1fr;
    width: 100%;
    margin-top: 80px;
    margin: 80px auto 0;

    ${media.mobile} {
        grid-template-columns: 1fr auto 16px auto 1fr;
        margin: 36px auto 0;
    }
`;

const StyledLink = styled(Link)`
    display: grid;
    place-content: center;
    width: 186px;
    height: 52px;
    font-size: 18px;
    border-radius: 4px;
    background-color: ${palette.purple0};
    transition: background-color 0.2s;
    margin: 0 auto;

    &,
    &:link,
    &:visited {
        color: ${palette.white0};
    }

    &.my-page-link {
        grid-area: my-page;
    }

    &.home-link {
        grid-area: home;
    }

    &:hover {
        background-color: ${palette.purple3};
    }

    ${media.mobile} {
        width: 128px;
        height: 40px;
        font-size: 14px;
    }
`;

export default ResultLinkContainer;
