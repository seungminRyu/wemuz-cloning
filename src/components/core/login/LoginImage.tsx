import React from "react";
import styled from "styled-components";
import media from "../../../lib/styles/media";
import LoginHeading from "./LoginHeading";

import loginImg from "../../../static/imgs/login/login_img.png";

export type LoginImageProp = {};

function LoginImage(props: LoginImageProp) {
    return (
        <LoginImageBlock>
            <LoginHeading />
        </LoginImageBlock>
    );
}

const LoginImageBlock = styled.div`
    grid-area: image;
    width: 100%;
    background-image: url(${loginImg});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;

    h2 {
        display: none;
    }

    ${media.tablet} {
        height: 688px;
        padding: 100px 0 0 68px;

        h2 {
            display: inline;
        }
    }

    ${media.mobile} {
        height: 328px;
        padding: 52px 0 0 28px;
    }
`;

export default LoginImage;
