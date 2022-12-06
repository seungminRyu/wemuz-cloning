import styled from "styled-components";
import fonts from "../../lib/styles/fonts";
import media from "../../lib/styles/media";
import palette from "../../lib/styles/palette";
import { UnderLineBtn } from "../../styles/Buttons";

import { ReactComponent as CloseIco } from "../../static/icons/global/ico_close_2.svg";

export const SettingContainer = styled.div`
    max-width: 360px;
    padding: 100px 20px 200px;
    margin: 0 auto;

    h1 {
        font-size: 22px;
        font-weight: ${fonts.weight.bold};
    }

    ${media.mobile} {
        padding: 40px 20px 120px;
    }
`;

export const SettingHeading = styled.h1`
    font-size: 22px;
    font-weigth: ${fonts.weight.bold};
`;

export const SettingLabel = styled.p`
    font-size: 14px;
    font-weight: ${fonts.weight.bold};
`;

export const SettingLabelContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const SettingContent = styled.p`
    font-size: 14px;
    color: ${palette.gray0};
    margin-top: 8px;
`;

export const SettingHorizentalBar = styled.p`
    width: 100%;
    height: 1px;
    background-color: ${palette.gray4};
    margin: 16px 0;
`;

export const SettingEditBtn = styled(UnderLineBtn)`
    font-size: 13px;
`;

export const SettingModalHeading = styled.h2`
    font-size: 18px;
    font-weight: ${fonts.weight.bold};
    color: ${palette.purple0};
    margin-top: 16px;
`;

export const SettingModalDescription = styled.p`
    font-size: 14px;
    line-height: 22px;
    color: ${palette.gray0};
    margin-top: 10px;
`;

export const SettingModalCloseBtn = styled.button`
    display: block;
    margin-left: auto;
`;

export const SettingModalCloseIco = CloseIco;

export const SettingEmptyInfo = styled.p`
    font-size: 14px;
    color: ${palette.gray1};
    margin-top: 8px;
`;
