import styled from "styled-components";
import media from "../../lib/styles/media";
import palette from "../../lib/styles/palette";
import iconimg from "../../static/imgs/chocomusic/iconimg.png";
import img01 from "../../static/imgs/chocomusic/img-01.png";
import img02 from "../../static/imgs/chocomusic/img-02.png";
import img03 from "../../static/imgs/chocomusic/img-03.png";
import img04 from "../../static/imgs/chocomusic/img-04.png";
import img05 from "../../static/imgs/chocomusic/img-05.png";
import img06 from "../../static/imgs/chocomusic/img-06.png";
import img07 from "../../static/imgs/chocomusic/img-07.png";
import img08 from "../../static/imgs/chocomusic/img-08.png";
import img09 from "../../static/imgs/chocomusic/img-09.png";
import img10 from "../../static/imgs/chocomusic/img-10.png";
import img11 from "../../static/imgs/chocomusic/img-11.png";
import img12 from "../../static/imgs/chocomusic/img-12.png";
import img13 from "../../static/imgs/chocomusic/img-13.png";
import img14 from "../../static/imgs/chocomusic/img-14.png";
import img15 from "../../static/imgs/chocomusic/img-15.png";
import img16 from "../../static/imgs/chocomusic/img-16.png";
import img17 from "../../static/imgs/chocomusic/img-17.png";
import img18 from "../../static/imgs/chocomusic/img-18.png";
import img19 from "../../static/imgs/chocomusic/img-19.png";
import img20 from "../../static/imgs/chocomusic/img-20.png";
import img21 from "../../static/imgs/chocomusic/img-21.png";
import img22 from "../../static/imgs/chocomusic/img-22.png";
import img23 from "../../static/imgs/chocomusic/img-23.png";
import img24 from "../../static/imgs/chocomusic/img-24.png";
import img25 from "../../static/imgs/chocomusic/img-25.png";

export type ChocomusicIntroTextSection3Prop = {
    active: boolean;
};

function ChocomusicIntroTextSection3(props: ChocomusicIntroTextSection3Prop) {
    const { active } = props;
    return (
        <Block>
            <div>
                <Top>
                    <Item>
                    <Icon></Icon>
                    <Text>지금도 초코뮤직은<Mob></Mob> 수많은 아티스트, 다양한 공간과 함께<Mob></Mob><Enter></Enter><Point>이전에 없던 예술 문화</Point>를<Mob></Mob> 창조하고 있습니다.</Text>
                    </Item>
                </Top>
                <Bottom>
                    <Img>
                        <Line1>
                            <ImgBox imgURL={img01}></ImgBox>
                            <ImgBox imgURL={img02}></ImgBox>
                            <ImgBox imgURL={img03}></ImgBox>
                            <ImgBox imgURL={img04}></ImgBox>
                            <ImgBox imgURL={img05}></ImgBox>
                            <ImgBox imgURL={img06}></ImgBox>
                            <ImgBox imgURL={img07}></ImgBox>
                            <ImgBox imgURL={img08}></ImgBox>
                            <ImgBox imgURL={img09}></ImgBox>
                            <ImgBox imgURL={img10}></ImgBox>
                            <ImgBox imgURL={img11}></ImgBox>
                            <ImgBox imgURL={img12}></ImgBox>
                        </Line1>
                        <Line2>
                            <ImgBox imgURL={img13}></ImgBox>
                            <ImgBox imgURL={img14}></ImgBox>
                            <ImgBox imgURL={img15}></ImgBox>
                            <ImgBox imgURL={img16}></ImgBox>
                            <ImgBox imgURL={img17}></ImgBox>
                            <ImgBox imgURL={img18}></ImgBox>
                            <ImgBox imgURL={img19}></ImgBox>
                            <ImgBox imgURL={img20}></ImgBox>
                            <ImgBox imgURL={img21}></ImgBox>
                            <ImgBox imgURL={img22}></ImgBox>
                            <ImgBox imgURL={img23}></ImgBox>
                            <ImgBox imgURL={img24}></ImgBox>
                            <ImgBox imgURL={img25}></ImgBox>
                        </Line2>
                    </Img>
                </Bottom>
            </div>
        </Block>
    );
}

const Block = styled.div`
    position:relative;
    height: 100%;
    background-color: ${palette.white0};
    overflow-x : hidden;
`;

const Top = styled.div`
    display:flex;
    position: absolute;
    top:0px;
    width: 100%;
    height: 50%;
    text-align:center;
    justify-content: center;
    flex-direction: column;
`
const Text = styled.div`
    color: ${palette.black0};
    line-height: 35px;
    font-size: 25px;
    font-weight:bold;
    ${media.mobile}{
        white-space: normal;
        height: 3.6em;
        word-wrap: break-word;
        display: -webkit-box;
        -webkit-line-clamp: 4;
        -webkit-box-orient: vertical;
    };
`
const Icon = styled.div`
    width: 60px;
    height:60px;
    background-size: cover;
    margin:auto;
    margin-bottom: 30px;
    background-image: url(${iconimg});
`
const Bottom = styled.div`
    display:flex;
    position: absolute;
    bottom:0px;
    width: 100%;
    height: 50%;
    text-align:center;
    background: linear-gradient(#FFDDAD, #FFF5BA);
`
const Point = styled.span`
    color:#FF9600;
`
const Item = styled.div`
${media.mobile}{
    padding-bottom: 60px;
}
`
const Enter = styled.span`
    display:block;
`
const Mob = styled.span`
    ${media.mobile}{
        display:block;
    };
`
const Img = styled.div`
`
const ImgBox = styled.div<{imgURL: string}>`
    width: 150px;
    height: 100%;
    background-size: cover;
    background-repeat : no-repeat;
    margin-right : 40px;
    background-image: url(${props => props.imgURL});
`

const Line1 = styled.div`
    display: flex;
    height : 150px;
    width : 100%;
`
const Line2 = styled.div`
    display: flex;
    height : 150px;
    width : 100%;
    padding-top : 20px;
`
export default ChocomusicIntroTextSection3;
