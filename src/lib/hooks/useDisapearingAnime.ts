import { useEffect, useRef } from "react";
import useToggle from "./useToggle";

function useDisapearingAnime(visible: boolean, animeTime: number) {
    const [isAnimated, _, setIsAnimated] = useToggle(false);
    const [isClosed, __, setIsClosed] = useToggle(true);
    const timeoutId = useRef<ReturnType<typeof setTimeout> | null>(null);
    const isMounted = useRef(false);

    useEffect(() => {
        if (!isMounted.current) {
            isMounted.current = true;
        } else {
            setIsAnimated(true);
            timeoutId.current = setTimeout(() => {
                setIsAnimated(false);
                if (!visible) {
                    setIsClosed(true);
                }
            }, animeTime);
        }

        if (visible) {
            setIsClosed(false);
        }

        return () => {
            if (!timeoutId.current) return;
            clearTimeout(timeoutId.current);
        };
    }, [visible]);

    return { isAnimated, isClosed };
}

export default useDisapearingAnime;
