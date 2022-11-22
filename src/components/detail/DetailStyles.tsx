import styled from "styled-components";
import fonts from "../../lib/styles/fonts";
import media from "../../lib/styles/media";

import hashIco from "../../static/icons/detail/ico_hash.svg";

export const DetailSectionTitle = styled.h4`
    display: inline-flex;
    align-items: center;
    font-size: 22px;
    font-weight: ${fonts.weight.bold};
    background-image: url(${hashIco});
    background-repeat: no-repeat;
    background-size: 25px;
    background-position: 4px center;
    padding: 2px 0 2px 35px;

    ${media.mobile} {
        font-size: 16px;
        background-size: 18px;
        background-position: 0 center;
        padding: 2px 0 2px 22px;
    }
`;
