import React, { ReactElement } from "react";
import styled from "styled-components";
import media from "../../lib/styles/media";
import palette from "../../lib/styles/palette";

import checkIco from "../../static/icons/global/ico_check.svg";

export interface CheckBoxInputProp
    extends Omit<React.HTMLProps<HTMLInputElement>, "ref"> {
    inputRef?:
        | ((instance: HTMLInputElement | null) => void)
        | React.RefObject<HTMLInputElement>
        | null;
    labelRef?:
        | ((instance: HTMLLabelElement | null) => void)
        | React.RefObject<HTMLLabelElement>
        | null;
    selector?: ReactElement;
}

function CheckBoxInput(props: CheckBoxInputProp) {
    const {
        name,
        id,
        className,
        onClick,
        inputRef,
        labelRef,
        selector,
        ...rest
    } = props;
    const htmlProps = rest as any;

    return (
        <CheckBoxInputBlock className={className}>
            <input
                ref={inputRef}
                type="checkbox"
                name={name}
                id={id}
                {...htmlProps}
            />
            {selector ? (
                selector
            ) : (
                <label
                    className="check-box"
                    ref={labelRef}
                    htmlFor={id}
                    onClick={(e: React.MouseEvent<any>) => {
                        if (onClick) {
                            onClick(e);
                        }
                    }}
                ></label>
            )}
        </CheckBoxInputBlock>
    );
}

const CheckBoxInputBlock = styled.div`
    display: inline-block;

    input {
        position: absolute;
        left: -9999px;
        opacity: 0;
    }

    .check-box {
        display: inline-grid;
        place-content: center;
        width: 22px;
        height: 22px;
        border-radius: 2px;
        border: 1px solid ${palette.black0};
        background-color: ${palette.white0};
        cursor: pointer;

        &::before {
            content: "";
            display: none;
            width: 22px;
            height: 22px;
            background-image: url(${checkIco});
            background-repeat: no-repeat;
            background-size: 22px;
            background-position: center;
        }
    }

    input:checked + .check-box {
        border: 1px solid ${palette.purple0};
        background-color: ${palette.purple0};

        &::before {
            display: inline-block;
        }
    }

    ${media.mobile} {
        .check-box {
            width: 16px;
            height: 16px;

            &::before {
                width: 12px;
                height: 12px;
                background-size: 16px;
            }
        }
    }
`;

export default CheckBoxInput;
