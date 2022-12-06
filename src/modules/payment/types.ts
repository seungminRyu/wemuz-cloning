import { ActionType } from "typesafe-actions";
import * as actions from "./actions";

export type PaymentState = {
    funding: {
        loading: boolean;
        data: PaymentFunding | null;
        error: any | null;
    };
};

export type PaymentAction = ActionType<typeof actions>;

export type PaymentFunding = {
    id: any;
    isSupported: any;
    title: any;
    thumbnail: any;
    likeCount: any;
    isLiked: any;
    packages: {
        id: number;
        name: string;
        price: number;
        description: string;
        stockCount: number;
        items: {
            name: string;
            photo: string;
            count: number;
        }[];
        options: {
            id: number;
            name: string;
            description: string;
            sequence_number: number;
        }[];
    }[];
    moneyAchievementRate: any;
    audienceAchievementRate: any;
    moneyAmount: any;
    audienceAmount: any;
    remainingDates: any;
    criterion: any;
    endDate: any;
    hostAlias: any;
    hostPhoto: any;
    hostBio: any;
    placeName: any;
    performanceDate: any;
    supportCount: any;
};

export const initialPaymentFunding = {
    id: null,
    isSupported: null,
    title: null,
    thumbnail: null,
    likeCount: null,
    isLiked: null,
    packages: [],
    moneyAchievementRate: null,
    audienceAchievementRate: null,
    moneyAmount: null,
    audienceAmount: null,
    remainingDates: null,
    criterion: null,
    endDate: null,
    hostAlias: null,
    hostBio: null,
    hostPhoto: null,
    placeName: null,
    performanceDate: null,
    supportCount: null,
};
