import styled from "styled-components";
import fonts from "../../../lib/styles/fonts";
import media from "../../../lib/styles/media";
import palette from "../../../lib/styles/palette";
import { SectionHead, SectionSubHead } from "./IntroStyles";

export type IntroFAQProp = {};

function IntroFAQ(props: IntroFAQProp) {
    return (
        <IntroFAQBlock>
            <SectionSubHead>
                궁금하신 점이나 제안 사항이 있으신가요?
            </SectionSubHead>
            <SectionHead>
                카카오톡 플러스친구 “위뮤즈”로 문의해 주세요
            </SectionHead>
            <a href={process.env.REACT_APP_QNA_URL as string}>
                <FAQBtn>플러스친구 문의하기</FAQBtn>
            </a>
        </IntroFAQBlock>
    );
}

const IntroFAQBlock = styled.section`
    text-align: center;
    background-color: ${palette.white2};
    padding: 100px 0 80px;
    margin-top: 228px;

    ${media.mobile} {
        padding: 60px 0 48px;
        margin-top: 140px;
    }
`;

const FAQBtn = styled.button`
    ${fonts.size.scale18}
    display: block;
    font-weight: ${fonts.weight.bold};
    color: ${palette.gray0};
    background-color: #fee500;
    border-radius: 4px;
    transition: background-color 0.2s;
    padding: 16px 40px;
    margin: 36px auto 0;

    &:hover {
        background-color: #ffd627;
    }

    ${media.mobile} {
        font-weight: ${fonts.weight.regular};
        padding: 12px 20px;
    }
`;

export default IntroFAQ;
