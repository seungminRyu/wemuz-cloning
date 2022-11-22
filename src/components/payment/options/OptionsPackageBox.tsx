import React, { useEffect, useRef, useState } from "react";
import styled, { css } from "styled-components";
import useToggle from "../../../lib/hooks/useToggle";
import media from "../../../lib/styles/media";
import palette from "../../../lib/styles/palette";
import { SelectedPackages } from "../../../pages/payment";
import OptionsPackageInfo from "./OptionsPackageInfo";
import OptionsPackageCount from "./OptionsPackageCount";
import OptionsPackageOptionContainer from "./OptionsPackageOptionContainer";
import { toast } from "react-toastify";

export type OptionsPackageBoxProp = {
    priceAmount: number;
    setPriceAmount: React.Dispatch<React.SetStateAction<number>>;
    packageCountAmount: number;
    setPackageCountAmount: React.Dispatch<React.SetStateAction<number>>;
    isSubmitted: boolean;
    userSelectionResult: React.MutableRefObject<{
        priceAmount: number;
        packages: SelectedPackages;
    }>;
    packageInfo: PackageInfo;
    isPackageOptionsFilledList: React.MutableRefObject<boolean[]>;
    packageIdx: number;
};

export type PackageInfo = {
    id: number;
    name: string;
    price: number;
    description: string;
    stockCount: number;
    items: {
        name: string;
        photo: string;
        count: number;
    }[];
    options: {
        id: number;
        name: string;
        description: string;
        sequence_number: number;
    }[];
};

export type SelectedOptions = ({ name: string; id: number } | null)[];

