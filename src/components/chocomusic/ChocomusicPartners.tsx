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
                <IntroText active={active}>
                    <Title>파트너 및 MOU</Title>
                    <Text>초코뮤직은 많은 파트너사들과 함께 문화를 바꾸고 있습니다.</Text>
                </IntroText>
                <Partner>
                    <FirstLine>
                        <Img1></Img1>
                        <Img2></Img2>
                        <Img3></Img3>
                        <Img4></Img4>
                        <Img5></Img5>
                    </FirstLine>
                    <SecondLine>
                        <Img6></Img6>
                        <Img7></Img7>
                        <Img8></Img8>
                        <Img9></Img9>
                        <Img10></Img10>
                    </SecondLine>
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
    height: 100%;
    background-color: #F4F4F4;
`;

const IntroText = styled.div<{ active: boolean }>`
    text-align: center;
    height: 40vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 144px;

    ${media.mobile} {
        padding-top: ${({ active }) => (active ? `100px` : ``)};
    }
`;

const Title = styled.div`
    font-weight: 900;
    font-size: 33px;
    color: black;
`;

const Text = styled.div`
    font-weight: regular;
    font-size: 18px;
    line-height: 110px;
`;

const Partner = styled.div`
    text-align: center;
`;

const FirstLine = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

const Img1 = styled.div`
    width: 240px;
    height: 100px;
    margin: 20px;
    background-size: cover;
    background-image: url(${mouImg1});
`;

const Img2 = styled.div`
    width: 240px;
    height: 100px;
    margin: 20px;
    background-size: cover;
    background-image: url(${mouImg2});
`;

const Img3 = styled.div`
    width: 240px;
    height: 100px;
    margin: 20px;
    background-size: cover;
    background-image: url(${mouImg3});
`;

const Img4 = styled.div`
    width: 240px;
    height: 100px;
    margin: 20px;
    background-size: cover;
    background-image: url(${mouImg4});
`;

const Img5 = styled.div`
    width: 240px;
    height: 100px;
    margin: 20px;
    background-size: cover;
    background-image: url(${mouImg5});
`;

const SecondLine = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

const Img6 = styled.div`
    width: 240px;
    height: 100px;
    margin: 20px;
    background-size: cover;
    background-image: url(${mouImg6});
`;

const Img7 = styled.div`
    width: 240px;
    height: 100px;
    margin: 20px;
    background-size: cover;
    background-image: url(${mouImg7});
`;

const Img8 = styled.div`
    width: 240px;
    height: 100px;
    margin: 20px;
    background-size: cover;
    background-image: url(${mouImg8});
`;

const Img9 = styled.div`
    width: 240px;
    height: 100px;
    margin: 20px;
    background-size: cover;
    background-image: url(${mouImg9});
`;

const Img10 = styled.div`
    width: 240px;
    height: 100px;
    margin: 20px;
    background-size: cover;
    background-image: url(${mouImg10});
`;

const Wrapper = styled.div`
    width: 100%;
    height: 550px;
    background-color: #F4F4F4;
`;

const Footer = styled.div`
    height: 150px;
    background-color: #FFF5BA;
    display: flex;
    flex-direction: row;
 `;

const FooterText = styled.div`
    display: flex;
    flex-direction: column;
`;

const Inquiry = styled.div`
    color: #FF9600;
    font-size: 22px;
    font-weight: bold;
    margin-left: 150px;
    line-height: 70px;
`;

const SubText = styled.div`
    font-size: 18px;
    margin-left: 150px;
`;

const FooterImg = styled.div`
    width: 960px;
    height: 150px;
    margin-left: 300px;
    background-image: url(${bannerimg})
`;

export default ChocomusicPartners;
