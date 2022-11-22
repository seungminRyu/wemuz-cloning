import { useState } from "react";
import styled from "styled-components";
import media from "../../lib/styles/media";
import { getSampleImage } from "../../lib/styles/utils";
import SelectGrid, { SelectGridItem } from "./SelectGrid";

export type PositionSelectProp = {};

const positions = [
    {
        img: getSampleImage({ width: 180, height: 180 }),
        name: "보컬",
    },
    {
        img: getSampleImage({ width: 180, height: 180 }),
        name: "일렉기타",
    },
    {
        img: getSampleImage({ width: 180, height: 180 }),
        name: "드럼",
    },
    {
        img: getSampleImage({ width: 180, height: 180 }),
        name: "보컬a",
    },
    {
        img: getSampleImage({ width: 180, height: 180 }),
        name: "일렉기타d",
    },
    {
        img: getSampleImage({ width: 180, height: 180 }),
        name: "드럼s",
    },
    {
        img: getSampleImage({ width: 180, height: 180 }),
        name: "보컬b",
    },
    {
        img: getSampleImage({ width: 180, height: 180 }),
        name: "일렉기타f",
    },
    {
        img: getSampleImage({ width: 180, height: 180 }),
        name: "드럼a",
    },
];

function PositionSelect(props: PositionSelectProp) {
    const [selectedPosition, setSelectedPosition] = useState<string>("");

    return (
        <PositionSelectBlock>
            <SelectGrid>
                <>
                    {positions.map((item, i) => (
                        <SelectGridItem
                            selectedVal={selectedPosition}
                            setSelectedVal={setSelectedPosition}
                            key={i}
                            bg={item.img}
                            name={item.name}
                            fieldName="position"
                        />
                    ))}
                </>
            </SelectGrid>
        </PositionSelectBlock>
    );
}

const PositionSelectBlock = styled.div`
    height: 100%;
    overflow-y: scroll;

    ${media.mobile} {
        height: calc(100vh - 275px);
    }
`;

export default PositionSelect;
