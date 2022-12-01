import styled from "styled-components";
import media from "../../lib/styles/media";
import palette from "../../lib/styles/palette";

export type ChocomusicPartnersProp = {
    active: boolean;
};

function ChocomusicPartners(props: ChocomusicPartnersProp) {
    const { active } = props;

    return (
        <Block active={active}>
            <div>
                <IntroText active={active}>
                    <Title active={active}>파트너 및 MOU</Title>
                    <Text active={active}>초코뮤직은 많은 파트너사들과 함께 문화를 바꾸고 있습니다.</Text>
                </IntroText>
            </div>
        </Block>
    );
}

const Block = styled.div<{ active: boolean }>`
    height: 100%;
    background-color: ${palette.blue2};
`;

const IntroText = styled.div<{ active: boolean }>`
    text-align: center;
    height: 40vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: ${({ active }) => (active ? `150px` : ``)};

    ${media.mobile} {
        padding-top: ${({ active }) => (active ? `100px` : ``)};
    }
`;

const Title = styled.div<{ active: boolean }>`
font-weight: bolder;
font-size: 25px;
color: ${({ active }) => (active ? palette.white0 : palette.black0)};
`;

const Text = styled.div<{ active: boolean }>`
`;

export default ChocomusicPartners;
