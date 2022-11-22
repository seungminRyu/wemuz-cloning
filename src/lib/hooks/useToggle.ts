import React, { useState } from "react";

export default function useToggle(
    initVal: boolean
): [boolean, () => void, React.Dispatch<boolean>] {
    const [val, setVal] = useState(initVal);

    const toggle = (): void => {
        setVal(!val);
    };

    return [val, toggle, setVal];
}
