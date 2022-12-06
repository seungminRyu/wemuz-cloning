/**
 * author: 유승민
 * created: 2022/03/04
 * updated: 2022/04/10
 */
import { call, put, takeLatest } from "redux-saga/effects";
import { getFundingDetail } from "../../lib/api/detail/api";
import { GetFundingDetailResponse } from "../../lib/api/detail/types";
import { getRemainingDates, handleAxiosError } from "../../lib/utils";
import { getFundingDetailAsync, GET_FUNDING_DETAIL } from "./actions";
import { DetailInfo } from "./types";

function* getFundingDetailSaga(
    action: ReturnType<typeof getFundingDetailAsync.request>
) {
    try {
        const res: GetFundingDetailResponse = yield call(
            getFundingDetail,
            action.payload
        );
        const serializedFundingDetails = serializeFundingDetailData(res);
        yield put(getFundingDetailAsync.success(serializedFundingDetails));
    } catch (e: any) {
        handleAxiosError(e);
        yield put(getFundingDetailAsync.failure(e));
    }
}

const serializeFundingDetailData = (
    data: GetFundingDetailResponse
): DetailInfo => ({
    ...serializeFundingInfo(data),
    ...serializeHostInfo(data),
    ...serializePerformanceInfo(data),
    ...serializePlaceInfo(data),
});

const serializeFundingInfo = (data: GetFundingDetailResponse) => {
    try {
        return {
            fundingId: data.funding.id,
            fundingTitle: data.funding.title,
            fundingPhotos: data.funding.fundingintroductioninfo_info
                .map((elem) => elem.introduction_photo)
                .filter((elem) => elem !== null),
            fundingVideos: data.funding.fundingintroductioninfo_info
                .filter((elem) => elem.introduction_video !== null)
                .map((elem) => elem.introduction_video_info),
            fundingThumbnail:
                data.performance_stage
                    .fundingperformancestageintroductionphoto_info[0]
                    .introduction_photo,
            fundingPackages: data.funding_packages.map((elem) => ({
                name: elem.name,
                price: elem.price,
                description: elem.description,
                stockCount: elem.number_of_remainings,
                items: [
                    ...elem.ticketinfundingpackage_info.map((elem) => ({
                        name: elem.performance_ticket_info.name,
                        photo: elem.performance_ticket_info.front_photo,
                        count: elem.number_of_tickets,
                    })),
                    ...elem.packageitem_info.map((elem) => ({
                        name: elem.funding_service_info.name,
                        photo: elem.funding_service_info.introduction_photo,
                        count: elem.service_count,
                    })),
                ],
            })),
            fundingMoneyAchievementRate: data.funding.money_achievement_rate,
            fundingAudienceAchievementRate:
                data.funding.audience_achievement_rate,
            fundingMoneyAmount: data.funding.total_support_amounts,
            fundingAudienceAmount: data.funding.total_audience_number,
            fundingMoneyMinAmount: data.funding.min_money_amount,
            fundingAudienceMinAmount: data.funding.min_number_of_audience,
            fundingAudienceMaxAmount: data.funding.max_number_of_audience,
            fundingNotice: data.funding.fundingoptionalrule_info.map(
                (elem) => ({
                    title: elem.title,
                    content: elem.content,
                })
            ),
            fundingRemainingDates: getRemainingDates(data.funding.end_date),
            fundingCriterion: data.funding.achievement_criterion,
            fundingPeriod: {
                start: data.funding.start_date,
                end: data.funding.end_date,
            },
            fundingIsLiked: data.funding.is_liked,
            fundingLikeCount: data.funding.number_of_likes,
            fundingState: data.funding.funding_state,
            fundingEndDate: data.funding.end_date,
        };
    } catch (e) {
        console.error("Error occured in serializeFundingInfo");
        throw e;
    }
};
const serializeHostInfo = (data: GetFundingDetailResponse) => {
    try {
        return {
            hostId: data.funding_host.id,
            hostName: data.funding_host.host_name,
            hostBio: data.funding_host.bio,
            hostProfilePhoto: data.funding_host.introduction_photo,
            hostProfileVideo: data.funding_host.introduction_video_info,
            hostFundingCount: data.funding_host.number_of_succeeded_funding,
            hostServices: data.funding_host.host_services,
            hostInterview: data.interview?.musician
                ? data.interview.interviewitem_info.map((elem) => ({
                      photo: elem.photo,
                      question: elem.question,
                      answer: elem.answer,
                  }))
                : [],
        };
    } catch (e) {
        console.error("Error occured in serializeHostInfo");
        throw e;
    }
};

const serializePerformanceInfo = (data: GetFundingDetailResponse) => {
    try {
        return {
            performanceScheduledTime: `${data.funding_performance.performance_date}T${data.funding_performance.start_time}`,
            performanceAgeLimit: data.funding.age_limit,
            performanceRunningTime: data.funding_performance.running_time,
            performanceGenre: data.funding_performance.performance_genre,
            performanceSeat: {
                type: data.funding_performance.seat_type,
                rule: data.funding_performance.seating_rule,
            },
            performanceNotices:
                data.performance_stage.performancestageinfo_info.map(
                    (elem) => ({
                        title: elem.title,
                        content: elem.content,
                        num: elem.sequence_number,
                    })
                ),
            performanceSetList:
                data.funding_performance.musicinfundingperformance_info.map(
                    (elem) => ({
                        title: elem.music_title,
                        artist: elem.musician_name,
                        num: elem.sequence_number,
                    })
                ),
            performanceInfoItems:
                data.funding_performance.fundingperformanceinfo_info.map(
                    (elem) => ({
                        icon: elem.icon,
                        title: elem.title,
                        content: elem.content,
                        num: elem.sequence_number,
                    })
                ),
        };
    } catch (e) {
        console.error("Error occured in serializePerformanceInfo");
        throw e;
    }
};

const serializePlaceInfo = (data: GetFundingDetailResponse) => {
    try {
        return {
            placeId: data.performance_stage.id,
            placeAddress: data.performance_stage.address,
            placeName: data.performance_stage.name,
            placeProfilePhoto: data.performance_stage.logo,
            placeFundingCount:
                data.performance_stage.number_of_succeeded_performance,
            placeParking: {
                address: data.performance_stage.parking_address,
                capacity: data.performance_stage.parking_spaces_count,
            },
            placeSns: data.performance_stage.sns,
            placeEvents:
                data.performance_stage.eventinperformancestage_info.map(
                    (elem) => elem.description
                ),
            placePhotos:
                data.performance_stage.fundingperformancestageintroductionphoto_info.map(
                    (elem) => elem.introduction_photo
                ),
            placeService: data.performance_stage.fundingservice_info.map(
                (elem) => ({
                    id: elem.id,
                    name: elem.name,
                    price: elem.price,
                    description: elem.description,
                    photo: elem.introduction_photo,
                })
            ),
        };
    } catch (e) {
        console.error("Error occured in serializePlaceInfo");
        throw e;
    }
};

export function* detailSaga() {
    yield takeLatest(GET_FUNDING_DETAIL, getFundingDetailSaga);
}

export default detailSaga;
