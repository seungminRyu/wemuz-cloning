import React, { ReactElement } from "react";
import styled from "styled-components";
import fonts from "../../lib/styles/fonts";
import media from "../../lib/styles/media";
import palette from "../../lib/styles/palette";

export type SelectGridProp = {
    children: ReactElement;
    className?: string;
};

export type SelectGridItemProp = {
    selectedVal: string;
    setSelectedVal: React.Dispatch<React.SetStateAction<string>>;
    bg: string;
    name: string;
    fieldName: string;
    className?: string;
};

function SelectGrid(props: SelectGridProp) {
    const { className, children } = props;

    return <SelectGridBlock className={className}>{children}</SelectGridBlock>;
}

const SelectGridBlock = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 108px);
    grid-gap: 28px;
    width: 518px;
    height: 265px;
    margin: 40px auto 0;

    ${media.mobile} {
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 16px;
        width: 100%;
        height: auto;
        margin: 28px auto 0;
    }
`;

export function SelectGridItem(props: SelectGridItemProp) {
    const { selectedVal, setSelectedVal, bg, name, fieldName, className } =
        props;

    const onItemChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedVal(e.target.value);
    };

    return (
        <SelectGridItemBlock className={className} bg={bg}>
            <input
                type="radio"
                value={name}
                id={name}
                name={fieldName}
                checked={selectedVal === name}
                onChange={onItemChange}
            />
            <label htmlFor={name}>{name}</label>
        </SelectGridItemBlock>
    );
}

const SelectGridItemBlock = styled.div<{ bg: string }>`
    position: relative;
    width: 100%;
    background-image: url(${(props) => props.bg});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    border-radius: 4px;
    overflow: hidden;
    padding-bottom: 100%;

    input {
        position: absolute;
        left: -9999px;
        opacity: 0;
    }

    label {
        ${fonts.size.scale18};
        position: absolute;
        top: 0;
        left: 0;
        display: grid;
        place-content: center;
        width: 100%;
        height: 100%;
        color: ${palette.white0};
        background-color: #33333380;
        transition: background-color 0.2s;
        cursor: pointer;

        &:hover {
            background-color: ${palette.purple0}33;
        }
    }

    input: checked + label {
        background-color: ${palette.purple0}80;
        border: 1px solid ${palette.purple0};
    }

    ${media.mobile} {
    }
`;

export default SelectGrid;
