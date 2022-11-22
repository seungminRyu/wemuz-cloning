import styled from "styled-components";
import palette from "../../lib/styles/palette";

export type ChocomusicIntroTextSection1Prop = {
    active: boolean;
};

function ChocomusicIntroTextSection1(props: ChocomusicIntroTextSection1Prop) {
    const { active } = props;

    return (
        <Block active={active}>
            <></>
        </Block>
    );
}

const Block = styled.section<{ active: boolean }>`
    height: 100%;
    background-color: ${({ active }) =>
        active ? palette.purple3 : palette.purple5};
    transition: background-color 0.2s;
`;

export default ChocomusicIntroTextSection1;
