import styled from "styled-components";
import fonts from "../../../lib/styles/fonts";
import media from "../../../lib/styles/media";
import palette from "../../../lib/styles/palette";

export type LoginHeadingProp = {};

function LoginHeading(props: LoginHeadingProp) {
    return (
        <LoginHeadingBlock>
            간편하게 로그인하고
            <p>
                세상에 하나뿐인
                <br />
                특별한 공연을 발견해 보세요.
            </p>
        </LoginHeadingBlock>
    );
}

const LoginHeadingBlock = styled.h2`
    ${fonts.size.scale28}

    p {
        ${fonts.size.scale32}
        ${fonts.lineHeight.scale32}
        font-weight: ${fonts.weight.bold};
        margin-top: 12px;
    }

    ${media.tablet} {
        color: ${palette.white0};
    }

    ${media.mobile} {
        p {
            margin-top: 6px;
        }
    }
`;

export default LoginHeading;
