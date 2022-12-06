import React, { useRef, useState } from "react";
import styled from "styled-components";
import Bold from "../../common/Bold";
import fonts from "../../../lib/styles/fonts";
import media from "../../../lib/styles/media";
import NewLine from "../../common/NewLine";
import palette from "../../../lib/styles/palette";

import { ReactComponent as IcoMore } from "../../../static/icons/detail/ico_down_arrow.svg";
import imgDefaultAvatar from "../../../static/imgs/global/default_avatar.png";

export type SupporterProp = {};

function Supporter(props: SupporterProp) {
    const cntSupporter = test.length;
    const lastItemIdx = cntSupporter - 1;
    const [lastShowingItemIdx, setLastShowingItemIdx] = useState<number>(9);
    const isLast = useRef<boolean>(false);

    let showList = [];
    for (let i = 0; i < lastShowingItemIdx; i++) {
        showList.push(test[i]);
    }

    const onMoreClick = () => {
        if (lastShowingItemIdx + 10 < lastItemIdx) {
            setLastShowingItemIdx(lastShowingItemIdx + 10);
        } else if (lastShowingItemIdx + 10 === lastItemIdx) {
            setLastShowingItemIdx(lastShowingItemIdx + 10);
            isLast.current = true;
        } else {
            setLastShowingItemIdx(lastItemIdx);
            isLast.current = true;
        }
    };

    return (
        <SupporterBlock className="section supporter" data-name="supporter">
            <p className="supporter-header">
                현재 공연에 <NewLine device={["MOBILE"]} />
                <span className="supporter-num">{cntSupporter}명</span>의
                서포터가 함께하고 있습니다.
            </p>
            <ul className="supporter-list">
                {showList.map((supporter, i) => (
                    <SupporterItem key={i}>
                        <img
                            src={
                                supporter.avatar
                                    ? supporter.avatar
                                    : imgDefaultAvatar
                            }
                            alt="서포터 프로필 사진"
                            className="supporter-avatar-img"
                        />
                        <div className="supporter-description">
                            <p className="support-info">
                                <Bold>
                                    {supporter.alias
                                        ? supporter.alias
                                        : "익명의 서포터"}
                                </Bold>
                                님이{" "}
                                <Bold>
                                    {supporter.amount
                                        ? `${supporter.amount}원`
                                        : ""}
                                </Bold>{" "}
                                공연에 참여하셨습니다.
                            </p>
                            <p className="support-time">
                                {supporter.timestamp}
                            </p>
                        </div>
                    </SupporterItem>
                ))}
            </ul>
            {cntSupporter > 10 && !isLast.current ? (
                <MoreBtn onClick={onMoreClick}>
                    더보기
                    <IcoMore className="ico-more" />
                </MoreBtn>
            ) : (
                <></>
            )}
        </SupporterBlock>
    );
}

const SupporterBlock = styled.section`
    padding-top: 100px;

    .supporter-header {
        font-size: 22px;
        font-weight: ${fonts.weight.bold};
        line-height: 18px;

        .supporter-num {
            color: ${palette.purple0};
        }
    }

    .supporter-list {
        margin-top: 48px;
    }

    ${media.mobile} {
        padding: 60px 20px 0;

        .supporter-header {
            font-size: 16px;
            line-height: 22px;
        }

        .supporter-list {
            margin-top: 28px;
        }
    }
`;

const SupporterItem = styled.li`
    display: grid;
    grid-template-columns: 48px 1fr;
    width: 100%;
    padding: 24px 8px;

    &:not(:last-child) {
        border-bottom: 1px solid ${palette.gray4};
    }

    .supporter-avatar-img {
        width: 48px;
        height: 48px;
        border-radius: 16px;
        object-fit: cover;
        border: 1px solid #0000001a;
    }

    .supporter-description {
        padding: 3px 16px 0;

        .support-info {
            font-size: 18px;
            line-height: 25px;
        }

        .support-time {
            font-size: 14px;
            color: ${palette.gray1};
            margin-top: 8px;
        }
    }

    ${media.mobile} {
        grid-template-columns: 40px 1fr;
        padding: 16px 0;

        .supporter-avatar-img {
            width: 40px;
            height: 40px;
            border-radius: 14px;
        }

        .supporter-description {
            padding: 2px 0 0 12px;

            .support-info {
                font-size: 14px;
                line-height: 19px;
            }

            .support-time {
                font-size: 12px;
                margin-top: 6px;
            }
        }
    }
`;

