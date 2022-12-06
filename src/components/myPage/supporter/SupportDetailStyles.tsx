import styled from "styled-components";
import fonts from "../../../lib/styles/fonts";
import media from "../../../lib/styles/media";
import palette from "../../../lib/styles/palette";

export const SupportDetailInfoRow = styled.div`
    display: grid;
    grid-template-columns: 106px 1fr;
    width: 100%;

    & + & {
        margin-top: 26px;
    }

    ${media.mobile} {
        grid-template-columns: 1fr;
        row-gap: 6px;

        & + & {
            margin-top: 20px;
        }
    }
`;

export const SupportDetailLabel = styled.p`
    ${fonts.size.scale18}
    ${fonts.lineHeight.scale18}
    font-weight: ${fonts.weight.bold};
`;

export const SupportDetailContent = styled.p`
    ${fonts.size.scale18}
    ${fonts.lineHeight.scale18}
    color: ${palette.gray0};
`;

export const SupportDetailInfoContainer = styled.div`
    width: 100%;
    border: 1px solid ${palette.gray3};
    border-radius: 4px;
    padding: 36px 32px;
    margin-top: 28px;

    ${media.mobile} {
        border-left: none;
        border-right: none;
        border-radius: 0;
        padding: 24px 20px;
        margin-top: 16px;
    }
`;
