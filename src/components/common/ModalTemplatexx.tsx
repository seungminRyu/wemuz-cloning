import { ReactNode, useEffect } from "react";
import styled, { css, keyframes } from "styled-components";
import useDisapearingAnime from "../../lib/hooks/useDisapearingAnime";
import { fadeIn, fadeOut } from "../../lib/styles/animations";
import media from "../../lib/styles/media";
import palette from "../../lib/styles/palette";
import { withOpacity } from "../../lib/styles/utils";
import { setPreventScroll } from "../../lib/utils";

export type ModalTemplatexxProp = {
    isVisible: boolean;
    children: ReactNode;
    onClick?: Function;
    className?: string;
};

function ModalTemplatexx(props: ModalTemplatexxProp) {
    const { isVisible, children, onClick, className } = props;
    const { isAnimated, isClosed } = useDisapearingAnime(isVisible, 200);

    useEffect(() => {
        if (isVisible) {
            setPreventScroll(true);
        } else {
            setPreventScroll(false);
        }
    }, [isVisible]);

    useEffect(() => {
        return () => {
            setPreventScroll(false);
        };
    }, []);

    if (!isAnimated && !isVisible && isClosed) return null;

    const onLayerClick = (e: any) => {
        if (onClick && e.target.classList.contains("modal-wrapper")) {
            onClick();
        }
    };

    return (
        <Block className={className}>
            <BackgroundLayer isVisible={isVisible} />
            <ModalWrapper
                className="modal-wrapper"
                isVisible={isVisible}
                onClick={onLayerClick}
            >
                {children}
            </ModalWrapper>
        </Block>
    );
}

const Block = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1000;
`;

const BackgroundLayer = styled.div<{ isVisible: boolean }>`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    opacity: 0;
    background-color: ${palette.black0}${withOpacity(0.85)};
    ${({ isVisible }) => {
        if (isVisible) {
            return css`
                animation: ${fadeIn} 0.2s ease-in-out forwards;
            `;
        } else if (!isVisible) {
            return css`
                animation: ${fadeOut} 0.2s ease-in-out forwards;
            `;
        }
    }}
`;

const up = keyframes`
    0% {
        transform: translateY(200px);
        opacity: 0;
    }
    100% {
        transform: translateY(0);
        opacity: 100%;
    }

    ${media.mobile} {
        0% {
            transform: translateY(100px);
            opacity: 0;
        }
        100% {
            transform: translateY(0);
            opacity: 100%;
        }
    }
`;

const down = keyframes`
    0% {
        transform: translateY(0);
        opacity: 100%;
    }
    100% {
        transform: translateY(1000px);
        opacity: 0;
    }

    ${media.mobile} {
        0% {
            transform: translateY(0);
            opacity: 100%;
        }
        100% {
            transform: translateY(500px);
            opacity: 0;
        }
    }
`;

const ModalWrapper = styled.div<{ isVisible: boolean }>`
    display: grid;
    place-items: center;
    grid-template-columns: 100%;
    grid-template-rows: 100%;
    width: 100%;
    height: 100%;
    padding: 48px 0;
    ${({ isVisible }) => {
        if (isVisible) {
            return css`
                animation: ${up} 0.2s ease-in-out forwards;
            `;
        } else if (!isVisible) {
            return css`
                animation: ${down} 0.2s ease-in-out forwards;
            `;
        }
    }}

    ${media.mobile} {
        padding: 60px 0 0;
    }
`;

ModalTemplatexx.BackgroundLayer = BackgroundLayer;
ModalTemplatexx.ModalWrapper = ModalWrapper;

export default ModalTemplatexx;
