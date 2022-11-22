import styled from "styled-components";
import media from "../../lib/styles/media";

import { ReactComponent as ChocomusicLogo } from "../../static/imgs/global/img_chocomusic_logo.svg";

export type ChocomusicNavProp = {};

function ChocomusicNav(props: ChocomusicNavProp) {
    return (
        <Block>
            <Inner>
                <StyledChocomusicLogo />
            </Inner>
        </Block>
    );
}

const Block = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    width: 100%;
    height: 78px;

    ${media.mobile} {
        height: 60px;
    }
`;

const Inner = styled.div`
    max-width: 1440px;
    width: 100%;
    padding: 0 40px;
    margin: 0 auto;

    ${media.mobile} {
        padding: 0 10px;
    }
`;

const StyledChocomusicLogo = styled(ChocomusicLogo)`
    ${media.mobile} {
        width: 142px;
        height: 32px;
    }
`;

export default ChocomusicNav;
