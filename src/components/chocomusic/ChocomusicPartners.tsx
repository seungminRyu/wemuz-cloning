import styled from "styled-components";
import palette from "../../lib/styles/palette";

export type ChocomusicPartnersProps = {
    active: boolean;
};

function ChocomusicPartners(props: ChocomusicPartnersProps) {
    const { active } = props;

    return (
        <Block>
            <></>
        </Block>
    );
}

const Block = styled.div`
    height: 100%;
    background-color: ${palette.blue2};
`;

export default ChocomusicPartners;
