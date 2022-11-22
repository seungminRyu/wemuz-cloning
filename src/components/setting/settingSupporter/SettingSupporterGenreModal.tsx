import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import styled from "styled-components";
import fonts from "../../../lib/styles/fonts";
import palette from "../../../lib/styles/palette";
import { useSettingSupporter } from "../../../pages/setting/SettingSupporter";
import { ModalContainer } from "../../../styles/Containers";
import CheckBoxInput from "../../common/CheckBoxInput";
import ModalTemplatexx from "../../common/ModalTemplatexx";
import {
    SettingModalCloseBtn,
    SettingModalCloseIco,
    SettingModalDescription,
    SettingModalHeading,
} from "../SettingStyles";

export type SettingSupporterGenreModalProp = {
    open: boolean;
    toggleOpen: () => void;
    genres: Array<{
        id: number;
        name: string;
        url: string;
    }>;
};

function SettingSupporterGenreModal(props: SettingSupporterGenreModalProp) {
    const { open, toggleOpen, genres } = props;
    const {
        supporterData: { genre: userGenres },
        dispatchSupporterData,
    } = useSettingSupporter();
    const [selected, setSelected] = useState<Array<number>>([]);

    useEffect(() => {
        setSelected(userGenres);
    }, [userGenres]);

    const addGenre = (targetGenre: number) => {
        const nextSelected = [...selected, targetGenre];
        setSelected(nextSelected);
    };

    const removeGenre = (targetGenre: number) => {
        const nextSelected = selected.filter((elem) => elem !== targetGenre);
        setSelected(nextSelected);
    };

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const checked = e.target.checked;
        if (selected.length === 5 && checked) {
            e.preventDefault();
            toast.warning("장르는 최대 5개까지 선택할 수 있습니다.");
            return;
        }

        const value = parseInt(e.target.value);
        if (checked) {
            addGenre(value);
        } else {
            removeGenre(value);
        }
    };

    const onCloseModal = () => {
        setSelected(userGenres);
        toggleOpen();
    };

    const onConfirmBtnClick = () => {
        dispatchSupporterData({ type: "GENRE", data: selected });
        toggleOpen();
    };

    return (
        <ModalTemplatexx isVisible={open} onClick={onCloseModal}>
            <StyledModalContainer>
                <TopContainer>
                    <SettingModalCloseBtn onClick={onCloseModal}>
                        <SettingModalCloseIco />
                    </SettingModalCloseBtn>
                    <SettingModalHeading>
                        어떤 장르를 좋아하시나요?
                    </SettingModalHeading>
                    <SettingModalDescription>
                        선호하는 장르를 최대 5개 선택해 주세요. 선호 장르와
                        연관된 정보를 최우선적으로 제공해 드립니다.
                    </SettingModalDescription>
                </TopContainer>
                <GenreSelectGrid>
                    {genres.map((elem, i) => (
                        <CheckBoxInput
                            key={`genre-check-box-${i}`}
                            name="genre"
                            id={`genre-${elem.id}`}
                            value={elem.id}
                            checked={selected.includes(elem.id)}
                            onChange={onChange}
                            selector={
                                <GenreSelectItem htmlFor={`genre-${elem.id}`}>
                                    {elem.name}
                                </GenreSelectItem>
                            }
                        />
                    ))}
                </GenreSelectGrid>
                <ConfirmBtn onClick={onConfirmBtnClick}>변경하기</ConfirmBtn>
            </StyledModalContainer>
        </ModalTemplatexx>
    );
}

const StyledModalContainer = styled(ModalContainer)`
    display: grid;
    grid-template-rows: auto 1fr 56px;
    overflow: hidden;
    padding: 40px 0 0;
`;

const TopContainer = styled.div`
    height: 150px;
    padding: 0 20px;
`;

const GenreSelectGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: 48px;
    column-gap: 16px;
    row-gap: 16px;
    overflow-y: scroll;
    padding: 0 20px 16px;
`;

const GenreSelectItem = styled.label`
    display: grid;
    place-content: center;
    width: 100%;
    height: 100%;
    color: ${palette.gray0};
    font-size: 14px;
    text-align: center;
    border: 1px solid ${palette.gray2};
    border-radius: 4px;
    cursor: pointer;
    transition: border 0.2s, background-color 0.2s;

    input:checked + & {
        color: ${palette.purple0};
        border: 1px solid ${palette.purple0};
        background-color: ${palette.purple5};
    }
`;

const ConfirmBtn = styled.button`
    width: 100%;
    height: 100%;
    font-size: 15px;
    font-weight: ${fonts.weight.bold};
    color: ${palette.white0};
    background-color: ${palette.purple0};
`;

export default SettingSupporterGenreModal;
