import styled from "styled-components";
import { fadeInFromBottom } from "../../../lib/styles/animations";
import fonts from "../../../lib/styles/fonts";
import media from "../../../lib/styles/media";
import palette from "../../../lib/styles/palette";

export const SectionHead = styled.p`
    ${fonts.size.scale26}
    font-weight: ${fonts.weight.bold};
    color: ${palette.purple0};
    margin-top: 12px;

    ${media.mobile} {
        margin-top: 8px;
    }
`;

export const SectionSubHead = styled.h2`
    ${fonts.size.scale18}
`;

export const SectionHeaderContainer = styled.div<{ animated: boolean }>`
    animation-play-state: ${(props) => (props.animated ? "running" : "paused")};
    animation-name: ${fadeInFromBottom};
    animation-duration: 0.3s;
    animation-fill-mode: forwards;
    animation-timing-function: ease-out;
`;
