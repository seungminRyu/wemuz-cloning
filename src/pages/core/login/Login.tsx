import React from "react";
import styled from "styled-components";
import media from "../../../lib/styles/media";
import LoginImage from "../../../components/core/login/LoginImage";
import LoginMain from "../../../components/core/login/LoginMain";
import PageTemplate from "../../../components/global/PageTemplate";

export type LoginProp = {};

function Login(props: LoginProp) {
    return (
        <PageTemplate>
            <LoginBlock>
                <LoginMain />
                <LoginImage />
            </LoginBlock>
        </PageTemplate>
    );
}

const LoginBlock = styled.div`
    display: grid;
    grid-template-areas: "main image";
    grid-template-columns: 1fr 1fr;
    width: 100%;

    ${media.tablet} {
        height: auto;
        grid-template-columns: 1fr;
        grid-template-areas: "image" "main";

        h2 {
            display: none;
        }
    }
`;

export default Login;
