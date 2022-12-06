import styled from "styled-components";
import TextInput from "./TextInput";
import ErrorMessage from "./ErrorMessage";
import media from "../../lib/styles/media";
import { ReactEventHandler } from "react";

export type AliasInputProp = {
    value: string;
    onChange: ReactEventHandler;
    error: boolean;
    errorText: string;
    className?: string;
};

function AliasInput(props: AliasInputProp) {
    const { value, onChange, error, errorText, className } = props;

    return (
        <AliasInputBlock className={className}>
            <TextInput
                value={value}
                error={error}
                onChange={onChange}
                placeholder="활동명을 입력해 주세요."
            />
            <ErrorMessage error={error}>{errorText}</ErrorMessage>
        </AliasInputBlock>
    );
}

const AliasInputBlock = styled.div`
    width: 592px;
    margin: 60px auto 0;

    ${media.tablet} {
        width: 100%;
        padding: 0 8px;
    }

    ${media.mobile} {
        padding: 0;
        margin-top: 28px;
    }
`;

export default AliasInput;
