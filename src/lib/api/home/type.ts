export interface GetHomeFundingsParams {
    accessKey: string | null;
}

export interface GetHomeFundingsResponse {
    banner_funding: Array<FundingCardInfo>;
    scheduled_funding: Array<FundingCardInfo>;
    running_funding: Array<FundingCardInfo>;
    end_funding: Array<FundingCardInfo>;
}

export interface FundingCardInfo {
    id: any;
    title: any;
    main_color_1: any;
    start_date: any;
    end_date: any;
    performance_date: any;
    thumbnail: any;
    location: any;
    funding_host_alias: any;
    is_liked: any;
    funding_state: any;
    number_of_likes: any;
    remaining_days_by_start_date: any;
    remaining_days_by_end_date: any;
    least_package_price: any;
    is_end: any;
    min_money_amount: any;
    min_number_of_audience: any;
    achievement_criterion: any;
    money_achievement_rate: any;
    audience_achievement_rate: any;
    banner_photo: any;
    banner_photo_2: any;
}

export const initialHomeFundings: GetHomeFundingsResponse = {
    banner_funding: [],
    scheduled_funding: [],
    running_funding: [],
    end_funding: [],
};

export type FetchRecentPerformancesParams = {
    page?: number;
};

export type FetchRecentPerformancesResponse = {
    count: any;
    next: any;
    previous: any;
    results: Array<{
        id: any;
        performance_title: any;
        performance_video_url: any;
        performance_video_thumbnail: any;
        funding_performance: any;
    }>;
};

export type FetchRecentPerformDetailsParams = {
    id: number;
};

export type FetchRecentPerformDetailsResponse = {
    performance_video_url: any;
    performance_title: any;
    performance_date: any;
    funding_title: any;
    host_alias: any;
    performance_stage_name: any;
    achievement_rate: any;
    performance_genre: any;
    number_of_performance_by_host: any;
    host_avatar: any;
    host_bio: any;
    stage_logo: any;
    stage_name: any;
    number_of_performance_by_stage: any;
    stage_type: any;
    stage_introduction: any;
};
