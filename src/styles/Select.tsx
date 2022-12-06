import { css } from "styled-components";
import fonts from "../lib/styles/fonts";
import media from "../lib/styles/media";
import palette from "../lib/styles/palette";

export const selectTriggerStyle = css`
    ${fonts.size.scale18}
    border: 1px solid ${palette.gray2};
    border-radius: 4px;
    cursor: pointer;
    padding: 15px 16px 13px;

    ${media.mobile} {
        padding: 11px 10px;
    }
`;

export const selectMenuStyle = css`
    background-color: ${palette.white0};
    border: 1px solid ${palette.black0};
    border-radius: 4px;
    box-shadow: 0 4px 4px ${palette.shadow0};
    padding: 3px 0;
`;

export const selectItemStyle = css`
    ${fonts.size.scale16}
    width: 100%;
    cursor: pointer;
    transition: background-color 0.2s;
    padding: 9px 15px;

    &:hover {
        background-color: ${palette.gray4};
    }

    ${media.mobile} {
        padding: 9px;
    }
`;
