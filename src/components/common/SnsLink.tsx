import { Link } from "react-router-dom";
import styled from "styled-components";
import media from "../../lib/styles/media";
import palette from "../../lib/styles/palette";

const SnsLink = styled(Link)`
    display: inline-grid;
    place-content: center;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background-color: ${palette.gray1};
    transition: 0.2s background-color;

    &:hover {
        background-color: ${palette.purple0};
    }

    ${media.mobile} {
        width: 28px;
        height: 28px;
    }
`;

export default SnsLink;
