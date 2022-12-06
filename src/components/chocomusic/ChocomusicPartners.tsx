import styled from "styled-components";
import media from "../../lib/styles/media";
import palette from "../../lib/styles/palette";
import mouImg1 from "../../static/imgs/chocomusic/mouImg1.png";
import mouImg2 from "../../static/imgs/chocomusic/mouImg2.png";
import mouImg3 from "../../static/imgs/chocomusic/mouImg3.png";
import mouImg4 from "../../static/imgs/chocomusic/mouImg4.png";
import mouImg5 from "../../static/imgs/chocomusic/mouImg5.png";
import mouImg6 from "../../static/imgs/chocomusic/mouImg6.png";
import mouImg7 from "../../static/imgs/chocomusic/mouImg7.png";
import mouImg8 from "../../static/imgs/chocomusic/mouImg8.png";
import mouImg9 from "../../static/imgs/chocomusic/mouImg9.png";
import mouImg10 from "../../static/imgs/chocomusic/mouImg10.png";
import bannerimg from "../../static/imgs/chocomusic/bannerimg.png";

export type ChocomusicPartnersProp = {
    active: boolean;
};

function ChocomusicPartners(props: ChocomusicPartnersProp) {
    const { active } = props;

    return (
        <Block active={active}>
            <div>
                <Wrapper>
                <IntroText>
                    <Title>파트너 및 MOU</Title>
                    <Text>초코뮤직은 많은 파트너사들과 함께 문화를 바꾸고 있습니다.</Text>
                    <Text2>초코뮤직은 많은 파트너사들과 함께 <br/>문화를 바꾸고 있습니다.</Text2>
                </IntroText>
                <Partner>
                    <Line>
                        <Img1></Img1>
                        <Img2></Img2>
                        <Img3></Img3>
                        <Img4></Img4>
                        <Img5></Img5>
                        <Img6></Img6>
                        <Img7></Img7>
                        <Img8></Img8>
                        <Img9></Img9>
                        <Img10></Img10>
                    </Line>
                </Partner>
                </Wrapper>
                <Footer>
                    <FooterText>
                        <Inquiry>문의하기 &gt;</Inquiry>
                        <SubText>초코뮤직이 꿈꾸는 새로운 예술 문화, 함께 만들어요!</SubText>
                    </FooterText>
                    <FooterImg></FooterImg>
                </Footer>
            </div> 
        </Block>
    );
}

const Block = styled.div<{ active: boolean }>`
    width: 100%;
    height: 100%;
    background-color: ${palette.white2};
    position:relative;
    overflow: hidden;
`;

const IntroText = styled.div`
    text-align: center;
    height: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 144px;
    ${media.mobile} {
        padding-top: 100px;
        margin-right : 10px;
        
    }
`;

const Title = styled.div`
    font-weight: 900;
    font-size: 33px;
    color: black;
    ${media.mobile}{
        font-weight: 900;
        font-size: 25px;
        line-height: 50px;
    }
`;

const Text = styled.div`
    font-weight: regular;
    font-size: 18px;
    line-height: 110px;
    ${media.mobile}{
        display:none;
        line-height: 20px;
    }
`;

const Text2 = styled.div`
    display: none;
    ${media.mobile}{
        display:flex;
        font-weight: regular;
        font-size: 15px;
        white-space:nowrap;
        line-height: 20px;
    }
`

const Partner = styled.div`
    text-align: center;
    padding-top: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    ${media.mobile}{
        display: flex;
        padding-top: 40px;
        align-items: center;
        padding-right: 40px;
    }
`;

const Line = styled.div`
    display:grid;
    grid-template-columns: 240px 240px 240px 240px 240px;
    column-gap : 40px;
    grid-template-rows : 100px 100px;
    row-gap : 30px;
    ${media.mobile}{
        display:grid;
        grid-template-columns: 144px 144px;
        column-gap : 16px;
        grid-template-rows : 60px 60px 60px 60px 60px;
        row-gap : 16px;
    }
`;

