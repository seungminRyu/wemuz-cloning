import { useState } from "react";
import styled from "styled-components";
import media from "../../lib/styles/media";
import { getSampleImage } from "../../lib/styles/utils";
import SelectGrid, { SelectGridItem } from "./SelectGrid";

export type GenreSelectProp = {};

const genres = [
    {
        img: getSampleImage({ width: 180, height: 180 }),
        name: "알앤비",
    },
    {
        img: getSampleImage({ width: 180, height: 180 }),
        name: "팝",
    },
    {
        img: getSampleImage({ width: 180, height: 180 }),
        name: "재즈",
    },
    {
        img: getSampleImage({ width: 180, height: 180 }),
        name: "알앤비d",
    },
    {
        img: getSampleImage({ width: 180, height: 180 }),
        name: "팝a",
    },
    {
        img: getSampleImage({ width: 180, height: 180 }),
        name: "재즈e",
    },
    {
        img: getSampleImage({ width: 180, height: 180 }),
        name: "알앤비v",
    },
    {
        img: getSampleImage({ width: 180, height: 180 }),
        name: "팝s",
    },
    {
        img: getSampleImage({ width: 180, height: 180 }),
        name: "재즈q",
    },
    {
        img: getSampleImage({ width: 180, height: 180 }),
        name: "팝h",
    },
    {
        img: getSampleImage({ width: 180, height: 180 }),
        name: "재즈j",
    },
    {
        img: getSampleImage({ width: 180, height: 180 }),
        name: "알앤비e",
    },
    {
        img: getSampleImage({ width: 180, height: 180 }),
        name: "팝n",
    },
    {
        img: getSampleImage({ width: 180, height: 180 }),
        name: "재즈l",
    },
];

function GenreSelect(props: GenreSelectProp) {
    const [selectedGenre, setSelectedGenre] = useState<string>("");

    return (
        <GenreSelectBlock>
            <SelectGrid>
                <>
                    {genres.map((item, i) => (
                        <SelectGridItem
                            selectedVal={selectedGenre}
                            setSelectedVal={setSelectedGenre}
                            key={i}
                            bg={item.img}
                            name={item.name}
                            fieldName="genre"
                        />
                    ))}
                </>
            </SelectGrid>
        </GenreSelectBlock>
    );
}

const GenreSelectBlock = styled.div`
    height: 100%;
    overflow-y: scroll;

    ${media.mobile} {
        height: calc(100vh - 275px);
    }
`;

export default GenreSelect;
