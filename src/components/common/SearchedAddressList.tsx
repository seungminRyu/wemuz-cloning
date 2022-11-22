import React from "react";
import styled from "styled-components";
import fonts from "../../lib/styles/fonts";
import media from "../../lib/styles/media";
import palette from "../../lib/styles/palette";
import { SearchedAddress } from "./hooks/useAddressSearch";

export type SearchedAddressListProp = {
    visible: boolean;
    onScroll: (e: any) => Promise<void>;
    onItemClick: (e: React.MouseEvent<HTMLLIElement>) => void;
    searchedAddresses: SearchedAddress[];
    className?: string;
};

function SearchedAddressList(props: SearchedAddressListProp) {
    const { visible, onScroll, onItemClick, searchedAddresses, className } =
        props;

    return visible ? (
        <SearchedAddressListBlock className={className} onScroll={onScroll}>
            {searchedAddresses.map((elem, i) => (
                <SearchedAddressItem
                    data-name={elem.name}
                    data-address1={elem.address1}
                    data-address2={elem.address2}
                    data-lat={elem.lat}
                    data-lng={elem.lng}
                    key={i}
                    onClick={onItemClick}
                >
                    <p className="address1">{elem.address1}</p>
                    <p className="address2">
                        <span>지번</span> {elem.address2}
                    </p>
                </SearchedAddressItem>
            ))}
        </SearchedAddressListBlock>
    ) : (
        <></>
    );
}

const SearchedAddressListBlock = styled.ul`
    width: 100%;
    height: 100%;
    border-radius: 10px;
    overflow-y: scroll;
`;

const SearchedAddressItem = styled.li`
    ${fonts.size.scale18}
    cursor: pointer;
    padding: 14px 12px;

    & + & {
        border-top: 1px solid ${palette.gray3};
    }

    .address1 {
        ${fonts.lineHeight.scale18}
    }

    .address2 {
        display: inline-flex;
        align-items: center;
        color: ${palette.gray1};
        margin-top: 8px;

        span {
            ${fonts.size.scale14}
            display: inline-block;
            color: ${palette.white0};
            border-radius: 2px;
            background-color: ${palette.gray2};
            padding: 5px 6px 4px;
            margin-right: 6px;
        }
    }

    ${media.mobile} {
        padding: 12px 32px;

        & + & {
            border-top: 1px solid ${palette.gray5};
        }

        .address2 {
            margin-top: 6px;

            span {
                padding: 5px 4px 4px;
                margin-right: 6px;
            }
        }
    }
`;

SearchedAddressList.Item = SearchedAddressItem;

export default SearchedAddressList;
