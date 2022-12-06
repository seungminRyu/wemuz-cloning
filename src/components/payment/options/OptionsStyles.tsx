import styled from "styled-components";
import fonts from "../../../lib/styles/fonts";
import media from "../../../lib/styles/media";

export const OptionsHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    font-size: 16px;
    font-weight: ${fonts.weight.bold};

    ${media.mobile} {
        font-size: 13px;
    }
`;
