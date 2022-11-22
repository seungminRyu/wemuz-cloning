import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import useToggle from "../../lib/hooks/useToggle";
import media from "../../lib/styles/media";
import palette from "../../lib/styles/palette";
import { observeScroll } from "../../lib/utils";

import { ReactComponent as BackIco } from "../../static/icons/global/ico_left_arrow.svg";

export type TopHeaderBarProp = {};

function TopHeaderBar(props: TopHeaderBarProp) {
    const [visible, _, setVisible] = useToggle(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (observeScroll(0, 80)) {
                setVisible(false);
            } else {
                setVisible(true);
            }
        });
    }, []);

    return (
        <TopHeaderBarBlock visible={visible}>
            <BackLink to="/">
                <StyledBackIco />
            </BackLink>
            <span>마이페이지</span>
        </TopHeaderBarBlock>
    );
}

const TopHeaderBarBlock = styled.div<{ visible: boolean }>`
    display: none;

    ${media.tablet} {
        ${(props) =>
            props.visible
                ? css`
                      transition: transform 0.3s, visibility 0s;
                      visibility: visible;
                      transform: translateY(0);
                  `
                : css`
                      transition: transform 0.3s, visibility 0.3s;
                      visibility: hidden;
                      transform: translateY(-59px);
                  `}
        display: grid;
        grid-template-columns: 28px 1fr 28px;
        width: 100%;
        background-color: ${palette.white0};
        border-bottom: 1px solid ${palette.gray5};
        padding: 15px 40px;

        span {
            display: grid;
            place-content: center;
            font-size: 18px;
        }
    }

    ${media.mobile} {
        grid-template-columns: 20px 1fr 20px;
        padding: 11px 16px;

        span {
            font-size: 14px;
        }
    }
`;

const BackLink = styled(Link)`
    display: inline-grid;
    place-content: center;
    width: 28px;
    height: 28px;

    ${media.mobile} {
        width: 20px;
        height: 20px;
    }
`;

const StyledBackIco = styled(BackIco)`
    transform: scale(1.4);

    path {
        stroke: ${palette.gray0};
    }

    ${media.mobile} {
        transform: scale(1);
    }
`;

export default TopHeaderBar;
