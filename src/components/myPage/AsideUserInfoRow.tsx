import React from "react";
import styled from "styled-components";
import fonts from "../../lib/styles/fonts";
import media from "../../lib/styles/media";
import palette from "../../lib/styles/palette";

export type AsideUserInfoRowProp = {
    label: string;
    content: string;
    className?: string;
};

function AsideUserInfoRow(props: AsideUserInfoRowProp) {
    const { label, content, className } = props;

    return (
        <AsideUserInfoRowBlock className={className}>
            <Label>{label}</Label>
            {content ? (
                <Content>{content}</Content>
            ) : (
                <NoContent>{`없음`}</NoContent>
            )}
        </AsideUserInfoRowBlock>
    );
}

const AsideUserInfoRowBlock = styled.li`
    & + & {
        margin-top: 16px;
    }

    ${media.tablet} {
        text-align: center;

        & + & {
            margin-top: 0;
        }

        &:first-child {
            text-align: start;
        }

        &:last-child {
            text-align: end;
        }
    }
`;

const Label = styled.p`
    ${fonts.size.scale16}
    color: ${palette.gray1};
`;

const Content = styled.p`
    ${fonts.size.scale18}
    ${fonts.lineHeight.scale18}
    margin-top: 6px;
`;

const NoContent = styled(Content)`
    color: ${palette.gray1};
`;

export default AsideUserInfoRow;
