import { useEffect, useState } from "react";
import styled from "styled-components";
import { getGenres } from "../../../lib/api/core/api";
import useToggle from "../../../lib/hooks/useToggle";
import palette from "../../../lib/styles/palette";
import { handleAxiosError } from "../../../lib/utils";
import { useSettingSupporter } from "../../../pages/setting/SettingSupporter";
import {
    SettingEditBtn,
    SettingEmptyInfo,
    SettingLabel,
    SettingLabelContainer,
} from "../SettingStyles";
import SettingSupporterGenreModal from "./SettingSupporterGenreModal";

export type SettingSupporterGenreProp = {};

function SettingSupporterGenre(props: SettingSupporterGenreProp) {
    const [modalOpen, toggleModalOpen] = useToggle(false);
    const [genres, setGenres] = useState<
        Array<{
            id: number;
            name: string;
            url: string;
        }>
    >([]);
    const {
        supporterData: { genre: userGenres },
    } = useSettingSupporter();

    useEffect(() => {
        const initGenres = async () => {
            try {
                await getGenres().then((res) => {
                    setGenres(res);
                });
            } catch (e) {
                handleAxiosError(e);
                window.location.reload();
            }
        };

        initGenres();
    }, []);

    const onEditBtnClick = () => {
        toggleModalOpen();
    };

    const getGenreName = (targetId: number) =>
        genres.find((genre) => genre.id === targetId)?.name;

    return (
        <SettingSupporterGenreBlock>
            <SettingLabelContainer>
                <SettingLabel>선호 장르</SettingLabel>
                <SettingEditBtn onClick={onEditBtnClick}>
                    장르 변경
                </SettingEditBtn>
            </SettingLabelContainer>
            <SelectedGenres>
                {userGenres.length === 0 ? (
                    <SettingEmptyInfo>
                        등록된 장르 정보가 없습니다.
                    </SettingEmptyInfo>
                ) : (
                    userGenres.map((elem, i) => (
                        <SelectedGenreItem key={`selected-genre-item-${i}`}>
                            {getGenreName(elem)}
                        </SelectedGenreItem>
                    ))
                )}
            </SelectedGenres>
            <SettingSupporterGenreModal
                open={modalOpen}
                toggleOpen={toggleModalOpen}
                genres={genres}
            />
        </SettingSupporterGenreBlock>
    );
}

const SettingSupporterGenreBlock = styled.div`
    margin-top: 48px;
`;

const SelectedGenres = styled.ul`
    margin-top: 8px;
`;

const SelectedGenreItem = styled.li`
    position: relative;
    font-size: 14px;
    color: ${palette.gray0};
    padding-left: 10px;

    & + & {
        margin-top: 6px;
    }

    &:before {
        position: absolute;
        top: 4px;
        left: 0;
        content: "";
        display: inline-block;
        width: 4px;
        height: 4px;
        background-color: ${palette.gray0};
        border-radius: 50%;
    }
`;

export default SettingSupporterGenre;
