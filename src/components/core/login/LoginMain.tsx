import React from "react";
import styled from "styled-components";
import media from "../../../lib/styles/media";
import LoginHeading from "./LoginHeading";
import LoginPolicyLinkGroup from "./LoginPolicyLinkGroup";
import LoginSnsBtnGroup from "./LoginSnsBtnGroup";

export type LoginMainProp = {};

function LoginMain(props: LoginMainProp) {
    return (
        <LoginMainBlock>
            <LoginHeading />
            <LoginSnsBtnGroup />
            <LoginPolicyLinkGroup />
        </LoginMainBlock>
    );
}

const LoginMainBlock = styled.div`
    grid-area: main;
    max-width: 680px;
    width: 100%;
    margin-left: auto;
    padding: 220px 0 120px 80px;

    ${media.tablet} {
        display: flex;
        flex-direction: column;
        align-items: center;
        max-width: none;
        padding: 64px 0 40px;
        margin: 0;
    }

    ${media.mobile} {
        padding: 48px 0 28px;
    }
`;
export default LoginMain;
