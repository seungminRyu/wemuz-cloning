import React, { useEffect, useRef, useState } from "react";
import useDebouncer from "../../../lib/hooks/useDebouncer";
import {
    handleAxiosError,
    isTargetElementTotallyScrolled,
} from "../../../lib/utils";
import { fetchSearchedAddress } from "../../../lib/api/myPage/api";

export type ValidState = "INITIAL" | "VALID" | "INVALID";

export type SearchedAddress = {
    name: string;
    address1: string;
    address2: string;
    lat: string;
    lng: string;
};

type AddressInfo = {
    address_name: any;
    category_group_code: any;
    category_group_name: any;
    category_name: any;
    distance: any;
    id: any;
    phone: any;
    place_name: any;
    place_url: any;
    road_address_name: any;
    x: any;
    y: any;
};

type SearchState = {
    page: number;
    query: string;
    isPageEnd: boolean;
};

const initialSearchState = {
    page: 1,
    query: "",
    isPageEnd: false,
};

function useAddressSearch(toggleAddressSearchOpen: () => void) {
    const [selectedAddress, setSelectedAddress] = useState<{
        name: string;
        address1: string;
        address2: string;
        lat: string;
        lng: string;
    } | null>(null);
    const [searchedAddresses, setSearchedAddresses] = useState<
        SearchedAddress[]
    >([]);
    const [validState, setValidState] = useState<ValidState>("INITIAL");
    const searchInputRef = useRef<HTMLInputElement>(null);
    const searchState = useRef<SearchState>(initialSearchState);
    const debouncer = useDebouncer();

    useEffect(() => {
        if (!searchInputRef.current) return;
        searchInputRef.current.focus();
    });

    const onSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        debouncer(300, async () => {
            searchState.current.query = e.target.value;
            searchState.current.page = 1;
            searchState.current.isPageEnd = false;

            if (!searchState.current.query) {
                setValidState("INITIAL");
                setSearchedAddresses([]);
                return;
            }

            try {
                const {
                    data: {
                        documents,
                        meta: { is_end },
                    },
                }: any = await fetchSearchedAddress({
                    query: searchState.current.query,
                    page: searchState.current.page,
                });

                searchState.current.isPageEnd = is_end;
                if (documents.length === 0) {
                    setValidState("INVALID");
                    return;
                } else {
                    setValidState("VALID");
                    let nextSearchedAddresses = documents.map(
                        (elem: AddressInfo) => {
                            return {
                                name: elem.address_name,
                                address1: elem.road_address_name
                                    ? `${elem.road_address_name} ${elem.place_name}`
                                    : elem.place_name,
                                address2: elem.address_name,
                                lat: elem.y,
                                lng: elem.x,
                            };
                        }
                    );
                    setSearchedAddresses(nextSearchedAddresses);
                }
            } catch (e) {
                handleAxiosError(e);
            }
        });
    };

    const onSearchedAddressesScroll = async (e: React.UIEvent<HTMLElement>) => {
        if (
            searchState.current.query &&
            !searchState.current.isPageEnd &&
            isTargetElementTotallyScrolled(e.target)
        ) {
            searchState.current.page = searchState.current.page + 1;

            try {
                const {
                    data: {
                        documents,
                        meta: { is_end },
                    },
                }: any = await fetchSearchedAddress({
                    query: searchState.current.query,
                    page: searchState.current.page,
                });

                searchState.current.isPageEnd = is_end;
                let nextSearchedAddresses = documents.map(
                    (elem: AddressInfo) => {
                        return {
                            address1: elem.road_address_name
                                ? `${elem.road_address_name} ${elem.place_name}`
                                : elem.place_name,
                            address2: elem.address_name,
                        };
                    }
                );

                setSearchedAddresses(
                    searchedAddresses.concat(nextSearchedAddresses)
                );
            } catch (e) {
                handleAxiosError(e);
            }
        }
    };

    const onAddressItemClick = (e: React.MouseEvent<HTMLLIElement>) => {
        const nextSelectedAddress = {
            name: e.currentTarget.dataset.name as string,
            address1: e.currentTarget.dataset.address1 as string,
            address2: e.currentTarget.dataset.address2 as string,
            lat: e.currentTarget.dataset.lat as string,
            lng: e.currentTarget.dataset.lng as string,
        };
        setSelectedAddress(nextSelectedAddress);
        setValidState("INITIAL");
        setSearchedAddresses([]);
        toggleAddressSearchOpen();
    };

    const getDefaultProps = () => ({
        searchedAddresses,
        validState,
        searchInputRef,
        onSearchInputChange,
        onSearchedAddressesScroll,
        onAddressItemClick,
    });

    const getInputProps = () => ({
        ref: searchInputRef,
        error: validState === "INVALID",
        onChange: onSearchInputChange,
        type: "text",
        placeholder: "주소를 입력해주세요.",
    });

    const getErrorMessageProps = () => ({
        error: validState === "INVALID",
    });

    const getGuideProps = () => ({
        visible: validState === "INITIAL" || validState === "INVALID",
    });

    const getSearchedAddressList = () => ({
        visible: validState === "VALID",
        onScroll: onSearchedAddressesScroll,
        onItemClick: onAddressItemClick,
        searchedAddresses: searchedAddresses,
    });

    return {
        getDefaultProps,
        getInputProps,
        getErrorMessageProps,
        getGuideProps,
        getSearchedAddressList,
        selectedAddress,
        setValidState,
    };
}

export default useAddressSearch;
