import { ReactNode } from "react";
import styled from "styled-components";
import media from "../../lib/styles/media";
import palette from "../../lib/styles/palette";

import { ReactComponent as LinkIco } from "../../static/icons/global/ico_right_arrow.svg";

export type MainCommonTabItemProp = {
    link: string;
    children: ReactNode;
};

function MainCommonTabItem(props: MainCommonTabItemProp) {
    const { link, children } = props;

    return (
        <MainCommonTabItemLink href={link}>
            <MainCommonTabItemBlock>
                {children}
                <StyledLinkIco />
            </MainCommonTabItemBlock>
        </MainCommonTabItemLink>
    );
}

const MainCommonTabItemLink = styled.a`
    font-size: 16px;

    &,
    &:link,
    &:visited {
        color: ${palette.black0};
    }

    ${media.mobile} {
        font-size: 14px;
    }
`;

const MainCommonTabItemBlock = styled.li`
    display: flex;
    align-items: center;
    border-radius: 4px;
    border: 1px solid ${palette.gray3};
    background-color: ${palette.white0};
    transition: border 0.2s;
    padding: 18px 16px;

    &:hover {
        border: 1px solid ${palette.gray1};
    }

    ${media.mobile} {
        padding: 13px 12px;
    }
`;

const StyledLinkIco = styled(LinkIco)`
    display: inline-block;
    width: 24px;
    height: 24px;
    margin-left: auto;

    path {
        fill: none;
    }

    .ico-right-arrow-path {
        stroke: ${palette.black0};
    }

    ${media.mobile} {
        width: 20px;
        height: 20px;
    }
`;

export default MainCommonTabItem;
