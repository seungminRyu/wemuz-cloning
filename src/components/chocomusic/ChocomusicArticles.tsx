import styled from "styled-components";
import media from "../../lib/styles/media";
import palette from "../../lib/styles/palette";
import nextimg from "../../static/imgs/chocomusic/nextimg.png";

export type ChocomusicArticlesProps = {};

function ChocomusicArticles(props: ChocomusicArticlesProps) {
    return (
        <Block>
            <div>
                <Title>언론 보도</Title>
                <NewsBlock>
                    <News>
                        <Inner>
                                <Issue>
                                    <HeadNews>
                                        <NewsName>부산일보</NewsName>
                                        <Date>2022.9</Date>
                                    </HeadNews>
                                    <Text>"사라져 가는 금정구 장성시장 살리자"...청년 창업가들 '핫플' 프로젝트 시동</Text>
                                </Issue>
                                <Next></Next>
                        </Inner>
                    </News>
                    <News>
                        
                    </News>
                    <News>
                        
                    </News>
                    <News>
                        
                    </News>
                    <News>
                        
                    </News>
                    <Newsmedia>
                        
                    </Newsmedia>
                    <Newsmedia>
                        
                    </Newsmedia>
                    <Newsmedia>
                        
                    </Newsmedia>
                </NewsBlock>
                <Pagination>
                    <Left></Left>
                    <Firstnum>1</Firstnum>
                    <Num>2</Num>
                    <Num>3</Num>
                    <Num>4</Num>
                    <LastMediaNum>5</LastMediaNum>
                    <Lastnum>6</Lastnum>
                    <Right></Right>
                </Pagination>
            </div>
        </Block>
    );
}

const Block = styled.div`
    height: 100%;
    background-color: ${palette.white0};
`;

const Title = styled.h1`
    color : ${palette.black0};
    font-size : 25px;
    padding-left : 200px;
    padding-top : 90px;
    padding-bottom : 40px;
    font-weight : 800;
    ${media.mobile}{
        font-size : 20px;
        padding-left : 40px;
        padding-top : 80px;
    }
`
const NewsBlock = styled.div`
    display : grid;
    width : 1130px;
    grid-template-columns : 550px 550px;
    row-gap : 30px;
    column-gap : 20px;
    margin : auto;
    ${media.mobile}{
        display : grid;
        width : 400px;
        grid-template-columns : 400px;
        row-gap : 20px;
        align-items : center;
    }
`
const News = styled.div`
    display : grid;
    align-items : center;
    background-color : ${palette.white0};
    border-radius : 10px;
    width : 550px;
    height : 90px;
    border : 1px solid ${palette.gray3};
    ${media.mobile}{
        display : grid;
        align-items : center;
        width : 400px;
        height : 80px;
    }
`
const Newsmedia = styled.div`
    display : grid;
    align-items : center;
    background-color : ${palette.white0};
    border-radius : 10px;
    width : 550px;
    height : 90px;
    border : 1px solid ${palette.gray3};
    ${media.mobile}{
        display : none;
    }
`
const HeadNews = styled.div`
    display : flex;
    flex-direction: row;
    padding-bottom : 10px;
    padding-left : 7px;
`
const NewsName = styled.h3`
    color : ${palette.orange};
    font-size : 15px;
    font-weight : bold;
    padding-right : 5px;
    ${media.mobile}{
        font-size : 13px;
        font-weight : bold;
        padding-right : 3px;
    }
`
const Date = styled.h4`
    color : ${palette.gray3};
    font-size : 15px;
    padding-top : 2px;
    ${media.mobile}{
        font-size : 13px;
    }
`
const Text = styled.h3`
    color : ${palette.black0};
    font-size : 15px;
    font-weight : bold;
    padding-left : 7px;
    width : 465px;
    ${media.mobile}{
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        word-break:break-all
        font-size : 12px;
        width : 340px;
        heigh : 10px;
    }
`
const Issue = styled.div`
    display : grid;
    align-items : center;
    margin-left : 10px;
`
const Next = styled.button`
    display : block;
    width : 15px;
    height : 15px;
    background-size : cover;
    margin-top : auto;
    margin-bottom : auto;
    margin-left : 40px;
    background-image : url(${nextimg});
    ${media.mobile}{
        margin-left : 20px;
    }
`
const Inner = styled.div`
    display : flex;
    flex-direction: row;
`
const Pagination = styled.div`
    text-align : center;
    padding-top : 50px;
`
const Firstnum = styled.button`
    font-size : 20px;
    margin-left : 30px;
    width : 30px;
    height : 30px;
    &:hover{
        background-color : #F4F4F4;
        color : ${palette.orange};
        border-radius : 3px;
    }
`
const Lastnum = styled.button`
    font-size : 20px;
    margin-right : 30px;
    width : 30px;
    height : 30px;
    &:hover{
        background-color : #F4F4F4;
        color : ${palette.orange};
        border-radius : 3px;
    }
    ${media.mobile}{
        display : none;
    }
`
const LastMediaNum = styled.button`
    font-size : 20px;
    width : 30px;
    height : 30px;
    &:hover{
        background-color : #F4F4F4;
        color : ${palette.orange};
        border-radius : 3px;
    }
    ${media.mobile}{
        font-size : 20px;
        margin-right : 30px;
        width : 30px;
        height : 30px;
    }
`
const Num = styled.button`
    font-size : 20px;
    width : 30px;
    height : 30px;
    &:hover{
        background-color : #F4F4F4;
        color : ${palette.orange};
        border-radius : 3px;
    }
`
const Left = styled.button`
    width : 15px;
    height : 15px;
    background-size : cover;
    transform: scaleX(-1);
    background-image : url(${nextimg});
`
const Right = styled.button`
    width : 15px;
    height : 15px; 
    background-size : cover;
    background-image : url(${nextimg});
`
export default ChocomusicArticles;