function OptionsPackageBox(props: OptionsPackageBoxProp) {
    const {
        priceAmount,
        setPriceAmount,
        packageCountAmount,
        setPackageCountAmount,
        packageInfo,
        isSubmitted,
        userSelectionResult,
        isPackageOptionsFilledList,
        packageIdx,
    } = props;
    const [isSelected, toggleIsSelected] = useToggle(false);
    const [
        isSingleOptionSelected,
        toggleIsSingleOptionSelected,
        setIsSingleOptionSelected,
    ] = useToggle(false);
    const [selectedOptions, setSelectedOptions] = useState<SelectedOptions>([]);
    const [selectedCnt, setSelectedCnt] = useState<number>(0);
    const [curOpenedOptionIdx, setCurOpenedOptionIdx] = useState<number>(-1);
    const singleOptionInputRef = useRef<HTMLInputElement>(null);
    const isPackageHasOptions = packageInfo.options.length !== 0;

    // 패키지 갯수가 늘어낫을때 옵션 체크 제대로 되지 않음

    useEffect(() => {
        const setUserSelectionResult = () => {
            let options = packageInfo.options.map((elem) => ({
                id: elem.id,
                name: elem.name,
                count: selectedOptions.filter(
                    (selectedOptionsElem) => selectedOptionsElem?.id === elem.id
                ).length,
            }));

            userSelectionResult.current.packages =
                userSelectionResult.current?.packages.concat({
                    id: packageInfo.id,
                    count: selectedCnt,
                    price: packageInfo.price,
                    name: packageInfo.name,
                    items: packageInfo.items,
                    options,
                });
        };

        if (isSubmitted && isSelected) {
            setUserSelectionResult();
        }
    }, [isSubmitted]);

    if (!packageInfo) return null;
    const { id, price, name, description, stockCount, items, options } =
        packageInfo;

    const getBoxState = () => {
        if (stockCount === 0) return "SOLDOUT";
        if (isSelected) {
            return "SELECTED";
        } else {
            return "DEFAULT";
        }
    };

    const updateIsPackageOptionsFilled = () => {
        let isAllOptionsSelected = true;
        selectedOptions.forEach((option) => {
            isAllOptionsSelected = isAllOptionsSelected && !!option;
        });
        isPackageOptionsFilledList.current[packageIdx] = isAllOptionsSelected;
    };

    const resetIsPackageOptionsFilled = () => {
        setSelectedOptions([]);
        isPackageOptionsFilledList.current[packageIdx] = true;
    };

    const setIsPackageOptionsFilled = () => {
        setSelectedOptions([null]);
        isPackageOptionsFilledList.current[packageIdx] = false;
    };

    const resetSingleOption = (): void => {
        if (!singleOptionInputRef.current) return;
        singleOptionInputRef.current.checked = false;
        setIsSingleOptionSelected(false);
        updateIsPackageOptionsFilled();
    };

    const cancelPackage = () => {
        const canceledPriceAmount = price * selectedCnt;
        const nextPriceAmount = priceAmount - canceledPriceAmount;
        setPriceAmount(nextPriceAmount);
        const nextPackageCountAmount = packageCountAmount - selectedCnt;
        setPackageCountAmount(nextPackageCountAmount);
        resetSingleOption();
        setSelectedCnt(0);
        if (isPackageHasOptions) {
            resetIsPackageOptionsFilled();
            updateIsPackageOptionsFilled();
        }
        toggleIsSelected();
    };

    const selectPackage = (e: React.MouseEvent) => {
        if (packageCountAmount === 5) {
            e.preventDefault();
            toast.warning("예매 가능한 패키지 갯수는 총합 최대 5개 입니다.");
            return;
        }
        const nextPriceAmount = priceAmount + price;
        setPriceAmount(nextPriceAmount);
        const nextPackageCountAmount = packageCountAmount + 1;
        setPackageCountAmount(nextPackageCountAmount);
        setSelectedCnt(1);
        if (isPackageHasOptions) {
            setIsPackageOptionsFilled();
            updateIsPackageOptionsFilled();
        }
        toggleIsSelected();
    };

    const onPackageClick = (e: React.MouseEvent): void => {
        if (isSelected) {
            cancelPackage();
        } else {
            selectPackage(e);
        }
    };

    const onCountUpBtnClick = (): void => {
        if (selectedCnt >= stockCount) return;
        if (packageCountAmount === 5) {
            toast.warning("예매 가능한 패키지 갯수는 총합 최대 5개 입니다.");
            return;
        }
        const nextSelectedCnt = selectedCnt + 1;
        setSelectedCnt(nextSelectedCnt);
        setPriceAmount(priceAmount + price);
        const nextPackageCountAmount = packageCountAmount + 1;
        setPackageCountAmount(nextPackageCountAmount);
        if (isPackageHasOptions && !isSingleOptionSelected) {
            setSelectedOptions(selectedOptions.concat(null));
        }
        updateIsPackageOptionsFilled();
    };

    const onCountDownBtnClick = (): void => {
        if (selectedCnt === 1) return;
        const nextSelectedCnt = selectedCnt - 1;
        setSelectedCnt(nextSelectedCnt);
        setPriceAmount(priceAmount - price);
        const nextPackageCountAmount = packageCountAmount - 1;
        setPackageCountAmount(nextPackageCountAmount);

        if (isPackageHasOptions && !isSingleOptionSelected) {
            setSelectedOptions(selectedOptions.slice(0, nextSelectedCnt));
        }
        if (nextSelectedCnt === 1) {
            resetSingleOption();
        }
        updateIsPackageOptionsFilled();
    };

    const onSingleOptionLabelClick = (): void => {
        if (selectedCnt === 1) return;
        const nextSelectedOptions = isSingleOptionSelected
            ? [...selectedOptions, ...Array(selectedCnt - 1).fill(null)]
            : [null];
        setSelectedOptions(nextSelectedOptions);
        toggleIsSingleOptionSelected();
        updateIsPackageOptionsFilled();
    };

    const onOptionSelectorClick = (targetOptionIdx: number) => {
        const nextCurOpenedOptionIdx =
            targetOptionIdx !== curOpenedOptionIdx ? targetOptionIdx : -1;
        setCurOpenedOptionIdx(nextCurOpenedOptionIdx);
    };

    const updateSelectedOptions = (idx: number, id: number, name: string) => {
        const nextSelctedOptions = selectedOptions;
        nextSelctedOptions.splice(idx, 1, {
            name,
            id,
        });
        setSelectedOptions(nextSelctedOptions);
    };

    const onOptionItemClick = (
        targetOptionIdx: number,
        targetOptionName: string,
        targetOptionId: number
    ) => {
        updateSelectedOptions(
            targetOptionIdx,
            targetOptionId,
            targetOptionName
        );
        updateIsPackageOptionsFilled();
    };

    const onSelectOutsideClick = (targetOptionIdx: number) => {
        if (targetOptionIdx !== curOpenedOptionIdx) return;
        setCurOpenedOptionIdx(-1);
    };

    return (
        <Block state={getBoxState()}>
            <OptionsPackageInfo
                idx={packageIdx}
                price={price}
                name={name}
                stockCount={stockCount}
                description={description}
                items={items}
                onPackageClick={onPackageClick}
            />
            <PurchaseOptionContainer isSelected={isSelected}>
                <OptionsPackageCount
                    selectedCnt={selectedCnt}
                    stockCount={stockCount}
                    onCountUpBtnClick={onCountUpBtnClick}
                    onCountDownBtnClick={onCountDownBtnClick}
                />
                {isPackageHasOptions && (
                    <OptionsPackageOptionContainer
                        idx={packageIdx}
                        selectedCnt={selectedCnt}
                        options={options}
                        selectedOptions={selectedOptions}
                        singleOptionInputRef={singleOptionInputRef}
                        isSingleOptionSelected={isSingleOptionSelected}
                        curOpenedOptionIdx={curOpenedOptionIdx}
                        onSingleOptionLabelClick={onSingleOptionLabelClick}
                        onSelectOutsideClick={onSelectOutsideClick}
                        onOptionSelectorClick={onOptionSelectorClick}
                        onOptionItemClick={onOptionItemClick}
                    />
                )}
            </PurchaseOptionContainer>
        </Block>
    );
}

const Block = styled.div<{
    state: "DEFAULT" | "SELECTED" | "SOLDOUT";
}>`
    border-radius: 4px;
    padding: 32px 28px 28px;
    transition: background-color 0.2s, border 0.2s;
    ${(props) => {
        switch (props.state) {
            case "DEFAULT":
                return css`
                    background-color: ${palette.white0};
                    border: 1px solid ${palette.gray3};
                `;
            case "SELECTED":
                return css`
                    background-color: ${palette.purple5};
                    border: 1px solid ${palette.purple0};
                `;
            case "SOLDOUT":
                return css`
                    background-color: ${palette.white2};
                    border: 1px solid ${palette.gray3};
                    pointer-events: none;
                `;
        }
    }}

    &:hover {
        border: 1px solid ${palette.purple0};
    }

    &:not(:first-child) {
        margin-top: 16px;
    }

    ${media.mobile} {
        padding: 24px 16px 20px;

        &:not(:first-child) {
            margin-top: 10px;
        }
    }
`;

const PurchaseOptionContainer = styled.div<{ isSelected: boolean }>`
    display: ${(props) => (props.isSelected ? "grid" : "none")};
    grid-template-columns: auto 1fr;
    margin-top: 48px;

    ${media.tablet} {
        grid-template-columns: 1fr;
    }

    ${media.mobile} {
        margin-top: 28px;
    }
`;

export default OptionsPackageBox;