const MoreBtn = styled.button`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    font-size: 18px;
    color: ${palette.gray0};
    border: 1px solid ${palette.gray3};
    border-radius: 4px;
    transition: background-color 0.3s;
    padding: 20px 0;
    margin-top: 20px;

    &: hover {
        background-color: ${palette.gray5};
    }

    .ico-more {
        width: 28px;
        height: 28px;
        margin-top: -4px;

        path {
            stroke: ${palette.gray0} !important;
        }
    }

    ${media.mobile} {
        font-size: 14px;
        padding: 13px 0;

        .ico-more {
            width: 20px;
            height: 20px;
            margin-top: -3px;
            margin-left: 2px;
        }
    }
`;

const test = [
    {
        alias: "dfsakjl",
        amount: 12389,
        avatar: "",
        timestamp: "1시간 전",
    },
    {
        alias: "",
        amount: "",
        avatar: "https://i.picsum.photos/id/866/600/400.jpg?hmac=HJKPGrlmng3jwxdqKDC8rTKTDYbRTP_nuCWsgr6WaFY",
        timestamp: "1시간 전",
    },
    {
        alias: "dfsakjl",
        amount: 12389,
        avatar: "",
        timestamp: "1시간 전",
    },
    {
        alias: "",
        amount: "",
        avatar: "https://i.picsum.photos/id/866/600/400.jpg?hmac=HJKPGrlmng3jwxdqKDC8rTKTDYbRTP_nuCWsgr6WaFY",
        timestamp: "1시간 전",
    },
    {
        alias: "dfsakjl",
        amount: 12389,
        avatar: "https://i.picsum.photos/id/866/600/400.jpg?hmac=HJKPGrlmng3jwxdqKDC8rTKTDYbRTP_nuCWsgr6WaFY",
        timestamp: "1시간 전",
    },
    {
        alias: "",
        amount: 12389,
        avatar: "https://i.picsum.photos/id/866/600/400.jpg?hmac=HJKPGrlmng3jwxdqKDC8rTKTDYbRTP_nuCWsgr6WaFY",
        timestamp: "1시간 전",
    },
    {
        alias: "dfsakjl",
        amount: "",
        avatar: "https://i.picsum.photos/id/866/600/400.jpg?hmac=HJKPGrlmng3jwxdqKDC8rTKTDYbRTP_nuCWsgr6WaFY",
        timestamp: "1시간 전",
    },
    {
        alias: "dfsakjl",
        amount: 12389,
        avatar: "",
        timestamp: "1시간 전",
    },
    {
        alias: "",
        amount: 12389,
        avatar: "https://i.picsum.photos/id/866/600/400.jpg?hmac=HJKPGrlmng3jwxdqKDC8rTKTDYbRTP_nuCWsgr6WaFY",
        timestamp: "1시간 전",
    },
    {
        alias: "dfsakjl",
        amount: "",
        avatar: "https://i.picsum.photos/id/866/600/400.jpg?hmac=HJKPGrlmng3jwxdqKDC8rTKTDYbRTP_nuCWsgr6WaFY",
        timestamp: "1시간 전",
    },
    {
        alias: "dfsakjl",
        amount: 12389,
        avatar: "",
        timestamp: "1시간 전",
    },
    {
        alias: "",
        amount: 12389,
        avatar: "https://i.picsum.photos/id/866/600/400.jpg?hmac=HJKPGrlmng3jwxdqKDC8rTKTDYbRTP_nuCWsgr6WaFY",
        timestamp: "1시간 전",
    },
    {
        alias: "dfsakjl",
        amount: 12389,
        avatar: "https://i.picsum.photos/id/866/600/400.jpg?hmac=HJKPGrlmng3jwxdqKDC8rTKTDYbRTP_nuCWsgr6WaFY",
        timestamp: "1시간 전",
    },
    {
        alias: "",
        amount: 12389,
        avatar: "https://i.picsum.photos/id/866/600/400.jpg?hmac=HJKPGrlmng3jwxdqKDC8rTKTDYbRTP_nuCWsgr6WaFY",
        timestamp: "1시간 전",
    },
    {
        alias: "dfsakjl",
        amount: "",
        avatar: "https://i.picsum.photos/id/866/600/400.jpg?hmac=HJKPGrlmng3jwxdqKDC8rTKTDYbRTP_nuCWsgr6WaFY",
        timestamp: "1시간 전",
    },
    {
        alias: "dfsakjl",
        amount: 12389,
        avatar: "",
        timestamp: "1시간 전",
    },
    {
        alias: "",
        amount: 12389,
        avatar: "https://i.picsum.photos/id/866/600/400.jpg?hmac=HJKPGrlmng3jwxdqKDC8rTKTDYbRTP_nuCWsgr6WaFY",
        timestamp: "1시간 전",
    },
    {
        alias: "dfsakjl",
        amount: "",
        avatar: "https://i.picsum.photos/id/866/600/400.jpg?hmac=HJKPGrlmng3jwxdqKDC8rTKTDYbRTP_nuCWsgr6WaFY",
        timestamp: "1시간 전",
    },
    {
        alias: "dfsakjl",
        amount: 12389,
        avatar: "",
        timestamp: "1시간 전",
    },
    {
        alias: "",
        amount: 12389,
        avatar: "https://i.picsum.photos/id/866/600/400.jpg?hmac=HJKPGrlmng3jwxdqKDC8rTKTDYbRTP_nuCWsgr6WaFY",
        timestamp: "1시간 전",
    },
    {
        alias: "dfsakjl",
        amount: "",
        avatar: "https://i.picsum.photos/id/866/600/400.jpg?hmac=HJKPGrlmng3jwxdqKDC8rTKTDYbRTP_nuCWsgr6WaFY",
        timestamp: "1시간 전",
    },
    {
        alias: "dfsakjl",
        amount: 12389,
        avatar: "",
        timestamp: "1시간 전",
    },
    {
        alias: "dfsakjl",
        amount: "",
        avatar: "https://i.picsum.photos/id/866/600/400.jpg?hmac=HJKPGrlmng3jwxdqKDC8rTKTDYbRTP_nuCWsgr6WaFY",
        timestamp: "1시간 전",
    },
    {
        alias: "dfsakjl",
        amount: 12389,
        avatar: "",
        timestamp: "1시간 전",
    },
    {
        alias: "",
        amount: "",
        avatar: "https://i.picsum.photos/id/866/600/400.jpg?hmac=HJKPGrlmng3jwxdqKDC8rTKTDYbRTP_nuCWsgr6WaFY",
        timestamp: "1시간 전",
    },
    {
        alias: "dfsakjl",
        amount: 12389,
        avatar: "https://i.picsum.photos/id/866/600/400.jpg?hmac=HJKPGrlmng3jwxdqKDC8rTKTDYbRTP_nuCWsgr6WaFY",
        timestamp: "1시간 전",
    },
    {
        alias: "",
        amount: 12389,
        avatar: "https://i.picsum.photos/id/866/600/400.jpg?hmac=HJKPGrlmng3jwxdqKDC8rTKTDYbRTP_nuCWsgr6WaFY",
        timestamp: "1시간 전",
    },
    {
        alias: "dfsakjl",
        amount: "",
        avatar: "https://i.picsum.photos/id/866/600/400.jpg?hmac=HJKPGrlmng3jwxdqKDC8rTKTDYbRTP_nuCWsgr6WaFY",
        timestamp: "1시간 전",
    },
    {
        alias: "dfsakjl",
        amount: 12389,
        avatar: "",
        timestamp: "1시간 전",
    },
    {
        alias: "",
        amount: 12389,
        avatar: "https://i.picsum.photos/id/866/600/400.jpg?hmac=HJKPGrlmng3jwxdqKDC8rTKTDYbRTP_nuCWsgr6WaFY",
        timestamp: "1시간 전",
    },
    {
        alias: "dfsakjl",
        amount: 12389,
        avatar: "",
        timestamp: "1시간 전",
    },
    {
        alias: "",
        amount: "",
        avatar: "https://i.picsum.photos/id/866/600/400.jpg?hmac=HJKPGrlmng3jwxdqKDC8rTKTDYbRTP_nuCWsgr6WaFY",
        timestamp: "1시간 전",
    },
    {
        alias: "dfsakjl",
        amount: 12389,
        avatar: "https://i.picsum.photos/id/866/600/400.jpg?hmac=HJKPGrlmng3jwxdqKDC8rTKTDYbRTP_nuCWsgr6WaFY",
        timestamp: "1시간 전",
    },
    {
        alias: "",
        amount: 12389,
        avatar: "https://i.picsum.photos/id/866/600/400.jpg?hmac=HJKPGrlmng3jwxdqKDC8rTKTDYbRTP_nuCWsgr6WaFY",
        timestamp: "1시간 전",
    },
    {
        alias: "dfsakjl",
        amount: "",
        avatar: "https://i.picsum.photos/id/866/600/400.jpg?hmac=HJKPGrlmng3jwxdqKDC8rTKTDYbRTP_nuCWsgr6WaFY",
        timestamp: "1시간 전",
    },
    {
        alias: "dfsakjl",
        amount: 12389,
        avatar: "",
        timestamp: "1시간 전",
    },
    {
        alias: "",
        amount: 12389,
        avatar: "https://i.picsum.photos/id/866/600/400.jpg?hmac=HJKPGrlmng3jwxdqKDC8rTKTDYbRTP_nuCWsgr6WaFY",
        timestamp: "1시간 전",
    },
    {
        alias: "dfsakjl",
        amount: "",
        avatar: "https://i.picsum.photos/id/866/600/400.jpg?hmac=HJKPGrlmng3jwxdqKDC8rTKTDYbRTP_nuCWsgr6WaFY",
        timestamp: "1시간 전",
    },
    {
        alias: "dfsakjl",
        amount: 12389,
        avatar: "",
        timestamp: "1시간 전",
    },
    {
        alias: "",
        amount: 12389,
        avatar: "https://i.picsum.photos/id/866/600/400.jpg?hmac=HJKPGrlmng3jwxdqKDC8rTKTDYbRTP_nuCWsgr6WaFY",
        timestamp: "1시간 전",
    },
    {
        alias: "dfsakjl",
        amount: "",
        avatar: "https://i.picsum.photos/id/866/600/400.jpg?hmac=HJKPGrlmng3jwxdqKDC8rTKTDYbRTP_nuCWsgr6WaFY",
        timestamp: "1시간 전",
    },
    {
        alias: "dfsakjl",
        amount: 12389,
        avatar: "",
        timestamp: "1시간 전",
    },
    {
        alias: "",
        amount: "",
        avatar: "https://i.picsum.photos/id/866/600/400.jpg?hmac=HJKPGrlmng3jwxdqKDC8rTKTDYbRTP_nuCWsgr6WaFY",
        timestamp: "1시간 전",
    },
    {
        alias: "dfsakjl",
        amount: 12389,
        avatar: "https://i.picsum.photos/id/866/600/400.jpg?hmac=HJKPGrlmng3jwxdqKDC8rTKTDYbRTP_nuCWsgr6WaFY",
        timestamp: "1시간 전",
    },
    {
        alias: "",
        amount: 12389,
        avatar: "https://i.picsum.photos/id/866/600/400.jpg?hmac=HJKPGrlmng3jwxdqKDC8rTKTDYbRTP_nuCWsgr6WaFY",
        timestamp: "1시간 전",
    },
    {
        alias: "dfsakjl",
        amount: "",
        avatar: "https://i.picsum.photos/id/866/600/400.jpg?hmac=HJKPGrlmng3jwxdqKDC8rTKTDYbRTP_nuCWsgr6WaFY",
        timestamp: "1시간 전",
    },
    {
        alias: "dfsakjl",
        amount: 12389,
        avatar: "",
        timestamp: "1시간 전",
    },
    {
        alias: "",
        amount: 12389,
        avatar: "https://i.picsum.photos/id/866/600/400.jpg?hmac=HJKPGrlmng3jwxdqKDC8rTKTDYbRTP_nuCWsgr6WaFY",
        timestamp: "1시간 전",
    },
    {
        alias: "dfsakjl",
        amount: "",
        avatar: "https://i.picsum.photos/id/866/600/400.jpg?hmac=HJKPGrlmng3jwxdqKDC8rTKTDYbRTP_nuCWsgr6WaFY",
        timestamp: "1시간 전",
    },
    {
        alias: "dfsakjl",
        amount: 12389,
        avatar: "",
        timestamp: "1시간 전",
    },
    {
        alias: "",
        amount: 12389,
        avatar: "https://i.picsum.photos/id/866/600/400.jpg?hmac=HJKPGrlmng3jwxdqKDC8rTKTDYbRTP_nuCWsgr6WaFY",
        timestamp: "1시간 전",
    },
    {
        alias: "dfsakjl",
        amount: 12389,
        avatar: "",
        timestamp: "1시간 전",
    },
    {
        alias: "",
        amount: 12389,
        avatar: "https://i.picsum.photos/id/866/600/400.jpg?hmac=HJKPGrlmng3jwxdqKDC8rTKTDYbRTP_nuCWsgr6WaFY",
        timestamp: "1시간 전",
    },
];

export default Supporter;
