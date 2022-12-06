import styled, { css } from "styled-components";
import fonts from "../../../lib/styles/fonts";
import media from "../../../lib/styles/media";
import NewLine from "../../common/NewLine";
import palette from "../../../lib/styles/palette";
import { getPlaceLinks } from "../../../lib/utils";

import { ReactComponent as EventIco } from "../../../static/icons/detail/ico_event.svg";
import { ReactComponent as LocationIco } from "../../../static/icons/detail/ico_location.svg";
import { ReactComponent as ParkingIco } from "../../../static/icons/detail/ico_parking.svg";
import { ReactComponent as SnsIco } from "../../../static/icons/detail/ico_sns.svg";

export type PlaceProfileProp = {
    placeId: number;
    image: string;
    name: string;
    fundingCnt: number;
    address: string;
    parking: {
        address: string | null;
        capacity: number | null;
    };
    sns: string;
    events: string[];
};

function PlaceProfile(props: PlaceProfileProp) {
    const { placeId, image, name, fundingCnt, address, parking, sns, events } =
        props;
    const naverMapUrl = getPlaceLinks(placeId).naverMap;

    return (
        <PlaceProfileBlock>
            <div className="profile-image">
                <img src={image} alt="장소 이미지" />
            </div>
            <div className="profile-intro">
                <p className="name">
                    공연 예정 장소
                    <NewLine device={["MOBILE"]} /> <span>{name}</span>
                    입니다.
                </p>
                <p className="funding-number">
                    WEMUZ 공연 <span>{fundingCnt} 회</span> 진행
                </p>
            </div>
            <div className="profile-info">
                <ul className="profile-info-list">
                    <InfoItem>
                        <p className="item-label">
                            <StyledLocationIco /> 주소
                        </p>
                        <p className="item-content">
                            {address}{" "}
                            {naverMapUrl && (
                                <span
                                    onClick={() => {
                                        window.open(naverMapUrl);
                                    }}
                                    className="item-link"
                                >
                                    지도보기
                                </span>
                            )}
                        </p>
                    </InfoItem>
                    <InfoItem>
                        <p className="item-label">
                            <StyledParkingIco /> 주차
                        </p>
                        <p className="item-content">
                            {parking.capacity !== 0
                                ? `${parking.capacity}대 주차가능 (${parking.address})`
                                : "주차 불가 (인근 주차장 이용 또는 대중교통 이용을 부탁드립니다.)"}
                        </p>
                    </InfoItem>
                    {sns && (
                        <InfoItem>
                            <p className="item-label">
                                <StyledSnsIco /> 대표 SNS
                            </p>
                            <p className="item-content">
                                {sns}{" "}
                                <span
                                    onClick={() => {
                                        window.open(sns);
                                    }}
                                    className="item-link"
                                >
                                    바로가기
                                </span>
                            </p>
                        </InfoItem>
                    )}
                    {events.length !== 0 && (
                        <InfoItem>
                            <p className="item-label">
                                <StyledEventIco /> 이벤트
                            </p>
                            {events.map((event, i) => (
                                <p className="item-content" key={i}>
                                    {i + 1}. {event}
                                </p>
                            ))}
                        </InfoItem>
                    )}
                </ul>
            </div>
        </PlaceProfileBlock>
    );
}

const PlaceProfileBlock = styled.div`
    display: grid;
    grid-template-areas: "image intro" "image info";
    grid-template-columns: 192px 1fr;

    .profile-image {
        grid-area: image;
        width: 100%;
        box-sizing: border-box;
        padding: 0 24px;

        img {
            width: 148px;
            height: 148px;
            border-radius: 50px;
            border: 1px solid #0000001a;
            box-shadow: 0 0 4px #33333333;
            object-fit: cover;
        }
    }

    .profile-intro {
        grid-area: intro;
        padding-left: 20px;

        .name {
            font-size: 22px;
            font-weight: ${fonts.weight.bold};

            // a {
            span {
                position: relative;

                &,
                &:link,
                &:visited {
                    color: ${palette.purple0};
                }

                &::before {
                    content: "";
                    position: absolute;
                    bottom: 1px;
                    left: 50%;
                    transform: translateX(-50%);
                    width: 105%;
                    height: 3px;
                    border-radius: 2px;
                    z-index: -1;
                    opacity: 0;
                    transition: opacity 0.3s;
                    background-color: ${palette.purple5};
                }

                &:hover::before {
                    opacity: 100%;
                }
            }
        }

        .funding-number {
            font-size: 16px;
            color: ${palette.gray1};
            margin-top: 8px;

            // a {
            span {
                border-bottom: 1px solid ${palette.gray1};

                &,
                &:link,
                &:visited {
                    color: ${palette.gray1};
                }

                &:hover {
                    border-bottom: 1px solid ${palette.gray2};
                    font-weight: ${fonts.weight.bold};
                }
            }
        }
    }

    .profile-info {
        grid-area: info;
        padding-left: 20px;
        margin-top: 28px;
    }

    ${media.mobile} {
        grid-template-areas: "image intro" "info info";
        grid-template-columns: 112px 1fr;
        border-top: 1px solid ${palette.gray4};
        padding-top: 92px;

        .profile-image {
            width: 100%;
            padding: 0 12px;

            img {
                width: 88px;
                height: 88px;
                border-radius: 36px;
            }
        }

        .profile-intro {
            padding-left: 12px;

            .name {
                font-size: 16px;
                line-height: 22px;
            }

            .funding-number {
                font-size: 13px;
                margin-top: 12px;
            }
        }

        .profile-info {
            padding-left: 0;
        }
    }
`;

const InfoItem = styled.li`
    font-size: 18px;

    & + & {
        margin-top: 20px;
    }

    .item-label {
        display: inline-flex;
        align-items: center;
        color: ${palette.purple0};

        i {
            margin-right: 6px;
            margin-top: -2px;
        }
    }

    .item-content {
        line-height: 25px;
        padding: 0 20px 0 26px;
        margin-top: 8px;

        .item-link {
            color: ${palette.purple0};
            cursor: pointer;
            margin-left: 10px;

            &:hover {
                border-bottom: 1px solid ${palette.purple0};
            }
        }
    }

    ${media.mobile} {
        font-size: 14px;

        & + & {
            margin-top: 20px;
        }

        .item-label {
            padding-left: 12px;

            i {
                width: 16px;
                height: 16px;
                margin-right: 4px;
            }
        }

        .item-content {
            line-height: 19px;
            padding: 0 12px 0 32px;
            margin-top: 4px;
        }
    }
`;

const icoStyle = css`
    width: 20px;
    height: 20px;
    margin-top: -2px;
    margin-right: 4px;
`;

const StyledEventIco = styled(EventIco)`
    ${icoStyle}
`;

const StyledLocationIco = styled(LocationIco)`
    ${icoStyle}
`;

const StyledParkingIco = styled(ParkingIco)`
    ${icoStyle}
`;

const StyledSnsIco = styled(SnsIco)`
    ${icoStyle}
`;

export default PlaceProfile;
