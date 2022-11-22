/**
 * author: 유승민
 * created: 2022/04/03
 * updated: 2022/04/07
 */
import { ActionType } from "typesafe-actions";
import * as actions from "./actions";

export type DetailState = {
    detailInfo: {
        loading: boolean;
        data: DetailInfo | null;
        error: any;
    };
};

export type DetailInfo = {
    fundingAudienceAchievementRate: any;
    fundingAudienceMaxAmount: any;
    fundingAudienceMinAmount: any;
    fundingAudienceAmount: any;
    fundingCriterion: any;
    fundingId: any;
    fundingIsLiked: any;
    fundingLikeCount: any;
    fundingMoneyAchievementRate: any;
    fundingMoneyMinAmount: any;
    fundingMoneyAmount: any;
    fundingPackages: {
        description: any;
        items: {
            name: any;
            photo: any;
            count: any;
        }[];
        name: any;
        price: any;
        stockCount: any;
    }[];
    fundingPeriod: {
        end: any;
        start: any;
    };
    fundingRemainingDates: any;
    fundingThumbnail: any;
    fundingTitle: any;
    fundingState: any;
    fundingVideos: {
        id: any;
        name: any;
        path: any;
        size: any;
        type: any;
        thumbnail: any;
        uploaded: any;
    }[];
    fundingPhotos: any;
    fundingNotice: {
        title: any;
        content: any;
    }[];
    fundingEndDate: any;
    hostFundingCount: any;
    hostId: any;
    hostInterview:
        | {
              photo: any;
              question: any;
              answer: any;
          }[]
        | null;
    hostName: any;
    hostBio: any;
    hostProfilePhoto: any;
    hostProfileVideo: {
        id: any;
        name: any;
        path: any;
        size: any;
        type: any;
        thumbnail: any;
        uploaded: any;
    };
    hostServices: {
        description: any;
        funding_host: any;
        funding_performance_stage: any;
        introduction_photo: any;
        name: any;
    };
    performanceAgeLimit: any;
    performanceGenre: any;
    performanceNotices: {
        title: any;
        content: any;
    }[];
    performanceRunningTime: any;
    performanceScheduledTime: any;
    performanceSeat: {
        type: any;
        rule: any;
    };
    performanceSetList: {
        title: any;
        artist: any;
        num: any;
    }[];
    performanceInfoItems: {
        icon: any;
        title: any;
        content: any;
        num: any;
    }[];
    placeId: any;
    placeAddress: any;
    placeEvents: any[];
    placeFundingCount: any;
    placeName: any;
    placeParking: {
        address: any;
        capacity: any;
    };
    placePhotos: any[];
    placeProfilePhoto: any;
    placeService: {
        id: any;
        name: any;
        price: any;
        description: any;
        photo: any;
    }[];
    placeSns: any;
};

export const initialDetailInfo: DetailInfo = {
    fundingAudienceAchievementRate: null,
    fundingAudienceMaxAmount: null,
    fundingAudienceMinAmount: null,
    fundingAudienceAmount: null,
    fundingCriterion: null,
    fundingId: null,
    fundingIsLiked: null,
    fundingLikeCount: null,
    fundingMoneyAchievementRate: null,
    fundingMoneyMinAmount: null,
    fundingMoneyAmount: null,
    fundingPackages: [],
    fundingPeriod: {
        end: null,
        start: null,
    },
    fundingRemainingDates: null,
    fundingThumbnail: null,
    fundingTitle: null,
    fundingState: null,
    fundingVideos: [],
    fundingPhotos: [],
    fundingNotice: [],
    fundingEndDate: null,
    hostFundingCount: null,
    hostId: null,
    hostInterview: null,
    hostName: null,
    hostBio: null,
    hostProfilePhoto: null,
    hostProfileVideo: {
        id: null,
        name: null,
        path: null,
        size: null,
        type: null,
        thumbnail: null,
        uploaded: null,
    },
    hostServices: {
        description: null,
        funding_host: null,
        funding_performance_stage: null,
        introduction_photo: null,
        name: null,
    },
    performanceAgeLimit: null,
    performanceGenre: null,
    performanceNotices: [],
    performanceRunningTime: null,
    performanceScheduledTime: null,
    performanceSeat: {
        type: null,
        rule: null,
    },
    performanceSetList: [],
    performanceInfoItems: [],
    placeId: null,
    placeAddress: null,
    placeEvents: [],
    placeFundingCount: null,
    placeName: null,
    placeParking: {
        address: null,
        capacity: null,
    },
    placePhotos: [],
    placeProfilePhoto: null,
    placeService: [],
    placeSns: null,
};

export type DetailAction = ActionType<typeof actions>;
