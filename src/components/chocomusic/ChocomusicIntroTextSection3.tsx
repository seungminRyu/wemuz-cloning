import styled from "styled-components";
import palette from "../../lib/styles/palette";

export type ChocomusicIntroTextSection3Prop = {
    active: boolean;
};

function ChocomusicIntroTextSection3(props: ChocomusicIntroTextSection3Prop) {
    const { active } = props;
    return (
        <Block>
            <></>
        </Block>
    );
}

const Block = styled.div`
    height: 100%;
    background-color: ${palette.purple5};
`;

export default ChocomusicIntroTextSection3;
