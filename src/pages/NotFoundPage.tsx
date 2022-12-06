import React from "react";
import { Link, useSearchParams } from "react-router-dom";
import styled from "styled-components";
import NewLine from "../components/common/NewLine";
import { MainContainer } from "../components/global/GlobalStyles";
import PageTemplate from "../components/global/PageTemplate";
import media from "../lib/styles/media";
import palette from "../lib/styles/palette";

import errorTagImg from "../static/imgs/global/img_error_tag.svg";

export type NotFoundPageProp = {};

function NotFoundPage(props: NotFoundPageProp) {
    const [searchParams] = useSearchParams();
    const type = searchParams.get("type");

    const getNotFoundPageContent = (type: string | null) => {
        switch (type) {
            case "inspection":
                return (
                    <>
                        <img src={errorTagImg} alt="에러 태그" />
                        <h1>
                            현재 서비스를 점검 중 이에요.
                            <NewLine device={["MOBILE"]} /> 빠른 시일 내 점검이
                            완료됩니다. 😅
                        </h1>
                    </>
                );
            case "preparation":
                return <h1>현재 서비스를 준비 중입니다. 😃</h1>;
            default:
                return (
                    <>
                        <img src={errorTagImg} alt="에러 태그" />
                        <h1>존재하지 않는 페이지 입니다. 😥</h1>
                    </>
                );
        }
    };

    return (
        <PageTemplate>
            <NotFoundPageBlock>
                <MainContainer>
                    <Header>{getNotFoundPageContent(type)}</Header>
                    <ButtonGroup>
                        <Link to="/">
                            <StyledButton>
                                <span>위뮤즈 홈으로 이동</span>
                            </StyledButton>
                        </Link>
                        <a href="http://wemuz.me/programs">
                            <StyledButton>
                                <span>위뮤즈 프로젝트로 이동</span>
                            </StyledButton>
                        </a>
                        <a href="https://docs.google.com/forms/d/e/1FAIpQLSckGrhmo69W2eZXGuoVC2xOVy7r9SB0N73CphG7v4whPVPVcQ/viewform">
                            <StyledButton>
                                <span>문의하기</span>
                            </StyledButton>
                        </a>
                    </ButtonGroup>
                </MainContainer>
            </NotFoundPageBlock>
        </PageTemplate>
    );
}

const NotFoundPageBlock = styled.div`
    width: 100%;
    height: 100vh;
    background-color: ${palette.white1};
`;

const Header = styled.header`
    margin-top: 200px;

    img {
        width: 95px;
        height: 30px;
    }

    h1 {
        font-size: 36px;
        font-weight: 600;
        line-height: 48px;
        letter-spacing: -0.36px;
        padding-bottom: 27.5px;
        border-bottom: solid 2px ${palette.black0};
        margin-top: 24px;
    }

    .error-code {
        margin-top: 47.5px;
        font-size: 18px;
        font-weight: 500;
        color: ${palette.black0};
    }

    ${media.mobile} {
        margin-top: 100px;

        img {
            width: 64px;
            height: 20px;
        }

        h1 {
            font-size: 18px;
            line-height: 26px;
            letter-spacing: -0.18px;
            padding-bottom: 23.5px;
            margin-top: 16px;
        }

        .error-code {
            margin-top: 27.5px;
            font-size: 14px;
        }
    }
`;

const ButtonGroup = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 100px;
    max-width: 627px;
    width: 100%;

    ${media.mobile} {
        flex-direction: column;
        align-items: center;
        margin-top: 80px;
        height: 152px;
    }
`;

const StyledButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 59px;
    border: inset 1px ${palette.black0};
    border-radius: 4px;
    box-shadow: 0 0 4px 0 #1d1d1b33;
    color: ${palette.black0};
    font-size: 20px;
    font-weight: 500;
    background-color: ${palette.white0};
    padding: 19px 28px;

    ${media.mobile} {
        font-size: 14px;
        height: 40px;
        padding: 12px 16px;
        box-shadow: none;
    }
`;

export default NotFoundPage;
