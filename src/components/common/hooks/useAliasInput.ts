import React, { useReducer, useRef, useState } from "react";
import { checkAliasExistence } from "../../../lib/api/myPage/api";
import useDebouncer from "../../../lib/hooks/useDebouncer";

export type AliasValidationType =
    | "INVALID_EMPTY"
    | "INVALID_SPACE"
    | "INVALID_LENGTH"
    | "INVALID_SYMBOL"
    | "INVALID_WRONG_KOR"
    | "INVALID_EXIST"
    | "VALID";

export type AliasErrorAction = {
    type: AliasValidationType;
};

const reducer = (state: string, action: AliasErrorAction): string => {
    switch (action.type) {
        case "INVALID_EMPTY":
            return "활동명을 입력해주세요.";
        case "INVALID_SPACE":
            return "활동명에 빈칸을 포함 할 수 없습니다.";
        case "INVALID_LENGTH":
            return "활동명 길이가 올바르지 않습니다. (2자 이상, 10자 이하)";
        case "INVALID_SYMBOL":
            return "활동명에 특수문자를 포함시킬 수 없습니다.";
        case "INVALID_WRONG_KOR":
            return "올바르지 않은 형식입니다.";
        case "INVALID_EXIST":
            return "이미 존재하는 활동명 입니다.";
        case "VALID":
            return "";
        default:
            throw new Error("Unhandled type of action");
    }
};

const checkExistValid = async (alias: string) => {
    let result;

    try {
        result = await checkAliasExistence({ alias });
    } catch (err) {
        console.error(err);
    }

    if (result?.data.code === "OK") {
        return true;
    } else {
        return false;
    }
};

const checkIsKor = (char: string) => escape(char).length > 4;

const checkKorValid = (alias: string) => {
    let korCheck = /[가-힣]/;

    for (let i = 0; i < alias.length; i++) {
        const char = alias.charAt(i);

        if (checkIsKor(char)) {
            if (korCheck.test(char)) {
                continue;
            } else {
                return false;
            }
        }
    }

    return true;
};

const checkSymbolValid = (alias: string) => {
    const specialCheck = /[`~!@#$%^&*|\\\'\";:\/?]/gi;
    return !specialCheck.test(alias);
};

const checkLengthValid = (alias: string) => {
    const aliasLength = alias.length;
    return aliasLength >= 2 && aliasLength <= 10;
};

const checkSpaceValid = (alias: string) => alias.search(/\s/) === -1;

const checkEmptyValid = (alias: string) => alias !== null && alias !== "";

const checkValidation = async (alias: string): Promise<AliasValidationType> => {
    const emptyValid = checkEmptyValid(alias);
    if (!emptyValid) return "INVALID_EMPTY";

    const spaceValid = checkSpaceValid(alias);
    if (!spaceValid) return "INVALID_SPACE";

    const lengthValid = checkLengthValid(alias);
    if (!lengthValid) return "INVALID_LENGTH";

    const symbolValid = checkSymbolValid(alias);
    if (!symbolValid) return "INVALID_SYMBOL";

    const korValid = checkKorValid(alias);
    if (!korValid) return "INVALID_WRONG_KOR";

    const existValid = await checkExistValid(alias);
    if (!existValid) return "INVALID_EXIST";

    return "VALID";
};

function useAliasInput() {
    const [alias, setAlias] = useState<string>("");
    const [errorText, dispatchErrorText] = useReducer(reducer, "");
    const validState = useRef<string>("INITIAL");
    const debouncer = useDebouncer();

    const checkValue = async (value: string) => {
        const checkResult = await checkValidation(value);
        validState.current = checkResult === "VALID" ? "VALID" : "INVALID";
        dispatchErrorText({ type: checkResult });
    };

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setAlias(value);
        debouncer(300, () => checkValue(value));
    };

    return { onChange, validState, errorText, alias };
}

export default useAliasInput;
