import React, { useEffect, useReducer, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import styled from "styled-components";
import { loginUser } from "../..";
import Loader from "../../components/common/Loader";
import Popup from "../../components/common/Popup";
import {
    SettingContainer,
    SettingHeading,
} from "../../components/setting/SettingStyles";
import SettingSupporterAddress from "../../components/setting/settingSupporter/SettingSupporterAddress";
import SettingSupporterAvatar from "../../components/setting/settingSupporter/SettingSupporterAvatar";
import SettingSupporterGender from "../../components/setting/settingSupporter/SettingSupporterGender";
import SettingSupporterGenre from "../../components/setting/settingSupporter/SettingSupporterGenre";
import { postSupporterInfo } from "../../lib/api/setting/api";
import useToggle from "../../lib/hooks/useToggle";
import useUser from "../../lib/hooks/useUser";
import fonts from "../../lib/styles/fonts";
import palette from "../../lib/styles/palette";
import {
    createCustomStore,
    formatAccessKey,
    handleAxiosError,
} from "../../lib/utils";
import { BasicBtn, OutlineBtn } from "../../styles/Buttons";
import useSettingSupporterInfo from "./hooks/useSettingSupporterInfo";

export type SettingSupporterProp = {};

const [SettingSupporterProvider, useSettingSupporter] = createCustomStore<{
    supporterData: SupporterData;
    dispatchSupporterData: React.Dispatch<SupporterDataAction>;
}>();

type SupporterData = {
    avatar: string;
    gender: string;
    address: {
        name: string;
        depth1: string;
        depth2: string;
        lat: string;
        lng: string;
    };
    genre: Array<number>;
};

const initialSupporterData = {
    avatar: "",
    gender: "",
    address: {
        name: "",
        depth1: "",
        depth2: "",
        lat: "",
        lng: "",
    },
    genre: [],
};

type SupporterDataAction = {
    type: "INIT" | "AVATAR" | "GENDER" | "ADDRESS" | "GENRE";
    data: any;
};

const supporterDataReducer = (
    state: SupporterData,
    action: SupporterDataAction
) => {
    switch (action.type) {
        case "INIT": {
            return {
                ...action.data,
            };
        }
        case "AVATAR": {
            return {
                ...state,
                avatar: action.data,
            };
        }
        case "GENDER": {
            return {
                ...state,
                gender: action.data,
            };
        }
        case "ADDRESS": {
            return {
                ...state,
                address: action.data,
            };
        }
        case "GENRE": {
            return {
                ...state,
                genre: action.data,
            };
        }
    }
};

function SettingSupporter(props: SettingSupporterProp) {
    const [supporterData, dispatchSupporterData] = useReducer(
        supporterDataReducer,
        initialSupporterData
    );
    const [avatarFile, setAvatarFile] = useState<File | null>(null);
    const [loading, _, setLoading] = useToggle(true);
    const [popupOpen, togglePopupOpen] = useToggle(false);
    const prevSupporterInfoRef = useRef<any>(null);
    const { loadSupporterInfo } = useSettingSupporterInfo();
    const user = useUser();
    const navigate = useNavigate();

    useEffect(() => {
        loadSupporterInfo().then((prevSupporterData) => {
            prevSupporterInfoRef.current = prevSupporterData;
            dispatchSupporterData({ type: "INIT", data: prevSupporterData });
            setLoading(false);
        });
    }, []);

    const compareChangedGenre = () => {
        const prev = prevSupporterInfoRef.current.genre;
        const next = supporterData.genre;
        return {
            deleted: prev.filter((elem: number) => !next.includes(elem)),
            added: next.filter((elem: number) => !prev.includes(elem)),
        };
    };

    const createSupporterPostData = () => {
        const { deleted, added } = compareChangedGenre();
        const formData = new FormData();
        deleted.forEach((elem: number) => {
            formData.append("deleted_genres", `${elem}`);
        });
        added.forEach((elem: number) => {
            formData.append("added_genres", `${elem}`);
        });
        formData.append("address", supporterData.address.name);
        formData.append("address_depth_1", supporterData.address.depth1);
        formData.append("address_depth_2", supporterData.address.depth2);
        formData.append("lat", supporterData.address.lat);
        formData.append("lng", supporterData.address.lng);
        formData.append("gender", supporterData.gender);
        if (avatarFile) {
            formData.append("avatar", avatarFile);
        }
        return formData;
    };

    const onSubmit = () => {
        const accessKey = formatAccessKey(user.accessToken);
        const postData = createSupporterPostData();
        try {
            toast
                .promise(postSupporterInfo({ accessKey, postData }), {
                    pending: "수정한 서포터 정보를 저장 중입니다.",
                    success: "서포터 정보가 수정되었습니다.",
                    error: "서포터 정보를 수정하는 도중 문제가 발생했습니다.",
                })
                .then(async () => {
                    navigate("/setting");
                    await loginUser();
                });
        } catch (e) {
            handleAxiosError(e);
            navigate("/setting");
        }
    };

    const onCancel = () => {
        togglePopupOpen();
    };

    const onPopupCancel = () => {
        togglePopupOpen();
    };

    const onPopupConfirm = () => {
        navigate("/setting");
        toast("서포터 프로필 수정을 취소했습니다.");
    };

    if (loading) {
        return (
            <Loader.Container>
                <Loader />
            </Loader.Container>
        );
    }

    return (
        <SettingSupporterProvider
            value={{ supporterData, dispatchSupporterData }}
        >
            <SettingContainer>
                <SettingHeading>서포터 프로필 설정</SettingHeading>
                <SettingSupporterAvatar setAvatarFile={setAvatarFile} />
                <SettingSupporterGender />
                <SettingSupporterAddress />
                <SettingSupporterGenre />
                <ButtonContainer>
                    <CancelBtn onClick={onCancel} type="button">
                        취소
                    </CancelBtn>
                    <SubmitBtn onClick={onSubmit} type="submit">
                        확인
                    </SubmitBtn>
                </ButtonContainer>
                <Popup
                    open={popupOpen}
                    content={
                        <PopupText>
                            취소 시, 서포터 프로필 수정이 적용되지 않습니다.
                            취소하시겠습니까?
                        </PopupText>
                    }
                    buttons={
                        <>
                            <CancelPopupBtn onClick={onPopupCancel}>
                                아니오
                            </CancelPopupBtn>
                            <ConfirmPopupBtn onClick={onPopupConfirm}>
                                네
                            </ConfirmPopupBtn>
                        </>
                    }
                />
            </SettingContainer>
        </SettingSupporterProvider>
    );
}

const ButtonContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 8px;
    width: 100%;
    margin-top: 60px;
`;

const CancelBtn = styled(OutlineBtn)`
    font-size: 15px;
    width: 100%;
    height: 48px;
`;

const SubmitBtn = styled(BasicBtn)`
    font-size: 15px;
    width: 100%;
    height: 48px;
`;

const PopupBtn = styled.button`
    width: 50%;
    height: 100%;
    font-size: 15px;
    font-weight: ${fonts.weight.bold};
    text-align: center;
    padding: 17px 0;
`;

const CancelPopupBtn = styled(PopupBtn)`
    background-color: ${palette.white2};
    color: ${palette.purple0};
`;

const ConfirmPopupBtn = styled(PopupBtn)`
    background-color: ${palette.purple0};
    color: ${palette.white0};
`;

const PopupText = styled.p`
    font-size: 14px;
    line-height: 22px;
    color: ${palette.gray0};
`;

export default SettingSupporter;
export { useSettingSupporter };
