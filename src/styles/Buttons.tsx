import styled from "styled-components";
import palette from "../lib/styles/palette";

export const BasicBtn = styled.button`
    display: grid;
    place-content: center;
    border-radius: 4px;
    background-color: ${palette.purple0};
    color: ${palette.white0};
`;

export const OutlineBtn = styled.button`
    display: grid;
    place-content: center;
    border-radius: 4px;
    border: 1px solid ${palette.purple0};
    background-color: ${palette.white0};
    color: ${palette.purple0};
`;

export const UnderLineBtn = styled.button`
    color: ${palette.purple0};
    border-bottom: 1px solid ${palette.purple0};
    padding-bottom: 1.5px;
`;
