import styled from "styled-components";
import fonts from "../../../lib/styles/fonts";
import media from "../../../lib/styles/media";
import palette from "../../../lib/styles/palette";
import useDetailInfo from "../../../pages/detail/hooks/useDetailInfo";
import NoticeContainer from "./NoticeContainer";
import NoticeProvision from "./NoticeProvision";
import NoticeSafety from "./NoticeSafety";

export type NoticeProp = {};

function Notice(props: NoticeProp) {
    const {
        detailInfo: { fundingNotice },
        loading,
    } = useDetailInfo();

    if (loading) return null;

    return (
        <Block className="section notice" data-name="notice">
            <Inner>
                <p>
                    결제 전에 하단의 안내사항을 확인 후
                    <br />
                    공연 패키지 상품을 구매해주세요
                </p>
                {/* 코로나 관련 방역안전 공지를 사용하지 않으므로 주석처리 */}
                {/* <NoticeSafety /> */}
                <NoticeContainer notices={fundingNotice} />
                <NoticeProvision />
            </Inner>
        </Block>
    );
}

const Block = styled.section`
    ${media.mobile} {
        padding: 0 20px;
        margin-top: 80px;
    }
`;

const Inner = styled.div`
    ${fonts.size.scale22}
    font-weight: ${fonts.weight.bold};
    line-height: 30px;
    border-top: 1px solid ${palette.gray4};
    padding-top: 100px;

    ${media.mobile} {
        line-height: 22px;
        padding-top: 80px;
    }
`;

export default Notice;
