import React from "react";
import styled from "styled-components";
import fonts from "../../lib/styles/fonts";
import media from "../../lib/styles/media";
import palette from "../../lib/styles/palette";

export type AsideUserAliasProp = {
    alias: string;
    role: string;
    className?: string;
};

function AsideUserAlias(props: AsideUserAliasProp) {
    const { alias, role, className } = props;

    return (
        <AsideUserAliasBlock className={className}>
            <Alias>{alias}</Alias>
            <Role>{role}</Role>
        </AsideUserAliasBlock>
    );
}

const AsideUserAliasBlock = styled.div`
    text-align: center;
    padding: 32px 0 20px;

    ${media.mobile} {
        padding: 18px 0 10px;
    }
`;
const Alias = styled.p`
    font-size: 22px;
    font-weight: ${fonts.weight.bold};

    ${media.mobile} {
        font-size: 16px;
    }
`;

const Role = styled.p`
    font-size: 16px;
    color: ${palette.gray1};
    margin-top: 8px;

    ${media.mobile} {
        font-size: 13px;
        margin-top: 6px;
    }
`;

export default AsideUserAlias;
