import { useReducer } from "react";
import styled, { keyframes } from "styled-components";
import AliasInput from "../../common/AliasInput";
import AvatarInput from "../../common/AvatarInput";
import AddressInput from "../../common/AddressInput";
import PositionSelect from "../../common/PositionSelect";
import GenreSelect from "../../common/GenreSelect";
import media from "../../../lib/styles/media";
import fonts from "../../../lib/styles/fonts";
import palette from "../../../lib/styles/palette";
import AddressSearch from "../../common/AddressSearch";
import useAddressSearch from "../../common/hooks/useAddressSearch";
import useAvatarInput from "../../common/hooks/useAvatarInput";
import useAliasInput from "../../common/hooks/useAliasInput";

export type CreateMusicianFormProp = {
    curIdx: number;
    addressSearchOpen: boolean;
    toggleAddressSearchOpen: () => void;
};

const headerTextMap = {
    header: [
        "어떤 활동명으로 활동하시나요?",
        "프로필 사진이 있으신가요?",
        "어디에서 주로 활동하시나요?",
        "어떤 포지션으로 활동하시나요?",
        "어떤 장르로 활동하시나요?",
    ],
    description: [
        "뮤지션으로의 첫걸음, 나의 활동명을 적어주세요. (10자 이내)",
        "활동 주소를 입력해 주세요. 주소와 연관된 정보를 제공해 드립니다.",
        "활동 포지션을 선택해주세요. 선택한 포지션은 다른 분에게 노출됩니다.",
        "활동하시는 장르를 선택해 주세요. 장르와 연관된 정보를 제공해 드립니다.",
    ],
};

const actionTypeMap = ["ALIAS", "AVATAR", "ADDRESS", "POSITION", "GENRE"];

type Action = {
    type: "ALIAS" | "AVATAR" | "ADDRESS" | "POSITION" | "GENRE";
    data: any;
};

type MusicianInfo = {
    alias: string | null;
    avatar: File | null;
    address: {
        name: string;
        depth1: string;
        depth2: string;
        lat: string;
        lng: string;
    } | null;
    position: number | null;
    genre: Array<number>;
};

const initialMusicianInfo: MusicianInfo = {
    alias: null,
    avatar: null,
    address: null,
    position: null,
    genre: [],
};

const musicianInfoReducer = (state: MusicianInfo, action: Action) => {
    switch (action.type) {
        case "ALIAS":
            return {
                ...state,
                alias: action.data,
            };
        case "AVATAR":
            return {
                ...state,
                avatar: action.data,
            };
        case "ADDRESS":
            return {
                ...state,
                address: action.data,
            };
        case "POSITION":
            return {
                ...state,
                position: action.data,
            };
        case "GENRE":
            return {
                ...state,
                genre: action.data,
            };
        default:
            throw new Error("Unhandled type of action");
    }
};

function CreateMusicianForm(props: CreateMusicianFormProp) {
    const { curIdx, addressSearchOpen, toggleAddressSearchOpen } = props;
    const [musicianInfo, dispatchMusicianInfo] = useReducer(
        musicianInfoReducer,
        initialMusicianInfo
    );
    const { onChange, validState, errorText, alias } = useAliasInput();
    const { selectedAddress, getDefaultProps: getAddressSearchDefaultProps } =
        useAddressSearch(toggleAddressSearchOpen);
    const { getDefaultProps: getAvatarInputDefaultProps } = useAvatarInput();

    return (
        <CreateMusicianFormBlock>
            <HeaderContainer>
                <Heading>{headerTextMap.header[curIdx]}</Heading>
                <Description>{headerTextMap.description[curIdx]}</Description>
            </HeaderContainer>
            <ComponentWrapper curIdx={curIdx}>
                <AliasInput
                    onChange={onChange}
                    error={validState.current === "INVALID"}
                    errorText={errorText}
                    value={alias}
                />
                <AvatarInput defalutProps={getAvatarInputDefaultProps()} />
                <AddressInput
                    toggleSearchOpen={toggleAddressSearchOpen}
                    selectedAddress={selectedAddress?.name as string}
                />
                <PositionSelect />
                <GenreSelect />
            </ComponentWrapper>
            <AddressSearch
                open={addressSearchOpen}
                defaultProps={getAddressSearchDefaultProps()}
            />
        </CreateMusicianFormBlock>
    );
}

const CreateMusicianFormBlock = styled.div`
    position: relative;
    padding-top: 28px;

    ${media.mobile} {
        display: grid;
        grid-template-rows: 64px 1fr;
        width: 100%;
        padding: 28px 28px 0;
    }
`;

const HeaderContainer = styled.div`
    text-align: center;

    ${media.mobile} {
        text-align: start;
    }
`;

const Heading = styled.h3`
    ${fonts.size.scale28}
    font-weight: ${fonts.weight.bold};
    color: ${palette.purple0};
`;

const Description = styled.p`
    ${fonts.size.scale18}
    ${fonts.lineHeight.scale18}
    color: ${palette.gray1};
    margin-top: 16px;

    ${media.mobile} {
        color: #666666;
        margin-top: 10px;
    }
`;

const fadeInFromLeft = keyframes`
    0% {
        opacity: 0;
        transform: translateX(10px);
    }
    100% {
        opacity: 100%;
        transform: translateY(0);
    }
`;

const ComponentWrapper = styled.div<{ curIdx: number }>`
    & > div {
        display: none;
        animation: ${fadeInFromLeft} 0.3s ease-in-out forwards;
    }

    & > div:nth-child(${(props) => props.curIdx + 1}) {
        display: block;
    }
`;

export default CreateMusicianForm;
