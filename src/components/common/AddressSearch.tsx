import React from "react";
import styled from "styled-components";
import media from "../../lib/styles/media";
import palette from "../../lib/styles/palette";
import TextInput from "./TextInput";
import { SearchedAddress, ValidState } from "./hooks/useAddressSearch";
import { fadeInFromBottom } from "../../lib/styles/animations";
import ErrorMessage from "./ErrorMessage";
import AddressSearchGuide from "./AddressSearchGuide";
import SearchedAddressList from "./SearchedAddressList";

import searchIco from "../../static/icons/global/ico_find.svg";

export type AddressSearchProp = {
    open: boolean;
    defaultProps?: {
        searchedAddresses: SearchedAddress[];
        validState: ValidState;
        searchInputRef: React.RefObject<HTMLInputElement>;
        onSearchInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
        onSearchedAddressesScroll: (
            e: React.UIEvent<HTMLElement>
        ) => Promise<void>;
        onAddressItemClick: (e: React.MouseEvent<HTMLLIElement>) => void;
    };
    children?: React.ReactNode;
    className?: string;
};

function AddressSearch(props: AddressSearchProp) {
    const { open, defaultProps, children, className } = props;

    if (!open) return null;
    if (!defaultProps) return <div className={className}>{children}</div>;

    const {
        searchedAddresses,
        validState,
        searchInputRef,
        onSearchInputChange,
        onSearchedAddressesScroll,
        onAddressItemClick,
    } = defaultProps;
    searchInputRef.current?.focus();

    return (
        <AddressSearchBlock className={className}>
            <AddressSearch.Styles.Inner>
                <AddressSearch.Styles.InputContainer>
                    <AddressSearch.Input
                        ref={searchInputRef}
                        error={validState === "INVALID"}
                        onChange={onSearchInputChange}
                        type="text"
                        placeholder="주소를 입력해주세요."
                    />
                    <AddressSearch.ErrorMessage
                        error={validState === "INVALID"}
                    >
                        검색결과가 없습니다. 정확한 주소인지 다시한번 확인해
                        주세요.
                    </AddressSearch.ErrorMessage>
                </AddressSearch.Styles.InputContainer>
                <AddressSearch.Guide
                    visible={
                        validState === "INITIAL" || validState === "INVALID"
                    }
                />
                <AddressSearch.SearchedAddressList
                    visible={validState === "VALID"}
                    onScroll={onSearchedAddressesScroll}
                    onItemClick={onAddressItemClick}
                    searchedAddresses={searchedAddresses}
                />
            </AddressSearch.Styles.Inner>
        </AddressSearchBlock>
    );
}

const AddressSearchBlock = styled.div`
    position: absolute;
    top: 28px;
    left: 0;
    width: 100%;
    height: 470px;
    background-color: ${palette.white3};
    animation: ${fadeInFromBottom} 0.15s ease-in-out forwards;

    ${media.mobile} {
        height: calc(100vh - 152px);
    }
`;

AddressSearch.Styles = {
    Inner: styled.div`
        display: grid;
        grid-template-rows: auto 1fr;
        row-gap: 28px;
        width: 592px;
        height: 100%;
        margin: 0 auto;

        ${media.tablet} {
            width: 100%;
        }

        ${media.mobile} {
            row-gap: 20px;
            padding: 0;
        }
    `,
    InputContainer: styled.div`
        ${media.mobile} {
            padding: 0 28px;
        }
    `,
};

AddressSearch.Input = styled(TextInput)`
    background-image: url(${searchIco});
    background-repeat: no-repeat;
    background-position: bottom 14px right 12px;
    background-size: 40px;
    padding: 21px 52px 21px 20px;

    ${media.mobile} {
        background-position: bottom 7px right 10px;
        background-size: 24px;
        padding: 10px 34px 9px 12px;
    }
`;

AddressSearch.ErrorMessage = ErrorMessage;
AddressSearch.Guide = AddressSearchGuide;
AddressSearch.SearchedAddressList = SearchedAddressList;

export default AddressSearch;
