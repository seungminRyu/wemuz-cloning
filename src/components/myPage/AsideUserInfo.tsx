import styled from "styled-components";
import media from "../../lib/styles/media";
import palette from "../../lib/styles/palette";

const AsideUserInfo = styled.ul`
    border-top: 1px solid ${palette.gray4};
    padding-top: 24px;

    ${media.tablet} {
        display: grid;
        border-top: 1px solid ${palette.gray3};
    }

    ${media.mobile} {
        padding-top: 20px;
    }
`;

export default AsideUserInfo;
