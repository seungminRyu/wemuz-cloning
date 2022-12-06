import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import fonts from "../../../lib/styles/fonts";
import media from "../../../lib/styles/media";
import palette from "../../../lib/styles/palette";

export type LoginPolicyLinkGroupProp = {};

function LoginPolicyLinkGroup(props: LoginPolicyLinkGroupProp) {
    return (
        <LoginPolicyLinkGroupBlock>
            <PolicyLink to="/">서비스 소개</PolicyLink>
            <PolicyLink to="/">이용약관</PolicyLink>
            <PolicyLink to="/">개인정보취급방침</PolicyLink>
        </LoginPolicyLinkGroupBlock>
    );
}

const LoginPolicyLinkGroupBlock = styled.div`
    margin-top: 254px;

    ${media.tablet} {
        text-align: center;
        margin-top: 66px;
    }

    ${media.mobile} {
        margin-top: 59px;
    }
`;

const PolicyLink = styled(Link)`
    ${fonts.size.scale14}
    padding: 0 10px;

    &,
    &:link,
    &:visited {
        color: ${palette.gray1};
    }

    & + & {
        border-left: 1px solid ${palette.gray1};
    }
`;

export default LoginPolicyLinkGroup;
