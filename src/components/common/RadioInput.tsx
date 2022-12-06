import React from "react";
import styled from "styled-components";
import media from "../../lib/styles/media";
import palette from "../../lib/styles/palette";

export interface RadioInputProp
    extends Omit<React.HTMLProps<HTMLInputElement>, "ref"> {
    inputRef?:
        | ((instance: HTMLInputElement | null) => void)
        | React.RefObject<HTMLInputElement>
        | null;
    labelRef?:
        | ((instance: HTMLLabelElement | null) => void)
        | React.RefObject<HTMLLabelElement>
        | null;
    onLabelClick?: Function;
    children?: React.ReactNode;
}

function RadioInput(props: RadioInputProp) {
    const {
        className,
        inputRef,
        labelRef,
        name,
        id,
        onLabelClick,
        children,
        disabled,
        ...rest
    } = props;
    const htmlProps = rest as any;

    return (
        <RadioInputBlock className={className} disabled={!!disabled}>
            <RadioInput.Input
                type="radio"
                name={name}
                id={id}
                disabled={disabled}
                {...htmlProps}
                ref={inputRef}
            />
            {children ? (
                children
            ) : (
                <RadioInput.Btn
                    htmlFor={id}
                    onClick={(e: React.MouseEvent<any>) => {
                        if (onLabelClick) {
                            onLabelClick(e);
                        }
                    }}
                    ref={labelRef}
                ></RadioInput.Btn>
            )}
        </RadioInputBlock>
    );
}

const RadioInputBlock = styled.div<{ disabled: boolean }>`
    display: inline-block;
`;

RadioInput.Input = styled.input`
    position: absolute;
    left: -9999px;
    opacity: 0;
`;

RadioInput.Btn = styled.label`
    position: relative;
    display: inline-block;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 1px solid ${palette.gray6};
    cursor: pointer;

    &::before {
        content: "";
        position: absolute;
        top: 2px;
        left: 2px;
        display: none;
        width: 14px;
        height: 14px;
        background-color: ${palette.purple0};
        border-radius: 50%;
    }

    input:checked + &::before {
        display: inline-block;
    }

    ${media.mobile} {
        width: 16px;
        height: 16px;

        &::before {
            width: 10px;
            height: 10px;
        }
    }
`;

export default RadioInput;
