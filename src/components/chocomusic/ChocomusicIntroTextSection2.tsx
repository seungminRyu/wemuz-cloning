import styled from "styled-components";
import palette from "../../lib/styles/palette";

export type ChocomusicIntroTextSection2Prop = {
    active: boolean;
};

function ChocomusicIntroTextSection2(props: ChocomusicIntroTextSection2Prop) {
    const { active } = props;

    return (
        <Block active={active}>
            <></>
        </Block>
    );
}

const Block = styled.section<{ active: boolean }>`
    height: 100%;
    background-color: ${({ active }) => (active ? palette.red0 : palette.red1)};
    transition: background-color 0.2s;
`;

export default ChocomusicIntroTextSection2;
