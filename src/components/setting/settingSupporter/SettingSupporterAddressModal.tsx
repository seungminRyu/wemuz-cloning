import React from "react";
import styled from "styled-components";
import { useSettingSupporter } from "../../../pages/setting/SettingSupporter";
import { ModalContainer } from "../../../styles/Containers";
import AddressSearch from "../../common/AddressSearch";
import useAddressSearch from "../../common/hooks/useAddressSearch";
import ModalTemplatexx from "../../common/ModalTemplatexx";
import palette from "../../../lib/styles/palette";
import {
    SettingModalCloseBtn,
    SettingModalCloseIco,
    SettingModalDescription,
    SettingModalHeading,
} from "../SettingStyles";
import media from "../../../lib/styles/media";

export type SettingSupporterAddressModalProp = {
    open: boolean;
    toggleOpen: () => void;
};

function SettingSupporterAddressModal(props: SettingSupporterAddressModalProp) {
    const { open, toggleOpen } = props;
    const { dispatchSupporterData } = useSettingSupporter();
    const {
        getDefaultProps,
        getInputProps,
        getErrorMessageProps,
        getGuideProps,
        getSearchedAddressList,
        setValidState,
    } = useAddressSearch(toggleOpen);
    const { onAddressItemClick } = getDefaultProps();

    const onItemClick = (e: React.MouseEvent<HTMLLIElement>) => {
        const depth1 = e.currentTarget.dataset.name?.split(" ")[0] || "";
        const depth2 = e.currentTarget.dataset.name?.split(" ")[1] || "";
        const nextSelectedAddress = {
            name: e.currentTarget.dataset.name as string,
            depth1,
            depth2,
            lat: e.currentTarget.dataset.lat as string,
            lng: e.currentTarget.dataset.lng as string,
        };
        onAddressItemClick(e);
        dispatchSupporterData({ type: "ADDRESS", data: nextSelectedAddress });
    };

    const onClose = () => {
        toggleOpen();
        setValidState("INITIAL");
    };

    const searchedAddressListProps = {
        ...getSearchedAddressList(),
        onItemClick,
    };

    return (
        <ModalTemplatexx isVisible={open} onClick={onClose}>
            <ModalContainer>
                <StyledAddressSearch open={open}>
                    <div>
                        <SettingModalCloseBtn onClick={onClose}>
                            <SettingModalCloseIco />
                        </SettingModalCloseBtn>
                        <SettingModalHeading>
                            어떤 지역에 주로 방문하시나요?
                        </SettingModalHeading>
                        <SettingModalDescription>
                            주로 방문하시는 주소를 입력해 주세요. 주소와 연관된
                            정보를 최우선적으로 제공해 드립니다.
                        </SettingModalDescription>
                        <StyledInput {...getInputProps()} />
                        <StyledErrorMessage {...getErrorMessageProps()}>
                            검색결과가 없습니다. 주소를 다시 확인해 주세요.
                        </StyledErrorMessage>
                    </div>
                    <StyledGuide {...getGuideProps()} />
                    <StyledSearchedList {...searchedAddressListProps} />
                </StyledAddressSearch>
            </ModalContainer>
        </ModalTemplatexx>
    );
}

const StyledAddressSearch = styled(AddressSearch)`
    position: relative;
    display: grid;
    grid-template-rows: auto 1fr;
    row-gap: 20px;
    height: 100%;
`;

const StyledErrorMessage = styled(AddressSearch.ErrorMessage)`
    height: auto;
    font-size: 14px;
    line-height: 20px;
    background-size: 14px;
    background-position: 0 5px;
    padding-left: 20px;
    margin-top: 10px;
`;

const StyledInput = styled(AddressSearch.Input)`
    font-size: 14px;
    background-position: bottom 7px right 10px;
    background-size: 24px;
    padding: 11px 12px;
    margin-top: 28px;
`;

const StyledGuide = styled(AddressSearch.Guide)`
    font-size: 13px;
    padding: 0;
    margin-top: 0;

    .search-guide-inner {
        height: auto;
        padding: 16px 12px;
    }

    ul {
        margin-top: 12px;
    }

    li {
        padding-left: 8px;

        &:before {
            top: 5px;
            width: 4px;
            height: 4px;
        }
    }

    li + li {
        margin-top: 6px;
    }
`;

// css 적용 우선순위를 위해서 item 선택자는 li를 붙인다.
const StyledSearchedList = styled(AddressSearch.SearchedAddressList)`
    height: 314px;
    padding-bottom: 12px;
    margin-top: 0;

    li${AddressSearch.SearchedAddressList.Item} {
        font-size: 14px;
        padding: 12px 8px;

        .address1 {
            line-height: 20px;
        }

        .address2 {
            margin-top: 6px;

            span {
                font-size: 12px;
                padding: 4px 4px 3px;
            }
        }
    }

    li${AddressSearch.SearchedAddressList.Item}
        + li${AddressSearch.SearchedAddressList.Item} {
        border-top: 1px solid ${palette.gray5};
    }

    ${media.mobile} {
        height: 100%;
        padding-bottom: 12px;
    }
`;

export default SettingSupporterAddressModal;
