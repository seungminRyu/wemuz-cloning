import React from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import styled from "styled-components";
import fonts from "../../lib/styles/fonts";
import media from "../../lib/styles/media";
import palette from "../../lib/styles/palette";

import { ReactComponent as LinkIco } from "../../static/icons/global/ico_right_arrow_2.svg";

export type MainActivityTabItemProp = {
    tabName: string;
    link: string;
    count: number;
};

function MainActivityTabItem(props: MainActivityTabItemProp) {
    const { tabName, link, count } = props;

    return (
        <MainActivityTabItemBlock>
            <StyledLink
                to={link}
                onClick={(e: any) => {
                    // 프로젝트 탭 만들때 까지만 사용
                    if (tabName === "프로젝트") {
                        e.preventDefault();
                        toast("현재 서비스를 준비 중입니다.");
                    }
                }}
            >
                {tabName}
                <StyledLinkIco />
            </StyledLink>
            <Count>{count}</Count>
        </MainActivityTabItemBlock>
    );
}

const StyledLink = styled(Link)`
    position: relative;
    display: inline-block;
    font-size: 16px;
    transition: color 0.2s;

    &,
    &:link,
    &:visited {
        color: ${palette.gray0};
    }

    ${media.mobile} {
        font-size: 13px;
    }
`;

const StyledLinkIco = styled(LinkIco)`
    position: absolute;
    right: -18px;
    top: -1px;
    transition: stroke 0.2s;

    ${media.mobile} {
        right: -14px;
        width: 14px;
        height: 14px;
    }
`;

const Count = styled.p`
    font-size: 32px;
    font-weight: ${fonts.weight.bold};
    text-align: center;
    margin-top: 14px;
    transition: color 0.2s;

    ${media.mobile} {
        font-size: 22px;
        margin-top: 8px;
    }
`;

const MainActivityTabItemBlock = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 32px 0 26px;

    & + & {
        border-left: 1px solid ${palette.gray3};
    }

    &:hover {
        ${StyledLink} {
            &,
            &:link,
            &:visited {
                color: ${palette.purple0};
            }
        }

        ${StyledLinkIco} {
            path {
                stroke: ${palette.purple0};
            }
        }

        ${Count} {
            color: ${palette.purple0};
        }
    }

    ${media.mobile} {
        padding: 20px 0 15px;
    }
`;

export default MainActivityTabItem;
