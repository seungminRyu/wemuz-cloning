import { useRef } from "react";

import defaultAvatarImg from "../../../static/imgs/global/default_avatar.png";

export default function useAvatarInput() {
    const imgRef = useRef<HTMLImageElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const selectedImageFile = useRef<File | null>(null);

    const onAvatarClick = () => {
        if (!inputRef.current) return;
        inputRef.current.click();
    };

    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files || e.target.files?.length === 0) return;
        selectedImageFile.current = e.target.files[0];
        if (!imgRef.current) return;
        imgRef.current.src = URL.createObjectURL(selectedImageFile.current);
    };

    const getDefaultProps = () => ({
        imgRef,
        inputRef,
        selectedImageFile,
        onAvatarClick,
        onInputChange,
        defaultAvatarImg,
    });

    const getImgProps = () => ({
        ref: imgRef,
        src: defaultAvatarImg,
    });

    const getChangeBtnProps = () => ({
        onClick: onAvatarClick,
    });

    const getInputProps = () => ({
        onChange: onInputChange,
        ref: inputRef,
    });

    return {
        getDefaultProps,
        getImgProps,
        getChangeBtnProps,
        getInputProps,
    };
}