const Img1 = styled.div`
    width: 240px;
    height: 100px;
    margin: 20px;
    background-size: cover;
    background-image: url(${mouImg1});
    ${media.mobile}{
        width: 144px;
        height: 60px;
    }
`;

const Img2 = styled.div`
    width: 240px;
    height: 100px;
    margin: 20px;
    background-size: cover;
    background-image: url(${mouImg2});
    ${media.mobile}{
        width: 144px;
        height: 60px;
    }
`;

const Img3 = styled.div`
    width: 240px;
    height: 100px;
    margin: 20px;
    background-size: cover;
    background-image: url(${mouImg3});
    ${media.mobile}{
        width: 144px;
        height: 60px;
    }
`;

const Img4 = styled.div`
    width: 240px;
    height: 100px;
    margin: 20px;
    background-size: cover;
    background-image: url(${mouImg4});
    ${media.mobile}{
        width: 144px;
        height: 60px;
    }
`;

const Img5 = styled.div`
    width: 240px;
    height: 100px;
    margin: 20px;
    background-size: cover;
    background-image: url(${mouImg5});
    ${media.mobile}{
        width: 144px;
        height: 60px;
    }
`;

const Img6 = styled.div`
    width: 240px;
    height: 100px;
    margin: 20px;
    background-size: cover;
    background-image: url(${mouImg6});
    ${media.mobile}{
        width: 144px;
        height: 60px;
    }
`;

const Img7 = styled.div`
    width: 240px;
    height: 100px;
    margin: 20px;
    background-size: cover;
    background-image: url(${mouImg7});
    ${media.mobile}{
        width: 144px;
        height: 60px;
    }
`;

const Img8 = styled.div`
    width: 240px;
    height: 100px;
    margin: 20px;
    background-size: cover;
    background-image: url(${mouImg8});
    ${media.mobile}{
        width: 144px;
        height: 60px;
    }
`;

const Img9 = styled.div`
    width: 240px;
    height: 100px;
    margin: 20px;
    background-size: cover;
    background-image: url(${mouImg9});
    ${media.mobile}{
        width: 144px;
        height: 60px;
    }
`;

const Img10 = styled.div`
    width: 240px;
    height: 100px;
    margin: 20px;
    background-size: cover;
    background-image: url(${mouImg10});
    ${media.mobile}{
        width: 144px;
        height: 60px;
    }
`;

const Wrapper = styled.div`
    width: 100%;
    height: 550px;
    background-color: ${palette.white2};
`;

const Footer = styled.div`
    position:absolute;
    bottom : 0px;
    height: 150px;
    background-color: #FFF5BA;
    display: flex;
    flex-direction: row;
    ${media.mobile}{
        height: 116px;
        width: 100%;
    }
 `;

const FooterText = styled.div`
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    ${media.mobile}{
        position : absolute;
        margin-left: 0px;
        margin-right : 0px;
    }
`;

const Inquiry = styled.div`
    color: #FF9600;
    font-size: 22px;
    font-weight: bold;
    margin-left: 150px;
    line-height: 80px;
    ${media.mobile}{
        top: 20px;
        width : 90px;
        font-size: 16px;
        margin-left : 20px;
        margin-right : 0px;
        line-height: 45px;
    }
`;

const SubText = styled.div`
    font-size: 18px;
    margin-left: 150px;
    width: 400px;
    ${media.mobile}{
        width: 300px;
        font-size: 14px;
        margin-left: 20px;
        margin-right : 0px;
        z-index: 5;
    }
`;

const FooterImg = styled.div`
    width: 800px;
    height: 150px;
    margin-left: 170px;
    background-image: url(${bannerimg});
    ${media.mobile} {
        position : relative;
        background-image: url(${bannerimg});
        width: 100%;
        height: 116px;
        margin-left:200px;
    }
`;

export default ChocomusicPartners;
