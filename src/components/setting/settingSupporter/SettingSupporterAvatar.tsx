import React from "react";
import styled from "styled-components";
import AvatarInput from "../../common/AvatarInput";
import useAvatarInput from "../../common/hooks/useAvatarInput";
import { SettingEditBtn } from "../SettingStyles";
import { useSettingSupporter } from "../../../pages/setting/SettingSupporter";
import media from "../../../lib/styles/media";

import defaultAvatar from "../../../static/imgs/global/default_avatar.png";

export type SettingSupporterAvatarProp = {
    setAvatarFile: React.Dispatch<React.SetStateAction<File | null>>;
};

function SettingSupporterAvatar(props: SettingSupporterAvatarProp) {
    const { setAvatarFile } = props;
    const {
        dispatchSupporterData,
        supporterData: { avatar: userAvatar },
    } = useSettingSupporter();
    const { getImgProps, getInputProps, getDefaultProps } = useAvatarInput();
    const { onInputChange, onAvatarClick, selectedImageFile } =
        getDefaultProps();

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onInputChange(e);
        if (!selectedImageFile.current) return;
        dispatchSupporterData({
            type: "AVATAR",
            data: URL.createObjectURL(selectedImageFile.current),
        });
        setAvatarFile(selectedImageFile.current);
    };

    const imgProps = {
        ...getImgProps(),
        src: userAvatar || defaultAvatar,
    };

    const inputProps = {
        ...getInputProps(),
        onChange,
    };

    return (
        <SettingSupporterAvatarBlock>
            <AvatarInput>
                <StyledAvatar>
                    <StyledAvatarImg {...imgProps} />
                </StyledAvatar>
                <AvatarInput.Input {...inputProps} />
                <AvatarEditBtn onClick={onAvatarClick}>사진 변경</AvatarEditBtn>
            </AvatarInput>
        </SettingSupporterAvatarBlock>
    );
}

const SettingSupporterAvatarBlock = styled.div`
    margin-top: 68px;

    ${media.mobile} {
        margin-top: 56px;
    }
`;

const StyledAvatar = styled(AvatarInput.Avatar)`
    width: 132px;
    height: 132px;
`;

const StyledAvatarImg = styled(AvatarInput.Img)`
    width: 132px;
    height: 132px;
    border-radius: 44px;
`;

const AvatarEditBtn = styled(SettingEditBtn)`
    display: block;
    margin: 16px auto 0;
`;

export default SettingSupporterAvatar;
