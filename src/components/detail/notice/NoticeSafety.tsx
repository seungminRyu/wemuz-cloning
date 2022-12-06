import React from "react";
import styled from "styled-components";
import fonts from "../../../lib/styles/fonts";
import media from "../../../lib/styles/media";
import palette from "../../../lib/styles/palette";

export type NoticeSafetyProp = {};

function NoticeSafety(props: NoticeSafetyProp) {
    const safetyInfo = [
        {
            label: "정부 지침에 따른 백신 패스 진행 안내",
            content:
                "정부 지침에 따른 코로나 백신 접종 증명서 또는 48시간 이내의 PCR 검사 결과 음성 증명서 확인 절차가 진행될 수 있습니다.",
        },
        {
            label: "전 관객 마스크 착용 의무화 및 손 소독제 사용",
            content:
                "마스크는 입과 코를 완전히 가리는 올바른 착용을 부탁드립니다. 비치된 손 소독제를 사용하여 주시기를 바랍니다.",
        },
        {
            label: "전 관객 대상 체온 측정",
            content:
                "참여 관객분들의 체온 측정이 진행될 수 있습니다. 측정 체온이 37.5℃(발열 기준 온도) 이상일 경우 입장이 제한됩니다. 체온 측정 거부 시 입장이 제한될 수 있으니 협조 부탁드립니다.",
        },
        {
            label: "전 관객 대상 문진표 의무 작성 또는 안심콜",
            content:
                "필요시 전 관객 대상으로 ‘코로나19’ 자기 문진표 및 개인 정보 활용 동의서 작성이 진행될 수 있습니다. 위 자료는 관할 당국의 지침에 따른 역학 조사 용도 이외에는 사용되지 않습니다.",
        },
        {
            label: "공연장 방역 및 소독 안내",
            content:
                "공연장 전체 방역을 시행하고 있습니다. 공연장 내 손 소독제, 체온계 등 감염 예방 용품을 비치하여 운영하고 있습니다.",
        },
        {
            label: "사회적 거리 두기에 따른 공연 안내",
            content:
                "코로나 사회적 거리두기 격상 시 정부지침에 따라 공연이 취소될 수 있습니다. 다만, 공연이 취소되더라도 공간은 정상적으로 영업을 진행합니다.",
        },
    ];

    return (
        <NoticeSafetyBlock>
            <p className="safety-header">
                ※ 코로나19 예방에 따른 공연 운영 안내
            </p>
            <ul className="safety-list">
                {safetyInfo.map((item, i) => (
                    <NoticeSafetyItem key={i}>
                        <p className="safety-label">
                            <SimpleCircleIco /> {item.label}
                        </p>
                        <p className="safety-content">{item.content}</p>
                    </NoticeSafetyItem>
                ))}
            </ul>
        </NoticeSafetyBlock>
    );
}
const NoticeSafetyBlock = styled.div`
    font-size: 18px;
    background-color: ${palette.white2};
    border-radius: 4px;
    padding: 36px 24px;
    margin-top: 28px;

    .safety-header {
        color: ${palette.purple0};
        font-weight: ${fonts.weight.bold};
    }

    .safety-list {
        margin-top: 28px;
    }

    ${media.mobile} {
        font-size: 14px;
        padding: 28px 12px;
        margin-top: 20px;

        .safety-list {
            margin-top: 20px;
        }
    }
`;

const NoticeSafetyItem = styled.li`
    line-height: 25px;

    & + & {
        margin-top: 24px;
    }

    .safety-label {
        font-weight: ${fonts.weight.bold};
    }

    .safety-content {
        color: ${palette.gray0};
        padding-left: 22px;
        margin-top: 12px;
    }

    ${media.mobile} {
        line-height: 19px;

        & + & {
            margin-top: 16px;
        }

        .safety-content {
            padding-left: 16px;
            margin-top: 6px;
        }
    }
`;

const SimpleCircleIco = styled.i`
    width: 12px;
    height: 12px;
    border-radius: 6px;
    background-color: ${palette.black0};
    margin-right: 10px;

    ${media.mobile} {
        width: 10px;
        height: 10px;
        border-radius: 5px;
        margin-right: 4px;
    }
`;

export default NoticeSafety;
