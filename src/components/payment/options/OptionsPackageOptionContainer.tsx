import React, { useMemo } from "react";
import styled from "styled-components";
import media from "../../../lib/styles/media";
import palette from "../../../lib/styles/palette";
import CheckBoxInput from "../../common/CheckBoxInput";
import { SelectedOptions } from "./OptionsPackageBox";
import OptionsPackageOptionSelect from "./OptionsPackageOptionSelect";
import { OptionsHeader } from "./OptionsStyles";

export type OptionsPackageOptionContainerProp = {
    idx: number;
    selectedCnt: number;
    options: {
        id: number;
        name: string;
        description: string;
        sequence_number: number;
    }[];
    selectedOptions: SelectedOptions;
    curOpenedOptionIdx: number;
    singleOptionInputRef: React.RefObject<HTMLInputElement>;
    isSingleOptionSelected: boolean;
    onSelectOutsideClick: (targetOptionIdx: number) => void;
    onOptionSelectorClick: (targetOptionIdx: number) => void;
    onOptionItemClick: (
        targetOptionIdx: number,
        targetOptionName: string,
        targetOptionId: number
    ) => void;
    onSingleOptionLabelClick: () => void;
};

function OptionsPackageOptionContainer(
    props: OptionsPackageOptionContainerProp
) {
    const {
        idx,
        selectedCnt,
        options,
        selectedOptions,
        singleOptionInputRef,
        isSingleOptionSelected,
        curOpenedOptionIdx,
        onSingleOptionLabelClick,
        onSelectOutsideClick,
        onOptionSelectorClick,
        onOptionItemClick,
    } = props;

    const optionsNames = useMemo(
        () => options.map((elem) => elem.name),
        [options]
    );

    return (
        <OptionsPackageOptionContainerBlock>
            <OptionsHeader>
                <span>옵션</span>
                <SingleOption active={selectedCnt > 1}>
                    <StyledCheckBoxInput
                        inputRef={singleOptionInputRef}
                        name="single-preference"
                        id={`single-preference-${idx}`}
                        disabled={selectedCnt === 1}
                        onClick={onSingleOptionLabelClick}
                    />
                    <label htmlFor={`single-preference-${idx}`}>
                        단일 옵션
                    </label>
                </SingleOption>
            </OptionsHeader>
            <OptionsBody>
                {Array(isSingleOptionSelected ? 1 : selectedCnt)
                    .fill(0)
                    .map((_, i) => (
                        <OptionsPackageOptionSelect
                            key={i}
                            idx={i}
                            isOpen={curOpenedOptionIdx === i}
                            options={options}
                            optionNames={optionsNames}
                            selectedOptions={selectedOptions}
                            onSelectOutsideClick={onSelectOutsideClick}
                            onOptionSelectorClick={onOptionSelectorClick}
                            onOptionItemClick={onOptionItemClick}
                        />
                    ))}
            </OptionsBody>
        </OptionsPackageOptionContainerBlock>
    );
}

const OptionsPackageOptionContainerBlock = styled.div`
    width: 590px;
    margin-left: 72px;

    ${media.tablet} {
        width: 100%;
        margin-top: 24px;
        margin-left: 0;
    }
`;

const SingleOption = styled.div<{ active: boolean }>`
    display: flex;
    align-items: center;

    label {
        font-size: 16px;
        color: ${(props) => (props.active ? palette.gray1 : palette.gray2)};
    }

    ${media.mobile} {
        label {
            font-size: 13px;
        }
    }
`;

const StyledCheckBoxInput = styled(CheckBoxInput)`
    margin-bottom: -3px;

    label {
        width: 18px;
        height: 18px;
        margin-right: 8px;
        border: 1px solid ${palette.gray6};
        background-color: ${(props) =>
            props.disabled ? palette.gray4 : palette.white0};

        &::before {
            width: 18px;
            height: 18px;
            background-size: 18px;
        }
    }

    ${media.mobile} {
        label {
            width: 14px;
            height: 14px;
            margin-right: 6px;

            &::before {
                width: 14px;
                height: 14px;
                background-size: 14px;
            }
        }
    }
`;

const OptionsBody = styled.div`
    margin-top: 14px;

    ${media.mobile} {
        margin-top: 10px;
    }
`;

export default OptionsPackageOptionContainer;
