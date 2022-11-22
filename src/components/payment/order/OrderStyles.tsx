import styled from "styled-components";
import fonts from "../../../lib/styles/fonts";
import media from "../../../lib/styles/media";

export const OrderSectionHeader = styled.h2`
    font-size: 22px;
    font-weight: ${fonts.weight.bold};

    ${media.mobile} {
        font-size: 16px;
        padding-left: 20px;
    }
`;

export const OrderDeliveryLabel = styled.label`
    font-size: 18px;
    font-weight: ${fonts.weight.bold};
    margin-top: 15px;

    ${media.mobile} {
        font-size: 14px;
        margin-top: 0;
        margin-bottom: 8px;
    }
`;
