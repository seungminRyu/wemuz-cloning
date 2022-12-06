import styled from "styled-components";
import media from "../../lib/styles/media";
import palette from "../../lib/styles/palette";
import standards from "../../lib/styles/standards";

const MyPageMainTemplate = styled.main`
    width: 100%;

    ${media.tablet} {
        background-color: ${palette.white2};
        padding: 74px ${standards.padding.lg} 200px;
    }

    ${media.mobile} {
        padding: 60px ${standards.padding.sm} 120px;
    }
`;

export default MyPageMainTemplate;
