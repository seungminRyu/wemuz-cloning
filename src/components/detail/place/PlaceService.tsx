import styled, { css } from "styled-components";
import useLoopIndex from "../../../lib/hooks/useLoopIndex";
import fonts from "../../../lib/styles/fonts";
import media from "../../../lib/styles/media";
import palette from "../../../lib/styles/palette";
import MarkdownTypo from "../../common/MarkdownTypo";
import { nbsp } from "../../../lib/styles/utils";
import { DetailSectionTitle } from "../DetailStyles";

import { ReactComponent as PrevIco } from "../../../static/icons/detail/ico_service_prev.svg";
import { ReactComponent as NextIco } from "../../../static/icons/detail/ico_service_next.svg";

export type PlaceServiceProp = {
    service: {
        id: number;
        name: string;
        price: number;
        description: string;
        photo: string;
    }[];
};

function PlaceService(props: PlaceServiceProp) {
    const { service } = props;
    const serviceCnt = service.length;
    const [curIdx, increaseCurIdx, decreaseCurIdx] = useLoopIndex(
        serviceCnt - 1
    );
    const curServiceItem = service[curIdx];

    return serviceCnt > 0 ? (
        <PlaceServiceBlock>
            <DetailSectionTitle>공간 아이템 및 제공 서비스</DetailSectionTitle>
            <ServiceCard>
                <CardHeader>
                    <p className="service-name">{curServiceItem.name}</p>
                </CardHeader>
                <CardBody>
                    <div className="service-photo">
                        <img
                            src={curServiceItem.photo}
                            alt="공간 굿즈 및 제공 서비스"
                        />
                    </div>
                    <div className="service-description">
                        <MarkdownTypo>
                            {curServiceItem.description}
                        </MarkdownTypo>
                    </div>
                </CardBody>
            </ServiceCard>
            <Pagenation>
                <PrevBtn onClick={decreaseCurIdx}>
                    <StyledPrevIco />
                </PrevBtn>
                <p className="card-pagenation">
                    <span>{curIdx + 1}</span>
                    {nbsp + nbsp}/{nbsp + nbsp}
                    {serviceCnt}
                </p>
                <NextBtn onClick={increaseCurIdx}>
                    <StyledNextIco />
                </NextBtn>
            </Pagenation>
        </PlaceServiceBlock>
    ) : (
        <></>
    );
}

const PlaceServiceBlock = styled.div`
    margin-top: 72px;

    ${media.mobile} {
        margin-top: 60px;
    }
`;

const ServiceCard = styled.div`
    width: 100%;
    overflow: hidden;
    border-radius: 4px;
    border: 1px solid ${palette.purple3};
    box-shadow: 0 0 2px #33333340;
    margin-top: 28px;

    ${media.mobile} {
        aspect-ratio: unset;
        margin-top: 20px;
    }
`;

const CardHeader = styled.div`
    position: relative;
    text-align: center;
    background-color: ${palette.purple5};
    padding: 22px 0;

    .service-name {
        color: ${palette.purple0};
        font-size: 22px;
        margin-top: 8px;
    }

    ${media.mobile} {
        padding: 24px 12px;

        .service-name {
            font-size: 14px;
            margin-top: 0;
        }
    }
`;

const CardBody = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 100%;
    aspect-ratio: 100 / 38;
    background-color: ${palette.white0};

    .service-photo {
        width: 100%;
        box-sizing: border-box;
        padding: 16px;

        img {
            width: 100%;
            height: 100%;
            aspect-ratio: 4 / 3;
            object-fit: cover;
            border-radius: 4px;
        }
    }

    .service-description {
        height: 100%;
        font-size: 18px;
        line-height: 25px;
        overflow-x: scroll;
        box-sizing: border-box;
        padding: 28px 40px 16px 24px;
    }

    ${media.mobile} {
        grid-template-columns: 1fr;

        .service-photo {
            padding: 0;

            img {
                height: auto;
                border-radius: 0;
            }
        }

        .service-description {
            height: 128px;
            font-size: 14px;
            line-height: 19px;
            padding: 20px 12px 0 12px;
        }
    }
`;

const Pagenation = styled.div`
    ${fonts.size.scale18}
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 136px;
    color: ${palette.gray0};
    margin: 18px auto 0;

    p {
        padding-top: 2px;
    }

    span {
        font-weight: ${fonts.weight.bold};
    }
`;

const PageBtn = styled.button`
    display: inline-block;
    width: 32px;
    height: 32px;
    padding: 0;

    ${media.mobile} {
        width: 20px;
        height: 20px;
    }
`;

const NextBtn = styled(PageBtn)``;
const PrevBtn = styled(PageBtn)``;

const icoStyle = css`
    width: 32px;
    height: 32px;

    .ico-photo-next-2-path,
    .ico-photo-prev-2-path {
        stroke: ${palette.gray1};
    }

    ${media.mobile} {
        width: 20px;
        height: 20px;
    }
`;

const StyledPrevIco = styled(PrevIco)`
    ${icoStyle}
`;
const StyledNextIco = styled(NextIco)`
    ${icoStyle}
`;

export default PlaceService;
