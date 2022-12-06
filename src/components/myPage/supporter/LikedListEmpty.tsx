import { Link } from "react-router-dom";
import styled from "styled-components";
import fonts from "../../../lib/styles/fonts";
import media from "../../../lib/styles/media";
import palette from "../../../lib/styles/palette";

import { ReactComponent as NoticeIco } from "../../../static/icons/global/ico_notice.svg";

export type LikedListEmptyProp = {};

function LikedListEmpty(props: LikedListEmptyProp) {
    return (
        <LikedListEmptyBlock>
            <StyledNoticeIco />
            <NoticeText>좋아요한 공연이 없습니다.</NoticeText>
            <HomeLink to="/">공연 둘러보기</HomeLink>
        </LikedListEmptyBlock>
    );
}

const LikedListEmptyBlock = styled.div`
    width: 100%;
    border-radius: 8px;
    border: 1px solid ${palette.gray4};
    box-shadow: 0 0 2px #5555551f;
    padding: 80px 100px;

    ${media.mobile} {
        border-radius: 4px;
        padding: 48px 0;
    }
`;

const StyledNoticeIco = styled(NoticeIco)`
    display: block;
    width: 48px;
    height: 48px;
    margin: 0 auto;

    ${media.mobile} {
        width: 32px;
        height: 32px;
    }
`;

const NoticeText = styled.p`
    ${fonts.size.scale18}
    text-align: center;
    margin-top: 20px;

    ${media.mobile} {
        margin-top: 12px;
    }
`;

const HomeLink = styled(Link)`
    ${fonts.size.scale18}
    display: block;
    width: 228px;
    text-align: center;
    color: ${palette.white0};
    background-color: ${palette.purple0};
    border-radius: 28px;
    transition: background-color 0.2s;
    padding: 18px 0;
    margin: 60px auto 0;

    &:hover {
        background-color: ${palette.purple3};
    }

    ${media.mobile} {
        width: 174px;
        border-radius: 20px;
        padding: 12px 0;
        margin: 40px auto 0;
    }
`;

export default LikedListEmpty;
