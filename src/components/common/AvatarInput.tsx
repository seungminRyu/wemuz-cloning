import React from "react";
import styled from "styled-components";
import media from "../../lib/styles/media";
import palette from "../../lib/styles/palette";

export type AvatarInputProp = {
    defalutProps?: {
        imgRef: React.RefObject<HTMLImageElement>;
        inputRef: React.RefObject<HTMLInputElement>;
        selectedImageFile: React.MutableRefObject<File | null>;
        onAvatarClick: () => void;
        onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
        defaultAvatarImg: string;
    };
    children?: React.ReactNode;
    className?: string;
};

function AvatarInput(props: AvatarInputProp) {
    const { defalutProps, children, className } = props;

    if (!defalutProps) return <>{children}</>;
    const {
        imgRef,
        inputRef,
        selectedImageFile,
        onAvatarClick,
        onInputChange,
        defaultAvatarImg,
    } = defalutProps;

    return (
        <AvatarInput.Block className={className}>
            <AvatarInput.Avatar>
                <AvatarInput.Img ref={imgRef} src={defaultAvatarImg} />
                <AvatarInput.ChangeBtn onClick={onAvatarClick}>
                    사진 변경
                </AvatarInput.ChangeBtn>
            </AvatarInput.Avatar>
            <AvatarInput.Input onChange={onInputChange} ref={inputRef} />
        </AvatarInput.Block>
    );
}

AvatarInput.Block = styled.div`
    margin-top: 60px;

    ${media.mobile} {
        margin-top: 23px;
    }
`;

AvatarInput.Avatar = styled.div`
    position: relative;
    width: 180px;
    height: 180px;
    margin: 0 auto;
`;

AvatarInput.Img = styled.img`
    width: 180px;
    height: 180px;
    border-radius: 60px;
    object-fit: cover;
`;

AvatarInput.ChangeBtn = styled.button`
    position: absolute;
    left: 0;
    top: 0;
    display: grid;
    place-content: center;
    width: 180px;
    height: 180px;
    font-size: 20px;
    color: ${palette.white0};
    opacity: 1;
    border-radius: 60px;
    background-color: #333333b3;
    opacity: 1;
    transition: opacity 0.3s;
    cursor: pointer;

    &:hover {
        opacity: 0;
    }

    ${media.mobile} {
        position: unset;
        display: block;
        width: auto;
        height: auto;
        font-size: 16px;
        color: ${palette.purple0};
        background: none;
        border-bottom: 1px solid ${palette.purple0};
        border-radius: 0;
        padding: 2px 1px;
        margin: 20px auto 0;

        &:hover {
            opacity: 1;
        }
    }
`;

AvatarInput.Input = styled.input.attrs(() => ({
    type: "file",
    accept: "image/*",
}))`
    position: absolute;
    left: -9999px;
    opacity: 0;
`;

export default AvatarInput;
