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
                        <Line>
                            <ImgBox src={img01}></ImgBox>
                            <ImgBox src={img02}></ImgBox>
                            <Spuare src={img03}></Spuare>
                            <ImgBox src={img04}></ImgBox>
                            <ImgBox src={img05}></ImgBox>
                            <ImgBox src={img06}></ImgBox>
                            <ImgBox src={img07}></ImgBox>
                            <Spuare src={img08}></Spuare>
                            <ImgBox src={img09}></ImgBox>
                            <Spuare src={img10}></Spuare>
                            <ImgBox src={img11}></ImgBox>
                            <ImgBox src={img12}></ImgBox>
                            <ImgBox src={img13}></ImgBox>
                            <ImgBox src={img14}></ImgBox>
                            <Spuare src={img15}></Spuare>
                            <Spuare src={img16}></Spuare>
                            <ImgBox src={img17}></ImgBox>
                            <ImgBox src={img18}></ImgBox>
                            <Spuare src={img19}></Spuare>
                            <ImgBox src={img20}></ImgBox>
                            <Spuare src={img21}></Spuare>
                            <ImgBox src={img22}></ImgBox>
                            <ImgBox src={img23}></ImgBox>
                            <Spuare src={img24}></Spuare>
                            <ImgBox src={img25}></ImgBox>
                        </Line>
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
    justify-content: center;
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
    position : relative;
`
const ImgBox = styled.img`
    width: 160px;
    height: 120px;
    background-size:cover;
    background-repeat : no-repeat;
    margin-right : 40px;
    ${media.mobile}{
        width: 120px;
        height: 90px;
        background-size:cover;
        background-repeat : no-repeat;
    };
`
const Spuare = styled.img`
    width: 120px;
    height: 120px;
    background-size:cover;
    background-repeat : no-repeat;
    margin-right : 40px;
${media.mobile}{
    width: 90px;
    height: 90px;
    background-size:cover;
    background-repeat : no-repeat;
};
`

const Line = styled.div`
    position : absolute;
    transform: translate(-50%, 18%);
    width: 2500px;
    line-height : 60px;
    ${media.mobile}{
        position : absolute;
        transform: translate(-50%, 7%);
        width: 1600px;
        line-height : 60px;
    }
`
export default ChocomusicIntroTextSection3;