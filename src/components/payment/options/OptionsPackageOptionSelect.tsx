import React from "react";
import styled, { css } from "styled-components";
import media from "../../../lib/styles/media";
import palette from "../../../lib/styles/palette";
import OutsideClickHandler from "react-outside-click-handler";
import useForceUpdate from "../../../lib/hooks/useForceUpdate";

import { ReactComponent as OpenIco } from "../../../static/icons/purchase/ico_open.svg";
import fonts from "../../../lib/styles/fonts";

export type OptionsPackageOptionSelectProp = {
    idx: number;
    isOpen: boolean;
    options: any[];
    optionNames: string[];
    selectedOptions: any[];
    onSelectOutsideClick: Function;
    onOptionSelectorClick: Function;
    onOptionItemClick: Function;
};

function OptionsPackageOptionSelect(props: OptionsPackageOptionSelectProp) {
    const {
        idx,
        isOpen,
        options,
        optionNames,
        selectedOptions,
        onSelectOutsideClick,
        onOptionSelectorClick,
        onOptionItemClick,
    } = props;
    const forceUpdate = useForceUpdate();
    const selectedOption = selectedOptions[idx]
        ? (selectedOptions[idx]?.name as string)
        : null;

    return (
        <OptionsPackageOptionSelectBlock>
            <OutsideClickHandler
                onOutsideClick={() => onSelectOutsideClick(idx)}
            >
                <OptionSelector
                    optionSelected={!!selectedOption}
                    onClick={() => onOptionSelectorClick(idx)}
                >
                    <span>{selectedOption || "옵션 선택하기"}</span>
                    <StyledOpenIco open={isOpen} />
                </OptionSelector>
            </OutsideClickHandler>
            <OptionList open={isOpen}>
                {options.map((elem, i) => (
                    <OptionItem
                        key={i}
                        isSelected={optionNames[i] === selectedOption}
                        onClick={() => {
                            onOptionItemClick(idx, elem.name, elem.id);
                            forceUpdate();
                        }}
                    >
                        {elem.name}
                    </OptionItem>
                ))}
            </OptionList>
        </OptionsPackageOptionSelectBlock>
    );
}

const OptionsPackageOptionSelectBlock = styled.div`
    position: relative;
    width: 100%;

    & + & {
        margin-top: 12px;
    }

    ${media.mobile} {
        & + & {
            margin-top: 8px;
        }
    }
`;

const StyledOpenIco = styled(OpenIco)<{ open: boolean }>`
    ${(props) =>
        props.open &&
        css`
            transform: rotate(180deg);
        `}
`;

const OptionSelector = styled.div<{ optionSelected: boolean }>`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    color: ${(props) =>
        props.optionSelected ? palette.black0 : palette.gray6};
    font-size: 18px;
    border: 1px solid ${palette.gray6};
    border-radius: 4px;
    background-color: ${palette.white0};
    cursor: pointer;
    padding: 15px 16px 13px;

    ${media.mobile} {
        font-size: 14px;
        border-radius: 2px;
        padding: 11px 10px;
    }
`;

const OptionList = styled.ul<{ open: boolean }>`
    position: absolute;
    top: 50px;
    left: 0;
    width: 590px;
    max-height: 200px;
    overflow-y: scroll;
    background-color: ${palette.white0};
    border-radius: 4px;
    border: 1px solid ${palette.black0};
    box-shadow: 0 4px 4px #33333333;
    z-index: 1;
    transition: opacity 0.2s;
    padding: 2px 0;

    ${(props) =>
        props.open
            ? css`
                  display: block;
              `
            : css`
                  display: none;
              `}

    ${media.tablet} {
        width: 100%;
    }

    ${media.mobile} {
        top: 44px;
        max-height: 148px;
        border-radius: 2px;
    }
`;

const OptionItem = styled.li<{ isSelected: boolean }>`
    ${fonts.size.scale16}
    color: ${(props) => (props.isSelected ? palette.purple0 : palette.black0)};
    cursor: pointer;
    transition: background-color 0.2s;
    padding: 9px 16px;

    &:hover {
        background-color: ${palette.gray5};
    }

    ${media.mobile} {
        padding: 9px;
    }
`;

export default OptionsPackageOptionSelect;
