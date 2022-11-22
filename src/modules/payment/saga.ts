import { call, put, takeLatest } from "redux-saga/effects";
import { getPaymentFunding } from "../../lib/api/payment/api";
import { GetPaymentFundingResponse } from "../../lib/api/payment/types";
import { getRemainingDates } from "../../lib/utils";
import { getPaymentFundingAsync, GET_PAYMENT_FUNDING } from "./actions";
import { PaymentFunding } from "./types";

export function* paymentSaga() {
    yield takeLatest(GET_PAYMENT_FUNDING, getPaymentFundingSaga);
}

function* getPaymentFundingSaga(
    action: ReturnType<typeof getPaymentFundingAsync.request>
) {
    try {
        const responese: GetPaymentFundingResponse = yield call(
            getPaymentFunding,
            action.payload
        );
        const serializedPaymentFunding = serializePaymentFundingData(responese);
        yield put(getPaymentFundingAsync.success(serializedPaymentFunding));
    } catch (e: any) {
        yield put(getPaymentFundingAsync.failure(e));
    }
}

const serializePaymentFundingData = (
    data: GetPaymentFundingResponse
): PaymentFunding => ({
    id: data.funding.id,
    isSupported: data.is_supported,
    title: data.funding.title,
    thumbnail: data.funding.thumbnail,
    likeCount: data.funding.number_of_likes,
    isLiked: data.funding.is_liked,
    packages: data.funding.fundingpackage_info.map((elem) => ({
        id: elem.id,
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
        options: elem.packageoption_info,
    })),
    moneyAchievementRate: data.funding.money_achievement_rate,
    audienceAchievementRate: data.funding.audience_achievement_rate,
    moneyAmount: data.funding.total_support_amounts,
    audienceAmount: data.funding.number_of_support,
    remainingDates: getRemainingDates(data.funding.end_date),
    criterion: "audience", // 없음
    endDate: data.funding.end_date,
    hostAlias: data.funding.funding_host_alias,
    hostBio: data.funding.fundinghost_info.bio,
    hostPhoto: data.funding.fundinghost_info.introduction_photo,
    placeName: data.funding.performance_stage_name,
    performanceDate: data.funding.funding_performance_date,
    supportCount: data.funding.number_of_support,
});

export { paymentSaga as default };
