import styled from "styled-components";
import fonts from "../../../lib/styles/fonts";
import media from "../../../lib/styles/media";
import palette from "../../../lib/styles/palette";
import { nbsp } from "../../../lib/styles/utils";
import MarkdownTypo from "../../common/MarkdownTypo";

export type NoticeContainerProp = {
    notices: {
        title: string;
        content: string;
    }[];
};

function NoticeContainer(props: NoticeContainerProp) {
    const { notices } = props;
    const noticesCnt = notices.length;

    if (noticesCnt === 0) return null;

    return (
        <Block>
            <ul>
                {notices.map((aNotice, i) => (
                    <NoticeItem key={i}>
                        <p className="notice-label">
                            {`${i + 1}.${nbsp}${nbsp}`}
                            {aNotice.title}
                        </p>
                        <MarkdownTypo className="notice-content">
                            {aNotice.content}
                        </MarkdownTypo>
                    </NoticeItem>
                ))}
            </ul>
        </Block>
    );
}

const Block = styled.div`
    border: 1px solid ${palette.gray3};
    border-radius: 4px;
    padding: 36px 49px 36px 24px;
    margin-top: 12px;

    ${media.mobile} {
        padding: 28px 20px 28px 12px;
        margin-top: 8px;
    }
`;

const NoticeItem = styled.li`
    ${fonts.size.scale18}

    & + & {
        margin-top: 28px;
    }

    .notice-label {
        font-weight: ${fonts.weight.bold};
    }

    .notice-content {
        color: ${palette.gray0};
        line-height: 25px;
        padding-left: 25px;
        margin-top: 12px;
    }

    ${media.mobile} {
        & + & {
            margin-top: 16px;
        }

        .notice-content {
            line-height: 19px;
            padding-left: 20px;
            margin-top: 8px;
        }
    }
`;

export default NoticeContainer;
