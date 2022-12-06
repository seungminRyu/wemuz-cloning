import styled, { css } from "styled-components";
import PageTemplate from "../global/PageTemplate";
import fonts from "../../lib/styles/fonts";
import standards from "../../lib/styles/standards";
import media from "../../lib/styles/media";

export const myPageGnbStyle = css`
    & {
        position: absolute;
        background-color: transparent;
        box-shadow: none;
        border-bottom: none;
    }
`;

export const StyledPageTemplate = styled(PageTemplate)`
    margin-top: 0;
`;

export const MyPageHeading1 = styled.h2`
    ${fonts.size.scale32}
    font-weight: ${fonts.weight.bold};
`;

export const MyPageHeading2 = styled.h2`
    ${fonts.size.scale22}
    font-weight: ${fonts.weight.bold};
`;

export const MyPageMainContainer = styled.main`
    max-width: 1080px;
    padding: 70px ${standards.padding.lg} 200px;
    margin: 0 auto;

    ${media.mobile} {
        padding: 40px ${standards.padding.sm} 120px;
        margin: 0 auto;
    }
`;
