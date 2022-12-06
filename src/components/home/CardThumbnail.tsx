import { ReactNode } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import fonts from "../../lib/styles/fonts";
import media from "../../lib/styles/media";
import palette from "../../lib/styles/palette";

import emptyImg from "../../static/imgs/global/img_empty_image.svg";

export type CardThumbnailProp = {
    id: number;
    location: string;
    thumbnail: string | null;
    children?: ReactNode;
};

function CardThumbnail(props: CardThumbnailProp) {
    const { id, location, thumbnail, children } = props;

    return (
        <CardThumbnailBlock hasChildren={!!children}>
            <Link to={`/detail/${id}`}>
                <Location>{location ? location : "미정"}</Location>
                <div className="thumbnail">
                    <img
                        src={thumbnail ? thumbnail : emptyImg}
                        alt="공연 썸네일"
                    />
                </div>
                {children}
            </Link>
        </CardThumbnailBlock>
    );
}

const CardThumbnailBlock = styled.div<{ hasChildren: boolean }>`
    position: relative;
    width: 100%;
    border-radius: 8px;
    border: 1px solid #0000001a;
    overflow: hidden;

    .thumbnail {
        position: relative;
        padding-bottom: 75%;
        overflow: hidden;

        img {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.4s;

            &: hover {
                transform: scale(105%);
            }
        }
    }

    ${media.mobile} {
        border-radius: 4px;
    }
`;

const Location = styled.div`
    ${fonts.size.scale16}
    position: absolute;
    top: 24px;
    left: 0;
    color: ${palette.white0};
    background-color: ${palette.black0};
    border-top-right-radius: 18px;
    border-bottom-right-radius: 18px;
    z-index: 10;
    padding: 10px 20px 10px 16px;

    ${media.mobile} {
        .location {
            top: 12px;
            left: 12px;
            padding: 8px 10px;
        }
    }
`;

export default CardThumbnail;
