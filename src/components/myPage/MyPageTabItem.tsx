import React, { ReactElement } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import media from "../../lib/styles/media";
import palette from "../../lib/styles/palette";

export type MyPageTabItemProp = {
    link: string;
    children: ReactElement;
    active: boolean;
    onClick?: Function;
};

function MyPageTabItem(props: MyPageTabItemProp) {
    const { link, children, active, onClick } = props;
    return (
        <Link to={link}>
            <MyPageTabItemBlock
                active={active}
                onClick={(e: React.MouseEvent) => {
                    if (onClick) {
                        onClick(e);
                    }
                }}
            >
                {children}
            </MyPageTabItemBlock>
        </Link>
    );
}

const MyPageTabItemBlock = styled.li<{ active: boolean }>`
    position: relative;
    display: block;
    width: 120px;
    height: 52px;
    text-align: center;
    font-size: 18px;
    color: ${(props) => (props.active ? palette.purple0 : palette.gray1)};
    background-color: ${(props) =>
        props.active ? palette.white0 : palette.gray4};
    border: 1px solid
        ${(props) => (props.active ? palette.purple0 : palette.gray4)};
    border-bottom: none;
    border-radius: 18px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    padding-top: 18px;
    transition: background-color 0.2s;

    &::before {
        position: absolute;
        bottom: 0;
        left: ${(props) => (props.active ? "0px" : "-1px")};
        content: "";
        display: inline-block;
        width: ${(props) => (props.active ? "100%" : "calc(100% + 2px)")};
        height: 1px;
        background-color: ${(props) =>
            props.active ? palette.white0 : palette.purple0};
    }

    ${media.mobile} {
        width: 78px;
        height: 40px;
        font-size: 14px;
        border-radius: 14px;
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
        padding-top: 14px;
    }
`;

export default MyPageTabItem;
