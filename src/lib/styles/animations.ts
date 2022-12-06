import { keyframes } from "styled-components";
import palette from "./palette";

export const light = keyframes`
    0% {
        background-color: ${palette.gray5};
    }
    35% {
        background-color: ${palette.gray4};
    }
    65%% {
        background-color: ${palette.white2};
    }
    100% {
        background-color: ${palette.gray5};
    }
`;

export const fadeIn = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 100%;
    }
`;

export const fadeOut = keyframes`
    0% {
        opacity: 100%;
    }
    100% {
        opacity: 0;
    }
`;

export const popup = keyframes`
    0% {
        transform: scale(120%);
        -webkit-transform: scale(1.2, 1.2);
        opacity: 0%;
    }
    100% {
        transform: scale(100%);
        -webkit-transform: scale(1, 1);
        opacity: 100%;
    }
`;

export const fadeInFromBottom = keyframes`
    0% {
        transform: translateY(3px);
        opacity: 0%;
    }
    100% {
        transform: translateY(0);
        opacity: 100%;
    }
`;

export const fadeInFromLeft = keyframes`
    0% {
        transform: translateX(-3px);
        opacity: 0%;
    }
    100% {
        transform: translateX(0);
        opacity: 100%;
    }
`;

export const loading = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;

export const shrink = keyframes`
    0% {
        transform: scale(100%);
        -webkit-transform: scale(1, 1);
    }
    50% {
        transform: scale(80%);
        -webkit-transform: scale(0.8, 0.8);
    }
    100% {
        transform: scale(100%);   
        -webkit-transform: scale(1, 1);
    }
`;

export const ZoomIn = keyframes`
    0% {
        transform: scale(95%);
        -webkit-transform: scale(0.95, 0.95);
    }
    100% {
        transform: scale(100%);   
        -webkit-transform: scale(1, 1);
    }
`;
