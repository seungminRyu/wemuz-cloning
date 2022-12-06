import styled from "styled-components";
import fonts from "../../../lib/styles/fonts";
import media from "../../../lib/styles/media";
import palette from "../../../lib/styles/palette";
import MarkdownTypo from "../../common/MarkdownTypo";
import NewLine from "../../common/NewLine";

export type ResultCommentProp = {
    hostAlias: string;
    hostBio: string;
    hostPhoto: string;
};

function ResultComment(props: ResultCommentProp) {
    const { hostAlias, hostBio, hostPhoto } = props;

    return (
        <Block>
            <Inner>
                <HostAvatar>
                    <img src={hostPhoto} alt="아티스트 프로필 사진" />
                </HostAvatar>
                <HostName>
                    <p>
                        공연개설 아티스트 <NewLine device={["MOBILE"]} />
                        <span>{hostAlias}</span>
                    </p>
                </HostName>
                <Comment>
                    <MarkdownTypo>{hostBio}</MarkdownTypo>
                </Comment>
            </Inner>
        </Block>
    );
}

const Block = styled.div`
    background-color: ${palette.white2};
    border-radius: 4px;
    padding: 48px 56px;
    margin-top: 120px;

    ${media.mobile} {
        background-color: ${palette.purple5};
        border-radius: 0;
        padding: 24px 20px;
        margin-top: 80px;
    }
`;

const Inner = styled.div`
    display: grid;
    grid-template-areas: "avatar name" "avatar comment" "avatar .";
    grid-template-columns: 88px 1fr;
    max-width: 912px;
    column-gap: 24px;
    margin: 0 auto;

    ${media.mobile} {
        grid-template-areas: "avatar name" "comment comment";
        grid-template-columns: 44px 1fr;
        column-gap: 12px;
    }
`;

const HostAvatar = styled.div`
    grid-area: avatar;

    img {
        width: 88px;
        height: 88px;
        border: solid 1px #0000001a;
        border-radius: 30px;
        object-fit: cover;
    }

    ${media.mobile} {
        img {
            width: 44px;
            height: 44px;
            border-radius: 15px;
        }
    }
`;

const HostName = styled.div`
    grid-area: name;
    font-size: 22px;
    font-weight: ${fonts.weight.bold};
    margin-top: 2px;

    span {
        color: ${palette.purple0};
    }

    ${media.mobile} {
        font-size: 16px;
        line-height: 22px;
    }
`;

const Comment = styled.div`
    grid-area: comment;
    font-size: 18px;
    line-height: 25px;
    margin-top: 14px;

    ${media.mobile} {
        font-size: 14px;
        line-height: 19px;
        margin-top: 20px;
    }
`;

export default ResultComment;
