import { css } from "styled-components";

export const ellipsis = css`
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow-x: hidden;
    overflow-y: hidden;
`;

export const nbsp = "\u00A0";

export const withOpacity = (opacity: number) =>
    Math.floor(opacity * 255).toString(16);

export const getSampleImage = ({
    width,
    height,
}: {
    width?: number;
    height?: number;
}): string => {
    width = width ? width : Math.floor(Math.random() * (1000 - 200) + 200); // max: 1000, min: 200
    height = height ? height : Math.floor(Math.random() * (1000 - 200) + 200); // max: 1000, min: 200
    return `https://picsum.photos/${width}/${height}`;
};

export const multiLineEllipsis = (lineNum: number) => css`
    display: -webkit-box;
    -webkit-line-clamp: ${lineNum};
    -webkit-box-orient: vertical;
    word-wrap: break-word;
    overflow: hidden;
`;
