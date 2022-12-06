import styled from "styled-components";
import fonts from "../../../lib/styles/fonts";
import palette from "../../../lib/styles/palette";

import { ReactComponent as RightArrowIco } from "../../../static/icons/global/ico_right_arrow.svg";
import { ReactComponent as ProjectLogo } from "../../../static/imgs/global/logo_project.svg";

export type GnbProjectLinkProp = {
    className?: string;
};

function GnbProjectLink(props: GnbProjectLinkProp) {
    const { className } = props;

    return (
        <GnbProjectLinkBlock
            className={className}
            href="https://wemuz.me/programs/"
        >
            <ProjectLogo />
            <span>
                위뮤즈 프로젝트
                <StyledLinkIco />
            </span>
        </GnbProjectLinkBlock>
    );
}

const GnbProjectLinkBlock = styled.a`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 204px;
    height: 44px;
    border-radius: 4px;
    background-color: ${palette.black1};
    padding: 0 3px 0 8px;
    margin: 12px auto 0;

    &,
    &: link,
    &:visited {
        color: ${palette.white0};
    }

    span {
        display: inline-flex;
        align-items: center;
        font-size: 14px;
        font-weight: ${fonts.weight.bold};
    }
`;

const StyledLinkIco = styled(RightArrowIco)`
    display: inline-block;
    width: 18px;
    height: 18px;

    .ico-right-arrow-path {
        stroke: ${palette.white0};
    }
`;

export default GnbProjectLink;
