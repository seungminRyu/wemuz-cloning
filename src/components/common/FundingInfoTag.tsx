import { ReactElement } from "react";
import styled from "styled-components";
import fonts from "../../lib/styles/fonts";
import media from "../../lib/styles/media";
import palette from "../../lib/styles/palette";

export type FundingInfoTagProp = {
    className?: string;
    ico?: ReactElement;
    text: string;
};

function FundingInfoTag(props: FundingInfoTagProp) {
    const { className, ico, text } = props;

    return (
        <Block className={className}>
            <VerticalBar />
            {ico || null}
            <Text>{text}</Text>
        </Block>
    );
}

const VerticalBar = styled.div`
    width: 1px;
    height: 0.9em;
    background-color: ${palette.gray0};
    margin-left: 0.55em;
    margin-right: 0.45em;

    ${media.mobile} {
        height: 1em;
        margin-left: 0.55em;
        margin-right: 0.4em;
    }
`;

const Block = styled.div`
    ${fonts.size.scale18}
    display: flex;
    align-items: center;
    color: ${palette.gray0};

    ${VerticalBar} {
        display: none;
    }

    & + & {
        ${VerticalBar} {
            display: block;
        }
    }

    svg {
        width: 1.1em;
        height: 1.1em;
    }

    ${media.mobile} {
        svg {
            width: 1.14em;
            height: 1.14em;
        }
    }
`;

const Text = styled.span`
    svg + & {
        margin-left: 0.35em;
    }

    ${media.mobile} {
        svg + & {
            margin-left: 0.15em;
        }
    }
`;

export default FundingInfoTag;
