import styled from "styled-components";
import palette from "../../lib/styles/palette";
import iconimg from "../../static/imgs/chocomusic/iconimg.png";

export type ChocomusicIntroTextSection3Prop = {
    active: boolean;
};

function ChocomusicIntroTextSection3(props: ChocomusicIntroTextSection3Prop) {
    const { active } = props;
    return (
        <Block>
            <div>
                <Top>
                    <Text>지금도 초코뮤직은 수많은 아티스트, 다양한 공간과 함께<br></br>이전에 없던 예술 문화를 창조하고 있습니다.</Text>
                </Top>
                <Icon></Icon>
                <Bottom>

                </Bottom>
            </div>
        </Block>
    );
}

const Block = styled.div`
    position:relative;
    height: 100%;
    background-color: ${palette.purple5};
`;

const Top = styled.div`
    display:flex;
    position: absolute;
    top:0px;
    width: 100%;
    height: 50%;
    text-align:center;
`
const Text = styled.div`
    color: ${palette.black0};
    margin:auto;
`
const Icon = styled.div`
    background-image: url(${iconimg});
`
const Bottom = styled.div`
    display:flex;
    position: absolute;
    bottom:0px;
    width: 100%;
    height: 50%;
    text-align:center;
    backgroud : liner-gradient
`
export default ChocomusicIntroTextSection3;
