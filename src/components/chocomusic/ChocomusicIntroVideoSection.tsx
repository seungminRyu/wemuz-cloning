import styled from "styled-components";
import palette from "../../lib/styles/palette";

export type ChocomusicIntroVideoSectionProp = {};

function ChocomusicIntroVideoSection(props: ChocomusicIntroVideoSectionProp) {
    return <Block></Block>;
}

const Block = styled.section`
    height: 100%;
    background-color: ${palette.black0};
`;

export default ChocomusicIntroVideoSection;
