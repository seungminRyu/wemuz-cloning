import React from "react";
import styled from "styled-components";
import media from "../../../lib/styles/media";
import palette from "../../../lib/styles/palette";
import MarkdownTypo from "../../common/MarkdownTypo";
import { DetailSectionTitle } from "../DetailStyles";

export type HostCollectionProp = {
    collectionTitle: string;
    collectionPhoto: string;
    collectionDes: string;
};

function HostCollection(props: HostCollectionProp) {
    const { collectionTitle, collectionPhoto, collectionDes } = props;

    return (
        <HostCollectionBlock>
            <DetailSectionTitle>뮤지션 컬렉션</DetailSectionTitle>
            <div className="collection-container">
                <div className="collection-title">{collectionTitle}</div>
                <div className="collection-contents">
                    <div className="collection-photo">
                        <img src={collectionPhoto} alt="뮤지션 컬렉션 사진" />
                    </div>
                    <div className="collection-description">
                        <MarkdownTypo>{collectionDes}</MarkdownTypo>
                    </div>
                </div>
            </div>
        </HostCollectionBlock>
    );
}

const HostCollectionBlock = styled.div`
    width: 100%;
    margin-top: 72px;

    .collection-container {
        width: 100%;
        border-radius: 4px;
        border: 1px solid ${palette.purple3};
        overflow: hidden;
        margin-top: 28px;
    }

    .collection-title {
        color: ${palette.purple0};
        font-size: 22px;
        text-align: center;
        background-color: ${palette.purple5};
        border-radius: 4px;
        box-shadow: 0 0 2px #33333340;
        padding: 28px 12px;
    }

    .collection-contents {
        display: grid;
        grid-template-columns: 50% 50%;
        width: 100%;
        aspect-ratio: 1000 / 380;
        background-color: ${palette.white0};

        .collection-photo {
            width: 100%;
            height: 100%;
            box-sizing: border-box;
            padding: 16px;

            img {
                width: 100%;
                aspect-ratio: 468 / 351;
                object-fit: cover;
                border-radius: 4px;
            }
        }

        .collection-description {
            height: 100%;
            font-size: 18px;
            line-height: 25px;
            overflow-x: scroll;
            box-sizing: border-box;
            padding: 28px 40px 16px 24px;
        }
    }

    ${media.tablet} {
        .collection-photo {
            padding: 12px;
        }

        .collection-description {
            padding: 20px 24px 11px 16px;
        }
    }

    ${media.mobile} {
        box-sizing: border-box;
        padding: 0 20px;
        margin-top: 60px;

        .collection-container {
            margin-top: 20px;
        }

        .collection-title {
            font-size: 14px;
        }

        .collection-contents {
            display: block;
            aspect-ratio: unset;
            width: 100%;

            .collection-photo {
                padding: 0;

                img {
                    height: auto;
                    aspect-ratio: 320 / 183;
                    border-radius: 0;
                }
            }

            .collection-description {
                height: 150px;
                font-size: 14px;
                line-height: 19px;
                padding: 20px 12px 0 12px;
            }
        }
    }
`;

export default HostCollection;
