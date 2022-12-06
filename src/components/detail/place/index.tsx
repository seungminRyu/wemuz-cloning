import styled from "styled-components";
import PlaceService from "./PlaceService";
import PlacePhoto from "./PlacePhoto";
import PlaceProfile from "./PlaceProfile";
import media from "../../../lib/styles/media";
import useDetailInfo from "../../../pages/detail/hooks/useDetailInfo";

export type PlaceProp = {};

function Place(props: PlaceProp) {
    const {
        detailInfo: {
            placeId,
            placeProfilePhoto,
            placeName,
            placeAddress,
            placeParking,
            placeFundingCount,
            placeSns,
            placeEvents,
            placePhotos,
            placeService,
        },
        loading,
    } = useDetailInfo();

    return !loading ? (
        <PlaceBlock className="section place" data-name="place">
            <PlaceProfile
                placeId={placeId}
                image={placeProfilePhoto}
                name={placeName}
                address={placeAddress}
                parking={placeParking}
                fundingCnt={placeFundingCount}
                sns={placeSns}
                events={placeEvents}
            />
            <PlacePhoto photos={placePhotos} />
            <PlaceService service={placeService} />
        </PlaceBlock>
    ) : null;
}

const PlaceBlock = styled.section`
    padding-top: 100px;

    ${media.mobile} {
        padding: 80px 20px 0;
    }
`;

export default Place;
