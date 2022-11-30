import styled from "styled-components";
import palette from "../../lib/styles/palette";

export type ChocomusicJobsProp = {
    active: boolean;
};

function ChocomusicJobs(props: ChocomusicJobsProp) {
    const { active } = props;
    return (
        <Block>
            <></>
        </Block>
    );
}

const Block = styled.div`
    height: 100%;
    background-color: ${palette.red1};
`;

export default ChocomusicJobs;
