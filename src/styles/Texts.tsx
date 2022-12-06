import styled from "styled-components";
import media from "../lib/styles/media";
import palette from "../lib/styles/palette";

export const UnderLine = styled.span`
    position: relative;
    z-index: 0;

    &::before {
        position: absolute;
        bottom: 0;
        left: 0;
        content: "";
        display: inline-block;
        width: 100%;
        height: 4px;
        border-radius: 4px;
        background-color: ${palette.purple5};
        z-index: -1;
    }

    ${media.mobile} {
        &::before {
            top: 0;
            width: 100%;
            height: 100%;
            border-radius: 0;
        }
    }
`;
