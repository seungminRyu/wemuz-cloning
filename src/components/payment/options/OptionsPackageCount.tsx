import React from "react";
import styled from "styled-components";
import media from "../../../lib/styles/media";
import palette from "../../../lib/styles/palette";
import { OptionsHeader } from "./OptionsStyles";

import { ReactComponent as PlusIco } from "../../../static/icons/purchase/ico_plus.svg";
import { ReactComponent as MinusIco } from "../../../static/icons/purchase/ico_minus.svg";

export type OptionsPackageCountProp = {
    selectedCnt: number;
    stockCount: number;
    onCountDownBtnClick: () => void;
    onCountUpBtnClick: () => void;
};

function OptionsPackageCount(props: OptionsPackageCountProp) {
    const { selectedCnt, stockCount, onCountDownBtnClick, onCountUpBtnClick } =
        props;

    return (
        <OptionsPackageCountBlock>
            <OptionsHeader>
                <span>수량</span>
            </OptionsHeader>
            <CountBody>
                <CountBtn
                    active={selectedCnt > 1}
                    onClick={onCountDownBtnClick}
                >
                    <StyledMinusIco />
                </CountBtn>
                <CountNumBox>{selectedCnt}</CountNumBox>
                <CountBtn
                    active={selectedCnt < stockCount}
                    onClick={onCountUpBtnClick}
                >
                    <StyledPlusIco />
                </CountBtn>
            </CountBody>
        </OptionsPackageCountBlock>
    );
}

const OptionsPackageCountBlock = styled.div``;

const CountBody = styled.div`
    display: flex;
    align-items: center;
    margin-top: 16px;

    ${media.mobile} {
        margin-top: 10px;
    }
`;

const CountBtn = styled.button<{ active: boolean }>`
    display: inline-grid;
    place-content: center;
    width: 32px;
    height: 32px;
    border-radius: 4px;
    background-color: ${(props) =>
        props.active ? palette.gray0 : palette.gray6};

    ${media.mobile} {
        width: 28px;
        height: 28px;
    }
`;

const StyledMinusIco = styled(MinusIco)`
    ${media.mobile} {
        width: 28px;
        height: 28px;
    }
`;

const StyledPlusIco = styled(PlusIco)`
    ${media.mobile} {
        width: 28px;
        height: 28px;
    }
`;

const CountNumBox = styled.span`
    display: inline-grid;
    place-content: center;
    width: 88px;
    height: 48px;
    background-color: ${palette.white0};
    border: 1px solid ${palette.purple0};
    border-radius: 4px;
    margin: 0 12px;

    ${media.mobile} {
        width: 68px;
        height: 38px;
        margin: 0 16px;
    }
`;
export default OptionsPackageCount;
